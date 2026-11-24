import { lazy, Suspense } from 'react';
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

type AppMenuModule = { AppMenuComponent?: ComponentType<KibanaAppMenuProps> };

/**
 * The published package is a CommonJS (webpack) bundle. Node exposes its named exports, but a
 * browser bundle of it only has a default export holding them, so read the component from either.
 */
export const pickAppMenuComponent = (module: AppMenuModule & { default?: AppMenuModule }) => {
  const Component = module.AppMenuComponent ?? module.default?.AppMenuComponent;
  if (!Component) throw new Error('@kbn/ui-app-menu did not export AppMenuComponent');
  return Component;
};

// Loaded on first render, as Kibana's own app header does (src/platform/kbn-ui/app-header/src/app_menu.tsx):
// the published package bundles lodash and chrome-layout hooks, so it stays out of the initial chunk.
const AppMenuComponent = lazy(async () => ({ default: pickAppMenuComponent(await import('@kbn/ui-app-menu')) }));

/**
 * Kibana's app menu (Save, actions and the More menu), from the published `@kbn/ui-app-menu`.
 * `ChromeAppHeader` renders it from its `menu` prop; use it directly only for a menu outside the header.
 * Like Kibana, it loads on first render and shows nothing until then.
 */
export function KibanaAppMenu(props: KibanaAppMenuProps) {
  return (
    <Suspense>
      <AppMenuComponent {...props} />
    </Suspense>
  );
}
