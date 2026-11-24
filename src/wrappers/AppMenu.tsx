import { AppMenuComponent } from '@kbn/ui-app-menu';
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

/**
 * Kibana's app menu (Save, actions and the More menu), from the published `@kbn/ui-app-menu`.
 * `ChromeAppHeader` renders it from its `menu` prop; use it directly only for a menu outside the header.
 */
export function KibanaAppMenu(props: KibanaAppMenuProps) {
  return <AppMenuComponent {...props} />;
}
