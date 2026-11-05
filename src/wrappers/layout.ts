import { layoutVar as upstreamLayoutVar, layoutVarName as upstreamLayoutVarName } from '@kbn/ui-chrome-layout';
/** Mirrors the published CSS-variable names without exposing private package types. */
type LayoutComponent = 'banner' | 'header' | 'footer' | 'navigation' | 'sidebar' | 'application';
type LayoutProperty = 'top' | 'bottom' | 'left' | 'right' | 'height' | 'width' | 'marginBottom' | 'marginRight' | 'marginTop';
export type LayoutVarName = `${LayoutComponent}.${LayoutProperty}` | `application.${'topBar' | 'bottomBar' | 'content'}.${LayoutProperty}`;
export const layoutVar = (name: LayoutVarName, fallback?: string): string => upstreamLayoutVar(name, fallback);
export const layoutVarName = (name: LayoutVarName): string => upstreamLayoutVarName(name);
