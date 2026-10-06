// Copy for each service page. Keep claims factual: no statistics, client
// counts or technologies that have not been confirmed.

const link = (href, text) => `<a class="prose-link" href="${href}">${text}</a>`;

export const webDevelopment = {
  slug: 'web-development',
  title: 'Web Development Company in Kenya | Protrixx Tech Solutions',
  description:
    'Professional website and web application development in Kenya. Protrixx Tech Solutions builds fast, responsive, SEO-friendly business websites, e-commerce sites and custom web apps.',
  serviceType: 'Web development',
  h1: 'Web Development for Businesses in Kenya',
  lead: 'We design and develop fast, responsive and professional websites and web applications that help Kenyan businesses win customers, explain what they do and run parts of their operations online.',
  glance: [
    'Corporate and business websites',
    'E-commerce websites',
    'Custom web applications',
    'Responsive, accessible and SEO-friendly',
    'Ongoing maintenance available',
  ],
  build: {
    title: 'Websites and web applications built around your goals',
    lead: 'Whether you need a credible online presence or a web application your team uses every day, we start with what the site needs to achieve for your business.',
    items: [
      { icon: 'building-2', title: 'Corporate websites', text: 'Clear, professional websites that present your company, services and team with the credibility clients and partners expect.' },
      { icon: 'store', title: 'Business websites', text: 'Websites for SMEs that explain your offer, show your work and make it easy for customers to call, message or request a quote.' },
      { icon: 'shopping-cart', title: 'E-commerce', text: 'Online stores that let customers browse products, place orders and pay, with an admin area your team can manage.' },
      { icon: 'panels-top-left', title: 'Web applications', text: 'Browser-based tools such as portals, booking systems and dashboards that replace manual work with a structured workflow.' },
      { icon: 'search', title: 'SEO-friendly builds', text: 'Clean structure, fast pages, proper metadata and sitemaps, so search engines can understand and index your website.' },
      { icon: 'refresh-cw', title: 'Redesigns', text: 'Rebuilding outdated websites to be faster, mobile-friendly and easier to update, without losing what already works.' },
    ],
  },
  approach: {
    title: 'Web design and development done properly',
    paragraphs: [
      'A website is often the first place a customer meets your business. We focus on clarity, speed and trust: content that answers real questions, layouts that work on every screen and clear next steps for visitors.',
      `When a project needs more than a website — logins, records, approvals or integrations — we extend it into a web application or connect it to ${link('/services/custom-software-development/', 'custom business software')}.`,
    ],
    points: [
      { icon: 'monitor-smartphone', title: 'Responsive design', text: 'Layouts designed for phones first, then tablets, laptops and large screens.' },
      { icon: 'gauge', title: 'Performance', text: 'Lean pages, optimized images and minimal scripts for fast loading on mobile networks.' },
      { icon: 'search', title: 'Search visibility', text: 'Semantic HTML, unique page metadata, structured data and clean URLs.' },
      { icon: 'accessibility', title: 'Accessibility', text: 'Readable contrast, keyboard navigation and proper labels so more people can use your site.' },
      { icon: 'lock', title: 'Security', text: 'HTTPS, careful handling of forms and sensible defaults to reduce common risks.' },
      { icon: 'wrench', title: 'Maintenance', text: 'Updates, fixes and improvements after launch, so the website keeps working for you.' },
    ],
  },
  fit: {
    title: 'When a new website or web app makes sense',
    lead: 'Web development is a good investment when your current online presence is holding the business back, or when a manual process could run better in the browser.',
    items: [
      'You do not have a website yet, or it no longer reflects your business',
      'Your current site is slow, hard to use on phones or difficult to update',
      'Customers struggle to find your services, prices or contact details',
      'You want to sell products or take bookings online',
      'Your team relies on spreadsheets or messages for a process that could be a web application',
    ],
    cta: 'Discuss your website project',
  },
  faqs: [
    { q: 'How much does website development cost in Kenya?', a: 'Cost depends on scope: the number of pages, features such as e-commerce or user accounts, content needs and integrations. After a short conversation about your goals we provide a clear proposal and quote for your specific project.' },
    { q: 'What is the difference between a website and a web application?', a: 'A website mainly presents information — your company, services and contact details. A web application lets users do things: log in, submit records, manage orders or view reports. Many businesses start with a website and add web application features as they grow.' },
    { q: 'Will my website work well on mobile phones?', a: 'Yes. Every website we build is responsive and designed mobile-first, because many visitors in Kenya browse primarily on their phones.' },
    { q: 'Can you maintain the website after launch?', a: `Yes. We offer ongoing ${link('/services/software-maintenance/', 'software maintenance and support')}, including updates, fixes, security improvements and new features.` },
  ],
  related: ['custom-software-development', 'mobile-app-development', 'software-maintenance'],
  cta: {
    title: 'Ready for a website that works as hard as you do?',
    text: 'Tell us about your business and goals, and we will recommend the right website or web application for you.',
    primary: { label: 'Start a Project', href: '/contact/' },
  },
};

export const mobileAppDevelopment = {
  slug: 'mobile-app-development',
  title: 'Mobile App Development in Kenya | Protrixx Tech Solutions',
  description:
    'Mobile app development in Kenya for Android, iOS and cross-platform. Protrixx Tech Solutions builds customer-facing and business apps with secure API and backend integration.',
  serviceType: 'Mobile application development',
  h1: 'Mobile App Development in Kenya',
  lead: 'We build mobile applications that help businesses serve customers better and manage operations on the move — from customer-facing apps to internal tools for field teams.',
  glance: [
    'Android and iOS applications',
    'Cross-platform development',
    'Customer-facing and internal apps',
    'API and backend integration',
    'Updates and maintenance after release',
  ],
  build: {
    title: 'Custom mobile applications for real business needs',
    lead: 'A mobile app should earn its place on a customer or employee’s phone. We focus on apps with a clear purpose and a clear benefit to your business.',
    items: [
      { icon: 'smartphone', title: 'Android apps', text: 'Android app development for the platform most widely used in Kenya, designed to perform well across a range of devices.' },
      { icon: 'tablet-smartphone', title: 'iOS apps', text: 'iOS app development for iPhone and iPad users, following platform conventions for a familiar experience.' },
      { icon: 'layers', title: 'Cross-platform apps', text: 'One codebase for Android and iOS where it suits the project, to reduce cost and keep both versions in step.' },
      { icon: 'briefcase', title: 'Business applications', text: 'Apps for staff and field teams: data capture, inspections, stock checks, orders and approvals from anywhere.' },
      { icon: 'users', title: 'Customer-facing apps', text: 'Apps that let your customers order, book, track, pay or stay in touch with your business.' },
      { icon: 'plug', title: 'API and backend integration', text: 'Connecting your app to your existing systems, databases and third-party services through secure APIs.' },
    ],
  },
  approach: {
    title: 'Apps that are useful on day one and maintainable after',
    paragraphs: [
      'Before writing code we agree who the app is for, what they need to do and how it fits into your wider systems. That keeps the first release focused and avoids building features nobody uses.',
      `Most apps need a backend: user accounts, data storage and an admin area. We design these together, and can build supporting ${link('/services/web-development/', 'web applications and admin dashboards')} alongside the app.`,
    ],
    points: [
      { icon: 'pencil-ruler', title: 'User-centred design', text: 'Simple flows and clear screens built around the tasks users need to complete.' },
      { icon: 'server', title: 'Backend integration', text: 'Reliable connections to the systems and data your app depends on.' },
      { icon: 'lock', title: 'Security', text: 'Careful handling of user accounts, data and communication with your servers.' },
      { icon: 'gauge', title: 'Performance', text: 'Apps that stay responsive on everyday devices and variable network conditions.' },
      { icon: 'rocket', title: 'Store release', text: 'Support with preparing and publishing your app to the Google Play Store and Apple App Store.' },
      { icon: 'wrench', title: 'Maintenance', text: 'Updates for new OS versions, bug fixes and feature improvements after launch.' },
    ],
  },
  fit: {
    title: 'When a mobile app is the right choice',
    lead: 'Not every business needs an app. A mobile application makes sense when people need to use your service frequently, on the move, or with phone features such as the camera, location or notifications.',
    items: [
      'Customers interact with your business regularly and would value a faster way to do it',
      'Field staff need to capture data or complete tasks away from a computer',
      'You need push notifications to keep users informed',
      'The workflow depends on the phone’s camera, location or offline access',
      'Your existing web platform would benefit from a companion mobile app',
    ],
    cta: 'Talk to us about your app idea',
  },
  faqs: [
    { q: 'Should I build for Android, iOS or both?', a: 'It depends on who your users are. Many Kenyan audiences are predominantly on Android, while some customer groups expect iOS as well. We help you decide based on your users and budget, and a cross-platform approach can cover both.' },
    { q: 'Do I need a website as well as a mobile app?', a: 'Usually, yes. A website helps people discover your business and is often where they first learn about the app. Many apps also need a web-based admin area to manage content, users and orders.' },
    { q: 'Can the app connect to our existing system?', a: 'In most cases, yes. If your system offers an API we can integrate with it; if not, we can discuss building an integration layer or extending the system.' },
    { q: 'Who maintains the app after it is published?', a: `We can. Apps need regular updates as Android and iOS change. Our ${link('/services/software-maintenance/', 'maintenance and support service')} covers fixes, updates and improvements.` },
  ],
  related: ['web-development', 'custom-software-development', 'software-maintenance'],
  cta: {
    title: 'Have an app idea for your business?',
    text: 'Share what you want users to be able to do, and we will help you shape it into a practical first release.',
    primary: { label: 'Request a Consultation', href: '/contact/' },
  },
};

export const customSoftwareDevelopment = {
  slug: 'custom-software-development',
  title: 'Custom Software Development Kenya | Protrixx Tech Solutions',
  description:
    'Custom software development in Kenya. Protrixx Tech Solutions builds business management systems, internal tools, dashboards, workflow systems and integrations that scale.',
  serviceType: 'Custom software development',
  h1: 'Custom Software Development for Kenyan Businesses',
  lead: 'Off-the-shelf software rarely fits exactly how your organization works. We design and build custom business software around your workflows, so your systems support the business instead of slowing it down.',
  glance: [
    'Business management systems',
    'Internal tools and dashboards',
    'Workflow and approval systems',
    'Integrations between systems',
    'Architecture designed to scale',
  ],
  build: {
    title: 'Business software solutions designed for your operations',
    lead: 'We build systems that hold your key information in one place, guide your team through each process and give management a clear view of the business.',
    items: [
      { icon: 'layout-dashboard', title: 'Custom business systems', text: 'Systems for managing customers, orders, inventory, bookings, members or projects — shaped around your process.' },
      { icon: 'wrench', title: 'Internal tools', text: 'Focused tools that remove friction from everyday tasks your team currently handles with spreadsheets or paper.' },
      { icon: 'chart-column', title: 'Dashboards and reporting', text: 'Clear views of the numbers that matter, built from data your business already produces.' },
      { icon: 'workflow', title: 'Workflow systems', text: 'Structured steps, roles and approvals so work moves through the organization consistently.' },
      { icon: 'folder-kanban', title: 'Management systems', text: 'Software to manage records, documents, staff, assets or clients with proper access control.' },
      { icon: 'plug', title: 'Integrations', text: 'Connecting your systems with each other and with third-party services so data does not need to be re-entered.' },
    ],
  },
  approach: {
    title: 'Enterprise-grade thinking, sized for your business',
    paragraphs: [
      'Custom software is a long-term asset. We take time to understand your processes, users and data before proposing a solution, then deliver in stages so you see progress and give feedback early.',
      `Many custom systems pay off most when they also automate routine work. Explore how ${link('/services/business-automation/', 'business process automation')} can extend the value of your software.`,
    ],
    points: [
      { icon: 'search', title: 'Process discovery', text: 'Mapping how work flows today before deciding what the software should do.' },
      { icon: 'database', title: 'Sound data design', text: 'Structuring your information so it stays accurate, searchable and useful for reporting.' },
      { icon: 'users', title: 'Roles and permissions', text: 'The right people see and do the right things, with a clear record of activity.' },
      { icon: 'trending-up', title: 'Scalable architecture', text: 'Built to handle more users, data and features as the business grows.' },
      { icon: 'lock', title: 'Security', text: 'Authentication, access control and careful handling of sensitive business data.' },
      { icon: 'git-branch', title: 'Phased delivery', text: 'Working software delivered in stages, so value arrives sooner and risk stays low.' },
    ],
  },
  fit: {
    title: 'Signs your business needs custom software',
    lead: 'Custom software development is worth considering when generic tools no longer match how you operate, or when information is scattered across too many places.',
    items: [
      'Important information lives in spreadsheets, notebooks and chat threads',
      'Off-the-shelf software forces workarounds or does not fit your process',
      'Several tools hold overlapping data that has to be copied between them',
      'Management lacks a reliable, up-to-date view of operations',
      'Your process is a competitive advantage that generic tools cannot support',
    ],
    cta: 'Talk through your requirements',
  },
  faqs: [
    { q: 'Why choose custom software over an off-the-shelf product?', a: 'Off-the-shelf products work well for standard needs. Custom software makes sense when your process is specific, when you need tools to work together, or when licence costs and workarounds are adding up. We will tell you honestly if an existing product would serve you better.' },
    { q: 'How long does a custom software project take?', a: 'It depends on scope. We usually recommend starting with a focused first version that solves the most important problem, then expanding in planned phases. You receive a timeline with the proposal.' },
    { q: 'Who owns the software?', a: 'Ownership and licensing terms are agreed in writing before the project begins, so you know exactly what you are getting.' },
    { q: 'Can you work with our existing systems?', a: 'Yes. We can integrate with existing systems where they offer a way to exchange data, or plan a gradual migration to a new system.' },
  ],
  related: ['business-automation', 'web-development', 'software-maintenance'],
  cta: {
    title: 'Have a process that deserves better software?',
    text: 'Walk us through how it works today. We will help you see what a custom system could look like and where to start.',
    primary: { label: 'Request a Consultation', href: '/contact/' },
  },
};

export const businessAutomation = {
  slug: 'business-automation',
  title: 'Business Process Automation Kenya | Protrixx Tech Solutions',
  description:
    'Business process automation and digital transformation for SMEs in Kenya. Automate workflows, approvals, notifications, records and reports with Protrixx Tech Solutions.',
  serviceType: 'Business process automation',
  h1: 'Business Process Automation in Kenya',
  lead: 'Repetitive manual work costs time, causes errors and makes it hard to grow. We help Kenyan businesses digitize and automate everyday processes so teams can focus on work that needs people.',
  glance: [
    'Workflow and approval automation',
    'Digital records instead of paperwork',
    'Automated notifications and reminders',
    'Dashboards and automated reports',
    'Integrations between existing tools',
  ],
  build: {
    title: 'What we can automate for your business',
    lead: 'Automation works best on processes that happen often and follow clear rules. These are some of the areas where it typically makes a difference.',
    items: [
      { icon: 'workflow', title: 'Workflow automation', text: 'Tasks move to the next person automatically, with clear status at every step.' },
      { icon: 'file-text', title: 'Digital records', text: 'Replace paper forms and physical files with searchable, secure digital records.' },
      { icon: 'bell', title: 'Notifications', text: 'Automatic email or message alerts for new requests, deadlines, approvals and follow-ups.' },
      { icon: 'layout-dashboard', title: 'Business dashboards', text: 'Live views of activity and performance, without someone compiling the figures by hand.' },
      { icon: 'chart-column', title: 'Automated reports', text: 'Daily, weekly or monthly reports generated and shared on schedule.' },
      { icon: 'plug', title: 'System integrations', text: 'Connect the tools you already use so data flows between them without re-typing.' },
      { icon: 'clipboard-check', title: 'Approval workflows', text: 'Purchase requests, leave, expenses or quotations approved digitally, with a full history.' },
      { icon: 'repeat', title: 'Reducing repetitive work', text: 'Remove copy-and-paste, duplicate data entry and routine manual checks.' },
      { icon: 'file-spreadsheet', title: 'Spreadsheet replacement', text: 'Turn critical spreadsheets into reliable systems with validation and access control.' },
    ],
  },
  approach: {
    title: 'Practical digital transformation for SMEs',
    paragraphs: [
      'Digital transformation does not have to be a large, disruptive project. We start with one process that causes the most friction, digitize it well, and build from there.',
      `Where automation needs a dedicated system behind it, we design one through our ${link('/services/custom-software-development/', 'custom software development')} service.`,
    ],
    points: [
      { icon: 'search', title: 'Map the process', text: 'Document each step, who is involved and where time is lost.' },
      { icon: 'target', title: 'Pick the right target', text: 'Prioritize the processes where automation brings the clearest benefit.' },
      { icon: 'pencil-ruler', title: 'Design for your team', text: 'Simple tools your staff can adopt without long training.' },
      { icon: 'list-checks', title: 'Keep control', text: 'Clear rules, audit history and human sign-off where it matters.' },
      { icon: 'git-branch', title: 'Roll out in stages', text: 'Introduce changes gradually to avoid disrupting daily operations.' },
      { icon: 'trending-up', title: 'Improve over time', text: 'Refine and extend automation as you learn what works.' },
    ],
  },
  fit: {
    title: 'Processes that are ready for automation',
    lead: 'If your team spends hours on the same tasks every week, there is usually an opportunity to automate.',
    items: [
      'The same information is typed into more than one place',
      'Approvals wait on paper, email chains or someone being in the office',
      'Reports take hours or days to compile manually',
      'Follow-ups and reminders depend on someone remembering',
      'It is hard to see the status of requests, orders or tasks at a glance',
    ],
    cta: 'Tell us which process to automate first',
  },
  faqs: [
    { q: 'Is business automation only for large companies?', a: 'No. SMEs often benefit the most, because a small team feels the cost of repetitive work quickly. Automation can start small and focused on a single process.' },
    { q: 'Will automation replace my staff?', a: 'The goal is to remove repetitive, low-value tasks so your team can spend more time on customers, decisions and growth.' },
    { q: 'Can you automate the tools we already use?', a: 'Often, yes. Where your current tools allow integration we can connect them. Where they do not, we can recommend or build a better-suited system.' },
    { q: 'Where should we start?', a: `Start with the process that causes the most delays or errors. ${link('/contact/', 'Contact us')} and we will help you identify it and outline a practical first step.` },
  ],
  related: ['custom-software-development', 'web-development', 'software-maintenance'],
  cta: {
    title: 'Which process would you automate first?',
    text: 'Describe the task that takes up your team’s time, and we will suggest a practical way to digitize it.',
    primary: { label: 'Talk to Us', href: '/contact/' },
  },
};

export const softwareMaintenance = {
  slug: 'software-maintenance',
  title: 'Software Maintenance & Support Kenya | Protrixx Tech Solutions',
  description:
    'Software maintenance and support in Kenya: bug fixes, security updates, performance optimization, monitoring and feature improvements for websites, apps and business systems.',
  serviceType: 'Software maintenance and support',
  h1: 'Software Maintenance & Support',
  lead: 'Software is never truly finished. We keep your websites, applications and business systems secure, reliable and up to date — and ready to evolve as your business changes.',
  glance: [
    'Bug fixes and troubleshooting',
    'Security and system updates',
    'Performance optimization',
    'Feature improvements',
    'Monitoring and technical support',
  ],
  build: {
    title: 'Ongoing care for your software',
    lead: 'Regular maintenance prevents small issues from becoming expensive problems, and keeps your software aligned with how your business works today.',
    items: [
      { icon: 'bug', title: 'Bug fixes', text: 'Investigating and resolving errors so your software behaves as expected.' },
      { icon: 'shield-check', title: 'Security updates', text: 'Applying updates and patches to reduce exposure to known vulnerabilities.' },
      { icon: 'gauge', title: 'Performance optimization', text: 'Finding and fixing slow pages, queries and processes.' },
      { icon: 'zap', title: 'Feature improvements', text: 'Adding and refining features as your needs and users change.' },
      { icon: 'activity', title: 'Monitoring', text: 'Keeping an eye on availability and errors so issues are noticed early.' },
      { icon: 'life-buoy', title: 'Technical support', text: 'A responsive technical partner when your team has questions or problems.' },
      { icon: 'trending-up', title: 'Scaling', text: 'Preparing your systems for more users, more data and new locations.' },
      { icon: 'refresh-cw', title: 'System updates', text: 'Keeping frameworks, dependencies and hosting environments current.' },
    ],
  },
  approach: {
    title: 'Reliable support from a team that understands software',
    paragraphs: [
      'We support software we have built and can take over existing systems built by others. For an existing system, we start with a review to understand how it works and where the risks are.',
      `Maintenance often reveals opportunities to improve. When it does, we can plan enhancements through ${link('/services/custom-software-development/', 'custom software development')} or ${link('/services/business-automation/', 'automation')}.`,
    ],
    points: [
      { icon: 'eye', title: 'System review', text: 'An initial assessment of code, hosting, security and known issues.' },
      { icon: 'list-checks', title: 'Agreed scope', text: 'Clear arrangements for what is covered and how requests are handled.' },
      { icon: 'clipboard-check', title: 'Tested changes', text: 'Changes are tested before they reach your live system.' },
      { icon: 'file-text', title: 'Documentation', text: 'Changes recorded so knowledge stays with your business.' },
      { icon: 'lock', title: 'Security first', text: 'Updates and access managed carefully to protect your data.' },
      { icon: 'messages-square', title: 'Clear communication', text: 'You know what was done, why, and what is recommended next.' },
    ],
  },
  fit: {
    title: 'When you need maintenance and support',
    lead: 'If your software is important to daily operations, it deserves regular care — not just attention when something breaks.',
    items: [
      'Your website or system has errors that have not been fixed',
      'The original developer is no longer available',
      'Software has not been updated in a long time',
      'Pages or processes have become noticeably slow',
      'You want to add features to an existing system without starting over',
    ],
    cta: 'Ask about supporting your software',
  },
  faqs: [
    { q: 'Can you maintain software built by another developer?', a: 'Yes. We begin with a review of the existing code and setup, then agree what can be supported and recommend any improvements needed to keep it stable.' },
    { q: 'What does a maintenance arrangement include?', a: 'It depends on your system and needs. Typical arrangements cover updates, bug fixes, monitoring and an agreed amount of time for improvements. We define the scope together.' },
    { q: 'Do you support websites as well as business systems?', a: `Yes. We maintain websites, ${link('/services/mobile-app-development/', 'mobile apps')} and custom business systems.` },
    { q: 'How do we request support?', a: 'You can reach us by phone, WhatsApp or email. Requests are logged and prioritized according to their impact on your business.' },
  ],
  related: ['web-development', 'mobile-app-development', 'custom-software-development'],
  cta: {
    title: 'Need dependable support for your software?',
    text: 'Tell us about the system you rely on and the issues you are facing. We will recommend a practical support plan.',
    primary: { label: 'Talk to Us', href: '/contact/' },
  },
};
