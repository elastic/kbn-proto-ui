/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

// Modified by Elastic, November 2026: callback and native key listener replace Kibana services.
import { useEffect } from 'react';
import { EuiBadge, EuiIcon, useEuiBreakpoint, useEuiFontSize, useEuiTheme } from '@elastic/eui';
import { headerButtonBaseStyles, headerButtonBorderedStyles, useHeaderButtonStyleVars } from './HeaderActionButton';

export function SearchButton({ onClick }: { onClick?: () => void }) {
  const { euiTheme } = useEuiTheme();
  const compactQuery = useEuiBreakpoint(['xs', 's']);
  const fontSize = useEuiFontSize('s').fontSize;
  const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent);
  useEffect(() => {
    const keydown = (event: KeyboardEvent) => {
      if (event.key === '/' && (isMac ? event.metaKey : event.ctrlKey) && !event.altKey && !event.repeat && !event.defaultPrevented) {
        event.preventDefault(); onClick?.();
      }
    };
    window.addEventListener('keydown', keydown);
    return () => window.removeEventListener('keydown', keydown);
  }, [isMac, onClick]);
  const collapsible = { [compactQuery]: { display: 'none' } };
  return <button type="button" aria-label="Search" data-test-subj="chromeHeaderSearchButton" onClick={onClick}
    css={[headerButtonBaseStyles, headerButtonBorderedStyles, {
      padding: `0 ${euiTheme.size.s}`, gap: euiTheme.size.s, whiteSpace: 'nowrap',
      [compactQuery]: { width: 32, padding: 0, justifyContent: 'center', gap: 0 },
    }]} style={useHeaderButtonStyleVars()}>
    <span css={{ display: 'inline-flex', alignItems: 'center', gap: euiTheme.size.s, minWidth: 0 }}>
      <EuiIcon type="magnify" size="m" color={euiTheme.colors.textParagraph} aria-hidden />
      <span css={[{ color: euiTheme.colors.textDisabled, fontSize, userSelect: 'none' }, collapsible]}>Find content...</span>
    </span>
    <EuiBadge css={[{ color: euiTheme.colors.textSubdued, backgroundColor: euiTheme.colors.backgroundBaseSubdued, flexShrink: 0 }, collapsible]}>
      {isMac ? '⌘ /' : 'Ctrl /'}
    </EuiBadge>
  </button>;
}
