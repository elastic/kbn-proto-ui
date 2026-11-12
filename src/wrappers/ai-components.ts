import type { JSX } from 'react';
import {
  AiButton as PublishedAiButton,
  AiButtonDefault as PublishedAiButtonDefault,
  AiButtonEmpty as PublishedAiButtonEmpty,
  AiButtonIcon as PublishedAiButtonIcon,
  SvgAiGradientDefs as PublishedSvgAiGradientDefs,
  useAiButtonGradientStyles as publishedUseAiButtonGradientStyles,
  useSvgAiGradient as publishedUseSvgAiGradient,
} from '@kbn/ui-ai-components';
import type {
  AiButtonProps, AiButtonDefaultProps, AiButtonEmptyProps, AiButtonIconProps,
  AiButtonGradientOptions, AiButtonGradientStyles, SvgAiGradient, SvgAiGradientDefsProps,
} from './ai-components.types';

export const AiButton: (props: AiButtonProps) => JSX.Element = PublishedAiButton;
export const AiButtonDefault: (props: AiButtonDefaultProps) => JSX.Element = PublishedAiButtonDefault;
export const AiButtonEmpty: (props: AiButtonEmptyProps) => JSX.Element = PublishedAiButtonEmpty;
export const AiButtonIcon: (props: AiButtonIconProps) => JSX.Element = PublishedAiButtonIcon;
export const SvgAiGradientDefs: (props: SvgAiGradientDefsProps) => JSX.Element = PublishedSvgAiGradientDefs;
export const useAiButtonGradientStyles: (options?: AiButtonGradientOptions) => AiButtonGradientStyles = publishedUseAiButtonGradientStyles;
export const useSvgAiGradient: (options?: AiButtonGradientOptions) => SvgAiGradient = publishedUseSvgAiGradient;
export type * from './ai-components.types';
