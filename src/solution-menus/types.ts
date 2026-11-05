/** Standalone data types; consumers never need an Artifactory package for types. */
export type Solution = 'observability' | 'security' | 'search' | 'classic';
export type NavBadge = 'beta' | 'techPreview' | 'new';
export interface NavLink {
  id: string;
  label: string;
  href: string;
  badgeType?: NavBadge;
  isExternal?: boolean;
  'data-test-subj'?: string;
}
export interface NavSection {
  id: string;
  label?: string;
  items: NavLink[];
}
export interface NavItem extends NavLink {
  iconType: string;
  secondaryMenuTitle?: string;
  sections?: NavSection[];
  popoverSections?: NavSection[];
}
export interface SolutionNav {
  primaryItems: NavItem[];
  footerItems: NavItem[];
  overflowItems?: NavItem[];
}
export type NavItemsOverride = Partial<SolutionNav> | ((defaults: SolutionNav) => SolutionNav);
