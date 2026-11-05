/* Copyright Elasticsearch B.V. Licensed under Elastic License 2.0.
 * Modified: classic's registered app categories adapted to SideNavigation; see SOURCES.md. */
import type { SolutionNav } from './types';
import { item, panel, section } from './shared';
export const classicNav: SolutionNav = {
  primaryItems: [
    item('home', 'Home', 'home'),
    panel('kibana', 'Analytics', 'logoKibana', [section('analytics', undefined, [['discover', 'Discover'], ['dashboards', 'Dashboards'], ['visualize', 'Visualize Library'], ['maps', 'Maps'], ['canvas', 'Canvas'], ['graph', 'Graph'], ['ml', 'Machine Learning']])]),
    panel('enterpriseSearch', 'Elasticsearch', 'logoElasticsearch', [section('search', undefined, [['searchHomepage', 'Overview'], ['agent_builder', 'Agents'], ['context_engine', 'Context']])]),
    panel('observability', 'Observability', 'logoObservability', [section('observability', undefined, [['observability-overview', 'Overview'], ['logs', 'Logs'], ['apm', 'APM'], ['metrics', 'Infrastructure'], ['synthetics', 'Synthetics'], ['uptime', 'Uptime'], ['slo', 'SLOs'], ['observability-overview:alerts', 'Alerts'], ['observability-overview:cases', 'Cases']])]),
    panel('securitySolution', 'Security', 'logoSecurity', [section('security', undefined, [['securitySolutionUI:launchpad', 'Overview'], ['securitySolutionUI:dashboards', 'Dashboards'], ['securitySolutionUI:alerts', 'Alerts'], ['securitySolutionUI:cases', 'Cases']])]),
    panel('management', 'Management', 'managementApp', [section('management', undefined, [['dev_tools', 'Dev Tools'], ['monitoring', 'Stack Monitoring'], ['fleet', 'Fleet'], ['management', 'Stack Management']])]),
  ],
  footerItems: [item('integrations', 'Add integrations', 'plusCircle')],
};
