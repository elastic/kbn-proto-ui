import { css, type SerializedStyles } from '@emotion/react';
import { layoutVarName, type LayoutVarName } from './layout';

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
export function reservedInlineEndVariables({ reserved, navigationWidth, sidebarWidth, applicationMarginRight }: ReservedInlineEndInput): Record<LayoutVarName, string> {
  const r = `${reserved}px`;
  const fullWidth = `calc(100vw - ${reserved}px)`;
  const applicationRight = `${applicationMarginRight + sidebarWidth + reserved}px`;
  const applicationWidth = `calc(100vw - ${navigationWidth + applicationMarginRight + sidebarWidth + reserved}px)`;
  return {
    'banner.right': r,
    'banner.width': fullWidth,
    'header.right': r,
    'header.width': fullWidth,
    'footer.right': r,
    'footer.width': fullWidth,
    'navigation.right': `calc(100vw - ${navigationWidth + reserved}px)`,
    'sidebar.right': r,
    'sidebar.left': `calc(100vw - ${sidebarWidth + reserved}px)`,
    'application.right': applicationRight,
    'application.width': applicationWidth,
    'application.topBar.right': applicationRight,
    'application.topBar.width': applicationWidth,
    'application.bottomBar.right': applicationRight,
    'application.bottomBar.width': applicationWidth,
    'application.content.right': applicationRight,
    'application.content.width': applicationWidth,
  } as Record<LayoutVarName, string>;
}

/** Global styles that keep `reserved` pixels free at the window's right edge. */
export function reservedInlineEndStyles(input: ReservedInlineEndInput): SerializedStyles {
  const variables = Object.entries(reservedInlineEndVariables(input))
    .map(([name, value]) => `${layoutVarName(name as LayoutVarName)}: ${value};`)
    .join('\n');
  return css`
    /* Doubled :root outranks the layout's own :root block regardless of insertion order. */
    :root:root {
      ${variables}
    }
    /* Kibana's grid: the element whose children are the layout's header, navigation and sidebar. */
    div:has(> .kbnChromeLayoutHeader) {
      inline-size: calc(100vw - ${input.reserved}px);
      min-inline-size: 0;
    }
  `;
}
