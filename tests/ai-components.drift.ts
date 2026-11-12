// Dev-only drift check: compares the standalone AI type snapshot with the
// published @kbn/ui-ai-components declarations. The only intended difference
// is the excluded deprecated `aiAssistantLogo` icon. If this fails after
// `npm run update:kbn`, update src/wrappers/ai-components.types.ts to match.
import type * as Pub from '@kbn/ui-ai-components';
import type * as Ours from '../src/wrappers/ai-components.types';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;
type Shape<P, S> = keyof Extract<P, S>;

type TextShape = { iconOnly?: false; variant?: 'accent' | 'base' };
type EmptyShape = { iconOnly?: false; variant: 'empty' | 'outlined' };
type IconShape = { iconOnly: true };

export type AiComponentsDriftChecks = [
  Assert<Equal<Ours.AiButtonIconType, Exclude<Pub.AiButtonIconType, 'aiAssistantLogo'>>>,
  Assert<Equal<Ours.AiButtonVariant, Pub.AiButtonVariant>>,
  Assert<Equal<Ours.AiButtonGradientOptions, Pub.AiButtonGradientOptions>>,
  Assert<Equal<Ours.AiButtonGradientStyles, Pub.AiButtonGradientStyles>>,
  Assert<Equal<Ours.AiGradientColors, Pub.AiGradientColors>>,
  Assert<Equal<Ours.SvgAiGradient, Pub.SvgAiGradient>>,
  Assert<Equal<Ours.SvgAiGradientDefsProps, Pub.SvgAiGradientDefsProps>>,
  Assert<Equal<Shape<Ours.AiButtonProps, TextShape>, Shape<Pub.AiButtonProps, TextShape>>>,
  Assert<Equal<Shape<Ours.AiButtonProps, EmptyShape>, Shape<Pub.AiButtonProps, EmptyShape>>>,
  Assert<Equal<Shape<Ours.AiButtonProps, IconShape>, Shape<Pub.AiButtonProps, IconShape>>>,
  Assert<Equal<keyof Ours.AiButtonDefaultProps, keyof Pub.AiButtonDefaultProps>>,
  Assert<Equal<keyof Ours.AiButtonEmptyProps, keyof Pub.AiButtonEmptyProps>>,
  Assert<Equal<keyof Ours.AiButtonIconProps, keyof Pub.AiButtonIconProps>>,
];
