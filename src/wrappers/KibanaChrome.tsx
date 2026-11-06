import { useCallback, useEffect, useId, useState } from 'react';
import type { ReactNode } from 'react';
import { EuiIcon } from '@elastic/eui';
import { ChromeLayout, ChromeLayoutConfigProvider, GridLayoutGlobalStyles, layoutVar } from '@kbn/ui-chrome-layout';
import { KibanaHeader } from '../replicas/KibanaHeader';
import type { KibanaBreadcrumb, KibanaHeaderProps } from '../replicas/KibanaHeader';
import { KibanaSideNav } from './KibanaSideNav';
import type { KibanaSideNavProps } from './KibanaSideNav';
import { KibanaSidebar, clampSidebarWidth, getDefaultSidebarWidth } from '../replicas/KibanaSidebar';
import { AgentSidebar } from '../replicas/agent-builder/AgentSidebar';
import type { AgentSidebarProps } from '../replicas/agent-builder/AgentSidebar';
import { KibanaPageHeader } from '../replicas/page-header/KibanaPageHeader';
import type { KibanaPageHeaderProps } from '../replicas/page-header/types';

export interface AgentConfig extends Omit<AgentSidebarProps, 'onClose'> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
export interface KibanaChromeProps extends KibanaSideNavProps {
  breadcrumbs?: KibanaBreadcrumb[];
  agent?: AgentConfig;
  header?: Omit<KibanaHeaderProps, 'solution' | 'breadcrumbs' | 'isAgentOpen' | 'onAgentClick' | 'agentControlsId'>;
  pageHeader?: KibanaPageHeaderProps;
  children?: ReactNode;
}

/** The published Kibana project layout, with state supplied by the host. */
export function KibanaChrome({ solution = 'observability', breadcrumbs, agent, header, pageHeader, children, onWidthChange, ...nav }: KibanaChromeProps) {
  const [navigationWidth, setNavigationWidth] = useState(0);
  const [pageHeaderNode, setPageHeaderNode] = useState<HTMLDivElement | null>(null);
  const [pageHeaderHeight, setPageHeaderHeight] = useState(0);
  const [sidebarWidth, setSidebarWidth] = useState(getDefaultSidebarWidth);
  const agentId = useId();
  useEffect(() => {
    if (!pageHeaderNode) { setPageHeaderHeight(0); return; }
    const measure = () => setPageHeaderHeight(pageHeaderNode.getBoundingClientRect().height);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(pageHeaderNode);
    return () => observer.disconnect();
  }, [pageHeaderNode]);
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
  return <>
    <GridLayoutGlobalStyles appearance="framed" />
    <ChromeLayoutConfigProvider value={{ appearance: 'framed', headerHeight: 48, navigationWidth,
      sidebarWidth: agent?.open ? sidebarWidth : 0, applicationTopBarHeight: pageHeaderHeight,
      applicationMarginRight: 8, applicationMarginBottom: 8 }}>
      <ChromeLayout
        applicationTopBar={pageHeader ? <div ref={setPageHeaderNode}><KibanaPageHeader {...pageHeader} sticky={false} /></div> : undefined}
        header={<div css={{ display: 'flex', alignItems: 'center', height: 48 }}>
          <div css={{ width: navigationWidth, display: 'flex', justifyContent: 'center', flexShrink: 0 }}><EuiIcon type="logoElastic" size="l" /></div>
          <div css={{ flex: 1, minWidth: 0 }}><KibanaHeader {...header} solution={solution} breadcrumbs={breadcrumbs}
            isAgentOpen={agent?.open} onAgentClick={agent ? () => agent.onOpenChange(!agent.open) : undefined} agentControlsId={agent?.open ? agentId : undefined} /></div>
        </div>}
        navigation={<KibanaSideNav {...nav} solution={solution} onWidthChange={updateNavigationWidth} />}
        sidebar={agent?.open ? <KibanaSidebar id={agentId} width={sidebarWidth} onWidthChange={setSidebarWidth}>
          <AgentSidebar {...agentProps} onClose={() => agent.onOpenChange(false)} />
        </KibanaSidebar> : null}>
        <div css={{ height: layoutVar('application.content.height', '100%'), display: 'flex', flexDirection: 'column', minHeight: 0, overflow: 'hidden' }}>{children}</div>
      </ChromeLayout>
    </ChromeLayoutConfigProvider>
  </>;
}
