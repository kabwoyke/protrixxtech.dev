// Tiny template helpers.

const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

export const esc = (value) => String(value).replace(/[&<>"']/g, (ch) => entities[ch]);

// Joins arrays and drops null/false so templates can use conditionals inline.
export const html = (strings, ...values) =>
  strings.reduce((out, str, i) => {
    const v = values[i - 1];
    const rendered = Array.isArray(v) ? v.join('') : v === null || v === undefined || v === false ? '' : v;
    return out + rendered + str;
  });

export const map = (items, fn) => items.map(fn).join('');
