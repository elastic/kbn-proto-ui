import type { ComponentType } from 'react';
import type { AppMenuBreakpointSource, AppMenuConfig, AppMenuStaticItem } from './app-menu.types';
export interface KibanaAppMenuProps {
    /** Kibana's declarative menu: items, primary action, switch and undo/redo. */
    config?: AppMenuConfig;
    /** Items that always appear at the end of the overflow ("More") menu. */
    staticItems?: AppMenuStaticItem[];
    visible?: boolean;
    /** Read the responsive breakpoint from the application area (default) or the viewport. */
    breakpointSource?: AppMenuBreakpointSource;
}
type AppMenuModule = {
    AppMenuComponent?: ComponentType<KibanaAppMenuProps>;
};
/**
 * The published package is a CommonJS (webpack) bundle. Node exposes its named exports, but a
 * browser bundle of it only has a default export holding them, so read the component from either.
 */
export declare const pickAppMenuComponent: (module: AppMenuModule & {
    default?: AppMenuModule;
}) => ComponentType<KibanaAppMenuProps>;
/**
 * Kibana's app menu (Save, actions and the More menu), from the published `@kbn/ui-app-menu`.
 * `ChromeAppHeader` renders it from its `menu` prop; use it directly only for a menu outside the header.
 * Like Kibana, it loads on first render and shows nothing until then.
 */
export declare function KibanaAppMenu(props: KibanaAppMenuProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
