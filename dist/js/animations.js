// Subtle scroll-reveal. CSS only hides [data-reveal] elements when motion is
// allowed, so content stays visible without JS or with reduced motion.
export function initAnimations() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );

  items.forEach((el) => observer.observe(el));
}

// Thin reading-progress bar and a cursor-following spotlight on cards.
export function initFlourishes() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.setProperty('--progress', max > 0 ? Math.min(window.scrollY / max, 1) : 0);
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);

  document.addEventListener('pointermove', (e) => {
    const card = e.target.closest?.('.card-hover');
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
}

// Typing effect: types and erases each phrase in turn. The element holds the
// first phrase as static text, so no-JS and reduced-motion users see it as is.
export function initTyped() {
  const el = document.querySelector('[data-typed]');
  if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let words;
  try { words = JSON.parse(el.dataset.typed); } catch { return; }
  if (!Array.isArray(words) || !words.length) return;

  document.documentElement.classList.add('typing-ready');
  // The sentence is decorative repetition of the hero copy; keep it quiet for screen readers.
  el.setAttribute('aria-live', 'off');

  let w = 0;
  let i = words[0].length;
  let deleting = true;
  const wait = 1800;

  const tick = () => {
    const word = words[w];
    el.textContent = word.slice(0, i);
    let delay;
    if (!deleting && i === word.length) {
      deleting = true;
      delay = wait;
    } else if (deleting && i === 0) {
      deleting = false;
      w = (w + 1) % words.length;
      delay = 350;
    } else {
      i += deleting ? -1 : 1;
      delay = deleting ? 35 : 75;
    }
    setTimeout(tick, delay);
  };
  setTimeout(tick, wait);
}
