/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

// Modified by Elastic, November 2026: simplified service-independent tabs replica.
import { useEffect, useRef, useState } from 'react';
import { EuiButtonIcon, EuiContextMenuItem, EuiContextMenuPanel, EuiFieldText, EuiPopover, EuiText, useEuiTheme } from '@elastic/eui';
import { TabCorner } from './TabCorner';
import type { TabItem } from './types';

interface ReplicaTabProps {
  item: TabItem;
  selected: boolean;
  contentId: string;
  unsaved?: boolean;
  hideSeparator: boolean;
  canClose: boolean;
  canRename: boolean;
  onSelect: () => void;
  onClose: () => void;
  onRename: (label: string) => void;
  onNavigate: (key: string) => void;
}

export function ReplicaTab({ item, selected, contentId, unsaved, hideSeparator, canClose, canRename, onSelect, onClose, onRename, onNavigate }: ReplicaTabProps) {
  const { euiTheme: theme } = useEuiTheme();
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(item.label);
  const [menuOpen, setMenuOpen] = useState(false);
  const tabRef = useRef<HTMLDivElement>(null);
  const finished = useRef(false);
  const editTimer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(editTimer.current), []);
  useEffect(() => { if (!selected) { setEditing(false); setMenuOpen(false); } }, [selected]);
  const edit = (delay = 0) => {
    onSelect(); setMenuOpen(false);
    clearTimeout(editTimer.current);
    // Let controlled selection and the popover's focus restoration finish first.
    editTimer.current = setTimeout(() => {
      setValue(item.label); finished.current = false; setEditing(true);
    }, delay);
  };
  const finish = (save: boolean) => {
    if (finished.current) return;
    const label = value.trim();
    if (save && (!label || label.length > 120)) return;
    finished.current = true;
    if (save && label !== item.label) onRename(label);
    setEditing(false); tabRef.current?.focus();
  };
  return <div data-test-subj={`unifiedTabs_tab_${item.id}`} css={{
    position: 'relative', display: 'inline-block', flexShrink: 0, borderRadius: theme.border.radius.small,
    margin: `${theme.size.xs} ${theme.size.xs} -${theme.border.width.thin}`, paddingBottom: theme.size.xs,
    background: selected ? theme.colors.backgroundBasePlain : 'transparent',
    borderTop: `${theme.border.width.thick} solid ${selected ? theme.colors.primary : 'transparent'}`,
    borderLeft: `${theme.border.width.thin} solid ${selected ? theme.colors.borderBaseSubdued : 'transparent'}`,
    borderRight: `${theme.border.width.thin} solid ${selected ? theme.colors.borderBaseSubdued : 'transparent'}`,
    borderBottomLeftRadius: selected ? 0 : undefined, borderBottomRightRadius: selected ? 0 : undefined,
    '&:hover .kbnProtoTabBody': { background: selected ? undefined : theme.colors.backgroundLightPrimary, borderRadius: theme.border.radius.small },
    '&:hover .kbnProtoTabActions, &:focus-within .kbnProtoTabActions': { opacity: 1 },
    '&:hover .kbnProtoTabLabel, &:focus-within .kbnProtoTabLabel': {
      width: `calc(100% - ${theme.size.l} * 2 - ${theme.size.xs})`,
      maskImage: `linear-gradient(to right, black calc(100% - ${theme.size.s}), transparent 100%)`,
    },
    '&::before': { content: '""', position: 'absolute', right: `-${theme.size.xs}`, top: `calc(50% - ${theme.size.xxs})`,
      transform: 'translateY(-50%)', width: theme.border.width.thin, height: theme.size.base, background: theme.colors.borderBasePlain,
      opacity: hideSeparator ? 0 : 1, pointerEvents: 'none' },
  }}>
    <div className="kbnProtoTabBody" css={{ position: 'relative', minWidth: 112, maxWidth: 280 }}>
      <div ref={tabRef} role="tab" id={`tab-${item.id}`} aria-controls={contentId} aria-selected={selected} aria-label={item.label}
        tabIndex={selected ? 0 : -1} data-test-subj={`unifiedTabs_selectTabBtn_${item.id}`}
        onClick={editing ? undefined : onSelect} onDoubleClick={canRename && !editing ? () => edit() : undefined}
        onKeyDown={event => {
          if (editing) return;
          if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) { event.preventDefault(); onNavigate(event.key); }
          if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onSelect(); }
          if (event.key === 'F10' && event.shiftKey && canRename) { event.preventDefault(); setMenuOpen(true); }
        }} css={{ display: 'inline-flex', alignItems: 'center', width: '100%', height: theme.size.xxl, paddingInline: theme.size.xs, cursor: 'pointer',
          '&:focus-visible': { outline: `2px solid ${theme.colors.primary}`, outlineOffset: -2 } }}>
        {editing ? <EuiFieldText compressed autoFocus aria-label="Rename tab" value={value} maxLength={120}
          isInvalid={!value.trim() || value.length > 120} onChange={event => setValue(event.target.value)}
          onKeyDown={event => { if (event.key === 'Enter') { event.preventDefault(); finish(true); } if (event.key === 'Escape') { event.stopPropagation(); finish(false); } }}
          onBlur={() => finish(true)} css={{ height: 28, marginTop: theme.size.xxs }} /> :
          <div className="kbnProtoTabLabel" css={{ paddingInline: theme.size.xs, minWidth: 0 }}>
            <EuiText size="s" className="eui-textTruncate" css={{ width: 96, maxWidth: '100%', color: selected ? theme.colors.text : theme.colors.subduedText,
              fontWeight: selected ? theme.font.weight.semiBold : theme.font.weight.regular }}>{item.label}</EuiText>
            {unsaved && <span title="Unsaved changes" aria-label="Unsaved changes" css={{ position: 'absolute', right: theme.size.s, top: theme.size.m }}>•</span>}
          </div>}
      </div>
      {!editing && <div className="kbnProtoTabActions" css={{ position: 'absolute', top: theme.size.s, right: theme.size.xs, display: 'flex', opacity: menuOpen ? 1 : 0 }}>
        {item.customMenuButton ?? (canRename && <EuiPopover isOpen={menuOpen} closePopover={() => setMenuOpen(false)} panelPaddingSize="none" hasArrow={false} anchorPosition="downLeft"
          button={<EuiButtonIcon iconType="boxesVertical" aria-label="Actions" title="Actions" tabIndex={selected ? 0 : -1} color="text"
            data-test-subj={`unifiedTabs_tabMenuBtn_${item.id}`} onClick={() => setMenuOpen(!menuOpen)} />}>
          <EuiContextMenuPanel items={[<EuiContextMenuItem key="rename" onClick={() => edit(100)}>Rename</EuiContextMenuItem>]} />
        </EuiPopover>)}
        {canClose && <EuiButtonIcon iconType="cross" aria-label="Close tab" title="Close tab" tabIndex={selected ? 0 : -1} color="text"
          data-test-subj={`unifiedTabs_closeTabBtn_${item.id}`} onClick={onClose} />}
      </div>}
    </div>
    {selected && <><TabCorner side="left" /><TabCorner side="right" /></>}
  </div>;
}
