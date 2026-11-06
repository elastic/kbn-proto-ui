/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

// Modified by Elastic, November 2026: simplified service-independent tabs replica.
import { useLayoutEffect, useRef, useState } from 'react';
import { EuiButtonIcon, EuiContextMenuItem, EuiContextMenuPanel, EuiPopover, useEuiTheme, useGeneratedHtmlId } from '@elastic/eui';
import { ReplicaTab } from './ReplicaTab';
import type { KibanaTabsProps, TabItem } from './types';

export function KibanaTabs({
  items, selectedItemId, createItem, onChanged, renderContent, wrapTabsBar,
  hideTabsBar = false, tabContentIdOverride, appendRight, customNewTabButton,
  unsavedItemIds, disableCloseButton = false, disableInlineLabelEditing = false,
  disableTabsBarMenu = false, 'data-test-subj': testSubject,
}: KibanaTabsProps) {
  const { euiTheme: theme } = useEuiTheme();
  const generatedId = useGeneratedHtmlId({ prefix: 'unifiedTabs' });
  const contentId = tabContentIdOverride ?? generatedId;
  const selectedItem = items.find(item => item.id === selectedItemId) ?? items[0] ?? null;
  const [menuOpen, setMenuOpen] = useState(false);
  const focusId = useRef<string | null>(null);
  const barRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (focusId.current !== null && selectedItem?.id === focusId.current) {
      barRef.current?.querySelector<HTMLElement>(`[role="tab"][aria-selected="true"]`)?.focus();
      focusId.current = null;
    }
  }, [items, selectedItem]);
  const select = (item: TabItem) => {
    focusId.current = item.id;
    if (selectedItem?.id !== item.id) onChanged({ items, selectedItem: item });
  };
  const add = () => {
    const item = createItem();
    focusId.current = item.id;
    onChanged({ items: [...items, item], selectedItem: item });
  };
  const close = (item: TabItem) => {
    if (disableCloseButton || items.length < 2) return;
    const index = items.findIndex(tab => tab.id === item.id);
    const nextItems = items.filter(tab => tab.id !== item.id);
    const nextSelected = selectedItem?.id === item.id ? nextItems[Math.min(index, nextItems.length - 1)] : selectedItem;
    focusId.current = nextSelected?.id ?? null;
    onChanged({ items: nextItems, selectedItem: nextSelected });
  };
  const bar = <div ref={barRef} css={{ display: 'flex', alignItems: 'center', width: '100%', minWidth: 0, gap: theme.size.xs, background: theme.colors.backgroundBasePlain }}>
    <div css={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0, gap: theme.size.xs }}>
      <div role="tablist" aria-label="Tabs" aria-orientation="horizontal" css={{
        display: 'flex', alignItems: 'flex-end', minWidth: 0, overflowX: 'auto', scrollbarWidth: 'none',
        paddingInline: theme.size.xs, paddingBottom: theme.size.s, marginBottom: `-${theme.size.s}`,
      }}>
        {items.map((item, index) => <ReplicaTab key={item.id} item={item} selected={selectedItem?.id === item.id}
          contentId={contentId} unsaved={unsavedItemIds?.includes(item.id)}
          hideSeparator={selectedItem?.id === item.id || selectedItem?.id === items[index + 1]?.id || index === items.length - 1}
          canClose={!disableCloseButton && items.length > 1} canRename={!disableInlineLabelEditing}
          onSelect={() => select(item)} onClose={() => close(item)}
          onRename={label => {
            const updated = { ...item, label };
            focusId.current = updated.id;
            onChanged({ items: items.map(tab => tab.id === item.id ? updated : tab), selectedItem: updated });
          }}
          onNavigate={key => {
            const next = key === 'Home' ? 0 : key === 'End' ? items.length - 1 : (index + (key === 'ArrowRight' ? 1 : -1) + items.length) % items.length;
            select(items[next]);
          }} />)}
      </div>
      <span css={{ flexShrink: 0 }}>
        {customNewTabButton ?? <EuiButtonIcon iconType="plus" aria-label="New tab" title="New tab" size="xs" color="text" onClick={add} />}
      </span>
    </div>
    {!disableTabsBarMenu && <EuiPopover isOpen={menuOpen} closePopover={() => setMenuOpen(false)} panelPaddingSize="none" hasArrow={false} anchorPosition="downRight"
      button={<EuiButtonIcon iconType="chevronSingleDown" aria-label="Tabs menu" title="Tabs menu" size="xs" color="text" onClick={() => setMenuOpen(!menuOpen)} />}>
      <EuiContextMenuPanel items={items.map(item => <EuiContextMenuItem key={item.id} icon={selectedItem?.id === item.id ? 'check' : 'empty'}
        onClick={() => { setMenuOpen(false); select(item); }}>{item.label}</EuiContextMenuItem>)} />
    </EuiPopover>}
    {appendRight && <><span aria-hidden css={{ width: theme.border.width.thin, height: 28, background: theme.colors.borderBasePlain, flexShrink: 0 }} />
      <div css={{ flexShrink: 0, marginRight: theme.size.s }}>{appendRight}</div></>}
  </div>;
  const barNode = hideTabsBar ? null : bar;
  const renderedBar = wrapTabsBar ? wrapTabsBar(barNode) : barNode;
  return <div data-test-subj={testSubject} css={renderContent ? { display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0, minWidth: 0 } : undefined}>
    {renderedBar != null && <div css={{ flexShrink: 0, borderBottom: theme.border.thin }}>{renderedBar}</div>}
    {renderContent && selectedItem && <div role="tabpanel" id={contentId} aria-labelledby={`tab-${selectedItem.id}`}
      data-test-subj="unifiedTabs_selectedTabContent" css={{ display: 'flex', flexDirection: 'column', flex: '1 1 0', minHeight: 0, minWidth: 0 }}>
      {renderContent(selectedItem)}
    </div>}
  </div>;
}
