// Generates the static site into dist/: HTML pages, sitemap.xml, robots.txt,
// and copies JavaScript and assets. CSS is compiled separately by Tailwind
// (see "build:css" in package.json).
import { rm, mkdir, writeFile, cp } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { site } from '../src/data/site.mjs';
import { renderPage } from '../src/lib/layout.mjs';
import pages from '../src/pages/index.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const page of pages) {
  const file = page.outFile ?? path.join(page.path, 'index.html');
  const target = path.join(dist, file);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, renderPage(page));
}

const today = new Date().toISOString().slice(0, 10);
const indexable = pages.filter((p) => !p.noindex);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable
  .map(
    (p) => `  <url>
    <loc>${site.url}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <priority>${p.priority ?? '0.7'}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;
await writeFile(path.join(dist, 'sitemap.xml'), sitemap);

await writeFile(
  path.join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`,
);

await cp(path.join(root, 'src/js'), path.join(dist, 'js'), { recursive: true });
await cp(path.join(root, 'src/assets'), path.join(dist, 'assets'), { recursive: true });
await cp(path.join(root, 'src/static'), dist, { recursive: true });
await mkdir(path.join(dist, 'assets/fonts'), { recursive: true });
await cp(
  path.join(root, 'node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2'),
  path.join(dist, 'assets/fonts/inter-latin-wght-normal.woff2'),
);

console.log(`Built ${pages.length} pages and ${indexable.length} sitemap URLs into dist/`);
