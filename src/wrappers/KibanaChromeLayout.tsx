import { useCallback, useEffect, useId, useState } from 'react';
import type { ReactNode } from 'react';
import { ChromeLayout, ChromeLayoutConfigProvider, GridLayoutGlobalStyles, layoutVar } from '@kbn/ui-chrome-layout';
import { ChromeHeader } from '../rebuilt/ChromeHeader';
import { ChromeHeaderLogo } from '../rebuilt/chrome-header/HeaderLogo';
import type { ChromeHeaderLogoConfig } from '../rebuilt/chrome-header/HeaderLogo';
import type { KibanaBreadcrumb, ChromeHeaderProps } from '../rebuilt/ChromeHeader';
import { KibanaSideNav } from './KibanaSideNav';
import type { KibanaSideNavProps } from './KibanaSideNav';
import { Sidebar, clampSidebarWidth, getDefaultSidebarWidth } from '../rebuilt/Sidebar';
import { AgentSidebar } from '../rebuilt/agent-builder/AgentSidebar';
import type { AgentSidebarProps } from '../rebuilt/agent-builder/AgentSidebar';
import { ChromeAppHeader } from '../rebuilt/app-header/ChromeAppHeader';
import type { ChromeAppHeaderProps } from '../rebuilt/app-header/types';

export interface AgentConfig extends Omit<AgentSidebarProps, 'onClose'> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
export interface SidebarAppConfig {
  id: string;
  label?: string;
  render: () => ReactNode;
}
export interface KibanaChromeLayoutProps extends KibanaSideNavProps {
  breadcrumbs?: KibanaBreadcrumb[];
  agent?: AgentConfig;
  sidebarApps?: SidebarAppConfig[];
  activeSidebarApp?: string | null;
  onActiveSidebarAppChange?: (id: string | null) => void;
  /** The Elastic logo at the start of the header. Pass `href` and/or `onClick` to make it a link home, as in Kibana. */
  logo?: ChromeHeaderLogoConfig;
  header?: Omit<ChromeHeaderProps, 'solution' | 'breadcrumbs' | 'isAgentOpen' | 'onAgentClick' | 'agentControlsId' | 'activeSidebarApp' | 'onActiveSidebarAppChange' | 'sidebarControlsId'>;
  appHeader?: ChromeAppHeaderProps;
  /** @deprecated Use appHeader; retained for one release. */
  pageHeader?: ChromeAppHeaderProps;
  children?: ReactNode;
}

/** The published Kibana project layout, with state supplied by the host. */
export function KibanaChromeLayout({ solution = 'observability', breadcrumbs, agent, sidebarApps = [], activeSidebarApp, onActiveSidebarAppChange, logo, header, appHeader: suppliedAppHeader, pageHeader, children, onWidthChange, ...nav }: KibanaChromeLayoutProps) {
  const appHeader = suppliedAppHeader ?? pageHeader;
  const [navigationWidth, setNavigationWidth] = useState(0);
  const [appHeaderNode, setAppHeaderNode] = useState<HTMLDivElement | null>(null);
  const [appHeaderHeight, setAppHeaderHeight] = useState(0);
  const [sidebarWidth, setSidebarWidth] = useState(getDefaultSidebarWidth);
  const sidebarId = useId();
  useEffect(() => {
    if (!appHeaderNode) { setAppHeaderHeight(0); return; }
    const measure = () => setAppHeaderHeight(appHeaderNode.getBoundingClientRect().height);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(appHeaderNode);
    return () => observer.disconnect();
  }, [appHeaderNode]);
  const updateNavigationWidth = useCallback((width: number) => {
    setNavigationWidth(width);
    onWidthChange?.(width);
  }, [onWidthChange]);
  useEffect(() => {
    const resize = () => setSidebarWidth((width) => clampSidebarWidth(width, window.innerWidth));
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);
  const agentProps = agent ? (({ open, onOpenChange, ...props }) => props)(agent) : undefined;
  const apps: SidebarAppConfig[] = agent ? [
    ...sidebarApps.filter(app => app.id !== 'agent'),
    { id: 'agent', label: 'AI Agent', render: () => <AgentSidebar {...agentProps} onClose={() => changeSidebarApp(null)} /> },
  ] : sidebarApps;
  const requestedApp = activeSidebarApp !== undefined ? activeSidebarApp : agent?.open ? 'agent' : null;
  const openApp = apps.find(app => app.id === requestedApp);
  const activeId = openApp?.id ?? null;
  function changeSidebarApp(id: string | null) {
    if (id !== null && !apps.some(app => app.id === id)) return;
    if (id === activeId) return;
    onActiveSidebarAppChange?.(id);
    if (agent && agent.open !== (id === 'agent')) agent.onOpenChange(id === 'agent');
  }
  return <>
    <GridLayoutGlobalStyles appearance="framed" />
    <ChromeLayoutConfigProvider value={{ appearance: 'framed', headerHeight: 48, navigationWidth,
      sidebarWidth: openApp ? sidebarWidth : 0, applicationTopBarHeight: appHeaderHeight,
      applicationMarginRight: 8, applicationMarginBottom: 8 }}>
      <ChromeLayout
        applicationTopBar={appHeader ? <div ref={setAppHeaderNode}><ChromeAppHeader {...appHeader} sticky={false} /></div> : undefined}
        header={<div css={{ display: 'flex', alignItems: 'center', height: 48 }}>
          <div css={{ width: navigationWidth, display: 'flex', justifyContent: 'center', flexShrink: 0 }}><ChromeHeaderLogo {...logo} /></div>
          <div css={{ flex: 1, minWidth: 0 }}><ChromeHeader {...header} solution={solution} breadcrumbs={breadcrumbs}
            activeSidebarApp={activeId} onActiveSidebarAppChange={changeSidebarApp} sidebarControlsId={sidebarId}
            isAgentOpen={activeId === 'agent'} onAgentClick={apps.some(app => app.id === 'agent') ? () => changeSidebarApp(activeId === 'agent' ? null : 'agent') : undefined}
            agentControlsId={activeId === 'agent' ? sidebarId : undefined} /></div>
        </div>}
        navigation={<KibanaSideNav {...nav} solution={solution} onWidthChange={updateNavigationWidth} />}
        sidebar={openApp ? <Sidebar key={openApp.id} id={sidebarId} aria-label={openApp.label ?? openApp.id} width={sidebarWidth} onWidthChange={setSidebarWidth}>
          {openApp.render()}
        </Sidebar> : null}>
        <div css={{ height: layoutVar('application.content.height', '100%'), display: 'flex', flexDirection: 'column', minHeight: 0, overflow: 'hidden' }}>{children}</div>
      </ChromeLayout>
    </ChromeLayoutConfigProvider>
  </>;
}

/** @deprecated Use KibanaChromeLayout; retained for one release. */
export const KibanaChrome = KibanaChromeLayout;
/** @deprecated Use KibanaChromeLayoutProps; retained for one release. */
export type KibanaChromeProps = KibanaChromeLayoutProps;
