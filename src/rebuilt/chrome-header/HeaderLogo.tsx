/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

// Modified by Elastic, November 2026: host-supplied home link instead of the
// project home service; no loading indicator or custom branding.
import type { MouseEvent } from 'react';
import { css } from '@emotion/react';
import { EuiIcon } from '@elastic/eui';
import { headerButtonBaseStyles, useHeaderButtonStyleVars } from './HeaderActionButton';

export interface ChromeHeaderLogoConfig {
  /** Where the logo links. Kibana links to the project home. */
  href?: string;
  /**
   * Called on ordinary clicks, for host routers. With `href`, modified clicks
   * (new tab, new window) keep native link behavior.
   */
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  /** Accessible name. Defaults to Kibana's "Elastic home". */
  label?: string;
}

const logoLinkStyles = css({
  width: 32,
  justifyContent: 'center',
  border: 'none',
  padding: 0,
  textDecoration: 'none',
  color: 'inherit',
  svg: { width: 20, height: 20 },
});

const isModifiedClick = (event: MouseEvent<HTMLElement>) =>
  event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;

/**
 * The Elastic logo at the start of the global header. Kibana renders it as a
 * link home (`project/header_logo.tsx`); without `href` or `onClick` it stays a
 * plain mark, so prototypes never get a link that goes nowhere.
 */
export function ChromeHeaderLogo({ href, onClick, label = 'Elastic home' }: ChromeHeaderLogoConfig) {
  const styleVars = useHeaderButtonStyleVars();
  const logo = <EuiIcon type="logoElastic" size="l" aria-hidden />;

  if (href !== undefined) {
    return (
      <a href={href} aria-label={label} data-test-subj="nav-header-logo"
        css={[headerButtonBaseStyles, logoLinkStyles]} style={styleVars}
        onClick={onClick ? (event) => {
          if (isModifiedClick(event)) return;
          event.preventDefault();
          onClick(event);
        } : undefined}>
        {logo}
      </a>
    );
  }
  if (onClick) {
    return (
      <button type="button" aria-label={label} data-test-subj="nav-header-logo"
        css={[headerButtonBaseStyles, logoLinkStyles]} style={styleVars} onClick={onClick}>
        {logo}
      </button>
    );
  }
  return (
    <span data-test-subj="nav-header-logo" role="img" aria-label="Elastic"
      css={{ display: 'inline-flex', svg: { width: 20, height: 20 } }}>
      {logo}
    </span>
  );
}
