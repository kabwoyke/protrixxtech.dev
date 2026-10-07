// Central site data. Update company details, contacts, services and projects here;
// every page, the footer, JSON-LD and the sitemap read from this file.

export const site = {
  name: 'Protrixx Tech Solutions',
  shortName: 'Protrixx',
  url: 'https://www.protrixxtechsolutions.dev',
  country: 'Kenya',
  countryCode: 'KE',
  locale: 'en_KE',
  email: 'protrixxtechsolutions@gmail.com',
  tagline: 'Software solutions that grow with your business',
  summary:
    'Protrixx Tech Solutions is a Kenyan software development company building scalable web, mobile and custom software solutions for SMEs, growing businesses and organizations.',
  mission:
    'To digitize SMEs, medium-sized businesses, and large businesses by providing software solutions that scale with their business needs.',
  ogImage: '/assets/images/og-default.png',
  year: 2026,
};

const waText = encodeURIComponent('Hello Protrixx Tech Solutions, I would like to discuss a software project.');

export const contacts = [
  {
    name: 'Kennedy Mutiria',
    role: 'Co-Founder',
    phoneDisplay: '+254 799 967606',
    phoneE164: '+254799967606',
    whatsapp: '254799967606',
  },
  {
    name: 'Edward Kaboi',
    role: 'Co-Founder',
    phoneDisplay: '0758262427',
    phoneE164: '+254758262427',
    whatsapp: '254758262427',
  },
].map((c) => ({
  ...c,
  tel: `tel:${c.phoneE164}`,
  waLink: `https://wa.me/${c.whatsapp}`,
  waLinkWithMessage: `https://wa.me/${c.whatsapp}?text=${waText}`,
}));

// The primary WhatsApp contact used by general "Chat on WhatsApp" buttons.
export const primaryContact = contacts[0];

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/' },
  { label: 'About', href: '/about/' },
  { label: 'Portfolio', href: '/portfolio/' },
  { label: 'Contact', href: '/contact/' },
];

// Summary data for each service. Full page content lives in src/pages/services/.
export const services = [
  {
    slug: 'web-development',
    name: 'Web Development',
    icon: 'globe',
    summary:
      'Fast, responsive and professional websites and web applications designed around your business goals.',
    capabilities: ['Corporate and business websites', 'E-commerce websites', 'Custom web applications', 'SEO-friendly, fast-loading builds'],
  },
  {
    slug: 'mobile-app-development',
    name: 'Mobile App Development',
    icon: 'smartphone',
    summary:
      'Modern mobile applications that help businesses serve customers and manage operations more effectively.',
    capabilities: ['Android and iOS applications', 'Cross-platform applications', 'Customer-facing and internal apps', 'API and backend integration'],
  },
  {
    slug: 'custom-software-development',
    name: 'Custom Software Development',
    icon: 'layers',
    summary:
      'Software designed around the unique workflows, requirements and processes of your organization.',
    capabilities: ['Business management systems', 'Internal tools and dashboards', 'Workflow systems', 'Integrations between systems'],
  },
  {
    slug: 'business-automation',
    name: 'Business Automation',
    icon: 'workflow',
    summary:
      'Digitize repetitive processes and improve efficiency through business process automation.',
    capabilities: ['Workflow and approval automation', 'Digital records', 'Automated reports and notifications', 'System integrations'],
  },
  {
    slug: 'software-maintenance',
    name: 'Software Maintenance & Support',
    shortName: 'Software Maintenance',
    icon: 'shield-check',
    summary:
      'Keep your software secure, reliable, updated and ready to evolve.',
    capabilities: ['Bug fixes and security updates', 'Performance optimization', 'Feature improvements', 'Monitoring and technical support'],
  },
].map((s) => ({ ...s, href: `/services/${s.slug}/`, shortName: s.shortName ?? s.name }));

export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));

// Portfolio projects. Descriptions are kept to publicly visible context only.
export const projects = [
  {
    slug: 'scopus-agro-solutions',
    name: 'Scopus Agro Solutions',
    category: 'Agriculture',
    type: 'Business website',
    url: 'https://scopusagrosolutions.com/',
    domain: 'scopusagrosolutions.com',
    summary:
      'A business website for a Kenyan supplier of fertilizers and crop protection products, presenting its product range and making it easy for customers to request quotes.',
  },
  {
    slug: 'rijeetech',
    name: 'Rijeetech',
    category: 'Education',
    type: 'Organization website',
    url: 'https://www.rijeetech.co.ke/',
    domain: 'rijeetech.co.ke',
    summary:
      'A website for a Kenyan coding and robotics education program for young learners, presenting its programs and helping parents get in touch.',
  },
  {
    slug: 'flora-prime-properties',
    name: 'Flora Prime Properties',
    category: 'Real Estate',
    type: 'Property website',
    url: 'https://www.floraprimeproperties.com/',
    domain: 'floraprimeproperties.com',
    summary:
      'A real estate website for a Kenyan property business, showcasing land and residential properties and connecting buyers with the team.',
  },
].map((p) => ({
  ...p,
  href: `/portfolio/${p.slug}/`,
  // Homepage screenshot, exported at 800 and 1600px wide (16:7) in src/assets/images/portfolio/.
  screenshot: `/assets/images/portfolio/${p.slug}`,
}));
