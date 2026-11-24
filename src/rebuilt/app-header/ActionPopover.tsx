import { useRef, useState } from 'react';
import type { MouseEvent, ReactElement } from 'react';
import { EuiBadge, EuiContextMenu, EuiPopover, EuiText, useEuiTheme } from '@elastic/eui';
import type { EuiContextMenuPanelDescriptor, EuiContextMenuPanelItemDescriptor } from '@elastic/eui';
import type { AppMenuPopoverItem } from '../../wrappers/app-menu.types';

// Popover used by header badges and tab actions. The app menu itself is Kibana's
// published @kbn/ui-app-menu (src/wrappers/AppMenu.tsx).

export const plainText = (value: unknown) => typeof value === 'string' ? value : '';
export const resolveValue = <T,>(value: T | (() => T)): T => typeof value === 'function' ? (value as () => T)() : value;
const disabled = (value: boolean | (() => boolean) | undefined) => Boolean(resolveValue(value));
const modified = (event: MouseEvent) => event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
const titleCase = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

export function ActionPopover({ items, button, width = 256, testId }: {
  items: AppMenuPopoverItem[];
  button: (toggle: () => void, isOpen: boolean) => ReactElement;
  width?: number;
  testId?: string;
}) {
  const { euiTheme } = useEuiTheme();
  const [open, setOpen] = useState(false);
  const anchor = useRef<HTMLSpanElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const close = () => setOpen(false);
  const panels: EuiContextMenuPanelDescriptor[] = [];
  let nextId = 0;
  const build = (entries: AppMenuPopoverItem[], title?: string, panelWidth = width): number => {
    const id = nextId++;
    const panelItems: EuiContextMenuPanelItemDescriptor[] = [];
    for (const item of entries) {
      if (item.separator === 'above') panelItems.push({ isSeparator: true, key: `${item.id}-above` });
      const childWidth = 'popoverWidth' in item && typeof item.popoverWidth === 'number' ? item.popoverWidth : width;
      const child = item.items?.length ? build(item.items, plainText(item.label), childWidth) : undefined;
      panelItems.push({
        name: <span>{titleCase(plainText(item.label))}{item.labelBadgeText && <> <EuiBadge color="hollow">{plainText(item.labelBadgeText)}</EuiBadge></>}
          {item.description && <EuiText size="xs" color="subdued">{plainText(item.description)}</EuiText>}</span>,
        icon: item.iconType,
        disabled: disabled(item.disableButton) || item.isLoading,
        href: item.href, target: item.target, panel: child,
        'data-test-subj': item.testId,
        toolTipContent: [plainText(resolveValue(item.tooltipTitle)), plainText(resolveValue(item.tooltipContent))].filter(Boolean).join(': '),
        css: { color: item.isDestructive ? euiTheme.colors.textDanger : undefined },
        onClick: (event) => {
          if (child !== undefined || disabled(item.disableButton) || item.isLoading) return;
          if (item.href && modified(event)) return;
          if (item.href && item.run) event.preventDefault();
          const triggerElement = event.currentTarget as HTMLElement;
          const fallback = opener.current ?? anchor.current?.querySelector<HTMLElement>('button, a');
          close();
          item.run?.({ triggerElement, returnFocus: () => (triggerElement.isConnected ? triggerElement : fallback)?.focus() });
        },
      });
      if (item.separator === 'below') panelItems.push({ isSeparator: true, key: `${item.id}-below` });
    }
    panels.push({ id, title, items: panelItems, width: panelWidth });
    return id;
  };
  build(items);
  return <EuiPopover button={<span ref={anchor} css={{ display: 'inline-flex' }} onClickCapture={event => {
    if (event.target instanceof Element) opener.current = event.target.closest<HTMLElement>('button, a');
  }}>{button(() => setOpen(value => !value), open)}</span>}
    isOpen={open} closePopover={close} panelPaddingSize="none" anchorPosition="downRight"
    data-test-subj={testId}>
    <EuiContextMenu initialPanelId={0} panels={panels} />
  </EuiPopover>;
}
