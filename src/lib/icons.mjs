// Inlines Lucide icons (https://lucide.dev) at build time, so pages ship
// plain SVG with no icon-font or runtime JavaScript.
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

const require = createRequire(import.meta.url);
const iconDir = path.join(path.dirname(require.resolve('lucide-static/package.json')), 'icons');
const cache = new Map();

export function icon(name, className = '') {
  if (!cache.has(name)) {
    const raw = readFileSync(path.join(iconDir, `${name}.svg`), 'utf8');
    const inner = raw.slice(raw.indexOf('>', raw.indexOf('<svg')) + 1, raw.lastIndexOf('</svg>'));
    cache.set(name, inner.replace(/\s*\n\s*/g, '').trim());
  }
  const cls = className ? ` class="${className}"` : '';
  return `<svg${cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${cache.get(name)}</svg>`;
}
