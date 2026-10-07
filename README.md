# Protrixx Tech Solutions — Website

Corporate website for **Protrixx Tech Solutions**, a Kenyan software development company.

- Live domain: **https://www.protrixxtechsolutions.dev/**
- Primary brand color: **`#1971c2`**

The site is a fast, multi-page static website with separate pages for each service and portfolio project. It is built for SEO, accessibility and mobile performance, and supports light and dark modes.

## Technologies

```text
HTML5
Tailwind CSS (v3, compiled — no CDN)
Vanilla JavaScript (ES modules, no frameworks)
```

Build-time only (nothing below ships to visitors as a library):

- **Node.js 18+**: a small script turns the page templates into static HTML.
- **lucide-static**: [Lucide](https://lucide.dev) icons, inlined as SVG during the build.
- **@fontsource-variable/inter**: the Inter font, self-hosted.

## Project structure

```text
.
├── src/
│   ├── data/site.mjs          # Company info, contacts, nav, services, projects  ← edit facts here
│   ├── lib/
│   │   ├── layout.mjs         # <head>, SEO meta, JSON-LD, header, footer
│   │   ├── components.mjs     # Shared sections (page hero, CTA band, FAQ, …)
│   │   ├── icons.mjs          # Lucide icon inliner
│   │   └── html.mjs           # Template helpers
│   ├── pages/
│   │   ├── index.mjs          # Registry of every page (drives the build + sitemap)
│   │   ├── home.mjs
│   │   ├── about.mjs
│   │   ├── contact.mjs
│   │   ├── not-found.mjs      # 404 page
│   │   ├── services/
│   │   │   ├── index.mjs      # /services/
│   │   │   ├── template.mjs   # Layout shared by individual service pages
│   │   │   ├── content.mjs    # Copy for each service page
│   │   │   └── pages.mjs
│   │   └── portfolio/pages.mjs  # /portfolio/ and the case studies
│   ├── css/styles.css         # Tailwind entry + custom component classes
│   ├── js/                    # main.js, theme.js, navigation.js, animations.js, contact-form.js
│   ├── assets/                # images/, icons/ (favicons), logo/
│   └── static/.htaccess       # Apache config copied to the site root
├── scripts/
│   ├── build.mjs              # Generates dist/ (HTML, sitemap.xml, robots.txt, assets)
│   ├── serve.mjs              # Local preview server
│   └── check.mjs              # Pre-deploy QA (links, SEO tags, JSON-LD, H1s)
├── tailwind.config.js
├── package.json
└── dist/                      # ← Generated website. Upload this folder.
```

Pages are written as small JavaScript template modules. This keeps the header, footer, SEO tags and contact details in one place instead of copying them into 14 HTML files. The output in `dist/` is plain static HTML with clean URLs (`/services/web-development/`), so it runs on any static host.

Generated pages:

```text
/                                         /portfolio/
/about/                                   /portfolio/scopus-agro-solutions/
/services/                                /portfolio/rijeetech/
/services/web-development/                /portfolio/flora-prime-properties/
/services/mobile-app-development/         /contact/
/services/custom-software-development/    /404.html
/services/business-automation/
/services/software-maintenance/
```

## Development

```bash
npm install          # once
npm run dev          # build everything and serve at http://localhost:8080
```

Other scripts:

| Command | What it does |
| --- | --- |
| `npm run build` | Build pages and CSS into `dist/` |
| `npm run build:pages` | Rebuild only the HTML, sitemap and assets |
| `npm run watch:css` | Recompile CSS automatically while you edit |
| `npm run serve` | Serve `dist/` locally (`PORT=3000 npm run serve` to change the port) |
| `npm run check` | QA the build: broken internal links, missing/duplicate titles and descriptions, canonicals, Open Graph/Twitter tags, JSON-LD, one `<h1>` per page, emoji/placeholder text |

The pages use root-relative URLs (`/css/styles.css`), so open them through the local server, not by double-clicking the HTML files.

## Tailwind

- The configuration is in `tailwind.config.js`. Tailwind scans `src/**/*.{mjs,js,html}` for class names.
- `src/css/styles.css` is the entry file. Reusable classes (`.btn-primary`, `.card`, `.eyebrow`, `.form-control`, …) are defined there with `@apply` so the design stays consistent.
- Dark mode uses the `class` strategy: the `dark` class on `<html>` switches every `dark:` utility.
- CSS is compiled and minified into `dist/css/styles.css` by `npm run build:css`. No Tailwind CDN is used in production.

> Tailwind only generates classes it can find as complete strings. Write `md:grid-cols-3`, not `` `md:grid-cols-${n}` ``.

## Brand colors

All brand colors are defined in **`tailwind.config.js`** under `theme.extend.colors`:

- `primary` — the brand blue. `primary.DEFAULT` and `primary.600` are `#1971c2`; `primary.700` (`#145a9c`) is used for hover states, and `primary.50`/`primary.100` for light tints.
- `ink` — the dark navy (`#172033`) used for headings and the footer. `ink.950` is the dark-mode background.

Changing these values and rebuilding re-colors the whole site. A few non-CSS places also use the brand color: the PNG favicons and logo in `src/assets/`, the Open Graph image, and the `theme-color` meta tags in `src/lib/layout.mjs`.

## Logo

The official logo lives in `src/assets/logo/`: `protrixx-logo.png` (dark text, for light backgrounds; also referenced by structured data) and `protrixx-logo-light.png` (white text, used in dark mode and the footer). Both are rendered by the `logo()` function in `src/lib/layout.mjs`. The favicons and Apple touch icon in `src/assets/icons/` are cropped from the circuit "P" mark.

## Contact information

Phone numbers, WhatsApp numbers, the email address and the pre-filled WhatsApp message are all in **`src/data/site.mjs`** (`site.email` and the `contacts` array). The header, footer, About page, Contact page, CTA buttons and JSON-LD all read from that file.

Two extra places to update if the email or primary WhatsApp number changes:

- `src/js/contact-form.js` — the `EMAIL` constant and the WhatsApp fallback link.
- The Open Graph image (`src/assets/images/og-default.png`) if the domain changes.

## Adding portfolio projects

1. Add the project to the `projects` array in `src/data/site.mjs` (slug, name, category, type, url, domain, summary).
2. Add its case-study copy to the `caseStudies` object in `src/pages/portfolio/pages.mjs`, using the same slug as the key.
3. Run `npm run build`. The project then appears on the homepage, on `/portfolio/` and at `/portfolio/<slug>/`, and is added to the sitemap.

Only publish verified information. Do not add metrics, technologies, testimonials or results unless the client has confirmed them.

Project previews are illustrations drawn in HTML (`browserMock()` in `src/lib/components.mjs`), so the site works without screenshots. To use real screenshots, save them (with the client's permission) in `src/assets/images/` as WebP, about 1200px wide. Replace the `browserMock(...)` call with an `<img>` that has `width`, `height`, `loading="lazy"` and descriptive `alt` text.

## Adding a page (e.g. a future blog)

Create a module in `src/pages/` that exports `{ path, title, description, breadcrumbs, body }`, and add it to `src/pages/index.mjs`. The build creates the HTML, canonical URL, Open Graph and Twitter tags, JSON-LD and the sitemap entry. Add a link to it in `nav` in `src/data/site.mjs` if it should appear in the menu.

## SEO

- **Metadata:** each page module sets its own `title` and `description`. `src/lib/layout.mjs` turns these into `<title>`, the meta description, Open Graph tags and Twitter/X tags. The shared OG image is `src/assets/images/og-default.png` (1200×630). A page can override it with `ogImage`.
- **Canonicals:** generated automatically as `https://www.protrixxtechsolutions.dev` + the page path. The domain is set in `site.url` in `src/data/site.mjs`.
- **Sitemap:** `dist/sitemap.xml` is generated from the page registry on every build. The 404 page is excluded.
- **Robots:** `dist/robots.txt` allows everything and points to the sitemap.
- **Structured data (JSON-LD):** every page includes `Organization`, `ProfessionalService`, `WebSite`, `WebPage` (or `AboutPage`/`ContactPage`/`CollectionPage`) and `BreadcrumbList`. Service pages add `Service` and `FAQPage`; case studies add `CreativeWork`. Only real information is used. There is no street address, opening hours, ratings or founding date, because none has been provided. Add them to `baseGraph()` in `src/lib/layout.mjs` once they are confirmed.

Test with [Google's Rich Results Test](https://search.google.com/test/rich-results) after deploying.

## Deployment

1. Build:
   ```bash
   npm ci
   npm run build
   npm run check
   ```
2. Upload the **contents of `dist/`** to the web root of your host.
   - **cPanel / Apache:** upload to `public_html/`. The included `.htaccess` redirects HTTP to HTTPS and the bare domain to `www`, serves `404.html` for missing pages, and sets caching, compression and security headers. Hidden files must be uploaded too, so `.htaccess` is not skipped.
   - **Netlify / Cloudflare Pages / Vercel:** build command `npm run build`, output directory `dist`. These hosts serve `404.html` automatically. Set up the `www` redirect in their domain settings.
   - **Nginx:** use `try_files $uri $uri/ =404;` and `error_page 404 /404.html;`, and add a redirect to `https://www.protrixxtechsolutions.dev`.

### Domain configuration

- Point `www.protrixxtechsolutions.dev` to your host (usually a CNAME record, or an A record to the host's IP).
- Redirect the bare domain `protrixxtechsolutions.dev` to `https://www.protrixxtechsolutions.dev` with a 301.

### HTTPS

`.dev` domains are on the HSTS preload list, so browsers only load them over HTTPS. A valid TLS certificate is **required** before the site can be viewed. Most hosts issue a free Let's Encrypt certificate. Make sure it covers both `www.protrixxtechsolutions.dev` and `protrixxtechsolutions.dev`.

### Google Search Console

1. Add the property `https://www.protrixxtechsolutions.dev/` (or a Domain property via DNS).
2. Verify ownership using the DNS TXT record method (recommended) or the HTML file method. For the file method, put the file in `src/static/` so the build copies it to the site root.
3. Submit `https://www.protrixxtechsolutions.dev/sitemap.xml` under **Sitemaps**.
4. Use **URL Inspection** to request indexing for the homepage and service pages.
5. Also consider creating a **Google Business Profile** for local visibility in Kenya, using only verified business details.

## Contact form

The form (`/contact/`) has accessible client-side validation, with messages on each field and an error summary. It has two delivery modes, controlled by the `data-endpoint` attribute on the `<form>` in `src/pages/contact.mjs`:

- **No endpoint (current setting):** on submit, the visitor's email app opens with a pre-filled message to `protrixxtechsolutions@gmail.com`. The page tells them to press send, and offers a WhatsApp fallback. The site never claims a message was sent when no backend received it.
- **With an endpoint:** set `data-endpoint="https://…"`. The form then POSTs JSON to that URL:
  ```json
  { "name": "", "email": "", "phone": "", "company": "", "service": "", "message": "" }
  ```
  A 2xx response shows a success message. Any other response shows an error with the email address as a fallback.

Options for an endpoint:

- A form service such as Formspree, Basin or Web3Forms. Use the public form endpoint they give you; it never needs a secret key.
- A serverless function (Netlify/Vercel/Cloudflare) that sends email through a provider such as Resend, Postmark or SendGrid, or forwards to a CRM.
- An endpoint on your own backend or API.

**Security requirements for any backend:**

- Validate and sanitize **every field again on the server.** Client-side validation is for convenience only and can be bypassed.
- Never put API keys or credentials in frontend JavaScript. Keep them in server-side environment variables.
- Add rate limiting and spam protection. The form already includes a hidden honeypot field named `website`; reject submissions where it is filled. Consider adding Cloudflare Turnstile or reCAPTCHA as well.
- Escape submitted values before putting them in HTML emails or dashboards.
- Restrict CORS to `https://www.protrixxtechsolutions.dev`.

## Accessibility & performance notes

- Semantic landmarks, a skip link, one `<h1>` per page, labelled forms and visible focus rings.
- The mobile menu uses `aria-expanded`, traps focus while open, closes on Escape or when a link is chosen, and is `inert` while closed.
- The theme toggle has a descriptive `aria-label`. The chosen theme is saved in `localStorage`; without a saved choice, the OS preference is used. The theme is applied before first paint, so there is no flash.
- Animations are subtle, and turned off when the visitor has `prefers-reduced-motion` set. Content is never hidden if JavaScript fails.
- No runtime libraries. Icons are inline SVG, the font is self-hosted and preloaded, and the CSS is purged and minified.
