import { site, contacts } from '../data/site.mjs';
import { html, map } from '../lib/html.mjs';
import { icon } from '../lib/icons.mjs';
import { pageHero, sectionHeader, ctaBand } from '../lib/components.mjs';

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
];

const values = [
  { icon: 'lightbulb', title: 'Practical Innovation', text: 'Technology should solve real problems. We choose solutions for their usefulness, not their novelty.' },
  { icon: 'trending-up', title: 'Scalability', text: 'Solutions should grow alongside businesses, supporting more users, data and features over time.' },
  { icon: 'shield-check', title: 'Reliability', text: 'Software should be dependable and maintainable, today and years from now.' },
  { icon: 'sparkles', title: 'Simplicity', text: 'Complex business problems should result in simple, clear user experiences.' },
  { icon: 'handshake', title: 'Partnership', text: 'We work collaboratively with clients rather than simply delivering software and walking away.' },
];

const approach = [
  { title: 'Understand before building', text: 'We learn how your business works, who will use the software and what success looks like before proposing a solution.' },
  { title: 'Start focused', text: 'We prioritize the features that solve the most important problem first, then grow the solution in planned phases.' },
  { title: 'Build for change', text: 'Clean, well-structured code and sensible architecture make it easier to add features and scale later.' },
  { title: 'Stay involved', text: 'After launch we remain available to support, maintain and improve the software as your needs evolve.' },
];

const initials = (name) => name.split(' ').map((n) => n[0]).join('');

const body = html`
${pageHero({
  crumbs,
  eyebrow: 'About us',
  title: 'A Kenyan Software Development Company Built for Growing Businesses',
  lead: 'Protrixx Tech Solutions is a technology company in Kenya specializing in software development and digital transformation. We help businesses digitize their operations with reliable, scalable and practical software solutions that grow alongside their needs.',
  actions: `<a href="/contact/" class="btn-primary">Talk to Us${icon('arrow-right')}</a><a href="/services/" class="btn-secondary">Explore Services</a>`,
})}

<section class="section" aria-labelledby="intro-title">
  <div class="container grid gap-12 lg:grid-cols-12 lg:gap-16">
    <div class="lg:col-span-5" data-reveal>
      <p class="eyebrow">Who we are</p>
      <h2 id="intro-title" class="section-title">Technology that serves the business</h2>
    </div>
    <div class="space-y-5 text-lg leading-relaxed lg:col-span-7" data-reveal>
      <p>Many businesses know their processes could run better, but off-the-shelf software does not fit and building a system feels out of reach. Protrixx Tech Solutions exists to close that gap.</p>
      <p>We design and build <a class="prose-link" href="/services/web-development/">websites and web applications</a>, <a class="prose-link" href="/services/mobile-app-development/">mobile apps</a> and <a class="prose-link" href="/services/custom-software-development/">custom business software</a>, and help organizations <a class="prose-link" href="/services/business-automation/">automate the processes</a> that slow them down. Our focus is on SMEs, medium-sized businesses and larger organizations across Kenya that want software to support their growth.</p>
    </div>
  </div>
</section>

<section class="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/30" aria-label="Mission and vision">
  <div class="container grid divide-y divide-slate-200 dark:divide-slate-800 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
    <div class="py-14 lg:py-20 lg:pr-16" data-reveal>
      <div class="flex items-center gap-3">${icon('target', 'h-5 w-5 text-primary dark:text-primary-400')}<h2 class="text-sm font-semibold uppercase tracking-[0.16em] text-primary-700 dark:text-primary-300">Our mission</h2></div>
      <p class="mt-5 text-2xl font-medium leading-snug tracking-tight text-ink dark:text-white sm:text-[1.75rem]">${site.mission}</p>
    </div>
    <div class="py-14 lg:py-20 lg:pl-16" data-reveal>
      <div class="flex items-center gap-3">${icon('eye', 'h-5 w-5 text-primary dark:text-primary-400')}<h2 class="text-sm font-semibold uppercase tracking-[0.16em] text-primary-700 dark:text-primary-300">Our vision</h2></div>
      <p class="mt-5 text-2xl font-medium leading-snug tracking-tight text-ink dark:text-white sm:text-[1.75rem]">A Kenya where every business, whatever its size, can run on software that fits the way it works and grows with it.</p>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="values-title">
  <div class="container">
    ${sectionHeader({ eyebrow: 'Our values', id: 'values-title', title: 'The principles behind our work' })}
    <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
      ${map(
        values,
        (v, i) => `<article class="card p-6" data-reveal style="--reveal-delay:${i * 60}ms">
        <span class="icon-tile">${icon(v.icon)}</span>
        <h3 class="mt-5 text-lg font-semibold">${v.title}</h3>
        <p class="mt-2 leading-relaxed">${v.text}</p>
      </article>`,
      )}
    </div>
  </div>
</section>

<section class="section border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/30" aria-labelledby="founders-title">
  <div class="container">
    ${sectionHeader({
      eyebrow: 'Leadership',
      id: 'founders-title',
      title: 'Meet the founders',
      lead: 'Protrixx Tech Solutions was co-founded by Edward Kaboi and Kennedy Mutiria. You can reach either founder directly by phone or WhatsApp.',
    })}
    <div class="mt-14 grid gap-6 md:grid-cols-2">
      ${map(
        [...contacts].reverse(),
        (c) => `<article class="card flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-8" data-reveal>
        <span class="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-primary-200 bg-primary-50 text-2xl font-semibold text-primary-700 dark:border-primary-900 dark:bg-primary-950/60 dark:text-primary-300" aria-hidden="true">${initials(c.name)}</span>
        <div class="min-w-0">
          <h3 class="text-xl font-semibold">${c.name}</h3>
          <p class="mt-1 text-sm font-medium text-primary-700 dark:text-primary-300">${c.role}, ${site.name}</p>
          <div class="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a class="inline-flex items-center gap-2 font-medium text-ink hover:text-primary-700 dark:text-slate-200 dark:hover:text-primary-300" href="${c.tel}" aria-label="Call ${c.name} on ${c.phoneDisplay}">${icon('phone', 'h-4 w-4')}${c.phoneDisplay}</a>
            <a class="inline-flex items-center gap-2 font-medium text-ink hover:text-primary-700 dark:text-slate-200 dark:hover:text-primary-300" href="${c.waLinkWithMessage}" target="_blank" rel="noopener" aria-label="Message ${c.name} on WhatsApp">${icon('message-circle', 'h-4 w-4')}WhatsApp</a>
          </div>
        </div>
      </article>`,
      )}
    </div>
  </div>
</section>

<section class="section" aria-labelledby="approach-title">
  <div class="container grid gap-12 lg:grid-cols-12 lg:gap-16">
    <div class="lg:col-span-5">
      ${sectionHeader({
        eyebrow: 'Our approach',
        id: 'approach-title',
        title: 'How we approach software development',
        lead: 'Good software comes from understanding the business first. Our approach keeps projects focused, transparent and built to last.',
      })}
    </div>
    <ol class="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-7">
      ${map(
        approach,
        (a, i) => `<li data-reveal>
        <span class="text-sm font-semibold text-primary-700 dark:text-primary-300">0${i + 1}</span>
        <h3 class="mt-3 border-t border-slate-200 pt-4 text-lg font-semibold dark:border-slate-800">${a.title}</h3>
        <p class="mt-2 leading-relaxed">${a.text}</p>
      </li>`,
      )}
    </ol>
  </div>
</section>

<section class="section bg-ink text-slate-300 dark:bg-slate-900/60" aria-labelledby="philosophy-title">
  <div class="container grid gap-12 lg:grid-cols-12 lg:gap-16">
    <div class="lg:col-span-5" data-reveal>
      <p class="eyebrow text-primary-300 before:bg-primary-400">Digital transformation</p>
      <h2 id="philosophy-title" class="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Our philosophy on digital transformation</h2>
    </div>
    <div class="space-y-5 text-lg leading-relaxed lg:col-span-7" data-reveal>
      <p>Digital transformation is not about adopting technology for its own sake. It is about making a business easier to run, easier to grow and easier for customers to deal with.</p>
      <p>We believe transformation works best in practical steps: digitize one process well, show the benefit, and build on it. Each step should leave the business with cleaner information, less repetitive work and a clearer view of what is happening.</p>
      <p class="text-slate-400">That is why we build software that fits existing workflows, can be adopted without disruption, and scales as the business grows.</p>
      <a href="/services/business-automation/" class="inline-flex items-center gap-1.5 pt-2 text-base font-semibold text-white hover:text-primary-200">Explore business process automation${icon('arrow-right', 'h-4 w-4')}</a>
    </div>
  </div>
</section>

${ctaBand({ title: 'Let’s talk about your business', text: 'Share what you are working on. We will listen first, then suggest a practical way forward.', primary: { label: 'Talk to Us', href: '/contact/' } })}
`;

export default {
  path: '/about/',
  title: 'About Protrixx Tech Solutions | Kenyan Software Development Company',
  description:
    'Learn about Protrixx Tech Solutions, a Kenyan software development company co-founded by Edward Kaboi and Kennedy Mutiria, helping businesses digitize operations with scalable software.',
  breadcrumbs: crumbs,
  schemaType: 'AboutPage',
  priority: '0.8',
  body,
};
