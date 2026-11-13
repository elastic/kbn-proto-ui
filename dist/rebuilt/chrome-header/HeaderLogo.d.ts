import type { MouseEvent } from 'react';
export interface ChromeHeaderLogoConfig {
    /** Where the logo links. Kibana links to the project home. */
    href?: string;
    /**
     * Called on ordinary clicks, for host routers. With `href`, modified clicks
     * (new tab, new window) keep native link behavior.
     */
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    /** Accessible name. Defaults to Kibana's "Elastic home". */
    label?: string;
}
/**
 * The Elastic logo at the start of the global header. Kibana renders it as a
 * link home (`project/header_logo.tsx`); without `href` or `onClick` it stays a
 * plain mark, so prototypes never get a link that goes nowhere.
 */
export declare function ChromeHeaderLogo({ href, onClick, label }: ChromeHeaderLogoConfig): import("@emotion/react/jsx-runtime").JSX.Element;
