import { site, services, projects } from '../data/site.mjs';
import { html, map } from '../lib/html.mjs';
import { icon } from '../lib/icons.mjs';
import { sectionHeader, checkList, ctaBand, browserMock } from '../lib/components.mjs';

const valuePoints = [
  { icon: 'target', title: 'Business-focused', text: 'We build software around real business requirements and workflows, starting from how your team actually works.' },
  { icon: 'trending-up', title: 'Scalable solutions', text: 'Our solutions are designed to evolve as your business grows, so new users, branches and features do not mean starting over.' },
  { icon: 'code', title: 'Modern technology', text: 'We use modern development practices to create reliable, secure and maintainable digital products.' },
  { icon: 'pencil-ruler', title: 'Custom-built', text: 'Your software should fit your business rather than forcing your business to fit the software.' },
  { icon: 'life-buoy', title: 'Long-term support', text: 'We continue improving and maintaining your software after launch, as a partner rather than a one-off vendor.' },
];

const process = [
  { n: '01', title: 'Discover', text: 'Understand the business, users, challenges and goals.' },
  { n: '02', title: 'Plan', text: 'Define requirements, scope, architecture and project direction.' },
  { n: '03', title: 'Design', text: 'Create the user experience and system structure.' },
  { n: '04', title: 'Develop', text: 'Build, test, refine and integrate the solution.' },
  { n: '05', title: 'Launch & Support', text: 'Deploy the solution and provide ongoing improvements and support.' },
];

const industries = [
  { icon: 'sprout', name: 'Agriculture' },
  { icon: 'building-2', name: 'Real Estate' },
  { icon: 'store', name: 'Retail' },
  { icon: 'scale', name: 'Professional Services' },
  { icon: 'truck', name: 'Logistics' },
  { icon: 'graduation-cap', name: 'Education' },
  { icon: 'hotel', name: 'Hospitality' },
  { icon: 'briefcase', name: 'SMEs' },
  { icon: 'landmark', name: 'Growing Enterprises' },
];

const manual = ['Spreadsheets passed between people', 'Paper forms and physical files', 'Disconnected tools and apps', 'Manual follow-ups and reminders', 'Reports compiled by hand'];
const digital = ['One central, secure system', 'Searchable digital records', 'Connected, integrated tools', 'Automated notifications', 'Dashboards and on-demand reports'];

// Illustrative product interface for the hero. Purely decorative content.
const heroVisual = html`<div class="relative mx-auto max-w-lg lg:max-w-none" role="img" aria-label="Illustration of a business workflow moving from request to approval, invoicing and delivery in a digital system">
  <div class="card overflow-hidden shadow-[0_24px_48px_-24px_rgba(23,32,51,0.25)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.7)]">
    <div class="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-800">
      <div class="flex items-center gap-3">
        <span class="icon-tile h-9 w-9">${icon('layout-dashboard')}</span>
        <div>
          <p class="text-sm font-semibold text-ink dark:text-white">Order workflow</p>
          <p class="text-xs text-slate-500 dark:text-slate-400">Operations</p>
        </div>
      </div>
      <span class="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-300"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>Automated</span>
    </div>
    <div class="relative px-5 py-6">
      <span class="absolute left-[calc(1.25rem+12.5%)] right-[calc(1.25rem+12.5%)] top-[2.625rem] h-px bg-slate-200 dark:bg-slate-700"></span>
      <ol class="relative grid grid-cols-4 gap-2">
        ${map(
          [
            ['inbox', 'Request', true],
            ['clipboard-check', 'Approval', true],
            ['receipt', 'Invoice', true],
            ['truck', 'Delivery', false],
          ],
          ([ic, label, done]) => `<li class="relative flex flex-col items-center text-center">
            <span class="flex h-9 w-9 items-center justify-center rounded-full border ${done ? 'border-primary bg-primary text-white' : 'border-slate-300 bg-white text-slate-400 dark:border-slate-600 dark:bg-slate-900'}">${icon(ic, 'h-4 w-4')}</span>
            <span class="mt-2 text-xs font-medium text-slate-600 dark:text-slate-300">${label}</span>
          </li>`,
        )}
      </ol>
    </div>
    <ul class="divide-y divide-slate-100 border-t border-slate-200 text-sm dark:divide-slate-800 dark:border-slate-800">
      ${map(
        [
          ['file-text', 'Customer order', 'Approved', 'text-emerald-700 bg-emerald-50 dark:text-emerald-300 dark:bg-emerald-950/50'],
          ['receipt', 'Supplier invoice', 'In review', 'text-amber-700 bg-amber-50 dark:text-amber-300 dark:bg-amber-950/40'],
          ['package', 'Stock request', 'Submitted', 'text-primary-700 bg-primary-50 dark:text-primary-300 dark:bg-primary-950/60'],
        ],
        ([ic, label, status, cls]) => `<li class="flex items-center justify-between gap-4 px-5 py-3.5">
          <span class="flex items-center gap-3 text-ink dark:text-slate-200">${icon(ic, 'h-4 w-4 text-slate-400')}${label}</span>
          <span class="rounded-full px-2.5 py-0.5 text-xs font-medium ${cls}">${status}</span>
        </li>`,
      )}
    </ul>
  </div>
  <div class="float-soft card absolute -bottom-[5.5rem] -left-4 hidden w-60 items-start gap-3 p-4 dark:bg-slate-900 shadow-[0_16px_32px_-16px_rgba(23,32,51,0.25)] sm:flex lg:-left-10 dark:shadow-[0_16px_32px_-16px_rgba(0,0,0,0.7)]">
    <span class="icon-tile h-9 w-9">${icon('bell')}</span>
    <div>
      <p class="text-sm font-semibold text-ink dark:text-white">Weekly report ready</p>
      <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400">Shared with management automatically</p>
    </div>
  </div>
</div>`;

const body = html`
<section class="relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
  <div class="bg-grid pointer-events-none absolute inset-0" aria-hidden="true"></div>
  <div class="hero-glow pointer-events-none absolute inset-0" aria-hidden="true"><span></span><span></span></div>
  <div class="container relative grid items-center gap-16 pb-32 pt-16 sm:pt-20 lg:grid-cols-12 lg:gap-12 lg:pb-32 lg:pt-24">
    <div class="hero-enter lg:col-span-6">
      <p class="eyebrow">Software development company in Kenya</p>
      <h1 class="mt-6 text-[2.5rem] font-semibold leading-[1.08] tracking-tightest sm:text-5xl lg:text-[3.5rem]">Software Solutions That Grow With Your Business</h1>
      <p class="mt-5 flex min-h-[2rem] items-center gap-2 text-xl font-medium text-ink dark:text-white sm:text-2xl">
        <span class="text-slate-500 dark:text-slate-400">We build</span>
        <span class="typed-wrap text-primary-700 dark:text-primary-300"><span data-typed='["websites","mobile apps","custom software","automation tools"]'>websites</span><span class="typed-caret" aria-hidden="true"></span></span>
      </p>
      <p class="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">Protrixx Tech Solutions helps businesses in Kenya and beyond turn ideas, processes and business challenges into reliable, scalable digital solutions — from websites and mobile apps to custom business software and automation.</p>
      <div class="mt-9 flex flex-col gap-3 sm:flex-row">
        <a href="/contact/" class="btn-primary">Start a Project${icon('arrow-right')}</a>
        <a href="/services/" class="btn-secondary">Explore Our Services</a>
      </div>
      <ul class="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600 dark:text-slate-400">
        ${map(['Web & mobile', 'Custom business software', 'Process automation'], (t) => `<li class="flex items-center gap-2">${icon('check', 'h-4 w-4 text-primary dark:text-primary-400')}${t}</li>`)}
      </ul>
    </div>
    <div class="lg:col-span-6 lg:pl-6">${heroVisual}</div>
  </div>
</section>

<section class="section" aria-labelledby="why-title">
  <div class="container grid gap-12 lg:grid-cols-12 lg:gap-16">
    <div class="lg:col-span-5">
      <div class="lg:sticky lg:top-28">
        ${sectionHeader({
          eyebrow: 'Why Protrixx',
          id: 'why-title',
          title: 'A technology partner built around how your business works',
          lead: 'We build practical software that helps businesses digitize operations, improve efficiency and scale. Every project starts with understanding your processes, not with a template.',
        })}
        <a href="/about/" class="link-arrow mt-8" data-reveal>Learn about our approach${icon('arrow-right')}</a>
      </div>
    </div>
    <ul class="divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-800 dark:border-slate-800 lg:col-span-7">
      ${map(
        valuePoints,
        (v) => `<li class="flex gap-5 py-7" data-reveal>
        <span class="icon-tile">${icon(v.icon)}</span>
        <div>
          <h3 class="text-lg font-semibold">${v.title}</h3>
          <p class="mt-2 leading-relaxed">${v.text}</p>
        </div>
      </li>`,
      )}
    </ul>
  </div>
</section>

<section class="section border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/30" aria-labelledby="services-title">
  <div class="container">
    <div class="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
      ${sectionHeader({
        eyebrow: 'What we do',
        id: 'services-title',
        title: 'Software development services for Kenyan businesses',
        lead: 'From your first website to the systems that run your operations, we design, build and support software that solves specific business problems.',
      })}
      <a href="/services/" class="link-arrow shrink-0" data-reveal>View all software development services${icon('arrow-right')}</a>
    </div>
    <div class="mt-14 grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 dark:border-slate-800 dark:bg-slate-800 sm:grid-cols-2 lg:grid-cols-3">
      ${map(
        services,
        (s) => `<a href="${s.href}" class="group flex flex-col bg-white p-7 transition-colors hover:bg-primary-50/40 dark:bg-ink-950 dark:hover:bg-slate-900 sm:p-8" data-reveal>
        <span class="icon-tile">${icon(s.icon)}</span>
        <h3 class="mt-6 text-xl font-semibold">${s.name}</h3>
        <p class="mt-3 flex-1 leading-relaxed">${s.summary}</p>
        <span class="link-arrow mt-6 text-sm">Explore ${s.shortName.toLowerCase()}${icon('arrow-right')}</span>
      </a>`,
      )}
      <div class="flex flex-col justify-between bg-ink p-7 text-slate-300 dark:bg-slate-900 sm:p-8" data-reveal>
        <div>
          <span class="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-white">${icon('messages-square', 'h-5 w-5')}</span>
          <h3 class="mt-6 text-xl font-semibold text-white">Not sure what you need?</h3>
          <p class="mt-3 leading-relaxed">Tell us about the problem you want to solve. We will help you decide whether a website, an app, a custom system or automation is the right fit.</p>
        </div>
        <a href="/contact/" class="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-primary-200">Request a Consultation${icon('arrow-right', 'h-4 w-4')}</a>
      </div>
    </div>
  </div>
</section>

<section class="section bg-ink text-slate-300 dark:bg-slate-900/60" aria-labelledby="transform-title">
  <div class="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
    <div data-reveal>
      <p class="eyebrow text-primary-300 before:bg-primary-400">Digital transformation</p>
      <h2 id="transform-title" class="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">From Manual Processes to Digital Systems</h2>
      <p class="mt-5 text-lg leading-relaxed text-slate-300">Many businesses still depend on spreadsheets, paperwork, disconnected tools and manual processes. Protrixx Tech Solutions helps businesses transition to digital systems that improve efficiency, visibility and scalability.</p>
      <p class="mt-4 leading-relaxed text-slate-400">${site.mission.replace('To digitize', 'Our mission is to digitize')}</p>
      ${checkList(
        ['Digitize operations', 'Automate repetitive work', 'Centralize information', 'Improve customer experiences', 'Reduce manual processes', 'Improve reporting', 'Build scalable business systems'],
        'mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2 text-slate-200 [&_svg]:!text-primary-300',
      )}
      <a href="/services/business-automation/" class="mt-10 inline-flex items-center gap-1.5 font-semibold text-white hover:text-primary-200">See how business process automation works${icon('arrow-right', 'h-4 w-4')}</a>
    </div>
    <div class="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-stretch" data-reveal>
      <div class="rounded-lg border border-white/10 bg-white/[0.03] p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Before</p>
        <h3 class="mt-2 text-lg font-semibold text-white">Manual</h3>
        <ul class="mt-5 space-y-3.5 text-sm">
          ${map(manual, (t) => `<li class="flex gap-3"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500"></span><span>${t}</span></li>`)}
        </ul>
      </div>
      <div class="flex items-center justify-center text-primary-300" aria-hidden="true">${icon('arrow-right', 'h-5 w-5 rotate-90 sm:rotate-0')}</div>
      <div class="rounded-lg border border-primary-400/40 bg-primary-600/15 p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.16em] text-primary-200">After</p>
        <h3 class="mt-2 text-lg font-semibold text-white">Digital</h3>
        <ul class="mt-5 space-y-3.5 text-sm text-slate-200">
          ${map(digital, (t) => `<li class="flex gap-3">${icon('check', 'mt-0.5 h-4 w-4 shrink-0 text-primary-300')}<span>${t}</span></li>`)}
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="process-title">
  <div class="container">
    ${sectionHeader({
      eyebrow: 'How we work',
      id: 'process-title',
      title: 'A clear, five-step development process',
      lead: 'Every project follows a structured process, so you always know what is happening, what comes next and what you will receive.',
    })}
    <div class="relative mt-16">
    <span class="absolute bottom-2 left-[1.375rem] top-2 w-px bg-slate-200 dark:bg-slate-800 lg:bottom-auto lg:left-0 lg:right-0 lg:top-[1.375rem] lg:h-px lg:w-auto" aria-hidden="true"></span>
    <ol class="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
      ${map(
        process,
        (p, i) => `<li class="relative flex gap-6 lg:block" data-reveal style="--reveal-delay:${i * 80}ms">
        <span class="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary-200 bg-white text-sm font-semibold text-primary-700 dark:border-primary-800 dark:bg-ink-950 dark:text-primary-300">${p.n}</span>
        <div class="lg:mt-6 lg:pr-4">
          <h3 class="text-lg font-semibold">${p.title}</h3>
          <p class="mt-2 leading-relaxed">${p.text}</p>
        </div>
      </li>`,
      )}
    </ol>
    </div>
  </div>
</section>

<section class="section border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/30" aria-labelledby="work-title">
  <div class="container">
    <div class="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
      ${sectionHeader({
        eyebrow: 'Selected work',
        id: 'work-title',
        title: 'Projects for Kenyan businesses',
        lead: 'A selection of websites we have delivered for organizations in agriculture, education and real estate.',
      })}
      <a href="/portfolio/" class="link-arrow shrink-0" data-reveal>View Our Work${icon('arrow-right')}</a>
    </div>
    <div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      ${map(
        projects,
        (p, i) => `<article class="card card-hover flex flex-col p-4" data-reveal style="--reveal-delay:${i * 80}ms">
        ${browserMock(p)}
        <div class="flex flex-1 flex-col px-2 pb-2 pt-6">
          <p class="text-xs font-semibold uppercase tracking-[0.14em] text-primary-700 dark:text-primary-300">${p.category}</p>
          <h3 class="mt-2 text-xl font-semibold">${p.name}</h3>
          <p class="mt-3 flex-1 leading-relaxed">${p.summary}</p>
          <a href="${p.href}" class="btn-secondary mt-6 self-start" aria-label="View project: ${p.name} case study">View Project${icon('arrow-right')}</a>
        </div>
      </article>`,
      )}
    </div>
  </div>
</section>

<section class="section" aria-labelledby="industries-title">
  <div class="container grid gap-12 lg:grid-cols-12 lg:gap-16">
    <div class="lg:col-span-5">
      ${sectionHeader({
        eyebrow: 'Industries',
        id: 'industries-title',
        title: 'Software for the way your industry works',
        lead: 'Every sector has its own workflows, records and customer expectations. These are some of the industries we can build web, mobile and custom software solutions for.',
      })}
    </div>
    <ul class="grid grid-cols-2 gap-px self-start overflow-hidden rounded-lg border border-slate-200 bg-slate-200 dark:border-slate-800 dark:bg-slate-800 sm:grid-cols-3 lg:col-span-7">
      ${map(
        industries,
        (ind) => `<li class="flex flex-col gap-4 bg-white p-5 dark:bg-ink-950 sm:p-6" data-reveal>
        ${icon(ind.icon, 'h-6 w-6 text-primary dark:text-primary-400')}
        <span class="font-semibold text-ink dark:text-white">${ind.name}</span>
      </li>`,
      )}
    </ul>
  </div>
</section>

${ctaBand()}
`;

export default {
  path: '/',
  title: 'Protrixx Tech Solutions | Software Development Company in Kenya',
  description:
    'Protrixx Tech Solutions is a Kenyan software development company building scalable web, mobile and custom software solutions for SMEs, growing businesses and organizations.',
  breadcrumbs: [{ label: 'Home', href: '/' }],
  body,
};
