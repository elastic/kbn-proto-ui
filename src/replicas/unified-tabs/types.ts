/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

// Modified by Elastic, November 2026: standalone supported subset of UnifiedTabsProps.
import type { ReactElement, ReactNode } from 'react';

export interface TabItem {
  id: string;
  label: string;
  duplicatedFromId?: string;
  restoredFromId?: string;
  customMenuButton?: React.JSX.Element;
}

export interface TabbedContentState {
  items: TabItem[];
  selectedItem: TabItem | null;
}

/** Supported service-independent subset of Kibana's UnifiedTabsProps. */
export interface KibanaTabsProps {
  items: TabItem[];
  selectedItemId?: string;
  'data-test-subj'?: string;
  hideTabsBar?: boolean;
  renderContent?: (selectedItem: TabItem) => ReactNode;
  wrapTabsBar?: (tabsBar: ReactNode) => ReactNode;
  createItem: () => TabItem;
  customNewTabButton?: ReactElement;
  onChanged: (state: TabbedContentState) => void;
  tabContentIdOverride?: string;
  appendRight?: ReactNode;
  unsavedItemIds?: string[];
  disableCloseButton?: boolean;
  disableInlineLabelEditing?: boolean;
  disableTabsBarMenu?: boolean;
}
