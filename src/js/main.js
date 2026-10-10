// Entry point. Each feature is an isolated module that no-ops when its
// markup is not on the page.
import { initTheme } from './theme.js';
import { initNavigation } from './navigation.js';
import { initAnimations, initFlourishes, initTyped } from './animations.js';

initTheme();
initNavigation();
initAnimations();
initFlourishes();
initTyped();

if (document.querySelector('[data-contact-form]')) {
  import('./contact-form.js').then(({ initContactForm }) => initContactForm());
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(() => {}));
}
