// Entry point. Each feature is an isolated module that no-ops when its
// markup is not on the page.
import { initTheme } from './theme.js';
import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';

initTheme();
initNavigation();
initAnimations();

if (document.querySelector('[data-contact-form]')) {
  import('./contact-form.js').then(({ initContactForm }) => initContactForm());
}
