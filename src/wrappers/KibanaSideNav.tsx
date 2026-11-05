import { useMemo, useRef, useState } from 'react';
import { SideNavigation } from '@kbn/ui-side-navigation';
import { getSolutionNav } from '../solution-menus';
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

export function KibanaSideNav({
  solution = 'observability', activeNavItem, onNavigate, getHref, navItems,
  collapsed, defaultCollapsed = false, onCollapsedChange, onWidthChange,
}: KibanaSideNavProps) {
  const [internalCollapsed, setCollapsed] = useState(defaultCollapsed);
  const nativeClick = useRef(false);
  const items = useMemo(() => getSolutionNav(solution, navItems, getHref), [solution, navItems, getHref]);
  return (
    <div css={{ display: 'flex', height: '100%', minHeight: 0 }} onClickCapture={(event) => {
      // The published callback has no DOM event. Intercept only ordinary link
      // clicks when a host router callback is supplied; modified clicks keep URLs.
      const anchor = event.target instanceof Element ? event.target.closest('a[href]') : null;
      nativeClick.current = event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || anchor?.getAttribute('target') === '_blank';
      if (onNavigate && anchor && !nativeClick.current) {
        event.preventDefault();
      }
    }}>
      <SideNavigation
        items={items}
        activeItemId={activeNavItem}
        isCollapsed={collapsed ?? internalCollapsed}
        onToggleCollapsed={(next) => {
          if (collapsed === undefined) setCollapsed(next);
          onCollapsedChange?.(next);
        }}
        onItemClick={onNavigate ? (item) => { if (!nativeClick.current && !('isExternal' in item && item.isExternal)) onNavigate(item.id, item); } : undefined}
        setWidth={onWidthChange ?? ignoreWidth}
      />
    </div>
  );
}

const ignoreWidth = () => {};
