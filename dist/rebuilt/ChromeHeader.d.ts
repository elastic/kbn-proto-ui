import type { ReactNode } from 'react';
import type { EuiBreadcrumb } from '@elastic/eui';
import type { Solution } from '../solution-menus';
import type { ChromeHeaderLogoConfig } from './chrome-header/HeaderLogo';
export type ChromeHeaderAction = {
    id: string;
    label: string;
    iconType: import('@elastic/eui').IconType;
    variant?: 'bordered' | 'plain';
} & ({
    sidebarAppId: string;
    onClick?: never;
} | {
    sidebarAppId?: never;
    onClick?: () => void;
});
export type KibanaBreadcrumb = EuiBreadcrumb;
export interface ChromeHeaderProps {
    solution?: Solution;
    /** The Elastic logo at the start of the header. Pass `href` and/or `onClick` to make it a link home, as in Kibana. */
    logo?: ChromeHeaderLogoConfig;
    /**
     * The width `KibanaSideNav` reports through `onWidthChange`. As in Kibana, the
     * logo slot only follows the rail: 48px collapsed, 100px expanded, never the
     * secondary panel. Omit it when there is no side nav; the slot stays 48px.
     */
    sideNavWidth?: number;
    breadcrumbs?: KibanaBreadcrumb[];
    spaceName?: string;
    onSpaceClick?: () => void;
    userName?: string;
    onUserClick?: () => void;
    onHelpClick?: () => void;
    onSearchClick?: () => void;
    /** @deprecated Use onSearchClick. Opts into the legacy input for one release. */
    searchValue?: string;
    /** @deprecated Use onSearchClick. Opts into the legacy input for one release. */
    onSearchChange?: (value: string) => void;
    /** @deprecated Use onSearchClick. Opts into the legacy input for one release. */
    onSearchSubmit?: (value: string) => void;
    isAgentOpen?: boolean;
    onAgentClick?: () => void;
    agentControlsId?: string;
    colorMode?: 'light' | 'dark';
    onToggleColorMode?: () => void;
    actions?: ChromeHeaderAction[];
    activeSidebarApp?: string | null;
    onActiveSidebarAppChange?: (id: string | null) => void;
    sidebarControlsId?: string;
    trailing?: ReactNode;
    switcher?: ReactNode;
    projectPicker?: ReactNode;
    subscriptionBadge?: ReactNode;
    /** Host prototype tools after the avatar; this slot is not part of Kibana. */
    afterUserMenu?: ReactNode;
}
/** Temporary port of vibe-kibana's header; host owns all actions and theme. */
export declare function ChromeHeader({ solution, logo, sideNavWidth, breadcrumbs, spaceName, userName, onSpaceClick, onUserClick, onHelpClick, onSearchClick, searchValue, onSearchChange, onSearchSubmit, isAgentOpen, onAgentClick, agentControlsId, colorMode, onToggleColorMode, trailing, switcher, projectPicker, subscriptionBadge, afterUserMenu, actions, activeSidebarApp, onActiveSidebarAppChange, sidebarControlsId, }: ChromeHeaderProps): import("@emotion/react/jsx-runtime").JSX.Element;
/** @deprecated Use ChromeHeader; retained for one release. */
export declare const KibanaHeader: typeof ChromeHeader;
/** @deprecated Use ChromeHeaderProps; retained for one release. */
export type KibanaHeaderProps = ChromeHeaderProps;
