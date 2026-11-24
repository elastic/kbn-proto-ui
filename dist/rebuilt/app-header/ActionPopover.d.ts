import type { ReactElement } from 'react';
import type { AppMenuPopoverItem } from '../../wrappers/app-menu.types';
export declare const plainText: (value: unknown) => string;
export declare const resolveValue: <T>(value: T | (() => T)) => T;
export declare function ActionPopover({ items, button, width, testId }: {
    items: AppMenuPopoverItem[];
    button: (toggle: () => void, isOpen: boolean) => ReactElement;
    width?: number;
    testId?: string;
}): import("@emotion/react/jsx-runtime").JSX.Element;
