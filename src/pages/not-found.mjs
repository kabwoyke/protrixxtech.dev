import { html } from '../lib/html.mjs';
import { icon } from '../lib/icons.mjs';

export default {
  path: '/404.html',
  outFile: '404.html',
  noindex: true,
  title: 'Page Not Found | Protrixx Tech Solutions',
  description: 'The page you are looking for may have moved or no longer exists.',
  body: html`
<section class="relative overflow-hidden">
  <div class="bg-grid pointer-events-none absolute inset-0" aria-hidden="true"></div>
  <div class="container relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
    <div class="hero-enter flex flex-col items-center">
      <p class="eyebrow">Error 404</p>
      <h1 class="mt-5 text-4xl font-semibold tracking-tightest sm:text-5xl">Page Not Found</h1>
      <p class="mt-5 max-w-md text-lg leading-relaxed">The page you’re looking for may have moved or no longer exists.</p>
      <div class="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <a href="/" class="btn-primary">${icon('house')}Back to Home</a>
        <a href="/services/" class="btn-secondary">Explore Services</a>
        <a href="/contact/" class="btn-secondary">Contact Us</a>
      </div>
    </div>
  </div>
</section>
`,
};
