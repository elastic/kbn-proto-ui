import type { AriaAttributes, CSSProperties, ReactNode } from 'react';
export declare const headerButtonBaseStyles: import("@emotion/utils").SerializedStyles;
export declare const headerButtonBorderedStyles: import("@emotion/utils").SerializedStyles;
export declare function useHeaderButtonStyleVars(): CSSProperties;
interface HeaderActionButtonProps extends Pick<AriaAttributes, 'aria-expanded' | 'aria-haspopup' | 'aria-controls'> {
    variant: 'bordered' | 'plain';
    children: ReactNode;
    onClick?: () => void;
    'aria-label': string;
    'data-test-subj'?: string;
    isSelected?: boolean;
}
export declare const HeaderActionButton: import("react").ForwardRefExoticComponent<HeaderActionButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export {};
