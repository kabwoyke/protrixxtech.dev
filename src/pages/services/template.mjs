// Shared layout for individual service pages. Content lives in content.mjs.
import { serviceBySlug, contacts } from '../../data/site.mjs';
import { html, map } from '../../lib/html.mjs';
import { icon } from '../../lib/icons.mjs';
import { ids } from '../../lib/layout.mjs';
import { pageHero, sectionHeader, checkList, ctaBand, relatedServices, faqSection, faqJsonLd } from '../../lib/components.mjs';

export function servicePage(c) {
  const s = serviceBySlug[c.slug];
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/' },
    { label: s.name, href: s.href },
  ];

  const aside = html`<div class="card p-6 shadow-[0_16px_40px_-24px_rgba(23,32,51,0.25)] sm:p-8 dark:shadow-none">
  <div class="flex items-center gap-3">
    <span class="icon-tile">${icon(s.icon)}</span>
    <p class="font-semibold text-ink dark:text-white">${s.name}</p>
  </div>
  <p class="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">At a glance</p>
  ${checkList(c.glance, 'mt-4 space-y-3 text-[0.9375rem]')}
  <div class="mt-7 border-t border-slate-200 pt-6 text-sm dark:border-slate-800">
    <p>Prefer to talk it through?</p>
    <a class="mt-2 inline-flex items-center gap-2 font-semibold text-ink hover:text-primary-700 dark:text-white dark:hover:text-primary-300" href="${contacts[0].tel}">${icon('phone', 'h-4 w-4')}Call ${contacts[0].phoneDisplay}</a>
  </div>
</div>`;

  const body = html`
${pageHero({
  crumbs,
  eyebrow: s.name,
  title: c.h1,
  lead: c.lead,
  actions: `<a href="/contact/" class="btn-primary">Start a Project${icon('arrow-right')}</a><a href="${contacts[0].waLinkWithMessage}" class="btn-secondary" target="_blank" rel="noopener">${icon('message-circle')}Chat on WhatsApp</a>`,
  aside,
})}

<section class="section" aria-labelledby="build-title">
  <div class="container">
    ${sectionHeader({ eyebrow: 'What we build', id: 'build-title', title: c.build.title, lead: c.build.lead })}
    <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      ${map(
        c.build.items,
        (it, i) => `<article class="card p-6 sm:p-7" data-reveal style="--reveal-delay:${(i % 3) * 60}ms">
        <span class="icon-tile">${icon(it.icon)}</span>
        <h3 class="mt-5 text-lg font-semibold">${it.title}</h3>
        <p class="mt-2 leading-relaxed">${it.text}</p>
      </article>`,
      )}
    </div>
  </div>
</section>

<section class="section border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/30" aria-labelledby="approach-title">
  <div class="container grid gap-12 lg:grid-cols-12 lg:gap-16">
    <div class="lg:col-span-5">
      <div class="lg:sticky lg:top-28" data-reveal>
        <p class="eyebrow">Our approach</p>
        <h2 id="approach-title" class="section-title">${c.approach.title}</h2>
        ${map(c.approach.paragraphs, (p) => `<p class="mt-5 leading-relaxed">${p}</p>`)}
      </div>
    </div>
    <dl class="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-7">
      ${map(
        c.approach.points,
        (pt) => `<div data-reveal>
        <dt class="flex items-center gap-3 text-base font-semibold text-ink dark:text-white">${icon(pt.icon, 'h-5 w-5 text-primary dark:text-primary-400')}${pt.title}</dt>
        <dd class="mt-2 leading-relaxed">${pt.text}</dd>
      </div>`,
      )}
    </dl>
  </div>
</section>

<section class="section" aria-labelledby="fit-title">
  <div class="container grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
    <div data-reveal>
      <p class="eyebrow">Is it the right fit?</p>
      <h2 id="fit-title" class="section-title">${c.fit.title}</h2>
      <p class="section-lead">${c.fit.lead}</p>
    </div>
    <div class="card p-6 sm:p-8" data-reveal>
      ${checkList(c.fit.items, 'space-y-4')}
      <div class="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
        <a href="/contact/" class="link-arrow">${c.fit.cta}${icon('arrow-right')}</a>
      </div>
    </div>
  </div>
</section>

${faqSection(c.faqs)}
${relatedServices(c.related)}
${ctaBand(c.cta)}
`;

  return {
    path: s.href,
    title: c.title,
    description: c.description,
    breadcrumbs: crumbs,
    priority: '0.9',
    jsonLd: [
      {
        '@type': 'Service',
        '@id': `${ids.abs(s.href)}#service`,
        name: s.name,
        serviceType: c.serviceType,
        description: c.description,
        url: ids.abs(s.href),
        provider: { '@id': ids.orgId },
        areaServed: { '@type': 'Country', name: 'Kenya' },
      },
      faqJsonLd(c.faqs),
    ],
    body,
  };
}
