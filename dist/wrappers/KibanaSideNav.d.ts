import type { NavItemsOverride, NavItem, NavLink, Solution } from '../solution-menus';
export interface KibanaSideNavProps {
    solution?: Solution;
    activeNavItem?: string;
    onNavigate?: (id: string, item: NavItem | NavLink) => void;
    /** Supply URLs for your router. No router or URL mutation is built in. */
    getHref?: (id: string) => string;
    navItems?: NavItemsOverride;
    collapsed?: boolean;
    defaultCollapsed?: boolean;
    onCollapsedChange?: (collapsed: boolean) => void;
    onWidthChange?: (width: number) => void;
}
export declare function KibanaSideNav({ solution, activeNavItem, onNavigate, getHref, navItems, collapsed, defaultCollapsed, onCollapsedChange, onWidthChange, }: KibanaSideNavProps): import("@emotion/react/jsx-runtime").JSX.Element;
