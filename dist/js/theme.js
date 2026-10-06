// Light/dark theme toggle. The initial theme is applied by an inline script in
// <head> (before first paint); this module handles switching and persistence.
const STORAGE_KEY = 'theme';
const root = document.documentElement;
const media = window.matchMedia('(prefers-color-scheme: dark)');

function readStored() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function store(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* Storage unavailable (private mode) — the choice lasts for this page only. */
  }
}

function apply(theme) {
  root.classList.toggle('dark', theme === 'dark');
  const next = theme === 'dark' ? 'light' : 'dark';
  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    btn.setAttribute('aria-label', `Switch to ${next} mode`);
    btn.setAttribute('aria-pressed', String(theme === 'dark'));
  });
}

export function initTheme() {
  const current = () => (root.classList.contains('dark') ? 'dark' : 'light');
  apply(current());

  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const theme = current() === 'dark' ? 'light' : 'dark';
      store(theme);
      apply(theme);
    });
  });

  // Follow OS changes only while the visitor has not chosen a theme.
  media.addEventListener('change', (event) => {
    if (!readStored()) apply(event.matches ? 'dark' : 'light');
  });
}
