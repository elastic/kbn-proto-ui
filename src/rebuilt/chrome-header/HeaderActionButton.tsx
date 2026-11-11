/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

// Modified by Elastic, November 2026: standalone actions and controlled sidebar selection.
import { forwardRef } from 'react';
import type { AriaAttributes, CSSProperties, ReactNode } from 'react';
import { css } from '@emotion/react';
import { useEuiTheme } from '@elastic/eui';

export const headerButtonBaseStyles = css({
  display: 'inline-flex', alignItems: 'center', boxSizing: 'border-box', height: 32,
  background: 'transparent', cursor: 'pointer',
  '&:hover': { background: 'var(--header-btn-hover)' },
  '&:focus-visible': { outline: '2px solid var(--header-btn-focus)', outlineOffset: -2 },
});
export const headerButtonBorderedStyles = css({ border: '1px solid var(--header-btn-border)' });
export function useHeaderButtonStyleVars(): CSSProperties {
  const { euiTheme } = useEuiTheme();
  return {
    '--header-btn-border': euiTheme.colors.borderBasePlain,
    '--header-btn-hover': euiTheme.colors.backgroundBaseInteractiveHover,
    '--header-btn-focus': euiTheme.colors.primary,
    borderRadius: euiTheme.border.radius.control,
  } as CSSProperties;
}
interface HeaderActionButtonProps extends Pick<AriaAttributes, 'aria-expanded' | 'aria-haspopup' | 'aria-controls'> {
  variant: 'bordered' | 'plain';
  children: ReactNode;
  onClick?: () => void;
  'aria-label': string;
  'data-test-subj'?: string;
  isSelected?: boolean;
}
export const HeaderActionButton = forwardRef<HTMLButtonElement, HeaderActionButtonProps>(
  ({ variant, children, onClick, isSelected, ...aria }, ref) => <button {...aria} ref={ref} type="button"
    aria-pressed={isSelected} data-selected={isSelected} onClick={onClick}
    css={[headerButtonBaseStyles, { width: 32, padding: 0, justifyContent: 'center' },
      variant === 'bordered' ? headerButtonBorderedStyles : { border: 'none' },
      isSelected ? { background: 'var(--header-btn-hover)' } : undefined]}
    style={useHeaderButtonStyleVars()}>{children}</button>
);
HeaderActionButton.displayName = 'HeaderActionButton';
