import { observabilityNav } from './observability';
import { securityNav } from './security';
import { searchNav } from './search';
import { classicNav } from './classic';
import type { NavItemsOverride, Solution, SolutionNav } from './types';
export * from './types';
export { observabilityNav, securityNav, searchNav, classicNav };
export const solutionNavTrees: Record<Solution, SolutionNav> = {
  observability: observabilityNav, security: securityNav, search: searchNav, classic: classicNav,
};

/** A fresh copy prevents host overrides from changing another shell's defaults. */
export function getSolutionNav(solution: Solution, overrides?: NavItemsOverride, getHref?: (id: string) => string): SolutionNav {
  const defaults: SolutionNav = structuredClone(solutionNavTrees[solution]);
  const nav = typeof overrides === 'function' ? overrides(defaults) : { ...defaults, ...overrides };
  if (!getHref) return nav;
  const mapItems = (items: SolutionNav['primaryItems']) => items.map((item) => ({
    ...item, href: getHref(item.id),
    ...Object.fromEntries((['sections', 'popoverSections'] as const).filter((key) => item[key]).map((key) => [key,
      item[key]!.map((section) => ({ ...section, items: section.items.map((link) => ({ ...link, href: getHref(link.id) })) })),
    ])),
  }));
  return { primaryItems: mapItems(nav.primaryItems), footerItems: mapItems(nav.footerItems),
    ...(nav.overflowItems ? { overflowItems: mapItems(nav.overflowItems) } : {}) };
}
