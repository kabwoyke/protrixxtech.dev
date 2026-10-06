import { services } from '../../data/site.mjs';
import { html, map } from '../../lib/html.mjs';
import { icon } from '../../lib/icons.mjs';
import { pageHero, sectionHeader, checkList, ctaBand } from '../../lib/components.mjs';

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/' },
];

const body = html`
${pageHero({
  crumbs,
  eyebrow: 'Services',
  title: 'Software Development Services in Kenya',
  lead: 'Protrixx Tech Solutions offers web development, mobile app development, custom software development, business process automation and software maintenance — practical software solutions for SMEs, growing businesses and organizations.',
  actions: `<a href="/contact/" class="btn-primary">Start a Project${icon('arrow-right')}</a><a href="/portfolio/" class="btn-secondary">View Our Work</a>`,
})}

<section class="section" aria-labelledby="all-services-title">
  <div class="container">
    <h2 id="all-services-title" class="sr-only">All services</h2>
    <div class="space-y-6">
      ${map(
        services,
        (s, i) => `<article class="card grid gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10" data-reveal>
        <div class="lg:col-span-6">
          <div class="flex items-center gap-4">
            <span class="icon-tile">${icon(s.icon)}</span>
            <span class="text-sm font-semibold text-slate-400 dark:text-slate-500">0${i + 1}</span>
          </div>
          <h3 class="mt-6 text-2xl font-semibold tracking-tight">${s.name}</h3>
          <p class="mt-3 max-w-prose text-lg leading-relaxed">${s.summary}</p>
          <div class="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <a href="${s.href}" class="btn-primary">Explore ${s.shortName.toLowerCase()}${icon('arrow-right')}</a>
            <a href="/contact/" class="link-arrow text-sm">Discuss a ${s.shortName.toLowerCase()} project${icon('arrow-right')}</a>
          </div>
        </div>
        <div class="border-t border-slate-200 pt-8 dark:border-slate-800 lg:col-span-6 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          <p class="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">Key capabilities</p>
          ${checkList(s.capabilities, 'mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2')}
        </div>
      </article>`,
      )}
    </div>
  </div>
</section>

<section class="section border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/30" aria-labelledby="broader-title">
  <div class="container grid gap-12 lg:grid-cols-2 lg:gap-20">
    ${sectionHeader({
      eyebrow: 'Beyond individual projects',
      id: 'broader-title',
      title: 'Digital transformation and business software solutions',
      lead: 'Our services work together. A business might start with a website, add a customer app, then digitize internal operations with custom software and automation. We help you plan that journey one practical step at a time.',
    })}
    <div class="grid gap-5 sm:grid-cols-2" data-reveal>
      <div class="card p-6">
        ${icon('compass', 'h-6 w-6 text-primary dark:text-primary-400')}
        <h3 class="mt-4 text-lg font-semibold">Digital transformation</h3>
        <p class="mt-2 leading-relaxed">Moving from paper, spreadsheets and disconnected tools to connected digital systems, at a pace your team can adopt.</p>
      </div>
      <div class="card p-6">
        ${icon('blocks', 'h-6 w-6 text-primary dark:text-primary-400')}
        <h3 class="mt-4 text-lg font-semibold">Business software solutions</h3>
        <p class="mt-2 leading-relaxed">Systems for sales, operations, inventory, records and reporting that fit the way your business runs.</p>
      </div>
      <div class="card p-6 sm:col-span-2">
        <h3 class="text-lg font-semibold">Every engagement includes</h3>
        ${checkList(['Discovery of your goals and processes', 'A clear proposal and scope', 'Regular progress updates', 'Testing before launch', 'Options for ongoing support'], 'mt-4 grid gap-3 sm:grid-cols-2')}
      </div>
    </div>
  </div>
</section>

${ctaBand({ title: 'Not sure which service you need?', text: 'Describe your business challenge and we will recommend the most practical solution — whether that is a website, an app, a custom system or automation.', primary: { label: 'Request a Consultation', href: '/contact/' } })}
`;

export default {
  path: '/services/',
  title: 'Software Development Services Kenya | Protrixx Tech Solutions',
  description:
    'Explore software development services in Kenya from Protrixx Tech Solutions: web development, mobile apps, custom software, business process automation and software maintenance.',
  breadcrumbs: crumbs,
  priority: '0.9',
  body,
};
