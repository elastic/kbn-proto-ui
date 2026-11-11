import type { DistributiveOmit } from '@elastic/eui';
import type { AiButtonProps } from './types';
/** Props for the `AiButtonEmpty` component. */
export type AiButtonEmptyProps = DistributiveOmit<Extract<AiButtonProps, {
    iconOnly?: false;
    variant: 'empty' | 'outlined';
}>, 'variant'>;
/**
 * Renders the empty AI button variant.
 * @param props - Props accepted by the empty AI button variant.
 */
export declare const AiButtonEmpty: (props: AiButtonEmptyProps) => import("@emotion/react/jsx-runtime").JSX.Element;
