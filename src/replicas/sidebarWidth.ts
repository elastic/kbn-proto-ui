export const clampSidebarWidth = (width: number, viewportWidth: number) =>
  Math.max(320, Math.min(Math.max(320, Math.floor(viewportWidth * 0.5)), width));
export const getDefaultSidebarWidth = (viewportWidth = typeof window === 'undefined' ? 1280 : window.innerWidth) =>
  clampSidebarWidth(Math.floor(viewportWidth * 0.3), viewportWidth);

