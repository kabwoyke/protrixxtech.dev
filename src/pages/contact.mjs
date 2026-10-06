import { site, contacts, services } from '../data/site.mjs';
import { html, map } from '../lib/html.mjs';
import { icon } from '../lib/icons.mjs';
import { pageHero } from '../lib/components.mjs';

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Contact', href: '/contact/' },
];

const serviceOptions = [
  'Web Development',
  'Mobile App Development',
  'Custom Software Development',
  'Business Automation',
  'Software Maintenance',
  'Other',
];

const field = ({ id, label, type = 'text', required = false, autocomplete, hint, attrs = '' }) => html`<div>
  <label for="${id}" class="form-label">${label}${required ? ' <span class="text-red-700 dark:text-red-400" aria-hidden="true">*</span>' : ' <span class="font-normal text-slate-500 dark:text-slate-400">(optional)</span>'}</label>
  <input id="${id}" name="${id}" type="${type}" class="form-control"${required ? ' required' : ''}${autocomplete ? ` autocomplete="${autocomplete}"` : ''} aria-describedby="${id}-error${hint ? ` ${id}-hint` : ''}" ${attrs}>
  ${hint ? `<p id="${id}-hint" class="mt-1.5 text-sm text-slate-500 dark:text-slate-400">${hint}</p>` : ''}
  <p id="${id}-error" class="form-error" data-error-for="${id}" hidden></p>
</div>`;

// The form posts to the address in data-endpoint when one is configured
// (see README "Contact form"). Until then it prepares an email in the
// visitor's mail app. The mailto action is the no-JavaScript fallback.
const form = html`<form class="card p-6 sm:p-8 lg:p-10" action="mailto:${site.email}" method="post" enctype="text/plain" data-contact-form data-endpoint="" aria-labelledby="form-title">
  <h2 id="form-title" class="text-2xl font-semibold tracking-tight">Tell us about your project</h2>
  <p class="mt-2">Fields marked <span class="text-red-700 dark:text-red-400">*</span> are required.</p>

  <div class="mt-6 rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300" role="alert" tabindex="-1" data-form-summary hidden></div>

  <div class="mt-8 grid gap-6 sm:grid-cols-2">
    ${field({ id: 'name', label: 'Name', required: true, autocomplete: 'name', attrs: 'maxlength="100"' })}
    ${field({ id: 'email', label: 'Email', type: 'email', required: true, autocomplete: 'email', attrs: 'maxlength="150" inputmode="email"' })}
    ${field({ id: 'phone', label: 'Phone', type: 'tel', autocomplete: 'tel', hint: 'For example 0712 345678 or +254 712 345678', attrs: 'maxlength="20" inputmode="tel"' })}
    ${field({ id: 'company', label: 'Company', autocomplete: 'organization', attrs: 'maxlength="120"' })}
    <div class="sm:col-span-2">
      <label for="service" class="form-label">Service <span class="text-red-700 dark:text-red-400" aria-hidden="true">*</span></label>
      <select id="service" name="service" class="form-control appearance-none bg-[length:1.1rem] bg-[right_0.85rem_center] bg-no-repeat pr-10" style="background-image:url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E&quot;)" required aria-describedby="service-error">
        <option value="">Select a service</option>
        ${map(serviceOptions, (o) => `<option value="${o}">${o}</option>`)}
      </select>
      <p id="service-error" class="form-error" data-error-for="service" hidden></p>
    </div>
    <div class="sm:col-span-2">
      <label for="message" class="form-label">Message <span class="text-red-700 dark:text-red-400" aria-hidden="true">*</span></label>
      <textarea id="message" name="message" rows="6" class="form-control resize-y" required minlength="20" maxlength="3000" aria-describedby="message-hint message-error"></textarea>
      <p id="message-hint" class="mt-1.5 text-sm text-slate-500 dark:text-slate-400">Briefly describe your business, the problem you want to solve and any timelines.</p>
      <p id="message-error" class="form-error" data-error-for="message" hidden></p>
    </div>
    <div class="hidden" aria-hidden="true">
      <label for="website">Leave this field empty</label>
      <input id="website" name="website" type="text" tabindex="-1" autocomplete="off">
    </div>
  </div>

  <div class="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
    <button type="submit" class="btn-primary w-full sm:w-auto" data-submit>${icon('send')}<span data-submit-label>Send Message</span></button>
    <p class="text-sm text-slate-500 dark:text-slate-400" data-delivery-note>Opens your email app with your message ready to send.</p>
  </div>

  <div class="mt-6 rounded-md border p-4 text-sm" role="status" aria-live="polite" data-form-status hidden></div>
</form>`;

const body = html`
${pageHero({
  crumbs,
  eyebrow: 'Contact',
  title: 'Let’s Build Something That Moves Your Business Forward',
  lead: 'Tell us about your business, your idea or the process you want to digitize. Use the form, call us, or send a WhatsApp message — whichever is easiest for you.',
})}

<section class="section" aria-label="Contact options">
  <div class="container grid gap-12 lg:grid-cols-12 lg:gap-12">
    <div class="lg:col-span-7">${form}</div>

    <aside class="space-y-6 lg:col-span-5" aria-labelledby="direct-title">
      <h2 id="direct-title" class="text-2xl font-semibold tracking-tight">Contact us directly</h2>
      ${map(
        contacts,
        (c) => `<div class="card p-6">
        <p class="text-lg font-semibold text-ink dark:text-white">${c.name}</p>
        <p class="text-sm text-slate-500 dark:text-slate-400">${c.role}</p>
        <a href="${c.tel}" class="mt-4 inline-flex items-center gap-2 text-lg font-semibold text-ink hover:text-primary-700 dark:text-white dark:hover:text-primary-300" aria-label="Call ${c.name} on ${c.phoneDisplay}">${icon('phone', 'h-5 w-5 text-primary dark:text-primary-400')}${c.phoneDisplay}</a>
        <div class="mt-5 grid grid-cols-2 gap-3">
          <a href="${c.tel}" class="btn-secondary px-3" aria-label="Call ${c.name}">${icon('phone')}Call</a>
          <a href="${c.waLinkWithMessage}" class="btn-secondary px-3" target="_blank" rel="noopener" aria-label="Message ${c.name} on WhatsApp">${icon('message-circle')}WhatsApp</a>
        </div>
      </div>`,
      )}
      <div class="card p-6">
        <p class="text-lg font-semibold text-ink dark:text-white">Email</p>
        <a href="mailto:${site.email}" class="mt-3 inline-flex items-center gap-2 break-all font-semibold text-primary-700 hover:text-primary-900 dark:text-primary-300 dark:hover:text-primary-200">${icon('mail', 'h-5 w-5 shrink-0')}${site.email}</a>
      </div>
      <div class="flex items-start gap-3 px-1 text-sm">
        ${icon('map-pin', 'mt-0.5 h-5 w-5 shrink-0 text-primary dark:text-primary-400')}
        <p>Based in Kenya and working with businesses across the country and beyond.</p>
      </div>
    </aside>
  </div>
</section>

<section class="section border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/30" aria-labelledby="next-title">
  <div class="container grid gap-12 lg:grid-cols-12 lg:gap-16">
    <div class="lg:col-span-5" data-reveal>
      <p class="eyebrow">What happens next</p>
      <h2 id="next-title" class="section-title">From first message to a clear proposal</h2>
    </div>
    <ol class="grid gap-8 sm:grid-cols-3 lg:col-span-7">
      ${map(
        [
          ['We get in touch', 'We reply to discuss your message and arrange a conversation.'],
          ['We understand your needs', 'We ask about your business, goals and current processes.'],
          ['You receive a proposal', 'We outline a recommended solution, scope and next steps.'],
        ],
        ([t, d], i) => `<li data-reveal style="--reveal-delay:${i * 80}ms">
        <span class="flex h-9 w-9 items-center justify-center rounded-full border border-primary-200 bg-white text-sm font-semibold text-primary-700 dark:border-primary-800 dark:bg-ink-950 dark:text-primary-300">${i + 1}</span>
        <h3 class="mt-4 text-lg font-semibold">${t}</h3>
        <p class="mt-2 leading-relaxed">${d}</p>
      </li>`,
      )}
    </ol>
  </div>
</section>

<section class="section" aria-labelledby="explore-title">
  <div class="container">
    <h2 id="explore-title" class="text-2xl font-semibold tracking-tight">Still exploring? See what we can build for you</h2>
    <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      ${map(
        services,
        (s) => `<li><a href="${s.href}" class="card card-hover flex h-full items-center gap-3 p-4 font-semibold text-ink dark:text-white">${icon(s.icon, 'h-5 w-5 shrink-0 text-primary dark:text-primary-400')}${s.shortName}</a></li>`,
      )}
    </ul>
  </div>
</section>
`;

export default {
  path: '/contact/',
  title: 'Contact Protrixx Tech Solutions | Software Development Kenya',
  description:
    'Contact Protrixx Tech Solutions to discuss a website, mobile app, custom software or business automation project in Kenya. Call, WhatsApp or email our team.',
  breadcrumbs: crumbs,
  schemaType: 'ContactPage',
  priority: '0.8',
  body,
};
