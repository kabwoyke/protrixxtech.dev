// Every page the build generates, in sitemap order.
import home from './home.mjs';
import about from './about.mjs';
import servicesIndex from './services/index.mjs';
import servicePages from './services/pages.mjs';
import portfolioPages from './portfolio/pages.mjs';
import contact from './contact.mjs';
import notFound from './not-found.mjs';

home.priority = '1.0';

export default [home, about, servicesIndex, ...servicePages, ...portfolioPages, contact, notFound];
