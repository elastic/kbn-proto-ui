/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

// Modified by Elastic, November 2026: standalone corner reused via vibe-kibana.
import type { FC } from 'react';
import { useEuiTheme } from '@elastic/eui';

export const TabCorner: FC<{ side: "left" | "right" }> = ({ side }) => {
  const { euiTheme } = useEuiTheme();
  return (
    <svg
      aria-hidden
      viewBox="0 0 8 8"
      fill="none"
      style={{
        position: "absolute",
        bottom: 0,
        width: euiTheme.size.s,
        height: euiTheme.size.s,
        ...(side === "left"
          ? { left: `-${euiTheme.size.s}`, transform: "scaleX(-1)" }
          : { right: `-${euiTheme.size.s}` }),
      }}
    >
      <path
        d="M8 7.92676C7.67329 7.97351 7.33964 8 7 8H8V7.92676ZM0 8H7C3.13401 8 0 4.86599 0 1C0 0.660412 0.0255308 0.326664 0.0722656 0H0V8Z"
        fill={euiTheme.colors.backgroundBasePlain}
      />
      <path
        d="M7 8C3.13401 8 0 4.86599 0 1C0 0.660412 0.0255308 0.326664 0.0722656 0"
        stroke={euiTheme.colors.borderBaseSubdued}
        strokeWidth={euiTheme.border.width.thin}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

