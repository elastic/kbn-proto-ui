import type { ReactNode } from 'react';
import type { KibanaBreadcrumb, KibanaHeaderProps } from '../replicas/KibanaHeader';
import type { KibanaSideNavProps } from './KibanaSideNav';
import type { AgentSidebarProps } from '../replicas/agent-builder/AgentSidebar';
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
export declare function KibanaChrome({ solution, breadcrumbs, agent, header, pageHeader, children, onWidthChange, ...nav }: KibanaChromeProps): import("@emotion/react/jsx-runtime").JSX.Element;
