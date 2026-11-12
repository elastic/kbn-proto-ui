import { createElement } from 'react';
import {
  AiButton, AiButtonDefault, AiButtonEmpty, AiButtonIcon, SvgAiGradientDefs,
  useAiButtonGradientStyles, useSvgAiGradient,
  type AiButtonProps, type AiButtonDefaultProps, type AiButtonEmptyProps,
  type AiButtonIconProps, type AiButtonIconType, type AiButtonVariant,
  type AiButtonGradientOptions, type AiButtonGradientStyles,
  type AiGradientColors, type SvgAiGradient, type SvgAiGradientDefsProps,
} from '../dist/index';

const props: AiButtonProps = { iconType: 'productAgent', children: 'Ask agent' };
const defaultProps: AiButtonDefaultProps = { variant: 'accent' };
const emptyProps: AiButtonEmptyProps = { href: '/agents' };
const iconProps: AiButtonIconProps = { iconType: 'sparkles', 'aria-label': 'Suggest' };
const variant: AiButtonVariant = 'outlined';
const options: AiButtonGradientOptions = { variant, iconOnly: true };
const styles: AiButtonGradientStyles = useAiButtonGradientStyles(options);
const gradient: SvgAiGradient = useSvgAiGradient(options);
const colors: AiGradientColors = gradient.colors;
const defs: SvgAiGradientDefsProps = { gradientId: gradient.gradientId, colors };
const noDeprecatedLogo: Extract<AiButtonIconType, 'aiAssistantLogo'> extends never ? true : never = true;
createElement(AiButton, props);
createElement(AiButtonDefault, defaultProps);
createElement(AiButtonEmpty, emptyProps);
createElement(AiButtonIcon, iconProps);
createElement(SvgAiGradientDefs, defs);
void styles; void noDeprecatedLogo;
