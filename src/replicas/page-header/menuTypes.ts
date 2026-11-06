/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */
// Adapted type contract for kbn-proto-ui; unsupported features omitted. See SOURCES.md.

/*
 * This contract is declarative on purpose: apps describe what to show (text, options, callbacks),
 * and the menu decides how it looks. Do not add `ReactNode`, `ReactElement`, JSX, or render-prop
 * fields here. They let every app paint its own UI, and the menu stops looking like one component.
 * The renderer also coerces text to plain strings and drops undeclared keys, see "Strict props" in
 * this package's README.
 *
 * When the existing props cannot express something, add a new declarative field for it rather
 * than a slot for arbitrary content.
 */

import type { EuiHideForProps, EuiSwitchProps, IconType } from '@elastic/eui';


export interface AppMenuRunActionParams {
  triggerElement: HTMLElement;
  returnFocus: () => void;
  context?: Record<string, unknown>;
}

export type AppMenuRunAction = (params?: AppMenuRunActionParams) => void;

type BaseSplitProps = {
  isMainButtonLoading?: boolean;
  isMainButtonDisabled?: boolean;
  isSecondaryButtonDisabled?: boolean;
  secondaryButtonAriaLabel: string;
  secondaryButtonTooltipContent?: string;
  iconType?: IconType;
  showNotificationIndicator?: boolean;
  notificationIndicatorTooltipContent?: string;
};

type AppMenuSecondarySplitButton = BaseSplitProps & {
  secondaryButtonIconType?: IconType;
  items?: never;
  run: AppMenuRunAction;
};

type AppMenuSecondarySplitButtonWithPopover = BaseSplitProps & {
  secondaryButtonIconType?: never;
  items: AppMenuPopoverItem[];
  run?: never;
};

export type AppMenuSplitButtonProps =
  | AppMenuSecondarySplitButton
  | AppMenuSecondarySplitButtonWithPopover;

export interface AppMenuEbtAttrs {
  action: string;
  detail?: string;
}

interface AppMenuItemBase {
  id: string;
  htmlId?: string;
  label: string;
  description?: string;
  iconType: IconType;
  testId?: string;
  ebt?: AppMenuEbtAttrs;
  disableButton?: boolean | (() => boolean);
  isLoading?: boolean;
  tooltipContent?: string | (() => string | undefined);
  tooltipTitle?: string | (() => string | undefined);
  hidden?: EuiHideForProps['sizes'];
  isSelected?: boolean;
}

type AppMenuLinkItem = AppMenuItemBase & {
  href: string;
  target?: string;
  run?: AppMenuRunAction;
  items?: never;
  popoverWidth?: never;
  popoverTestId?: never;
};

type AppMenuButtonItem = AppMenuItemBase & {
  href?: string;
  target?: string;
  run: AppMenuRunAction;
  items?: never;
  popoverWidth?: never;
  popoverTestId?: never;
};

type AppMenuItemWithPopover = AppMenuItemBase & {
  href?: never;
  target?: never;
  run?: never;
  items: AppMenuPopoverItem[];
  popoverWidth?: number;
  popoverTestId?: string;
};

export type AppMenuItemCommon = AppMenuButtonItem | AppMenuItemWithPopover | AppMenuLinkItem;

type AppMenuItemTypeBase = AppMenuItemCommon & {
  order?: number;
  separator?: 'above' | 'below';
};

type AppMenuItemTopLevel = AppMenuItemTypeBase & {
  overflow?: boolean;
  isDestructive?: never;
};

type AppMenuItemOverflow = AppMenuItemTypeBase & {
  overflow: true;
  isDestructive?: boolean;
};

export type AppMenuItemType = AppMenuItemTopLevel | AppMenuItemOverflow;


export type AppMenuPopoverItem = Omit<
  AppMenuItemType,
  'iconType' | 'hidden' | 'popoverWidth' | 'overflow'
> & {
  iconType?: IconType;
  labelBadgeText?: string;
};

export interface AppMenuSwitch {
  id: string;
  label: string;
  labelProps?: Omit<NonNullable<EuiSwitchProps['labelProps']>, 'css'>;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  tooltipContent?: string | (() => string | undefined);
  tooltipTitle?: string | (() => string | undefined);
  'data-test-subj'?: string;
}

interface AppMenuPrimaryActionBase extends AppMenuItemBase {
  popoverWidth?: number;
  popoverTestId?: string;
  splitButtonProps?: AppMenuSplitButtonProps;
}

type AppMenuPrimaryActionButton = AppMenuPrimaryActionBase & {
  href?: string;
  target?: string;
  run: AppMenuRunAction;
  items?: never;
};

type AppMenuPrimaryActionLink = AppMenuPrimaryActionBase & {
  href: string;
  target?: string;
  run?: AppMenuRunAction;
  items?: never;
};

type AppMenuPrimaryActionPopover = AppMenuPrimaryActionBase & {
  href?: never;
  target?: never;
  run?: never;
  items: AppMenuPopoverItem[];
};

export type AppMenuPrimaryActionItem =
  | AppMenuPrimaryActionButton
  | AppMenuPrimaryActionLink
  | AppMenuPrimaryActionPopover;

export interface AppMenuConfig {
  items?: AppMenuItemType[];
  primaryActionItem?: AppMenuPrimaryActionItem;
  switch?: AppMenuSwitch;
}
