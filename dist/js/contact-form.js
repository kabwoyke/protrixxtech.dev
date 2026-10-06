// Contact form: client-side validation plus delivery.
//
// Client-side validation only improves the visitor's experience. Any backend
// that receives this form MUST validate and sanitize every field again.
//
// Delivery:
//  - If the form has a non-empty data-endpoint, the fields are POSTed there as JSON.
//  - Otherwise the visitor's email app opens with the message prepared (mailto).

const EMAIL = 'protrixxtechsolutions@gmail.com';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[0-9\s\-()]{9,20}$/;

const rules = {
  name: (v) => (!v ? 'Please enter your name.' : v.length < 2 ? 'Your name should be at least 2 characters.' : ''),
  email: (v) => (!v ? 'Please enter your email address.' : !EMAIL_RE.test(v) ? 'Please enter a valid email address, for example name@company.co.ke.' : ''),
  phone: (v) => (v && !PHONE_RE.test(v) ? 'Please enter a valid phone number, for example 0712 345678.' : ''),
  company: () => '',
  service: (v) => (!v ? 'Please choose the service you are interested in.' : ''),
  message: (v) =>
    !v ? 'Please tell us a little about your project.' : v.length < 20 ? 'Please add a little more detail (at least 20 characters).' : '',
};

const labels = { name: 'Name', email: 'Email', phone: 'Phone', company: 'Company', service: 'Service', message: 'Message' };

export function initContactForm() {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;

  form.noValidate = true;
  const endpoint = form.dataset.endpoint?.trim();
  const summary = form.querySelector('[data-form-summary]');
  const status = form.querySelector('[data-form-status]');
  const submit = form.querySelector('[data-submit]');
  const submitLabel = form.querySelector('[data-submit-label]');
  const note = form.querySelector('[data-delivery-note]');
  if (endpoint && note) note.textContent = 'We will reply by email or phone.';

  const value = (name) => (form.elements[name]?.value ?? '').trim();

  function setError(name, message) {
    const input = form.elements[name];
    const error = form.querySelector(`[data-error-for="${name}"]`);
    if (!input || !error) return;
    input.setAttribute('aria-invalid', message ? 'true' : 'false');
    error.textContent = message;
    error.hidden = !message;
  }

  function validateField(name) {
    const message = rules[name](value(name));
    setError(name, message);
    return message;
  }

  // Validate on blur, then live once a field has been flagged.
  Object.keys(rules).forEach((name) => {
    const input = form.elements[name];
    if (!input) return;
    input.addEventListener('blur', () => {
      if (value(name) || input.getAttribute('aria-invalid') === 'true') validateField(name);
    });
    input.addEventListener('input', () => {
      if (input.getAttribute('aria-invalid') === 'true') validateField(name);
    });
  });

  function showStatus(type, html) {
    const styles = {
      success: 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300',
      error: 'border-red-200 bg-red-50 text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300',
    };
    status.className = `mt-6 rounded-md border p-4 text-sm ${styles[type]}`;
    status.innerHTML = html;
    status.hidden = false;
  }

  function collect() {
    return Object.fromEntries(Object.keys(rules).map((name) => [name, value(name)]));
  }

  function composeText(data) {
    return Object.keys(labels)
      .filter((k) => data[k])
      .map((k) => (k === 'message' ? `\n${data[k]}` : `${labels[k]}: ${data[k]}`))
      .join('\n');
  }

  async function sendToEndpoint(data) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
  }

  function openEmailApp(data) {
    const subject = `Project enquiry: ${data.service}${data.company ? ` — ${data.company}` : ''}`;
    const href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(composeText(data))}`;
    const wa = `https://wa.me/254799967606?text=${encodeURIComponent(`Hello Protrixx Tech Solutions, I would like to discuss a software project.\n\n${composeText(data)}`)}`;
    window.location.href = href;
    showStatus(
      'success',
      `<p class="font-semibold">Your email app should now open with your message ready to send.</p>
       <p class="mt-1">Please press send in your email app to deliver it. If nothing opened, email us at
       <a class="font-semibold underline" href="mailto:${EMAIL}">${EMAIL}</a> or
       <a class="font-semibold underline" href="${wa}" target="_blank" rel="noopener">send the same message on WhatsApp</a>.</p>`,
    );
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Honeypot: real visitors never fill this hidden field.
    if (value('website')) return;

    const errors = Object.keys(rules)
      .map((name) => [name, validateField(name)])
      .filter(([, message]) => message);

    if (errors.length) {
      summary.innerHTML = `<p class="font-semibold">Please correct ${errors.length === 1 ? 'the following field' : `the following ${errors.length} fields`}:</p>
        <ul class="mt-2 list-disc space-y-1 pl-5">${errors
          .map(([name, message]) => `<li><a class="underline" href="#${name}">${message}</a></li>`)
          .join('')}</ul>`;
      summary.hidden = false;
      status.hidden = true;
      form.elements[errors[0][0]].focus();
      return;
    }

    summary.hidden = true;
    const data = collect();

    if (!endpoint) {
      openEmailApp(data);
      return;
    }

    submit.disabled = true;
    submitLabel.textContent = 'Sending…';
    try {
      await sendToEndpoint(data);
      form.reset();
      showStatus('success', '<p class="font-semibold">Thank you — your message has been sent.</p><p class="mt-1">We will get back to you shortly.</p>');
    } catch {
      showStatus(
        'error',
        `<p class="font-semibold">Sorry, your message could not be sent.</p><p class="mt-1">Please try again, or email us at <a class="font-semibold underline" href="mailto:${EMAIL}">${EMAIL}</a>.</p>`,
      );
    } finally {
      submit.disabled = false;
      submitLabel.textContent = 'Send Message';
    }
  });

  summary.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    event.preventDefault();
    form.elements[link.getAttribute('href').slice(1)]?.focus();
  });
}
