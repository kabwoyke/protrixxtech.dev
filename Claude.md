# Protrixx Tech Solutions — Website Development Specification

## 1. Project Overview

Build a professional, modern, elegant, fast, responsive, and SEO-optimized corporate website for:

**Protrixx Tech Solutions**

Protrixx Tech Solutions is a growing Kenyan technology company specializing in software development and digital transformation.

The company focuses on helping businesses digitize their operations by providing reliable, scalable, and practical software solutions that grow alongside their business needs.

The website should establish Protrixx Tech Solutions as a credible and professional software development company in Kenya while generating leads from businesses looking for technology solutions.

The website must feel like a real professional software development agency website — **not a generic AI-generated template**.

---

# 2. Official Website

The official website domain is:

**https://www.protrixxtechsolutions.dev/**

This is the canonical domain.

Use HTTPS everywhere.

The preferred hostname is:

**[www.protrixxtechsolutions.dev](http://www.protrixxtechsolutions.dev)**

Do not use alternative domains or protocols in canonical URLs.

All SEO metadata, canonical URLs, Open Graph URLs, JSON-LD structured data, sitemap URLs, and internal references should consistently use:

```text
https://www.protrixxtechsolutions.dev/
```

---

# 3. Company Information

## Company Name

**Protrixx Tech Solutions**

## Country

Kenya

## Founders

### Edward Kaboi

Co-Founder

Phone:

```text
0758262427
```

Available through:

* Phone
* WhatsApp

### Kennedy Mutiria

Co-Founder

Phone:

```text
+254 799 967606
```

Available through:

* Phone
* WhatsApp

## Email

```text
protrixxtechsolutions@gmail.com
```

---

# 4. Mission

The company's mission is:

> To digitize SMEs, medium-sized businesses, and large businesses by providing software solutions that scale with their business needs.

The website should communicate this mission clearly.

The company should be positioned as a technology partner that helps businesses:

* Digitize manual processes
* Automate repetitive tasks
* Improve operational efficiency
* Build better customer experiences
* Centralize business information
* Create scalable software systems
* Improve business visibility
* Adopt modern digital workflows

---

# 5. Core Services

Protrixx Tech Solutions specializes in:

1. Web Development
2. Mobile App Development
3. Custom Software Development
4. Business Process Automation
5. Software Maintenance & Support
6. Digital Transformation
7. Business Software Solutions

The website should focus primarily on the first five services while naturally incorporating the broader capabilities.

---

# 6. Technology Requirements

Build the website using:

* HTML5
* Tailwind CSS
* Vanilla JavaScript

Do NOT use:

* React
* Vue
* Angular
* Next.js
* Nuxt
* Svelte
* Other frontend frameworks

The website should be deployable to ordinary static hosting.

The code should be clean, readable, modular, maintainable, and production-oriented.

Use semantic HTML5 throughout.

---

# 7. Website Architecture

## IMPORTANT

Do NOT create the entire website as one single HTML page.

The website MUST use multiple pages.

This is important for:

* SEO
* Search engine indexing
* Service-specific search results
* Better content organization
* Better user experience
* Maintainability
* Future content expansion

Each major service should have its own dedicated page.

---

# 8. Recommended File Structure

Use a structure similar to:

```text
protrixx-tech-solutions/
│
├── index.html
│
├── about/
│   └── index.html
│
├── services/
│   ├── index.html
│   ├── web-development/
│   │   └── index.html
│   ├── mobile-app-development/
│   │   └── index.html
│   ├── custom-software-development/
│   │   └── index.html
│   ├── business-automation/
│   │   └── index.html
│   └── software-maintenance/
│       └── index.html
│
├── portfolio/
│   ├── index.html
│   ├── scopus-agro-solutions/
│   │   └── index.html
│   ├── rijeetech/
│   │   └── index.html
│   └── flora-prime-properties/
│       └── index.html
│
├── contact/
│   └── index.html
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── logo/
│
├── css/
│   └── styles.css
│
├── js/
│   ├── main.js
│   ├── navigation.js
│   ├── theme.js
│   └── animations.js
│
├── robots.txt
├── sitemap.xml
├── README.md
└── package.json
```

You may modify the structure if there is a better professional approach, but keep it simple.

---

# 9. Required Pages

The website should contain at minimum:

```text
/
 /about/
 /services/
 /services/web-development/
 /services/mobile-app-development/
 /services/custom-software-development/
 /services/business-automation/
 /services/software-maintenance/
 /portfolio/
 /portfolio/scopus-agro-solutions/
 /portfolio/rijeetech/
 /portfolio/flora-prime-properties/
 /contact/
```

Do not create unnecessary pages simply to increase page count.

Every page should have useful content.

---

# 10. Brand Identity

Primary brand color:

```text
#1971c2
```

This is the main Protrixx Tech Solutions brand color.

Use appropriate tints and shades of this color.

Suggested palette direction:

```text
Primary:
#1971c2

Dark primary:
#145a9c

Light primary:
#e7f2fc

Very light blue:
#f3f8fd

Dark text:
#172033

Secondary text:
#64748b

Light background:
#f8fafc

White:
#ffffff
```

These are suggestions only.

Use the primary blue strategically.

Do NOT make the entire website blue.

The design should primarily use:

* White
* Off-white
* Light gray
* Slate
* Dark navy
* Brand blue

The result should feel clean and premium.

---

# 11. Design Philosophy

The website should be:

* Professional
* Elegant
* Modern
* Minimal
* Premium
* Trustworthy
* Business-focused
* Technology-focused
* Clean
* Easy to navigate

Avoid:

* Excessive gradients
* Excessive glassmorphism
* Excessive rounded cards
* Huge animations
* Overly bright colors
* Generic startup aesthetics
* Excessive shadows
* Cluttered layouts
* Stock-photo-heavy sections

The site should look like a professional software development company built it.

---

# 12. Logo

If an official logo image is not provided, create a simple text-based logo treatment.

Example:

```text
Protrixx
Tech Solutions
```

Use typography and the brand color.

Do not invent a complicated graphical logo.

Keep the logo professional and easily replaceable later.

---

# 13. Icons

DO NOT use emojis as icons.

Never use:

```text
🚀
💻
📱
⚡
📊
🔒
```

as visual icons.

Instead use a professional icon library compatible with vanilla HTML/Tailwind.

Recommended:

**Lucide Icons**

Use icons consistently for:

* Services
* Phone
* WhatsApp
* Email
* Location
* Navigation
* Theme toggle
* Portfolio
* Business solutions
* Checkmarks
* Technology
* Process steps

Do not overuse icons.

---

# 14. Dark Mode

Implement a proper dark mode.

Requirements:

* Light mode is the default.
* Include a dark/light mode toggle.
* Persist the user's preference using `localStorage`.
* Respect the user's operating-system preference if no saved preference exists.
* Dark mode must be intentionally designed.
* Do not simply invert colors.
* Ensure adequate contrast.
* Cards must work properly in dark mode.
* Forms must work properly in dark mode.
* Navigation must work properly in dark mode.
* Footer must work properly in dark mode.
* Buttons must work properly in dark mode.

Use Tailwind's dark-mode functionality where appropriate.

The theme toggle must have an accessible label.

---

# 15. Responsive Design

The website must be fully responsive.

Support:

* Mobile phones
* Tablets
* Laptops
* Desktop
* Large desktop monitors

Use a mobile-first approach.

Pay particular attention to:

* Navigation
* Hero
* Typography
* Cards
* Portfolio
* Contact forms
* Buttons
* Footer
* Spacing
* Images

There must be no horizontal scrolling.

---

# 16. Navigation

Desktop navigation:

```text
Protrixx Tech Solutions

Home
Services
About
Portfolio
Contact

[Start a Project]

[Theme Toggle]
```

Mobile navigation:

```text
Logo
Menu Button
```

The mobile menu should:

* Open smoothly
* Close when a link is clicked
* Be keyboard accessible
* Have appropriate ARIA attributes
* Trap focus if appropriate
* Not cause horizontal scrolling

---

# 17. Homepage

URL:

```text
https://www.protrixxtechsolutions.dev/
```

The homepage should be the primary conversion page.

---

## 17.1 Homepage Hero

Create a strong hero section.

Suggested headline:

> Software Solutions That Grow With Your Business

Supporting copy:

> Protrixx Tech Solutions helps businesses in Kenya and beyond turn ideas, processes, and business challenges into reliable, scalable digital solutions.

Primary CTA:

```text
Start a Project
```

Secondary CTA:

```text
Explore Our Services
```

The hero should immediately communicate:

* Software development
* Business solutions
* Scalability
* Kenya
* Digital transformation

Do not use generic statements such as:

> "We create amazing digital experiences."

Make the messaging specific to business software.

---

# 18. Homepage Value Proposition

Create a section explaining why businesses should work with Protrixx.

Possible points:

### Business-Focused

We build software around real business requirements and workflows.

### Scalable Solutions

Our solutions are designed to evolve as your business grows.

### Modern Technology

We use modern development practices to create reliable digital products.

### Custom-Built

Your software should fit your business rather than forcing your business to fit the software.

### Long-Term Support

We can continue improving and maintaining your software after launch.

Do not invent statistics.

---

# 19. Homepage Services

Create a professional service grid.

Services:

### Web Development

Fast, responsive and professional websites and web applications designed around your business goals.

Link:

```text
/services/web-development/
```

### Mobile App Development

Modern mobile applications that help businesses serve customers and manage operations more effectively.

Link:

```text
/services/mobile-app-development/
```

### Custom Software Development

Software designed around the unique workflows, requirements, and processes of your organization.

Link:

```text
/services/custom-software-development/
```

### Business Automation

Digitize repetitive processes and improve efficiency through business process automation.

Link:

```text
/services/business-automation/
```

### Software Maintenance & Support

Keep your software secure, reliable, updated, and ready to evolve.

Link:

```text
/services/software-maintenance/
```

---

# 20. Digital Transformation Section

Create a major section explaining the company's mission.

Suggested heading:

> From Manual Processes to Digital Systems

Suggested copy:

> Many businesses still depend on spreadsheets, paperwork, disconnected tools, and manual processes. Protrixx Tech Solutions helps businesses transition to digital systems that improve efficiency, visibility, and scalability.

Explain that Protrixx can help businesses:

* Digitize operations
* Automate repetitive work
* Centralize information
* Improve customer experiences
* Reduce manual processes
* Improve reporting
* Build scalable business systems

---

# 21. Industries

Create a section that demonstrates that software can serve different industries.

Potential industries:

* Agriculture
* Real Estate
* Retail
* Professional Services
* Logistics
* Education
* Hospitality
* SMEs
* Growing Enterprises

Do not claim extensive industry expertise unless supported by actual projects.

Present these as industries the company can build solutions for, not as unsupported claims.

---

# 22. Portfolio Preview

Show the company's existing projects.

Projects:

### Scopus Agro Solutions

External website:

```text
https://scopusagrosolutions.com/
```

### Rijeetech

External website:

```text
https://www.rijeetech.co.ke/
```

### Flora Prime Properties

External website:

```text
https://www.floraprimeproperties.com/
```

Each portfolio card should contain:

* Project name
* Category if known
* Brief description
* View Project button

Do not invent technical details.

Do not claim specific technologies unless verified.

---

# 23. Portfolio Case Study Pages

Create separate pages for each project.

For example:

```text
/portfolio/scopus-agro-solutions/
```

Each case-study page should contain:

* Project name
* Industry/category
* Overview
* Business context
* Solution summary
* Key project objectives
* Website preview/image if available
* External project link
* CTA

Do not fabricate:

* Project budgets
* Number of users
* Technologies
* Development timelines
* Business results
* Revenue
* Client testimonials
* Statistics

If information is unavailable, keep the description general.

---

# 24. Process Section

Create a simple five-step development process.

## 01 — Discover

Understand the business, users, challenges, and goals.

## 02 — Plan

Define requirements, scope, architecture, and project direction.

## 03 — Design

Create the user experience and system structure.

## 04 — Develop

Build, test, refine, and integrate the solution.

## 05 — Launch & Support

Deploy the solution and provide ongoing improvements and support.

Use a professional visual timeline or step layout.

---

# 25. Homepage CTA

Create a strong final CTA.

Suggested heading:

> Have a Business Idea or Process You Want to Digitize?

Supporting text:

> Let's build a practical software solution that works for your business today and scales with you tomorrow.

Button:

```text
Talk to Us
```

Link:

```text
/contact/
```

---

# 26. About Page

URL:

```text
/about/
```

SEO title:

```text
About Protrixx Tech Solutions | Kenyan Software Development Company
```

The About page should include:

* Company introduction
* Mission
* Vision
* Values
* Founders
* Approach to software development
* Digital transformation philosophy

---

# 27. Founders

Introduce:

## Edward Kaboi

Co-Founder

Do not invent:

* Education
* Certifications
* Years of experience
* Previous employers
* Awards

unless supplied later.

## Kennedy Mutiria

Co-Founder

Do not invent personal or professional details.

Present the founders professionally but accurately.

---

# 28. Company Values

Potential values:

### Practical Innovation

Technology should solve real problems.

### Scalability

Solutions should grow alongside businesses.

### Reliability

Software should be dependable and maintainable.

### Simplicity

Complex business problems should result in simple user experiences.

### Partnership

Work collaboratively with clients rather than simply delivering software.

---

# 29. Services Overview Page

URL:

```text
/services/
```

Create a comprehensive overview of all services.

Each service should have:

* Icon
* Heading
* Description
* Key capabilities
* CTA
* Link to dedicated service page

---

# 30. Web Development Page

URL:

```text
/services/web-development/
```

SEO title:

```text
Web Development Company in Kenya | Protrixx Tech Solutions
```

Naturally target keywords such as:

* web development Kenya
* web development company Kenya
* website development Kenya
* professional website development Kenya
* custom websites Kenya
* web design and development Kenya
* web applications Kenya

Do not keyword stuff.

Discuss:

* Corporate websites
* Business websites
* E-commerce
* Web applications
* Responsive design
* SEO-friendly websites
* Performance
* Accessibility
* Security
* Maintenance

---

# 31. Mobile App Development Page

URL:

```text
/services/mobile-app-development/
```

SEO title:

```text
Mobile App Development in Kenya | Protrixx Tech Solutions
```

Naturally target:

* mobile app development Kenya
* mobile application development Kenya
* Android app development Kenya
* iOS app development Kenya
* custom mobile applications Kenya

Discuss:

* Android apps
* iOS apps
* Cross-platform applications
* Business applications
* Customer-facing applications
* API integration
* Backend integration
* Maintenance

Do not claim specific frameworks unless actually used.

---

# 32. Custom Software Development Page

URL:

```text
/services/custom-software-development/
```

SEO title:

```text
Custom Software Development Kenya | Protrixx Tech Solutions
```

Naturally target:

* custom software development Kenya
* software development company Kenya
* business software solutions Kenya
* enterprise software development Kenya
* custom business software Kenya

Explain:

* Custom business systems
* Internal tools
* Dashboards
* Workflow systems
* Management systems
* Integrations
* Business-specific applications
* Scalable architecture

---

# 33. Business Automation Page

URL:

```text
/services/business-automation/
```

SEO title:

```text
Business Process Automation Kenya | Protrixx Tech Solutions
```

Naturally target:

* business automation Kenya
* business process automation Kenya
* digital transformation Kenya
* SME digital transformation Kenya

Explain:

* Workflow automation
* Digital records
* Notifications
* Business dashboards
* Automated reports
* System integrations
* Approval workflows
* Reducing repetitive work

---

# 34. Software Maintenance Page

URL:

```text
/services/software-maintenance/
```

SEO title:

```text
Software Maintenance & Support Kenya | Protrixx Tech Solutions
```

Discuss:

* Bug fixes
* Security updates
* Performance optimization
* Feature improvements
* Monitoring
* Technical support
* Scaling
* System updates

---

# 35. Contact Page

URL:

```text
/contact/
```

SEO title:

```text
Contact Protrixx Tech Solutions | Software Development Kenya
```

Headline:

> Let's Build Something That Moves Your Business Forward

Create a professional contact form.

Fields:

```text
Name
Email
Phone
Company
Service
Message
```

Service dropdown:

```text
Web Development
Mobile App Development
Custom Software Development
Business Automation
Software Maintenance
Other
```

Include client-side validation.

Show useful validation messages.

Do not claim the form sends messages unless a backend is actually implemented.

For now, prepare the form for future API/backend integration.

A fallback mailto mechanism may be included if appropriate.

---

# 36. Contact Information

Display:

## Kennedy Mutiria

```text
+254 799 967606
```

Phone:

```text
tel:+254799967606
```

WhatsApp:

```text
https://wa.me/254799967606
```

## Edward Kaboi

Display:

```text
0758262427
```

Phone link:

```text
tel:+254758262427
```

WhatsApp:

```text
https://wa.me/254758262427
```

## Email

```text
protrixxtechsolutions@gmail.com
```

Use:

```text
mailto:protrixxtechsolutions@gmail.com
```

Make all contact methods clearly accessible.

---

# 37. SEO Strategy

SEO is a major requirement.

Every indexable page must have unique:

* `<title>`
* Meta description
* Canonical URL
* Open Graph title
* Open Graph description
* Open Graph URL
* Open Graph image
* Twitter/X metadata

Use one H1 per page.

Use logical H2 and H3 hierarchy.

Use descriptive anchor text.

Use semantic HTML.

---

# 38. Target SEO Keywords

Use keywords naturally.

Primary keywords:

```text
software development company Kenya
software development Kenya
web development Kenya
web development company Kenya
mobile app development Kenya
mobile application development Kenya
custom software development Kenya
software solutions Kenya
digital transformation Kenya
business automation Kenya
business process automation Kenya
SME software solutions Kenya
custom business software Kenya
technology company Kenya
web design and development Kenya
```

Secondary keywords can include:

```text
software developers Kenya
Kenyan software company
business software development Kenya
enterprise software Kenya
custom web applications Kenya
business digitization Kenya
digital solutions for SMEs
software development services Kenya
technology solutions for businesses
```

Do not use keywords unnaturally.

Do not create keyword-stuffed paragraphs.

---

# 39. Local SEO

Position Protrixx Tech Solutions as a Kenyan software development company.

Naturally mention:

* Kenya
* Kenyan businesses
* SMEs in Kenya
* Businesses across Kenya

Do not invent a physical office address.

Do not invent cities or counties unless provided.

Do not claim to have offices in locations where no office has been confirmed.

---

# 40. Canonical URLs

Every indexable page must have a canonical URL.

Examples:

Homepage:

```html
<link
  rel="canonical"
  href="https://www.protrixxtechsolutions.dev/"
>
```

About:

```html
<link
  rel="canonical"
  href="https://www.protrixxtechsolutions.dev/about/"
>
```

Web development:

```html
<link
  rel="canonical"
  href="https://www.protrixxtechsolutions.dev/services/web-development/"
>
```

Use the correct canonical URL for every page.

---

# 41. Open Graph

Every important page should include:

```html
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:type" content="website">
<meta property="og:url" content="...">
<meta property="og:image" content="...">
<meta property="og:site_name" content="Protrixx Tech Solutions">
```

Use the official domain.

---

# 42. Twitter/X Metadata

Include:

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="...">
```

---

# 43. Structured Data

Implement appropriate JSON-LD.

At minimum use:

* Organization
* ProfessionalService or appropriate LocalBusiness schema
* WebSite
* BreadcrumbList

Use only real information.

Do NOT invent:

* Reviews
* Ratings
* Awards
* Number of employees
* Revenue
* Client counts
* Opening hours
* Physical address
* Founding date

unless the information is later provided.

Example organization URL:

```text
https://www.protrixxtechsolutions.dev/
```

---

# 44. Sitemap

Create:

```text
/sitemap.xml
```

The sitemap should use the canonical HTTPS domain.

Example URLs:

```text
https://www.protrixxtechsolutions.dev/
https://www.protrixxtechsolutions.dev/about/
https://www.protrixxtechsolutions.dev/services/
https://www.protrixxtechsolutions.dev/services/web-development/
https://www.protrixxtechsolutions.dev/services/mobile-app-development/
https://www.protrixxtechsolutions.dev/services/custom-software-development/
https://www.protrixxtechsolutions.dev/services/business-automation/
https://www.protrixxtechsolutions.dev/services/software-maintenance/
https://www.protrixxtechsolutions.dev/portfolio/
https://www.protrixxtechsolutions.dev/portfolio/scopus-agro-solutions/
https://www.protrixxtechsolutions.dev/portfolio/rijeetech/
https://www.protrixxtechsolutions.dev/portfolio/flora-prime-properties/
https://www.protrixxtechsolutions.dev/contact/
```

---

# 45. Robots.txt

Create:

```text
/robots.txt
```

It should contain:

```text
User-agent: *
Allow: /

Sitemap: https://www.protrixxtechsolutions.dev/sitemap.xml
```

Do not block:

* CSS
* JavaScript
* Images
* Important HTML pages

---

# 46. Performance

Optimize the website for performance.

Requirements:

* Minimal JavaScript
* Lazy-load non-critical images
* Use appropriately sized images
* Avoid enormous images
* Avoid unnecessary dependencies
* Avoid large JavaScript libraries
* Avoid autoplay background videos
* Minimize render-blocking resources
* Use efficient CSS
* Optimize fonts
* Avoid excessive animation

Target excellent Core Web Vitals.

Pay attention to:

* Largest Contentful Paint
* Cumulative Layout Shift
* Interaction to Next Paint

---

# 47. Accessibility

Follow WCAG-oriented accessibility practices.

Include:

* Semantic HTML
* Proper form labels
* Keyboard navigation
* Visible focus states
* Accessible buttons
* ARIA labels where appropriate
* Sufficient contrast
* Descriptive image alt text
* Accessible mobile navigation
* Accessible theme switch
* Proper heading hierarchy

Do not rely exclusively on color to communicate information.

---

# 48. Images

Use images strategically.

Do not make the site dependent on stock photography.

Potential imagery:

* Software development
* Business technology
* Digital transformation
* Kenyan businesses
* Software interfaces
* Abstract technology visuals

If images are not available, create professional placeholders that can easily be replaced later.

Do not use copyrighted images without appropriate rights.

All meaningful images must have descriptive alt text.

Decorative images should use appropriate empty alt attributes.

---

# 49. Animations

Use subtle animations only.

Possible animations:

* Hero entrance
* Fade-in sections
* Card hover
* Button transitions
* Navigation transitions
* Scroll reveal

Avoid:

* Excessive bouncing
* Large movement
* Distracting backgrounds
* Continuous animations

Respect:

```css
prefers-reduced-motion
```

---

# 50. JavaScript Requirements

Use vanilla JavaScript.

Implement:

* Mobile menu
* Theme switching
* Theme persistence
* System theme detection
* Form validation
* Scroll animations
* Navigation behavior
* Active navigation state where appropriate

Keep JavaScript modular.

Avoid unnecessary JavaScript.

Do not use:

```javascript
eval()
```

Do not expose secrets in frontend code.

---

# 51. Contact Form Security

The frontend should safely handle form inputs.

Do not assume frontend validation is sufficient for security.

Document that server-side validation will be required when a backend is connected.

Do not include API keys or private credentials in frontend JavaScript.

---

# 52. Internal Linking

Create a logical internal linking strategy.

For example:

Homepage → Services

Services → Individual Services

Individual Services → Contact

Portfolio → Case Studies

Case Studies → Contact

About → Contact

Contact → Services

Use descriptive anchor text.

Avoid:

```text
Click here
Read more
Learn more
```

when more descriptive text is possible.

Prefer:

```text
Explore our web development services
```

---

# 53. Footer

Create a professional footer.

Include:

## Company

Protrixx Tech Solutions

Short description.

## Navigation

* Home
* About
* Services
* Portfolio
* Contact

## Services

* Web Development
* Mobile App Development
* Custom Software Development
* Business Automation
* Software Maintenance

## Contact

Kennedy:

```text
+254 799 967606
```

Edward:

```text
0758262427
```

Email:

```text
protrixxtechsolutions@gmail.com
```

## Footer Bottom

```text
© 2026 Protrixx Tech Solutions. All rights reserved.
```

---

# 54. WhatsApp

Use WhatsApp appropriately for contact CTAs.

Kennedy:

```text
https://wa.me/254799967606
```

Edward:

```text
https://wa.me/254758262427
```

Where appropriate, use a prefilled message.

Example:

```text
Hello Protrixx Tech Solutions, I would like to discuss a software project.
```

URL encode the message properly.

Do not use emojis in the WhatsApp button.

Use an appropriate icon.

---

# 55. Call-to-Action Strategy

Use clear CTAs throughout the site.

Primary CTA:

```text
Start a Project
```

Secondary CTAs:

```text
Explore Services
View Our Work
Talk to Us
Request a Consultation
```

Avoid aggressive sales language.

The website should feel professional and consultative.

---

# 56. Content Tone

The writing should be:

* Professional
* Confident
* Clear
* Human
* Concise
* Business-oriented
* Technically credible

Avoid excessive corporate jargon.

Avoid statements like:

> We leverage cutting-edge revolutionary next-generation synergistic technology solutions to disrupt the digital ecosystem.

Instead use:

> We build practical software that helps businesses digitize operations, improve efficiency, and scale.

---

# 57. No Fake Claims

This is extremely important.

Do NOT invent:

* Client numbers
* Revenue
* Employee numbers
* Reviews
* Testimonials
* Awards
* Certifications
* Years of experience
* Project budgets
* Project results
* Technologies
* Partnerships
* Office locations
* Customer satisfaction percentages

Only use verified information.

If information is missing, write the content without making unsupported claims.

---

# 58. Portfolio Accuracy

The known projects are:

### Scopus Agro Solutions

```text
https://scopusagrosolutions.com/
```

### Rijeetech

```text
https://www.rijeetech.co.ke/
```

### Flora Prime Properties

```text
https://www.floraprimeproperties.com/
```

Do not claim specific technologies or features unless verified.

If the live websites are accessible during development, inspect them only to understand publicly visible project context.

Do not scrape or reproduce copyrighted content.

---

# 59. SEO-Friendly URL Structure

Use clean URLs.

Preferred:

```text
/services/web-development/
```

Avoid:

```text
/services.html?service=web
```

Avoid:

```text
/page?id=123
```

Use lowercase URLs.

Use hyphens.

Avoid unnecessary URL parameters.

---

# 60. Meta Title Guidelines

Homepage:

```text
Protrixx Tech Solutions | Software Development Company in Kenya
```

About:

```text
About Protrixx Tech Solutions | Kenyan Software Development Company
```

Services:

```text
Software Development Services Kenya | Protrixx Tech Solutions
```

Web Development:

```text
Web Development Company in Kenya | Protrixx Tech Solutions
```

Mobile:

```text
Mobile App Development in Kenya | Protrixx Tech Solutions
```

Custom Software:

```text
Custom Software Development Kenya | Protrixx Tech Solutions
```

Business Automation:

```text
Business Process Automation Kenya | Protrixx Tech Solutions
```

Software Maintenance:

```text
Software Maintenance & Support Kenya | Protrixx Tech Solutions
```

Portfolio:

```text
Software Projects & Portfolio | Protrixx Tech Solutions
```

Contact:

```text
Contact Protrixx Tech Solutions | Software Development Kenya
```

Create unique descriptions for each page.

---

# 61. Homepage Meta Description

Use a natural description similar to:

> Protrixx Tech Solutions is a Kenyan software development company building scalable web, mobile, and custom software solutions for SMEs, growing businesses, and organizations.

Keep it within an appropriate search-engine-friendly length.

---

# 62. Technical SEO

Ensure:

* One H1 per page
* Correct heading hierarchy
* Canonical URLs
* XML sitemap
* Robots.txt
* Structured data
* Open Graph
* Twitter/X cards
* Clean URLs
* Mobile responsiveness
* HTTPS
* Fast loading
* Accessible navigation
* Descriptive image alt text
* Internal linking
* No accidental duplicate pages
* No accidental `noindex`
* No broken internal links

---

# 63. 404 Page

Create a professional 404 page.

Example:

> Page Not Found

Supporting text:

> The page you're looking for may have moved or no longer exists.

Buttons:

```text
Back to Home
Explore Services
Contact Us
```

Make it consistent with the brand.

---

# 64. Loading / Interaction States

Where appropriate, provide:

* Hover states
* Focus states
* Active states
* Form validation states
* Success states
* Error states

Do not create unnecessary loading animations.

---

# 65. Browser Compatibility

Ensure the website works properly in modern:

* Chrome
* Edge
* Firefox
* Safari

Pay particular attention to mobile Safari and Chrome.

---

# 66. Code Quality

The final code should:

* Be readable
* Be consistently formatted
* Use meaningful class names where custom CSS is required
* Avoid unnecessary duplication
* Use semantic HTML
* Keep JavaScript organized
* Keep CSS organized
* Avoid dead code
* Avoid unused assets
* Avoid console errors

No broken links.

No broken images.

No placeholder text.

No Lorem Ipsum.

---

# 67. Tailwind CSS

Use Tailwind CSS.

The primary brand color should be configured centrally where possible.

Example conceptual configuration:

```javascript
colors: {
    primary: {
        DEFAULT: '#1971c2'
    }
}
```

Use shades/tints consistently.

Avoid scattering arbitrary colors throughout the project.

If using Tailwind CDN for simplicity, structure the code so the project can later migrate to a compiled Tailwind build.

A proper Tailwind build is preferred for production if practical.

---

# 68. Typography

Use a professional modern sans-serif font.

Possible choices:

* Inter
* Manrope
* Plus Jakarta Sans

Choose one primary font.

Do not use many different fonts.

Typography should have:

* Strong hierarchy
* Comfortable line height
* Good readability
* Professional appearance

---

# 69. Homepage Visual Direction

The homepage should not simply consist of:

```text
Hero
Cards
Cards
Cards
Footer
```

Create visual rhythm.

Use:

* Large hero
* Value proposition
* Services
* Digital transformation section
* Process
* Portfolio
* Industries
* CTA
* Footer

Use alternating visual treatments while maintaining a consistent design system.

---

# 70. Professional UI Details

Include subtle details such as:

* Fine borders
* Soft shadows
* Consistent spacing
* Hover transitions
* Section labels
* Accent lines
* Clean card layouts
* Consistent button styles
* Strong typography
* Professional form styling

Do not overdo these effects.

---

# 71. Mobile UX

On mobile:

* Buttons should be easy to tap.
* Text should remain readable.
* Cards should stack cleanly.
* Navigation should be simple.
* Contact actions should be accessible.
* Forms should use full-width inputs.
* Avoid tiny text.
* Avoid oversized headings that wrap badly.
* Ensure no horizontal scrolling.

---

# 72. Desktop UX

On desktop:

* Use a constrained maximum content width.
* Do not allow text to span excessively wide lines.
* Maintain generous whitespace.
* Use balanced grids.
* Use a sticky or intelligently positioned header if appropriate.

---

# 73. SEO Content Strategy

The website should establish topical relevance around:

```text
Software Development
Web Development
Mobile App Development
Custom Software
Business Automation
Digital Transformation
Business Software
Kenyan Technology
SME Digitization
```

Use internal links between related services.

For example:

Custom Software Development should link to Business Automation.

Web Development should link to Custom Software Development.

Business Automation should link to Contact.

---

# 74. Future Blog Architecture

Prepare for a future blog but do not create dozens of empty pages.

A future structure can be:

```text
/blog/
```

Potential future topics:

* How SMEs in Kenya Can Digitize Their Operations
* How Much Does Custom Software Development Cost in Kenya?
* Website vs Web Application: What Does Your Business Need?
* Why Businesses Should Automate Repetitive Processes
* How Mobile Apps Can Improve Customer Engagement
* Choosing a Software Development Company in Kenya
* Digital Transformation for Kenyan SMEs

Do not create these articles unless requested.

---

# 75. Future Expansion

The architecture should make it easy to add:

* Blog
* Testimonials
* Case studies
* Careers
* Client portal
* Quote request system
* Online consultation booking
* CMS
* Backend API
* CRM integration

Do not implement these unless requested.

---

# 76. Deployment

The website should be deployable to standard hosting.

Document deployment in `README.md`.

Explain:

* Local development
* Tailwind setup
* Production build
* Uploading files
* Domain configuration
* HTTPS
* Sitemap
* Google Search Console

The website domain is:

```text
https://www.protrixxtechsolutions.dev/
```

---

# 77. README Requirements

Create a detailed `README.md`.

Include:

## Project Overview

Explain the website.

## Technologies

```text
HTML5
Tailwind CSS
Vanilla JavaScript
```

## Development

Explain how to run locally.

## Tailwind

Explain how Tailwind is configured.

## Brand Colors

Explain where to modify:

```text
#1971c2
```

## Contact Information

Explain where phone numbers and email can be updated.

## Adding Portfolio Projects

Explain how to add new portfolio pages.

## SEO

Explain:

* Metadata
* Canonicals
* Sitemap
* Robots
* Structured data

## Deployment

Explain how to deploy.

## Contact Form

Explain how to connect the form to a backend or email provider later.

---

# 78. Final QA Checklist

Before considering the project complete, inspect the entire website.

## Design

Check:

* Professional appearance
* Consistent branding
* Proper spacing
* Good typography
* No excessive gradients
* No excessive rounded cards
* No visual clutter

## Responsive

Check:

* Mobile
* Tablet
* Desktop
* Large desktop

## Navigation

Check:

* All links
* Mobile menu
* Desktop menu
* Active states
* Theme toggle

## SEO

Check:

* Unique titles
* Unique descriptions
* Canonicals
* Sitemap
* Robots
* JSON-LD
* Open Graph
* Twitter/X metadata
* H1 hierarchy
* Alt attributes

## Performance

Check:

* Image sizes
* JavaScript
* CSS
* Fonts
* Animations
* Loading speed

## Accessibility

Check:

* Keyboard navigation
* Focus states
* Contrast
* Form labels
* ARIA
* Heading hierarchy

## Content

Check:

* No Lorem Ipsum
* No fake testimonials
* No fake statistics
* No fake awards
* No invented addresses
* No unsupported claims
* No placeholder text

## Contact

Verify:

```text
+254 799 967606
0758262427
protrixxtechsolutions@gmail.com
```

Verify:

```text
https://wa.me/254799967606
https://wa.me/254758262427
```

## Domain

Verify that canonical URLs use:

```text
https://www.protrixxtechsolutions.dev/
```

and not another domain.

---

# 79. Final Deliverable

The final deliverable must be a complete working website.

Do not only provide a design explanation.

Actually create:

* All HTML pages
* Tailwind configuration
* CSS
* JavaScript
* Responsive layouts
* Dark mode
* Navigation
* Contact form
* Portfolio pages
* SEO metadata
* JSON-LD
* Sitemap
* Robots.txt
* 404 page
* README

The website must be internally linked correctly.

There must be no broken links.

There must be no missing pages.

There must be no placeholder content.

There must be no emojis used as icons.

---

# 80. Important Instruction to Claude

Do not stop at explaining what should be built.

**BUILD THE WEBSITE.**

Use the requirements in this document as the source of truth.

Where something has not been specified, choose the simplest professional solution.

Do not ask unnecessary questions.

Do not invent company facts.

Do not fabricate statistics, reviews, awards, clients, addresses, technologies, or results.

Prioritize:

1. Professional design
2. SEO
3. Performance
4. Accessibility
5. Mobile responsiveness
6. Maintainability
7. Clean code
8. Business conversion
9. Accurate company information

The final result should look like a premium, modern Kenyan software development company's website.

The website should communicate one central message:

> **Protrixx Tech Solutions helps businesses turn their ideas and manual processes into scalable digital solutions.**

Official domain:

```text
https://www.protrixxtechsolutions.dev/
```

Company:

```text
Protrixx Tech Solutions
```

Primary brand color:

```text
#1971c2
```

Email:

```text
protrixxtechsolutions@gmail.com
```

Kennedy Mutiria:

```text
+254 799 967606
```

Edward Kaboi:

```text
0758262427
```

Existing projects:

```text
https://scopusagrosolutions.com/
https://www.rijeetech.co.ke/
https://www.floraprimeproperties.com/
```

**Now build the complete website.**
