import type { ReactNode } from 'react';
export { clampSidebarWidth, getDefaultSidebarWidth } from './sidebarWidth';
export interface SidebarProps {
    width: number;
    onWidthChange: (width: number) => void;
    children: ReactNode;
    id?: string;
    'aria-label'?: string;
}
/** Temporary port of Kibana's sidebar panel and resize handle. */
export declare function Sidebar({ width, onWidthChange, children, id, 'aria-label': label }: SidebarProps): import("@emotion/react/jsx-runtime").JSX.Element;
/** @deprecated Use Sidebar; retained for one release. */
export declare const KibanaSidebar: typeof Sidebar;
/** @deprecated Use SidebarProps; retained for one release. */
export type KibanaSidebarProps = SidebarProps;
