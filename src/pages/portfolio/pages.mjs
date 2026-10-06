// Portfolio overview and case-study pages. Case-study copy is limited to
// publicly visible context — no invented metrics, technologies or results.
import { projects } from '../../data/site.mjs';
import { html, map, esc } from '../../lib/html.mjs';
import { icon } from '../../lib/icons.mjs';
import { ids } from '../../lib/layout.mjs';
import { pageHero, sectionHeader, checkList, ctaBand, browserMock } from '../../lib/components.mjs';

const caseStudies = {
  'scopus-agro-solutions': {
    description:
      'Case study: a business website for Scopus Agro Solutions, a Kenyan supplier of fertilizers and crop protection products, built by Protrixx Tech Solutions.',
    overview:
      'Scopus Agro Solutions supplies fertilizers and crop protection products to customers in Kenya. Protrixx Tech Solutions delivered a business website that presents the company and its products clearly and gives customers a straightforward way to get in touch.',
    context:
      'Agricultural buyers want to know quickly what products a supplier carries and how to order. For a distributor, a clear online presence builds credibility with farmers and agribusinesses, and a simple enquiry route turns interest into conversations.',
    solution:
      'The website introduces the business, organizes its product range so visitors can browse it easily, and provides a quote request flow alongside direct contact options, including WhatsApp — a channel many customers already prefer.',
    objectives: [
      'Present the company as a credible agricultural supplier',
      'Make the product range easy to browse',
      'Simplify quote requests for customers',
      'Offer direct contact options, including WhatsApp',
      'Work well on mobile phones',
    ],
    related: { href: '/services/web-development/', label: 'Explore our web development services' },
  },
  rijeetech: {
    description:
      'Case study: a website for Rijeetech, a Kenyan coding and robotics education program for young learners, built by Protrixx Tech Solutions.',
    overview:
      'Rijeetech offers coding and robotics education for young learners in Kenya. Protrixx Tech Solutions delivered a website that explains the programs and helps parents learn more and get in touch.',
    context:
      'Parents considering technology classes for their children want to understand what will be taught, who the programs are for and how to get started. The website needed to communicate this clearly and build trust with families.',
    solution:
      'The website presents the organization and its mission, describes each program in a structured way, and guides parents toward enquiring or booking a class through clear calls to action.',
    objectives: [
      'Explain the programs clearly to parents',
      'Communicate the value of coding and robotics education',
      'Build trust with families',
      'Guide visitors toward enquiries and bookings',
      'Provide a responsive experience on all devices',
    ],
    related: { href: '/services/web-development/', label: 'Explore our web development services' },
  },
  'flora-prime-properties': {
    description:
      'Case study: a real estate website for Flora Prime Properties, a Kenyan property business, built by Protrixx Tech Solutions.',
    overview:
      'Flora Prime Properties is a Kenyan real estate business dealing in land and residential properties. Protrixx Tech Solutions delivered a website that showcases available properties and connects interested buyers with the team.',
    context:
      'Property buyers and investors expect to see listings online before they make contact. A real estate business needs a professional website that presents properties clearly and makes enquiries easy.',
    solution:
      'The website presents the business and its services, showcases property listings with key details, and provides clear routes for visitors to enquire about a specific property or contact the team directly.',
    objectives: [
      'Showcase land and residential properties professionally',
      'Present key listing details clearly',
      'Make it easy to enquire about a property',
      'Establish credibility with buyers and investors',
      'Deliver a responsive, mobile-friendly experience',
    ],
    related: { href: '/services/custom-software-development/', label: 'Explore custom software for property businesses' },
  },
};

const portfolioCrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio/' },
];

const indexPage = {
  path: '/portfolio/',
  title: 'Software Projects & Portfolio | Protrixx Tech Solutions',
  description:
    'See websites and software projects delivered by Protrixx Tech Solutions for Kenyan businesses in agriculture, education and real estate.',
  breadcrumbs: portfolioCrumbs,
  schemaType: 'CollectionPage',
  priority: '0.8',
  body: html`
${pageHero({
  crumbs: portfolioCrumbs,
  eyebrow: 'Portfolio',
  title: 'Our Work for Kenyan Businesses',
  lead: 'A selection of projects delivered by Protrixx Tech Solutions for organizations in agriculture, education and real estate. Each case study explains the business context and what the project set out to achieve.',
})}

<section class="section" aria-labelledby="projects-title">
  <div class="container">
    <h2 id="projects-title" class="sr-only">Projects</h2>
    <div class="space-y-8">
      ${map(
        projects,
        (p, i) => `<article class="card grid items-center gap-8 p-4 sm:p-6 lg:grid-cols-2 lg:gap-14 lg:p-8" data-reveal>
        <div class="${i % 2 ? 'lg:order-2' : ''}">${browserMock(p, { large: true })}</div>
        <div class="px-2 pb-2 sm:px-0">
          <p class="text-xs font-semibold uppercase tracking-[0.14em] text-primary-700 dark:text-primary-300">${p.category} · ${p.type}</p>
          <h3 class="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">${p.name}</h3>
          <p class="mt-4 text-lg leading-relaxed">${p.summary}</p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <a href="${p.href}" class="btn-primary">Read the ${esc(p.name)} case study${icon('arrow-right')}</a>
            <a href="${p.url}" class="link-arrow text-sm" target="_blank" rel="noopener">Visit ${p.domain}${icon('arrow-up-right')}<span class="sr-only"> (opens in a new tab)</span></a>
          </div>
        </div>
      </article>`,
      )}
    </div>
  </div>
</section>

${ctaBand({ title: 'Want results like these for your business?', text: 'Tell us about your project and we will help you plan a website or software solution that fits your goals.', primary: { label: 'Start a Project', href: '/contact/' } })}
`,
};

function caseStudyPage(p) {
  const c = caseStudies[p.slug];
  const crumbs = [...portfolioCrumbs, { label: p.name, href: p.href }];
  const others = projects.filter((o) => o.slug !== p.slug);

  const body = html`
${pageHero({
  crumbs,
  eyebrow: `Case study · ${p.category}`,
  title: p.name,
  lead: c.overview,
  actions: `<a href="${p.url}" class="btn-primary" target="_blank" rel="noopener">Visit the live website${icon('arrow-up-right')}<span class="sr-only"> (opens in a new tab)</span></a><a href="/contact/" class="btn-secondary">Start a Similar Project</a>`,
})}

<section class="section" aria-labelledby="preview-title">
  <div class="container grid gap-12 lg:grid-cols-12 lg:gap-16">
    <div class="lg:col-span-7" data-reveal>
      <h2 id="preview-title" class="sr-only">Website preview</h2>
      ${browserMock(p, { large: true })}
    </div>
    <aside class="lg:col-span-5" aria-label="Project details" data-reveal>
      <dl class="divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-800 dark:border-slate-800">
        ${map(
          [
            ['Client', p.name],
            ['Industry', p.category],
            ['Project type', p.type],
            ['Location', 'Kenya'],
            ['Website', `<a class="prose-link break-all" href="${p.url}" target="_blank" rel="noopener">${p.domain}<span class="sr-only"> (opens in a new tab)</span></a>`],
          ],
          ([k, v]) => `<div class="flex justify-between gap-6 py-4"><dt class="text-sm text-slate-500 dark:text-slate-400">${k}</dt><dd class="text-right font-medium text-ink dark:text-white">${v}</dd></div>`,
        )}
      </dl>
    </aside>
  </div>
</section>

<section class="section border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/30" aria-label="Case study details">
  <div class="container grid gap-12 lg:grid-cols-12 lg:gap-16">
    <div class="space-y-12 lg:col-span-7">
      <div data-reveal>
        <h2 class="text-2xl font-semibold tracking-tight">Business context</h2>
        <p class="mt-4 text-lg leading-relaxed">${c.context}</p>
      </div>
      <div data-reveal>
        <h2 class="text-2xl font-semibold tracking-tight">Solution summary</h2>
        <p class="mt-4 text-lg leading-relaxed">${c.solution}</p>
      </div>
    </div>
    <div class="lg:col-span-5" data-reveal>
      <div class="card p-6 sm:p-8">
        <h2 class="text-lg font-semibold">Key project objectives</h2>
        ${checkList(c.objectives, 'mt-5 space-y-3.5')}
        <div class="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
          <a href="${c.related.href}" class="link-arrow">${c.related.label}${icon('arrow-right')}</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="more-title">
  <div class="container">
    ${sectionHeader({ eyebrow: 'More work', id: 'more-title', title: 'Other projects' })}
    <div class="mt-12 grid gap-6 md:grid-cols-2">
      ${map(
        others,
        (o) => `<a href="${o.href}" class="card card-hover group flex flex-col gap-6 p-4 sm:flex-row sm:items-center" data-reveal>
        <div class="sm:w-1/2">${browserMock(o)}</div>
        <div class="px-2 pb-2 sm:w-1/2 sm:px-0 sm:pb-0">
          <p class="text-xs font-semibold uppercase tracking-[0.14em] text-primary-700 dark:text-primary-300">${o.category}</p>
          <h3 class="mt-2 text-xl font-semibold">${o.name}</h3>
          <span class="link-arrow mt-4 text-sm">Read the case study${icon('arrow-right')}</span>
        </div>
      </a>`,
      )}
    </div>
    <a href="/portfolio/" class="link-arrow mt-10" data-reveal>Back to all projects${icon('arrow-right')}</a>
  </div>
</section>

${ctaBand({ title: `Planning a project like ${p.name}?`, text: 'We would be glad to hear about your business and what you want your website or software to achieve.', primary: { label: 'Start a Project', href: '/contact/' } })}
`;

  return {
    path: p.href,
    title: `${p.name} Case Study | Protrixx Tech Solutions`,
    description: c.description,
    breadcrumbs: crumbs,
    priority: '0.6',
    jsonLd: [
      {
        '@type': 'CreativeWork',
        '@id': `${ids.abs(p.href)}#project`,
        name: `${p.name} website`,
        description: c.overview,
        url: p.url,
        creator: { '@id': ids.orgId },
        about: { '@type': 'Organization', name: p.name, url: p.url },
      },
    ],
    body,
  };
}

export default [indexPage, ...projects.map(caseStudyPage)];
