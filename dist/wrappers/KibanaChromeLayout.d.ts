import type { ReactNode } from 'react';
import type { KibanaBreadcrumb, ChromeHeaderProps } from '../replicas/ChromeHeader';
import type { KibanaSideNavProps } from './KibanaSideNav';
import type { AgentSidebarProps } from '../replicas/agent-builder/AgentSidebar';
import type { ChromeAppHeaderProps } from '../replicas/app-header/types';
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
    header?: Omit<ChromeHeaderProps, 'solution' | 'breadcrumbs' | 'isAgentOpen' | 'onAgentClick' | 'agentControlsId' | 'activeSidebarApp' | 'onActiveSidebarAppChange' | 'sidebarControlsId'>;
    appHeader?: ChromeAppHeaderProps;
    /** @deprecated Use appHeader; retained for one release. */
    pageHeader?: ChromeAppHeaderProps;
    children?: ReactNode;
}
/** The published Kibana project layout, with state supplied by the host. */
export declare function KibanaChromeLayout({ solution, breadcrumbs, agent, sidebarApps, activeSidebarApp, onActiveSidebarAppChange, header, appHeader: suppliedAppHeader, pageHeader, children, onWidthChange, ...nav }: KibanaChromeLayoutProps): import("@emotion/react/jsx-runtime").JSX.Element;
/** @deprecated Use KibanaChromeLayout; retained for one release. */
export declare const KibanaChrome: typeof KibanaChromeLayout;
/** @deprecated Use KibanaChromeLayoutProps; retained for one release. */
export type KibanaChromeProps = KibanaChromeLayoutProps;
