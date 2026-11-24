import { observabilityNav } from './observability';
import { securityNav } from './security';
import { searchNav } from './search';
import { classicNav } from './classic';
import type { NavItemsOverride, Solution, SolutionNav } from './types';
export * from './types';
export { observabilityNav, securityNav, searchNav, classicNav };
export declare const solutionNavTrees: Record<Solution, SolutionNav>;
/** A fresh copy prevents host overrides from changing another shell's defaults. */
export declare function getSolutionNav(solution: Solution, overrides?: NavItemsOverride, getHref?: (id: string) => string): SolutionNav;
