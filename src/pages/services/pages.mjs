import { servicePage } from './template.mjs';
import * as content from './content.mjs';

export default [
  servicePage(content.webDevelopment),
  servicePage(content.mobileAppDevelopment),
  servicePage(content.customSoftwareDevelopment),
  servicePage(content.businessAutomation),
  servicePage(content.softwareMaintenance),
];
