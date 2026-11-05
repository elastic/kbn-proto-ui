import type { ReactNode } from 'react';
import type { EuiBreadcrumb } from '@elastic/eui';
import type { Solution } from '../solution-menus';
export type KibanaBreadcrumb = EuiBreadcrumb;
export interface KibanaHeaderProps {
    solution?: Solution;
    breadcrumbs?: KibanaBreadcrumb[];
    spaceName?: string;
    onSpaceClick?: () => void;
    userName?: string;
    onUserClick?: () => void;
    onHelpClick?: () => void;
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    onSearchSubmit?: (value: string) => void;
    isAgentOpen?: boolean;
    onAgentClick?: () => void;
    agentControlsId?: string;
    colorMode?: 'light' | 'dark';
    onToggleColorMode?: () => void;
    trailing?: ReactNode;
}
/** Temporary port of vibe-kibana's header; host owns all actions and theme. */
export declare function KibanaHeader({ solution, breadcrumbs, spaceName, userName, onSpaceClick, onUserClick, onHelpClick, searchValue, onSearchChange, onSearchSubmit, isAgentOpen, onAgentClick, agentControlsId, colorMode, onToggleColorMode, trailing, }: KibanaHeaderProps): import("@emotion/react/jsx-runtime").JSX.Element;
