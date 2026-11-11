/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

// Modified by Elastic, November 2026: standalone count props replace the CPS context.
import { EuiButton, EuiButtonEmpty, EuiText, EuiToolTip } from '@elastic/eui';

export interface KibanaProjectPickerProps {
  selected: number;
  total: number;
  onClick?: () => void;
  tooltip?: string;
}

const compactNumber = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 0 });

/** Cross-project scope button only; the host owns project selection and the popover. */
export function KibanaProjectPicker({ selected, total, onClick, tooltip = 'Cross-project search scope selector' }: KibanaProjectPickerProps) {
  const shouldWarn = selected === 0;
  const label = !shouldWarn && selected === total ? 'All' : `${compactNumber.format(selected).toLowerCase()}/${compactNumber.format(total).toLowerCase()}`;
  const buttonProps = {
    size: 's' as const, onClick, 'aria-label': `${tooltip}: ${label}`,
    'data-test-subj': 'cps-project-picker-button', css: { minWidth: 'unset' },
  };
  const content = <EuiText size="s" css={{ '& > *': { fontVariantNumeric: 'tabular-nums' } }}>
    <span data-test-subj="cps-project-picker-button-label">{label}</span>
  </EuiText>;
  return <EuiToolTip content={tooltip}>
    {shouldWarn
      ? <EuiButton {...buttonProps} color="warning" iconType="warning">{content}</EuiButton>
      : <EuiButtonEmpty {...buttonProps} color="text" iconType="crossProjectSearch">{content}</EuiButtonEmpty>}
  </EuiToolTip>;
}
