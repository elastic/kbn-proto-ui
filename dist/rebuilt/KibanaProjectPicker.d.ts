export interface KibanaProjectPickerProps {
    selected: number;
    total: number;
    onClick?: () => void;
    tooltip?: string;
}
/** Cross-project scope button only; the host owns project selection and the popover. */
export declare function KibanaProjectPicker({ selected, total, onClick, tooltip }: KibanaProjectPickerProps): import("@emotion/react/jsx-runtime").JSX.Element;
