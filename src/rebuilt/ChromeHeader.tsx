/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

// Modified by Elastic, November 2026: project-header slots around standalone controls;
// the logo slot takes the side nav width as a prop instead of `useSideNavWidth`.
import type { ReactNode } from 'react';
import {
  EuiAvatar, EuiBreadcrumbs, EuiButtonEmpty, EuiButtonIcon, EuiIcon,
  EuiFieldSearch, useEuiTheme,
} from '@elastic/eui';
import type { EuiBreadcrumb } from '@elastic/eui';
import { AiButton } from '../wrappers/ai-components';
import type { Solution } from '../solution-menus';
import { HeaderActionButton } from './chrome-header/HeaderActionButton';
import { ChromeHeaderLogo } from './chrome-header/HeaderLogo';
import type { ChromeHeaderLogoConfig } from './chrome-header/HeaderLogo';
import { SearchButton } from './chrome-header/SearchButton';

export type ChromeHeaderAction = {
  id: string;
  label: string;
  iconType: import('@elastic/eui').IconType;
  variant?: 'bordered' | 'plain';
} & ({ sidebarAppId: string; onClick?: never } | { sidebarAppId?: never; onClick?: () => void });

export type KibanaBreadcrumb = EuiBreadcrumb;
// Side nav rail widths, from `src/platform/kbn-ui/side-navigation/src/hooks/use_layout_width.ts`.
// The published package does not export them.
const COLLAPSED_NAV_WIDTH = 48;
const EXPANDED_NAV_WIDTH = 100;

export interface ChromeHeaderProps {
  solution?: Solution;
  /** The Elastic logo at the start of the header. Pass `href` and/or `onClick` to make it a link home, as in Kibana. */
  logo?: ChromeHeaderLogoConfig;
  /**
   * The width `KibanaSideNav` reports through `onWidthChange`. As in Kibana, the
   * logo slot only follows the rail: 48px collapsed, 100px expanded, never the
   * secondary panel. Omit it when there is no side nav; the slot stays 48px.
   */
  sideNavWidth?: number;
  breadcrumbs?: KibanaBreadcrumb[];
  spaceName?: string;
  onSpaceClick?: () => void;
  userName?: string;
  onUserClick?: () => void;
  onHelpClick?: () => void;
  onSearchClick?: () => void;
  /** @deprecated Use onSearchClick. Opts into the legacy input for one release. */
  searchValue?: string;
  /** @deprecated Use onSearchClick. Opts into the legacy input for one release. */
  onSearchChange?: (value: string) => void;
  /** @deprecated Use onSearchClick. Opts into the legacy input for one release. */
  onSearchSubmit?: (value: string) => void;
  isAgentOpen?: boolean;
  onAgentClick?: () => void;
  agentControlsId?: string;
  colorMode?: 'light' | 'dark';
  onToggleColorMode?: () => void;
  actions?: ChromeHeaderAction[];
  activeSidebarApp?: string | null;
  onActiveSidebarAppChange?: (id: string | null) => void;
  sidebarControlsId?: string;
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
export function ChromeHeader({
  solution = 'observability', logo, sideNavWidth = COLLAPSED_NAV_WIDTH, breadcrumbs = [], spaceName = 'Default', userName = 'Elastic User',
  onSpaceClick, onUserClick, onHelpClick, onSearchClick, searchValue, onSearchChange, onSearchSubmit,
  isAgentOpen = false, onAgentClick, agentControlsId, colorMode = 'light', onToggleColorMode, trailing,
  switcher, projectPicker, subscriptionBadge, afterUserMenu,
  actions, activeSidebarApp, onActiveSidebarAppChange, sidebarControlsId,
}: ChromeHeaderProps) {
  const { euiTheme } = useEuiTheme();
  const resolvedSwitcher = switcher === undefined ? (
    <EuiButtonEmpty size="s" color="text" iconType={logos[solution]} onClick={onSpaceClick}>
      {spaceName}
    </EuiButtonEmpty>
  ) : switcher;
  const separator = <div aria-hidden="true" data-test-subj="kibanaHeaderSeparator" css={{
    width: euiTheme.border.width.thin, height: euiTheme.size.l, flexShrink: 0, background: euiTheme.colors.borderBasePlain,
  }} />;
  return (
    <div data-test-subj="kibanaHeader" css={{ display: 'flex', alignItems: 'center', height: 48, minWidth: 0, paddingRight: euiTheme.size.base }}>
      <div css={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
        <div data-test-subj="kibanaHeaderLogo" css={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 48, flexShrink: 0 }}
          style={{ width: sideNavWidth <= COLLAPSED_NAV_WIDTH ? COLLAPSED_NAV_WIDTH : EXPANDED_NAV_WIDTH }}>
          <ChromeHeaderLogo {...logo} />
        </div>
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
        {!onSearchClick && (searchValue !== undefined || onSearchChange || onSearchSubmit) ? <form role="search" onSubmit={(event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          onSearchSubmit?.(String(data.get('contentSearch') ?? ''));
        }} css={{ width: 'clamp(120px, 18vw, 220px)', '& .euiFormControlLayout': { backgroundColor: 'transparent' } }}>
          <EuiFieldSearch name="contentSearch" aria-label="Find content" placeholder="Find content..."
            compressed isClearable={false} value={searchValue}
            onChange={(event) => onSearchChange?.(event.target.value)}
            append={<span css={{ fontSize: 12, color: euiTheme.colors.textSubdued, paddingInline: 4 }}>⌘/</span>}
          />
        </form> : <SearchButton onClick={onSearchClick} />}
        <HeaderActionButton variant="bordered" aria-label="Help" onClick={onHelpClick}>
          <EuiIcon type="question" color="subdued" aria-hidden />
        </HeaderActionButton>
        {actions?.map(action => {
          const linked = action.sidebarAppId !== undefined;
          const isOpen = linked && activeSidebarApp === action.sidebarAppId;
          return <HeaderActionButton key={action.id} variant={action.variant ?? 'bordered'} aria-label={action.label}
            isSelected={linked ? isOpen : undefined} aria-expanded={linked ? isOpen : undefined}
            aria-controls={isOpen ? sidebarControlsId : undefined}
            onClick={linked ? () => onActiveSidebarAppChange?.(isOpen ? null : action.sidebarAppId!) : action.onClick}>
            <EuiIcon type={action.iconType} color="subdued" aria-hidden />
          </HeaderActionButton>;
        })}
        {onAgentClick && <AiButton size="s" iconType="productAgent"
          variant={isAgentOpen ? 'accent' : 'base'} onClick={onAgentClick}
          aria-label="AI Agent" aria-expanded={isAgentOpen} aria-controls={agentControlsId} isSelected={isAgentOpen}>
          AI Agent
        </AiButton>}
        {onToggleColorMode && <EuiButtonIcon iconType={colorMode === 'light' ? 'moon' : 'sun'}
          aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`} onClick={onToggleColorMode} />}
        {trailing}
        <button type="button" aria-label={`User menu: ${userName}`} onClick={onUserClick}
          css={{ border: 0, background: 'transparent', padding: 0, borderRadius: '50%', cursor: onUserClick ? 'pointer' : 'default', flexShrink: 0 }}>
          <EuiAvatar name={userName} size="s" color={euiTheme.colors.vis.euiColorVis1} />
        </button>
        {afterUserMenu}
      </div>
    </div>
  );
}

/** @deprecated Use ChromeHeader; retained for one release. */
export const KibanaHeader = ChromeHeader;
/** @deprecated Use ChromeHeaderProps; retained for one release. */
export type KibanaHeaderProps = ChromeHeaderProps;
