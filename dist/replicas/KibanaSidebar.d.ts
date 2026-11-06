import type { ReactNode } from 'react';
export { clampSidebarWidth, getDefaultSidebarWidth } from './sidebarWidth';
export interface KibanaSidebarProps {
    width: number;
    onWidthChange: (width: number) => void;
    children: ReactNode;
    id?: string;
    'aria-label'?: string;
}
/** Temporary port of Kibana's sidebar panel and resize handle. */
export declare function KibanaSidebar({ width, onWidthChange, children, id, 'aria-label': label }: KibanaSidebarProps): import("@emotion/react/jsx-runtime").JSX.Element;
