import { useState } from 'react';
import {
  EuiBadge, EuiButtonIcon, EuiIcon, EuiIconTip, EuiNotificationBadge, EuiPopover,
  EuiTab, EuiTabs, EuiToolTip,
} from '@elastic/eui';
import type { AppHeaderBadge, AppHeaderBadgeItem, AppHeaderTab } from './types';
import type { AppMenuPopoverItem } from './menuTypes';
import { ActionPopover, plainText } from './PageHeaderMenu';

const badgeItems = (items: AppHeaderBadgeItem[]): AppMenuPopoverItem[] => items.map((item, index) => ({
  id: String(index), label: plainText(item.name), iconType: item.icon, testId: item['data-test-subj'],
  disableButton: item.disabled, tooltipContent: plainText(item.toolTipContent), popoverWidth: item.popoverWidth,
  ...(item.items ? { items: badgeItems(item.items) } : { run: item.onClick ?? (() => {}) }),
}));

function Badge({ badge }: { badge: AppHeaderBadge }) {
  const label = plainText(badge.label);
  const render = (onClick?: () => void) => {
    const props = { color: badge.color ?? 'hollow', 'data-test-subj': badge['data-test-subj'],
      css: { maxWidth: 200 }, iconType: badge.items ? 'chevronSingleDown' : undefined, iconSide: 'right' as const };
    const control = onClick ? <EuiBadge {...props} onClick={onClick} onClickAriaLabel={plainText(badge.onClickAriaLabel) || `Click ${label} badge`}>{label}</EuiBadge>
      : <EuiBadge {...props}>{label}</EuiBadge>;
    return badge.tooltip ? <EuiToolTip content={plainText(badge.tooltip)}>{control}</EuiToolTip> : control;
  };
  if (badge.items) return <ActionPopover items={badgeItems(badge.items)} width={badge.popoverWidth} button={toggle => render(toggle)} />;
  return render(badge.onClick);
}

export function PageHeaderBadges({ badges = [] }: { badges?: AppHeaderBadge[] }) {
  const [open, setOpen] = useState(false);
  const visible = badges.length > 3 ? badges.slice(0, 2) : badges;
  const overflow = badges.length > 3 ? badges.slice(2) : [];
  return <>{visible.map((badge, index) => <Badge key={index} badge={badge} />)}
    {overflow.length > 0 && <EuiPopover isOpen={open} closePopover={() => setOpen(false)} panelPaddingSize="s"
      button={<EuiBadge color="hollow" onClick={() => setOpen(value => !value)} onClickAriaLabel={`Show ${overflow.length} more badges`}>+{overflow.length}</EuiBadge>}>
      <div css={{ display: 'flex', gap: 4, flexWrap: 'wrap', maxWidth: 240 }}>{overflow.map((badge, index) => <Badge key={index} badge={{ ...badge, onClick: badge.onClick ? () => { badge.onClick?.(); setOpen(false); } : undefined }} />)}</div>
    </EuiPopover>}
  </>;
}

export function PageHeaderTabs({ tabs }: { tabs: AppHeaderTab[] }) {
  return <EuiTabs size="m" bottomBorder={false}>
    {tabs.map(tab => {
      const badge = typeof tab.badge === 'number' ? <EuiNotificationBadge color="subdued" size="m">{tab.badge}</EuiNotificationBadge>
        : tab.badge ? (tab.badge.tooltip ? <EuiIconTip type={tab.badge.iconType} color={tab.badge.color} content={plainText(tab.badge.tooltip)} />
          : <EuiIcon type={tab.badge.iconType} color={tab.badge.color} aria-hidden />) : undefined;
      const label = tab.toolTipContent ? <EuiToolTip content={plainText(tab.toolTipContent)}><span>{plainText(tab.label)}</span></EuiToolTip> : plainText(tab.label);
      return <span key={tab.id} css={{ display: 'inline-flex', alignItems: 'center' }}>
        <EuiTab id={tab.id} isSelected={tab.isSelected} onClick={tab.onClick} href={tab.href} disabled={tab.disabled}
          data-test-subj={tab['data-test-subj']} append={badge}>{label}</EuiTab>
        {tab.isSelected && tab.actions && <ActionPopover items={tab.actions.items.map(item => ({
          id: item.id, label: item.label, iconType: item.iconType, disableButton: item.disabled,
          run: item.onClick, testId: item['data-test-subj'],
        }))} button={(toggle, open) => <EuiButtonIcon iconType="ellipsis" size="xs" aria-label={plainText(tab.actions!.ariaLabel)}
          data-test-subj={tab.actions!['data-test-subj']} onClick={toggle} aria-expanded={open} aria-haspopup="menu" />} />}
      </span>;
    })}
  </EuiTabs>;
}
