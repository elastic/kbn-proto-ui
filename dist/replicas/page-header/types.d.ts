import type { ReactNode, MouseEventHandler } from 'react';
import type { IconColor, IconType } from '@elastic/eui';
import type { AppMenuConfig } from './menuTypes';
export interface AppHeaderBackTarget {
    href: string;
    onClick?: MouseEventHandler;
    label: string;
}
export type AppHeaderBack = AppHeaderBackTarget;
export interface AppHeaderBadge {
    label: string;
    color?: 'hollow' | 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'accent';
    tooltip?: string;
    onClick?: () => void;
    onClickAriaLabel?: string;
    'data-test-subj'?: string;
    items?: AppHeaderBadgeItem[];
    popoverWidth?: number;
}
export interface AppHeaderBadgeItem {
    name: string;
    icon?: string;
    onClick?: () => void;
    items?: AppHeaderBadgeItem[];
    popoverWidth?: number;
    'data-test-subj'?: string;
    disabled?: boolean;
    toolTipContent?: string;
}
export interface AppHeaderTabIconBadge {
    iconType: string;
    color?: IconColor;
    tooltip?: string;
}
export type AppHeaderTabBadge = number | AppHeaderTabIconBadge;
export interface AppHeaderTabAction {
    id: string;
    label: string;
    iconType?: IconType;
    disabled?: boolean | (() => boolean);
    onClick: () => void;
    'data-test-subj'?: string;
}
export interface AppHeaderTabActions {
    ariaLabel: string;
    items: AppHeaderTabAction[];
    'data-test-subj'?: string;
}
export interface AppHeaderTab {
    id: string;
    label: string;
    isSelected?: boolean;
    onClick?: () => void;
    href?: string;
    badge?: AppHeaderTabBadge;
    'data-test-subj'?: string;
    disabled?: boolean;
    toolTipContent?: string;
    actions?: AppHeaderTabActions;
}
export type AppHeaderMetadataItem = AppHeaderMetadataTextItem | AppHeaderMetadataButtonItem | AppHeaderMetadataHealthItem;
export type AppHeaderMetadataItems = readonly [
    AppHeaderMetadataItem,
    AppHeaderMetadataItem?,
    AppHeaderMetadataItem?
];
export interface AppHeaderMetadataTextItem {
    type: 'text';
    label: string;
    value?: string;
    'data-test-subj'?: string;
}
export type AppHeaderMetadataButtonItem = AppHeaderMetadataButtonAction | AppHeaderMetadataButtonLink;
export interface AppHeaderMetadataButtonBase {
    type: 'button';
    label: string;
    'data-test-subj'?: string;
}
export interface AppHeaderMetadataButtonAction extends AppHeaderMetadataButtonBase {
    onClick: () => void;
    href?: never;
}
export interface AppHeaderMetadataButtonLink extends AppHeaderMetadataButtonBase {
    href: string;
    onClick?: never;
}
export interface AppHeaderMetadataHealthItem {
    type: 'health';
    label: string;
    color: string;
    'data-test-subj'?: string;
}
export type AppHeaderTitleSaveResult = string | void;
export interface AppHeaderEditableTitle {
    text: string;
    onSave: (nextTitle: string) => AppHeaderTitleSaveResult | Promise<AppHeaderTitleSaveResult>;
    ariaLabel?: string;
    placeholder?: string;
}
export type AppHeaderTitle = string | AppHeaderEditableTitle;
export type AppHeaderSpacing = 'standard' | 'compact' | 'flush' | 'bleed' | 'largeBleed';
export type AppHeaderFavoriteStatus = 'unfavorited' | 'favorited' | 'adding' | 'removing';
export interface AppHeaderFavoriteAction {
    status: AppHeaderFavoriteStatus;
    onToggle: () => void;
    isDisabled?: boolean;
}
export interface AppHeaderShareAction {
    label?: string;
    onClick: (context: {
        returnFocus: () => void;
    }) => void | Promise<void>;
    isDisabled?: boolean;
    tooltip?: {
        content: string;
        title?: string;
    };
}
export type AppHeaderDescription = string | {
    text: string;
    learnMoreUrl: string;
};
interface AppHeaderConfigBase {
    title?: AppHeaderTitle;
    back?: AppHeaderBack;
    tabs?: AppHeaderTab[];
    badges?: AppHeaderBadge[];
    menu?: AppMenuConfig;
    favorite?: AppHeaderFavoriteAction;
    share?: AppHeaderShareAction;
    spacing?: AppHeaderSpacing;
}
type AppHeaderSecondaryContent = {
    description?: AppHeaderDescription;
    metadata?: never;
} | {
    description?: never;
    metadata?: AppHeaderMetadataItems;
};
export type AppHeaderConfig = AppHeaderConfigBase & AppHeaderSecondaryContent;
export type AppHeaderMenu = AppMenuConfig;
export type KibanaPageHeaderProps = AppHeaderConfig & {
    titleAppend?: ReactNode;
    sticky?: boolean;
    borderless?: boolean;
};
export {};
