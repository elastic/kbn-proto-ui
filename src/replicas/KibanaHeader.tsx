/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

// Modified by Elastic, November 2026: project-header slots around standalone controls.
import type { ReactNode } from 'react';
import {
  EuiAvatar, EuiBreadcrumbs, EuiButton, EuiButtonEmpty, EuiButtonIcon,
  EuiFieldSearch, useEuiTheme,
} from '@elastic/eui';
import type { EuiBreadcrumb } from '@elastic/eui';
import { AiButton } from '../kibana-copies/ai-components/ai_button/ai_button';
import type { Solution } from '../solution-menus';

export type KibanaBreadcrumb = EuiBreadcrumb;
export interface KibanaHeaderProps {
  solution?: Solution;
  breadcrumbs?: KibanaBreadcrumb[];
  spaceName?: string;
  onSpaceClick?: () => void;
  userName?: string;
  onUserClick?: () => void;
  onHelpClick?: () => void;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  onSearchSubmit?: (value: string) => void;
  isAgentOpen?: boolean;
  onAgentClick?: () => void;
  agentControlsId?: string;
  colorMode?: 'light' | 'dark';
  onToggleColorMode?: () => void;
  trailing?: ReactNode;
  switcher?: ReactNode;
  projectPicker?: ReactNode;
  subscriptionBadge?: ReactNode;
  /** Host prototype tools after the avatar; this slot is not part of Kibana. */
  afterUserMenu?: ReactNode;
}

const logos: Record<Solution, string> = {
  observability: 'logoObservability', security: 'logoSecurity',
  search: 'logoEnterpriseSearch', classic: 'logoKibana',
};

/** Temporary port of vibe-kibana's header; host owns all actions and theme. */
export function KibanaHeader({
  solution = 'observability', breadcrumbs = [], spaceName = 'Default', userName = 'Elastic User',
  onSpaceClick, onUserClick, onHelpClick, searchValue, onSearchChange, onSearchSubmit,
  isAgentOpen = false, onAgentClick, agentControlsId, colorMode = 'light', onToggleColorMode, trailing,
  switcher, projectPicker, subscriptionBadge, afterUserMenu,
}: KibanaHeaderProps) {
  const { euiTheme } = useEuiTheme();
  const resolvedSwitcher = switcher === undefined ? (
    <EuiButtonEmpty size="s" color="text" iconType={logos[solution]} isDisabled={!onSpaceClick} onClick={onSpaceClick}>
      {spaceName}
    </EuiButtonEmpty>
  ) : switcher;
  const separator = <div aria-hidden="true" data-test-subj="kibanaHeaderSeparator" css={{
    width: euiTheme.border.width.thin, height: euiTheme.size.l, flexShrink: 0, background: euiTheme.colors.borderBasePlain,
  }} />;
  return (
    <div data-test-subj="kibanaHeader" css={{ display: 'flex', alignItems: 'center', height: 48, minWidth: 0, paddingRight: euiTheme.size.base }}>
      <div css={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
        {resolvedSwitcher && <>
          {separator}
          <div data-test-subj="kibanaHeaderSwitcher" css={{ display: 'flex', alignItems: 'center', gap: euiTheme.size.xs, marginInline: euiTheme.size.xs }}>
            {resolvedSwitcher}
          </div>
        </>}
      </div>
      {separator}
      {projectPicker && <div data-test-subj="kibanaHeaderProjectPicker" css={{ display: 'flex', alignItems: 'center', flexShrink: 0, marginInlineStart: euiTheme.size.xs }}>
        {projectPicker}
      </div>}
      {subscriptionBadge && <>
        {projectPicker && separator}
        <div data-test-subj="kibanaHeaderSubscriptionBadge" css={{ display: 'flex', alignItems: 'center', flexShrink: 0, marginInline: euiTheme.size.s }}>
          {subscriptionBadge}
        </div>
      </>}
      <div css={{ flex: 1, minWidth: 0, marginInline: euiTheme.size.s }}>
        <EuiBreadcrumbs breadcrumbs={breadcrumbs} truncate />
      </div>
      <div css={{ display: 'flex', alignItems: 'center', flexShrink: 0, gap: euiTheme.size.s }}>
        <form role="search" onSubmit={(event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          onSearchSubmit?.(String(data.get('contentSearch') ?? ''));
        }} css={{ width: 'clamp(120px, 18vw, 220px)', '& .euiFormControlLayout': { backgroundColor: 'transparent' } }}>
          <EuiFieldSearch name="contentSearch" aria-label="Find content" placeholder="Find content..."
            compressed isClearable={false} value={searchValue}
            onChange={(event) => onSearchChange?.(event.target.value)} disabled={!onSearchChange && !onSearchSubmit}
            append={<span css={{ fontSize: 12, color: euiTheme.colors.textSubdued, paddingInline: 4 }}>⌘/</span>}
          />
        </form>
        <EuiButton iconType="question" color="text" size="s" minWidth={false} aria-label="Help" onClick={onHelpClick} isDisabled={!onHelpClick} />
        {onAgentClick && <AiButton size="s" color="text" iconType="productAgent"
          variant={isAgentOpen ? 'accent' : 'outlined'} onClick={onAgentClick}
          aria-label="AI Agent" aria-expanded={isAgentOpen} aria-controls={agentControlsId} isSelected={isAgentOpen}>
          AI Agent
        </AiButton>}
        {onToggleColorMode && <EuiButtonIcon iconType={colorMode === 'light' ? 'moon' : 'sun'}
          aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`} onClick={onToggleColorMode} />}
        {trailing}
        <button type="button" aria-label={`User menu: ${userName}`} disabled={!onUserClick} onClick={onUserClick}
          css={{ border: 0, background: 'transparent', padding: 0, borderRadius: '50%', cursor: onUserClick ? 'pointer' : 'default', flexShrink: 0 }}>
          <EuiAvatar name={userName} size="s" color={euiTheme.colors.vis.euiColorVis1} />
        </button>
        {afterUserMenu}
      </div>
    </div>
  );
}
