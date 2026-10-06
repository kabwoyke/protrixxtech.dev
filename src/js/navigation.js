// Mobile menu (with focus trap and Escape to close) and header scroll state.
const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
const desktop = window.matchMedia('(min-width: 1024px)');

export function initNavigation() {
  const header = document.querySelector('[data-site-header]');
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');

  if (header) {
    const onScroll = () => header.classList.toggle('shadow-sm', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  if (!toggle || !menu) return;

  const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';

  // Hidden menu contents must not be reachable by keyboard.
  const setInert = (inert) => {
    menu.inert = inert;
    if (inert) menu.setAttribute('aria-hidden', 'true');
    else menu.removeAttribute('aria-hidden');
  };

  function open() {
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    menu.dataset.open = 'true';
    setInert(false);
    document.body.style.overflow = 'hidden';
    // The panel's visibility transitions in, so move focus once it is focusable.
    setTimeout(() => menu.querySelector(FOCUSABLE)?.focus(), 60);
  }

  function close({ returnFocus = true } = {}) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    menu.dataset.open = 'false';
    setInert(true);
    document.body.style.overflow = '';
    if (returnFocus) toggle.focus();
  }

  setInert(true);
  toggle.addEventListener('click', () => (isOpen() ? close() : open()));

  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) close({ returnFocus: false });
  });

  document.addEventListener('keydown', (event) => {
    if (!isOpen()) return;
    if (event.key === 'Escape') {
      close();
      return;
    }
    if (event.key !== 'Tab') return;

    // Keep focus inside the header (toggle + menu) while the menu is open.
    const items = [toggle, ...menu.querySelectorAll(FOCUSABLE)];
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  desktop.addEventListener('change', (event) => {
    if (event.matches && isOpen()) close({ returnFocus: false });
  });
}
