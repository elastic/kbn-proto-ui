import { describe, it, expect } from 'vitest';
import { getSolutionNav, solutionNavTrees } from '../src/solution-menus';
import { clampSidebarWidth, getDefaultSidebarWidth } from '../src/rebuilt/sidebarWidth';
describe('solution navigation', () => {
  it('has the actual solution-specific order and nested panels', () => {
    expect(getSolutionNav('observability').primaryItems.slice(0, 3).map((n) => n.id)).toEqual(['observability-overview', 'discover', 'dashboards']);
    expect(getSolutionNav('security').primaryItems.some((n) => n.id === 'securityGroup:rules')).toBe(true);
    expect(getSolutionNav('search').primaryItems.slice(0, 3).map((n) => n.id)).toEqual(['searchHomepage', 'agent_builder', 'context_engine']);
    expect(getSolutionNav('classic').primaryItems.map((n) => n.label)).toEqual(['Home', 'Analytics', 'Elasticsearch', 'Observability', 'Security', 'Management']);
    const apps = getSolutionNav('observability').primaryItems.find((n) => n.id === 'applications')!;
    expect(apps.sections?.[0].items.map((n) => n.id)).toContain('apm:traces');
    expect(apps.sections?.[0].items.map((n) => n.id)).not.toContain('apm:service-map');
  });
  it('supports extending and replacing sections without mutating shared defaults', () => {
    const original = JSON.stringify(solutionNavTrees);
    const custom = getSolutionNav('observability', (nav) => {
      nav.primaryItems[0].label = 'My overview';
      nav.primaryItems.push({ id: 'prototype', label: 'Prototype', iconType: 'beaker', href: '/prototype' });
      return nav;
    });
    expect(custom.primaryItems.at(-1)?.id).toBe('prototype');
    expect(JSON.stringify(solutionNavTrees)).toBe(original);
    expect(getSolutionNav('search', { footerItems: [] }).footerItems).toEqual([]);
  });
  it('maps host URLs in primary, nested, overflow and footer menus', () => {
    const nav = getSolutionNav('security', (nav) => ({ ...nav, overflowItems: [nav.primaryItems[0]] }), (id) => `/prototype/${id}`);
    expect(nav.primaryItems[0].href).toBe('/prototype/inbox');
    expect(nav.overflowItems?.[0].href).toBe('/prototype/inbox');
    expect(nav.footerItems[0].sections?.[0].items[0].href).toBe('/prototype/get_started');
  });
});
it('keeps the project sidebar within Kibana sizing limits', () => {
  expect(getDefaultSidebarWidth(1440)).toBe(432);
  expect(clampSidebarWidth(100, 1440)).toBe(320);
  expect(clampSidebarWidth(900, 1440)).toBe(720);
  expect(clampSidebarWidth(900, 500)).toBe(320);
});
