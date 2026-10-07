// Shared page shell: <head>, header, footer and structured data.
import { site, contacts, nav, services } from '../data/site.mjs';
import { html, esc, map } from './html.mjs';
import { icon } from './icons.mjs';

const abs = (p) => site.url + p;
const orgId = `${site.url}/#organization`;
const businessId = `${site.url}/#business`;
const websiteId = `${site.url}/#website`;

// Runs before first paint so the correct theme is applied without a flash.
const themeBootstrap =
  "(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){d.classList.add('dark')}}catch(e){}})();";

/* ------------------------------------------------------------------
   Structured data
------------------------------------------------------------------- */
function baseGraph() {
  const contactPoint = contacts.map((c) => ({
    '@type': 'ContactPoint',
    telephone: c.phoneE164,
    contactType: 'sales',
    areaServed: site.countryCode,
    availableLanguage: ['en'],
    name: c.name,
  }));

  return [
    {
      '@type': 'Organization',
      '@id': orgId,
      name: site.name,
      url: `${site.url}/`,
      logo: { '@type': 'ImageObject', url: abs('/assets/logo/protrixx-logo.png'), width: 556, height: 147 },
      email: site.email,
      description: site.summary,
      areaServed: { '@type': 'Country', name: site.country },
      founder: contacts.map((c) => ({ '@type': 'Person', name: c.name, jobTitle: c.role })),
      contactPoint,
    },
    {
      '@type': 'ProfessionalService',
      '@id': businessId,
      name: site.name,
      url: `${site.url}/`,
      image: abs(site.ogImage),
      email: site.email,
      telephone: contacts[0].phoneE164,
      description: site.summary,
      address: { '@type': 'PostalAddress', addressCountry: site.countryCode },
      areaServed: { '@type': 'Country', name: site.country },
      parentOrganization: { '@id': orgId },
      knowsAbout: [
        'Software development',
        'Web development',
        'Mobile app development',
        'Custom software development',
        'Business process automation',
        'Digital transformation',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      name: site.name,
      url: `${site.url}/`,
      inLanguage: 'en',
      publisher: { '@id': orgId },
    },
  ];
}

function breadcrumbGraph(path, crumbs) {
  if (!crumbs || crumbs.length < 2) return [];
  return [
    {
      '@type': 'BreadcrumbList',
      '@id': `${abs(path)}#breadcrumb`,
      itemListElement: crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.label,
        item: abs(c.href),
      })),
    },
  ];
}

function structuredData(page) {
  const crumbs = page.breadcrumbs;
  const webPage = {
    '@type': page.schemaType ?? 'WebPage',
    '@id': `${abs(page.path)}#webpage`,
    url: abs(page.path),
    name: page.title,
    description: page.description,
    inLanguage: 'en',
    isPartOf: { '@id': websiteId },
    about: { '@id': orgId },
    ...(crumbs && crumbs.length > 1 ? { breadcrumb: { '@id': `${abs(page.path)}#breadcrumb` } } : {}),
  };
  const graph = [...baseGraph(), webPage, ...breadcrumbGraph(page.path, crumbs), ...(page.jsonLd ?? [])];
  // Escape "<" so JSON content can never close the script element.
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
  return `<script type="application/ld+json">${json}</script>`;
}

export const ids = { orgId, businessId, websiteId, abs };

/* ------------------------------------------------------------------
   Head
------------------------------------------------------------------- */
function head(page) {
  const url = abs(page.path);
  const image = abs(page.ogImage ?? site.ogImage);
  const robots = page.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large';
  return html`<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<meta name="robots" content="${robots}">
${page.noindex ? '' : `<link rel="canonical" href="${url}">`}
<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0c1322" media="(prefers-color-scheme: dark)">
<meta name="color-scheme" content="light dark">
<meta name="author" content="${site.name}">
<meta property="og:site_name" content="${site.name}">
<meta property="og:locale" content="${site.locale}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(page.ogTitle ?? page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${image}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${site.name} — software development company in Kenya">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.ogTitle ?? page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">
<meta name="twitter:image" content="${image}">
<link rel="icon" href="/assets/icons/favicon-32.png" sizes="32x32" type="image/png">
<link rel="icon" href="/assets/icons/icon-192.png" sizes="192x192" type="image/png">
<link rel="apple-touch-icon" href="/assets/icons/apple-touch-icon.png">
<link rel="preload" href="/assets/fonts/inter-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/css/styles.css">
<script>${themeBootstrap}</script>
<script type="module" src="/js/main.js"></script>
${page.noindex ? '' : structuredData(page)}
</head>`;
}

/* ------------------------------------------------------------------
   Header
------------------------------------------------------------------- */
export function logo({ inverse = false } = {}) {
  // Official wordmark: dark text for light backgrounds, white text for dark ones.
  const img = (file, cls) =>
    `<img src="/assets/logo/${file}" alt="${site.name}" width="556" height="147" class="h-10 w-auto sm:h-11 ${cls}">`;
  if (inverse) return img('protrixx-logo-light.png', '');
  return `${img('protrixx-logo.png', 'dark:hidden')}${img('protrixx-logo-light.png', 'hidden dark:block')}`;
}

const isActive = (current, href) => (href === '/' ? current === '/' : current.startsWith(href));

const themeToggle = () => html`<button type="button" class="icon-btn" data-theme-toggle aria-label="Switch to dark mode" title="Toggle color theme">
  ${icon('moon', 'dark:hidden')}${icon('sun', 'hidden dark:block')}
</button>`;

function header(current) {
  const links = nav.map((item) => ({ ...item, active: isActive(current, item.href) }));
  const ariaCurrent = (item) => (item.active ? ' aria-current="page"' : '');
  return html`<header class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-shadow dark:border-slate-800/80 dark:bg-ink-950/90" data-site-header>
  <div class="container flex h-[4.25rem] items-center justify-between gap-6">
    <a href="/" class="shrink-0 rounded-md">${logo()}</a>

    <nav class="hidden lg:block" aria-label="Main">
      <ul class="flex items-center gap-1">
        ${map(links, (item) => `<li><a class="nav-link" href="${item.href}"${ariaCurrent(item)}>${item.label}</a></li>`)}
      </ul>
    </nav>

    <div class="flex items-center gap-2">
      <a href="/contact/" class="btn-primary hidden lg:inline-flex">Start a Project</a>
      ${themeToggle()}
      <button type="button" class="icon-btn group lg:hidden" data-menu-toggle aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu">
        ${icon('menu', 'block group-aria-expanded:hidden')}${icon('x', 'hidden group-aria-expanded:block')}
      </button>
    </div>
  </div>

  <div id="mobile-menu" class="mobile-menu absolute inset-x-0 top-full max-h-[calc(100dvh-4.25rem)] overflow-y-auto border-b border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-ink-950 lg:hidden" data-open="false" data-mobile-menu>
    <nav class="container py-4" aria-label="Mobile">
      <ul class="divide-y divide-slate-100 dark:divide-slate-800/80">
        ${map(
          links,
          (item) => `<li><a class="flex items-center justify-between py-3.5 text-base font-medium ${item.active ? 'text-primary-700 dark:text-primary-300' : 'text-ink dark:text-white'}" href="${item.href}"${ariaCurrent(item)}>${item.label}${icon('chevron-right', 'h-4 w-4 text-slate-400')}</a></li>`,
        )}
      </ul>
      <div class="mt-4 grid gap-3 pb-2 sm:grid-cols-2">
        <a href="/contact/" class="btn-primary w-full">Start a Project</a>
        <a href="${contacts[0].waLinkWithMessage}" class="btn-secondary w-full" target="_blank" rel="noopener">${icon('message-circle')}Chat on WhatsApp</a>
      </div>
    </nav>
  </div>
</header>`;
}

/* ------------------------------------------------------------------
   Footer
------------------------------------------------------------------- */
function footer() {
  const heading = (t) => `<h2 class="text-sm font-semibold text-white">${t}</h2>`;
  const link = 'text-slate-400 transition-colors hover:text-white';
  return html`<footer class="bg-ink text-sm text-slate-400 dark:border-t dark:border-slate-800 dark:bg-ink-950">
  <div class="container grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
    <div class="lg:col-span-4">
      <a href="/" class="inline-block rounded-md">${logo({ inverse: true })}</a>
      <p class="mt-5 max-w-xs leading-relaxed">A Kenyan software development company helping businesses turn ideas and manual processes into scalable digital solutions.</p>
    </div>

    <nav class="lg:col-span-2" aria-label="Footer">
      ${heading('Company')}
      <ul class="mt-4 space-y-3">
        ${map(nav, (item) => `<li><a class="${link}" href="${item.href}">${item.label}</a></li>`)}
      </ul>
    </nav>

    <div class="lg:col-span-3">
      ${heading('Services')}
      <ul class="mt-4 space-y-3">
        ${map(services, (s) => `<li><a class="${link}" href="${s.href}">${s.shortName}</a></li>`)}
      </ul>
    </div>

    <div class="lg:col-span-3">
      ${heading('Contact')}
      <ul class="mt-4 space-y-4">
        ${map(
          contacts,
          (c) => `<li>
          <p class="text-slate-300">${c.name.split(' ')[0]}</p>
          <div class="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1">
            <a class="${link} inline-flex items-center gap-2" href="${c.tel}" aria-label="Call ${c.name} on ${c.phoneDisplay}">${icon('phone', 'h-4 w-4')}${c.phoneDisplay}</a>
            <a class="${link} inline-flex items-center gap-2" href="${c.waLink}" target="_blank" rel="noopener" aria-label="Message ${c.name} on WhatsApp">${icon('message-circle', 'h-4 w-4')}WhatsApp</a>
          </div>
        </li>`,
        )}
        <li><a class="${link} inline-flex items-center gap-2 break-all" href="mailto:${site.email}">${icon('mail', 'h-4 w-4 shrink-0')}${site.email}</a></li>
      </ul>
    </div>
  </div>
  <div class="border-t border-white/10">
    <div class="container flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
      <p>&copy; ${site.year} ${site.name}. All rights reserved.</p>
      <p>Software development company in Kenya</p>
    </div>
  </div>
</footer>`;
}

/* ------------------------------------------------------------------
   Page
------------------------------------------------------------------- */
export function renderPage(page) {
  return html`<!doctype html>
<html lang="en-KE">
${head(page)}
<body>
<a href="#main" class="skip-link">Skip to main content</a>
${header(page.path)}
<main id="main" tabindex="-1" class="outline-none">
${page.body}
</main>
${footer()}
</body>
</html>
`;
}
