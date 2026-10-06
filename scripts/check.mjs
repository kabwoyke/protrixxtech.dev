// Pre-deploy QA for dist/: internal links and assets resolve, SEO metadata is
// present and unique, one <h1> per page, JSON-LD parses, and no emoji or
// placeholder text slipped in. Run after `npm run build`.
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const DOMAIN = 'https://www.protrixxtechsolutions.dev';
const problems = [];
const fail = (file, msg) => problems.push(`${file}: ${msg}`);

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

async function exists(urlPath) {
  const clean = decodeURIComponent(urlPath.split(/[?#]/)[0]);
  const target = path.join(dist, clean);
  try {
    const info = await stat(target);
    return info.isDirectory() ? !!(await stat(path.join(target, 'index.html'))) : true;
  } catch {
    return false;
  }
}

const pick = (html, re) => html.match(re)?.[1];
const htmlFiles = (await walk(dist)).filter((f) => f.endsWith('.html'));
const seen = { title: new Map(), description: new Map() };

for (const file of htmlFiles) {
  const rel = '/' + path.relative(dist, file).replace(/index\.html$/, '');
  const html = await readFile(file, 'utf8');
  const is404 = rel === '/404.html';

  const h1s = html.match(/<h1[\s>]/g)?.length ?? 0;
  if (h1s !== 1) fail(rel, `expected 1 <h1>, found ${h1s}`);

  const title = pick(html, /<title>([^<]+)<\/title>/);
  const description = pick(html, /<meta name="description" content="([^"]+)"/);
  if (!title) fail(rel, 'missing <title>');
  if (!description) fail(rel, 'missing meta description');

  if (!is404) {
    for (const [key, value] of [['title', title], ['description', description]]) {
      if (seen[key].has(value)) fail(rel, `duplicate ${key} (also on ${seen[key].get(value)})`);
      seen[key].set(value, rel);
    }
    const canonical = pick(html, /<link rel="canonical" href="([^"]+)"/);
    if (canonical !== DOMAIN + rel) fail(rel, `canonical is ${canonical}`);
    for (const prop of ['og:title', 'og:description', 'og:url', 'og:image', 'og:type', 'og:site_name']) {
      if (!html.includes(`property="${prop}"`)) fail(rel, `missing ${prop}`);
    }
    for (const name of ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image']) {
      if (!html.includes(`name="${name}"`)) fail(rel, `missing ${name}`);
    }
    if (/noindex/.test(html)) fail(rel, 'page is noindex');
    const ld = pick(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    try {
      const types = JSON.parse(ld)['@graph'].map((n) => n['@type']);
      for (const t of ['Organization', 'ProfessionalService', 'WebSite']) if (!types.includes(t)) fail(rel, `JSON-LD missing ${t}`);
      if (rel !== '/' && !types.includes('BreadcrumbList')) fail(rel, 'JSON-LD missing BreadcrumbList');
    } catch {
      fail(rel, 'JSON-LD missing or invalid');
    }
  }

  for (const [, url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (url.startsWith('/') && !url.startsWith('//') && !(await exists(url))) fail(rel, `broken link ${url}`);
    if (url.startsWith('http://')) fail(rel, `insecure URL ${url}`);
  }

  for (const [, alt] of html.matchAll(/<img\b(?![^>]*\balt=)[^>]*>/g)) fail(rel, `image without alt ${alt}`);
  if (/\p{Extended_Pictographic}/u.test(html.replace(/<script[\s\S]*?<\/script>/g, ''))) fail(rel, 'contains emoji');
  if (/lorem ipsum|TODO|placeholder text/i.test(html)) fail(rel, 'placeholder text');
}

const sitemap = await readFile(path.join(dist, 'sitemap.xml'), 'utf8');
for (const [, loc] of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  if (!loc.startsWith(DOMAIN + '/')) fail('sitemap.xml', `wrong domain ${loc}`);
  else if (!(await exists(loc.slice(DOMAIN.length)))) fail('sitemap.xml', `missing page ${loc}`);
}

if (problems.length) {
  console.error(problems.join('\n'));
  process.exit(1);
}
console.log(`OK: ${htmlFiles.length} HTML files checked, sitemap valid.`);
