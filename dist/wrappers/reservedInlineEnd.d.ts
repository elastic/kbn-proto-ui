import { type SerializedStyles } from '@emotion/react';
import { type LayoutVarName } from './layout';
/**
 * Not in Kibana. Kibana's ChromeLayout always fills the window: its grid is `100vw` wide and it
 * publishes its geometry as CSS variables measured from the window's right edge. To leave room
 * at that edge for prototype tools outside the chrome, the grid gets the remaining width and
 * every right-edge variable is republished with the reserved width added, using the same inputs
 * the layout receives. Everything Kibana positions with these variables (application, sidebar,
 * bars, overlay masks) then stays inside the chrome. The layout package itself is unchanged.
 */
export interface ReservedInlineEndInput {
    /** Pixels kept free at the window's right edge. */
    readonly reserved: number;
    readonly navigationWidth: number;
    readonly sidebarWidth: number;
    readonly applicationMarginRight: number;
}
/** The right-edge layout variables and their values with `reserved` pixels kept free. */
export declare function reservedInlineEndVariables({ reserved, navigationWidth, sidebarWidth, applicationMarginRight }: ReservedInlineEndInput): Record<LayoutVarName, string>;
/** Global styles that keep `reserved` pixels free at the window's right edge. */
export declare function reservedInlineEndStyles(input: ReservedInlineEndInput): SerializedStyles;
