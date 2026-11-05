import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { EuiPanel, EuiResizableButton, euiShadow, useEuiTheme } from '@elastic/eui';
import { layoutVar, getHighContrastBorder, type CSSVarName } from '@kbn/ui-chrome-layout';

// Published types lag the layout's runtime variables.
const sidebarRadius = layoutVar('sidebar.borderRadius' as CSSVarName, '0px');
import { clampSidebarWidth } from './sidebarWidth';
export { clampSidebarWidth, getDefaultSidebarWidth } from './sidebarWidth';

export interface KibanaSidebarProps {
  width: number;
  onWidthChange: (width: number) => void;
  children: ReactNode;
  id?: string;
  'aria-label'?: string;
}

/** Temporary port of Kibana's sidebar panel and resize handle. */
export function KibanaSidebar({ width, onWidthChange, children, id, 'aria-label': label = 'AI Agent' }: KibanaSidebarProps) {
  const theme = useEuiTheme();
  const dragCleanup = useRef<() => void>();
  useEffect(() => () => dragCleanup.current?.(), []);
  return (
    <aside id={id} aria-label={label} css={{ display: 'flex', height: '100%', width: '100%', minHeight: 0 }}>
      <EuiResizableButton indicator="border" isHorizontal
        aria-label="Resize side panel. Use left and right arrow keys to adjust width."
        aria-valuemin={320} aria-valuemax={typeof window === 'undefined' ? 640 : Math.max(320, Math.floor(window.innerWidth / 2))} aria-valuenow={width}
        onPointerDown={(event) => {
          if (event.button !== 0) return;
          dragCleanup.current?.();
          const startX = event.clientX;
          const move = (moveEvent: PointerEvent) => onWidthChange(clampSidebarWidth(width + startX - moveEvent.clientX, window.innerWidth));
          const end = () => {
            window.removeEventListener('pointermove', move);
            window.removeEventListener('pointerup', end);
            window.removeEventListener('pointercancel', end);
            dragCleanup.current = undefined;
          };
          window.addEventListener('pointermove', move);
          window.addEventListener('pointerup', end);
          window.addEventListener('pointercancel', end);
          dragCleanup.current = end;
        }}
        onKeyDown={(event) => {
          const delta = event.key === 'ArrowLeft' ? 10 : event.key === 'ArrowRight' ? -10 : 0;
          if (delta) { event.preventDefault(); onWidthChange(clampSidebarWidth(width + delta, window.innerWidth)); }
        }}
        css={{ position: 'relative', insetInlineStart: `-${theme.euiTheme.border.width.thin}`, blockSize: `calc(100% - ${sidebarRadius} * 2)`, flexShrink: 0, alignSelf: 'center', touchAction: 'none' }} />
      <EuiPanel paddingSize="none" hasBorder={false} hasShadow={false} borderRadius="none"
        css={[{ display: 'flex', flexDirection: 'column', flexGrow: 1, minWidth: 0, minHeight: 0, overflow: 'hidden', borderRadius: sidebarRadius, outline: getHighContrastBorder(theme) }, euiShadow(theme, 'xs', { border: 'none' })]}>
        {children}
      </EuiPanel>
    </aside>
  );
}
