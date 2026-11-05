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
}: KibanaHeaderProps) {
  const { euiTheme } = useEuiTheme();
  return (
    <div css={{ display: 'flex', alignItems: 'center', gap: euiTheme.size.s, height: 48, minWidth: 0, paddingRight: 16 }}>
      <EuiButtonEmpty size="s" color="text" iconType={logos[solution]} isDisabled={!onSpaceClick} onClick={onSpaceClick}>
        {spaceName}
      </EuiButtonEmpty>
      <div css={{ flex: 1, minWidth: 0 }}>
        <EuiBreadcrumbs breadcrumbs={breadcrumbs} truncate />
      </div>
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
    </div>
  );
}
