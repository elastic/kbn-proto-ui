import { useRef, useState } from 'react';
import type { MouseEvent, ReactElement } from 'react';
import {
  EuiBadge, EuiButton, EuiButtonIcon, EuiContextMenu, EuiHeaderLink, EuiHideFor,
  EuiIcon, EuiIconTip, EuiPopover, EuiSplitButton, EuiSwitch, EuiText, EuiToolTip, useEuiTheme,
} from '@elastic/eui';
import type { EuiContextMenuPanelDescriptor, EuiContextMenuPanelItemDescriptor } from '@elastic/eui';
import type { AppMenuConfig, AppMenuItemType, AppMenuPopoverItem, AppMenuPrimaryActionItem } from './menuTypes';

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

function MenuButton({ item, primary = false }: { item: AppMenuItemType | AppMenuPrimaryActionItem; primary?: boolean }) {
  const split = 'splitButtonProps' in item ? item.splitButtonProps : undefined;
  const label = titleCase(plainText(item.label));
  const isDisabled = disabled(item.disableButton);
  const tooltip = { content: plainText(resolveValue(item.tooltipContent)), title: plainText(resolveValue(item.tooltipTitle)) };
  const handleClick = (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (isDisabled || item.isLoading || split?.isMainButtonDisabled) return;
    if (item.href && modified(event)) return;
    if (item.href && item.run) event.preventDefault();
    const triggerElement = event.currentTarget;
    item.run?.({ triggerElement, returnFocus: () => triggerElement.focus() });
  };
  const tracking = { 'data-ebt-element': 'appMenu', 'data-ebt-action': item.ebt?.action, 'data-ebt-detail': item.ebt?.detail };
  const standard = (toggle?: () => void, open = false) => {
    const props = {
      id: item.htmlId, 'data-test-subj': item.testId, ...tracking,
      iconType: item.iconType, href: item.href, target: item.href ? item.target : undefined,
      isDisabled, isLoading: item.isLoading, isSelected: open || item.isSelected,
      'aria-haspopup': item.items?.length ? 'menu' as const : undefined,
      onClick: toggle ?? handleClick,
    };
    return primary ? <EuiButton {...props} color="text" size="s">{label}</EuiButton>
      : <EuiHeaderLink {...props} color="text" size="s" iconSide="left">{label}</EuiHeaderLink>;
  };
  let control: ReactElement;
  if (split) {
    const secondary = (toggle?: () => void, open = false, mainToggle?: () => void) => <EuiSplitButton size="s" color="text" fill={false}
      isDisabled={isDisabled} isLoading={item.isLoading}>
      <EuiSplitButton.ActionPrimary id={item.htmlId} data-test-subj={item.testId} {...tracking}
        href={item.href} target={item.target} onClick={mainToggle ?? handleClick} isSelected={open || item.isSelected}
        isDisabled={split.isMainButtonDisabled} isLoading={split.isMainButtonLoading}
        tooltipProps={tooltip.content || tooltip.title ? tooltip : undefined}>
        {(item.iconType || split.iconType) && !split.isMainButtonLoading && <span css={{ display: 'inline-flex', position: 'relative', marginInlineEnd: 4 }}>
          <EuiIcon type={item.iconType || split.iconType!} />
          {split.showNotificationIndicator && <span css={{ position: 'absolute', top: -4, right: -4 }}><EuiIconTip type="dot" color="primary" content={plainText(split.notificationIndicatorTooltipContent)} /></span>}
        </span>}{label}
      </EuiSplitButton.ActionPrimary>
      <EuiSplitButton.ActionSecondary iconType={split.secondaryButtonIconType ?? 'chevronSingleDown'}
        aria-label={plainText(split.secondaryButtonAriaLabel)} isDisabled={split.isSecondaryButtonDisabled}
        data-test-subj={item.testId ? `${item.testId}-secondary-button` : undefined}
        tooltipProps={split.secondaryButtonTooltipContent ? { content: plainText(split.secondaryButtonTooltipContent) } : undefined}
        onClick={toggle ?? ((event: MouseEvent<HTMLButtonElement>) => {
          const triggerElement = event.currentTarget;
          split.run?.({ triggerElement, returnFocus: () => triggerElement.focus() });
        })} />
    </EuiSplitButton>;
    const withSecondary = (mainToggle?: () => void) => split.items?.length
      ? <ActionPopover items={split.items} width={item.popoverWidth} testId={item.popoverTestId} button={(toggle, open) => secondary(toggle, open, mainToggle)} />
      : secondary(undefined, false, mainToggle);
    control = item.items?.length ? <ActionPopover items={item.items} width={item.popoverWidth} testId={item.popoverTestId} button={toggle => withSecondary(toggle)} /> : withSecondary();
  } else if (item.items?.length) {
    control = <ActionPopover items={item.items} width={item.popoverWidth} testId={item.popoverTestId} button={standard} />;
  } else {
    control = standard();
    if (tooltip.content || tooltip.title) control = <EuiToolTip {...tooltip}>{control}</EuiToolTip>;
  }
  return <EuiHideFor sizes={item.hidden ?? 'none'}>{control}</EuiHideFor>;
}

export function PageHeaderMenu({ menu }: { menu?: AppMenuConfig }) {
  if (!menu) return null;
  const sorted = [...menu.items ?? []].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  const limit = sorted.some(item => item.overflow) || sorted.length > 3 ? 2 : 3;
  const visible = sorted.filter(item => !item.overflow).slice(0, limit);
  const overflow = sorted.filter(item => !visible.includes(item));
  const toggle = menu.switch;
  const switchButton = toggle && <EuiSwitch id={toggle.id} label={plainText(toggle.label)} checked={toggle.checked}
    onChange={event => toggle.onChange(event.target.checked)} disabled={toggle.disabled} compressed
    labelProps={toggle.labelProps} data-test-subj={toggle['data-test-subj']} css={{ marginInlineEnd: 8 }} />;
  return <div css={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
    {toggle && (toggle.tooltipContent || toggle.tooltipTitle ? <EuiToolTip content={plainText(resolveValue(toggle.tooltipContent))} title={plainText(resolveValue(toggle.tooltipTitle))}>{switchButton!}</EuiToolTip> : switchButton)}
    <div css={{ display: 'flex', alignItems: 'center' }}>
      {visible.map(item => <MenuButton key={item.id} item={item} />)}
      {overflow.length > 0 && <ActionPopover items={overflow} button={(toggleOpen, open) => <EuiButtonIcon iconType="boxesVertical" color="text"
        size="s" aria-label="More" aria-haspopup="menu" aria-expanded={open} onClick={toggleOpen} />} />}
    </div>
    {menu.primaryActionItem && <MenuButton item={menu.primaryActionItem} primary />}
  </div>;
}
