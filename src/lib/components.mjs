// Reusable page sections.
import { contacts, services, serviceBySlug } from '../data/site.mjs';
import { html, esc, map } from './html.mjs';
import { icon } from './icons.mjs';

export function breadcrumbs(crumbs) {
  return html`<nav aria-label="Breadcrumb">
  <ol class="flex flex-wrap items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
    ${map(crumbs, (c, i) => {
      const last = i === crumbs.length - 1;
      return `<li class="flex items-center gap-1.5">${
        last
          ? `<span aria-current="page" class="text-ink dark:text-slate-200">${esc(c.label)}</span>`
          : `<a class="hover:text-ink dark:hover:text-white" href="${c.href}">${esc(c.label)}</a>${icon('chevron-right', 'h-3.5 w-3.5 text-slate-400')}`
      }</li>`;
    })}
  </ol>
</nav>`;
}

/** Inner-page hero with breadcrumbs, H1, lead and optional actions/aside. */
export function pageHero({ crumbs, eyebrow, title, lead, actions = '', aside = '' }) {
  return html`<section class="relative overflow-hidden border-b border-slate-200 bg-slate-50/60 dark:border-slate-800 dark:bg-ink-950">
  <div class="bg-grid pointer-events-none absolute inset-0" aria-hidden="true"></div>
  <div class="container relative pb-16 pt-10 sm:pb-20 lg:pb-24">
    ${crumbs ? breadcrumbs(crumbs) : ''}
    <div class="${aside ? 'grid items-center gap-12 lg:grid-cols-12' : ''} mt-10 sm:mt-14">
      <div class="hero-enter ${aside ? 'lg:col-span-7' : 'max-w-3xl'}">
        ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
        <h1 class="mt-5 text-4xl font-semibold tracking-tightest sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">${title}</h1>
        <p class="mt-6 max-w-prose text-lg leading-relaxed text-slate-600 dark:text-slate-400">${lead}</p>
        ${actions ? `<div class="mt-9 flex flex-col gap-3 sm:flex-row">${actions}</div>` : ''}
      </div>
      ${aside ? `<div class="lg:col-span-5">${aside}</div>` : ''}
    </div>
  </div>
</section>`;
}

/** Section heading block. */
export function sectionHeader({ eyebrow, title, lead, id, center = false }) {
  return html`<div class="${center ? 'mx-auto max-w-3xl text-center [&_.section-lead]:mx-auto' : 'max-w-3xl'}" data-reveal>
  ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
  <h2 class="section-title"${id ? ` id="${id}"` : ''}>${title}</h2>
  ${lead ? `<p class="section-lead">${lead}</p>` : ''}
</div>`;
}

export function checkList(items, className = 'space-y-3') {
  return `<ul class="check-list ${className}">${map(items, (t) => `<li>${icon('check')}<span>${t}</span></li>`)}</ul>`;
}

/** Closing call-to-action band. */
export function ctaBand({
  title = 'Have a Business Idea or Process You Want to Digitize?',
  text = "Let's build a practical software solution that works for your business today and scales with you tomorrow.",
  primary = { label: 'Talk to Us', href: '/contact/' },
} = {}) {
  const wa = contacts[0];
  return html`<section class="bg-white py-16 sm:py-20 dark:bg-ink-950" aria-labelledby="cta-title">
  <div class="container">
    <div class="relative overflow-hidden rounded-xl bg-primary-700 px-6 py-14 sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-16 lg:py-16 dark:bg-primary-800" data-reveal>
      <div class="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" aria-hidden="true"></div>
      <div class="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/10" aria-hidden="true"></div>
      <div class="relative max-w-2xl">
        <h2 id="cta-title" class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">${title}</h2>
        <p class="mt-4 text-lg leading-relaxed text-primary-100">${text}</p>
      </div>
      <div class="relative mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
        <a href="${primary.href}" class="btn-inverse">${primary.label}${icon('arrow-right')}</a>
        <a href="${wa.waLinkWithMessage}" class="btn-outline-inverse" target="_blank" rel="noopener">${icon('message-circle')}Chat on WhatsApp</a>
      </div>
    </div>
  </div>
</section>`;
}

/** Browser-window frame for a portfolio project: its screenshot, or an abstract illustration if it has none. */
export function browserMock(project, { large = false } = {}) {
  const variants = {
    Agriculture: { accent: 'bg-emerald-600', soft: 'bg-emerald-50 dark:bg-emerald-950/40' },
    Education: { accent: 'bg-amber-500', soft: 'bg-amber-50 dark:bg-amber-950/30' },
    'Real Estate': { accent: 'bg-primary', soft: 'bg-primary-50 dark:bg-primary-950/50' },
  };
  const v = variants[project.category] ?? variants['Real Estate'];
  const bar = 'rounded-sm bg-slate-200 dark:bg-slate-700';
  const chrome = html`<div class="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-3 py-2.5 dark:border-slate-700/80 dark:bg-slate-800/60">
    <span class="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
    <span class="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
    <span class="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
    <span class="ml-2 flex min-w-0 flex-1 items-center gap-1.5 truncate rounded bg-white px-2.5 py-1 text-[0.6875rem] text-slate-500 dark:bg-slate-900 dark:text-slate-400">${icon('lock', 'h-3 w-3 shrink-0')}${esc(project.domain)}</span>
  </div>`;
  const frame = 'overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_1px_2px_rgba(23,32,51,0.06)] dark:border-slate-700/80 dark:bg-slate-900';
  if (project.screenshot) {
    const sizes = large ? '(min-width: 1024px) 600px, 100vw' : '(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw';
    return html`<div class="${frame}">
  ${chrome}
  <img src="${project.screenshot}-800.webp" srcset="${project.screenshot}-800.webp 800w, ${project.screenshot}-1600.webp 1600w" sizes="${sizes}" width="1600" height="700" loading="lazy" decoding="async" alt="Homepage of the ${esc(project.name)} website" class="block h-auto w-full">
</div>`;
  }
  return html`<div class="${frame}" role="img" aria-label="Illustrated preview of the ${esc(project.name)} website">
  ${chrome}
  <div class="${large ? 'p-6 sm:p-8' : 'p-5'}">
    <div class="flex items-center justify-between">
      <span class="text-sm font-semibold text-ink dark:text-white">${esc(project.name)}</span>
      <span class="hidden gap-2 sm:flex"><span class="h-1.5 w-8 ${bar}"></span><span class="h-1.5 w-8 ${bar}"></span><span class="h-1.5 w-8 ${bar}"></span></span>
    </div>
    <div class="mt-5 rounded-md ${v.soft} ${large ? 'p-6 sm:p-8' : 'p-4'}">
      <span class="block h-1.5 w-12 rounded-sm ${v.accent}"></span>
      <span class="mt-3 block h-3 w-3/4 ${bar}"></span>
      <span class="mt-2 block h-3 w-1/2 ${bar}"></span>
      <span class="mt-4 inline-block h-6 w-20 rounded ${v.accent}"></span>
    </div>
    <div class="mt-4 grid grid-cols-3 gap-3">
      ${map([0, 1, 2], () => `<div class="rounded-md border border-slate-100 p-2.5 dark:border-slate-800"><span class="block h-8 rounded-sm ${v.soft}"></span><span class="mt-2 block h-1.5 w-3/4 ${bar}"></span><span class="mt-1.5 block h-1.5 w-1/2 ${bar}"></span></div>`)}
    </div>
  </div>
</div>`;
}

/** Links to related services, used at the bottom of service pages. */
export function relatedServices(slugs, title = 'Related services') {
  const items = slugs.map((s) => serviceBySlug[s]);
  return html`<section class="section border-t border-slate-200 bg-slate-50/60 dark:border-slate-800 dark:bg-slate-900/30" aria-labelledby="related-title">
  <div class="container">
    ${sectionHeader({ eyebrow: 'Keep exploring', title, id: 'related-title' })}
    <div class="mt-12 grid gap-5 ${items.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}">
      ${map(
        items,
        (s, i) => `<a href="${s.href}" class="card card-hover group flex flex-col p-6" data-reveal style="--reveal-delay:${i * 60}ms">
        <span class="icon-tile">${icon(s.icon)}</span>
        <h3 class="mt-5 text-lg font-semibold">${s.name}</h3>
        <p class="mt-2 flex-1 leading-relaxed">${s.summary}</p>
        <span class="link-arrow mt-5">Explore ${s.shortName.toLowerCase()}${icon('arrow-right')}</span>
      </a>`,
      )}
    </div>
  </div>
</section>`;
}

/** FAQ list using native <details> for accessible disclosure without JS. */
export function faqSection(faqs, title = 'Frequently asked questions') {
  return html`<section class="section" aria-labelledby="faq-title">
  <div class="container grid gap-12 lg:grid-cols-12">
    <div class="lg:col-span-4">
      ${sectionHeader({ eyebrow: 'FAQ', title, id: 'faq-title' })}
    </div>
    <div class="divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-800 dark:border-slate-800 lg:col-span-8">
      ${map(
        faqs,
        (f) => `<details class="group py-5" data-reveal>
        <summary class="flex cursor-pointer list-none items-start justify-between gap-6 rounded-sm text-left text-lg font-semibold text-ink dark:text-white [&::-webkit-details-marker]:hidden">
          <span>${f.q}</span>
          <span class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-500 transition-transform group-open:rotate-45 dark:border-slate-700">${icon('plus', 'h-3.5 w-3.5')}</span>
        </summary>
        <p class="mt-3 max-w-prose leading-relaxed">${f.a}</p>
      </details>`,
      )}
    </div>
  </div>
</section>`;
}

export function faqJsonLd(faqs) {
  const strip = (s) => s.replace(/<[^>]+>/g, '');
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: strip(f.q),
      acceptedAnswer: { '@type': 'Answer', text: strip(f.a) },
    })),
  };
}

export { services };
