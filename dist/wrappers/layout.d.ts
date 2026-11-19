/** Mirrors the published CSS-variable names without exposing private package types. */
type LayoutComponent = 'banner' | 'header' | 'footer' | 'navigation' | 'sidebar' | 'application';
type LayoutProperty = 'top' | 'bottom' | 'left' | 'right' | 'height' | 'width' | 'marginBottom' | 'marginRight' | 'marginTop';
export type LayoutVarName = `${LayoutComponent}.${LayoutProperty}` | `application.${'topBar' | 'bottomBar' | 'content'}.${LayoutProperty}`;
export declare const layoutVar: (name: LayoutVarName, fallback?: string) => string;
export declare const layoutVarName: (name: LayoutVarName) => string;
export {};
