import type { NavItem, NavLink, NavSection } from './types';
export declare const link: (id: string, label: string) => NavLink;
export declare const item: (id: string, label: string, iconType: string) => NavItem;
export declare const section: (id: string, label: string | undefined, pairs: [string, string][]) => NavSection;
export declare const panel: (id: string, label: string, iconType: string, sections: NavSection[]) => NavItem;
