// src/upstream/ai-components/gradient_styles/use_ai_gradient_styles.ts
import { css } from "@emotion/react";
import { useEuiTheme, useGeneratedHtmlId } from "@elastic/eui";
import { useMemo } from "react";
var DIAGONAL_GRADIENT_START_PERCENT = 2.98;
var DIAGONAL_GRADIENT_END_PERCENT = 66.24;
var DIAGONAL_GRADIENT_ANGLE = 135;
var HORIZONTAL_GRADIENT_ANGLE = 90;
var VERTICAL_GRADIENT_ANGLE = 180;
var HOVER_GRADIENT_START_PERCENT = 18;
var HOVER_GRADIENT_END_PERCENT = 83;
var ANGLE_BOOST = 30;
var linearGradientCss = ({
  angle,
  startColor,
  startPercent,
  endColor,
  endPercent
}) => `linear-gradient(${angle}deg, ${startColor} ${startPercent}%, ${endColor} ${endPercent}%)`;
var buildLinearGradient = (colors, {
  angle = DIAGONAL_GRADIENT_ANGLE,
  startPercent = DIAGONAL_GRADIENT_START_PERCENT,
  endPercent = DIAGONAL_GRADIENT_END_PERCENT
} = {}) => linearGradientCss({
  angle,
  startColor: colors.startColor,
  startPercent,
  endColor: colors.endColor,
  endPercent
});
var resolveGradientAngle = ({
  iconOnly,
  variant
}) => {
  if (iconOnly) {
    return DIAGONAL_GRADIENT_ANGLE;
  }
  if (variant === "base") {
    return HORIZONTAL_GRADIENT_ANGLE;
  }
  return DIAGONAL_GRADIENT_ANGLE + ANGLE_BOOST;
};
var getLabelColors = (colors) => ({
  startColor: colors.textPrimary,
  endColor: colors.textAssistance
});
var gradientLabelCss = (euiTheme, cssGradient, hoverGradient) => css`
  padding: 0 ${euiTheme.size.xs};
  display: inline-block;
  background: ${cssGradient} !important;
  background-clip: text !important;
  -webkit-background-clip: text !important;
  color: transparent !important;
  -webkit-text-fill-color: transparent !important;

  ${hoverGradient ? `button:hover:not(:disabled) &,
      button:focus-visible:not(:disabled) & {
        background: ${hoverGradient} !important;
        background-clip: text !important;
        -webkit-background-clip: text !important;
      }` : ""}
  button:disabled & {
    color: ${euiTheme.colors.textDisabled} !important;
    background: none !important;
    -webkit-text-fill-color: ${euiTheme.colors.textDisabled} !important;
  }
`;
var plainLabelCss = (euiTheme, color) => css`
  padding: 0 ${euiTheme.size.xs};
  background: none !important;
  background-clip: initial !important;
  -webkit-background-clip: initial !important;
  color: ${color} !important;
  -webkit-text-fill-color: currentColor !important;
  button:disabled & {
    color: ${euiTheme.colors.textDisabled} !important;
    -webkit-text-fill-color: ${euiTheme.colors.textDisabled} !important;
  }
`;
var outlinedBorderGradientCss = (borderGradient, euiTheme) => css`
  position: relative;
  border: none;
  isolation: isolate;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: ${borderGradient};
    pointer-events: none;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
  }

  &:disabled::after {
    background: ${euiTheme.colors.backgroundBaseDisabled} !important;
  }
`;
var iconFillGradientCss = ({
  gradientUrl,
  disabledColor
}) => css`
  & .euiIcon,
  & .euiIcon [fill]:not([fill='none']) {
    fill: ${gradientUrl} !important;
  }
  &&:disabled .euiIcon,
  &&:disabled .euiIcon [fill]:not([fill='none']) {
    fill: ${disabledColor} !important;
    color: ${disabledColor} !important;
  }
`;
var resolveVariantStyles = (variant, euiTheme, buttonGradientAngle) => {
  const {
    colors,
    components: {
      buttons: { backgroundPrimaryHover, backgroundAssistanceHover }
    }
  } = euiTheme;
  const labelGradient = buildLinearGradient(getLabelColors(colors));
  const hoverGradient = linearGradientCss({
    angle: VERTICAL_GRADIENT_ANGLE,
    startColor: backgroundPrimaryHover,
    startPercent: HOVER_GRADIENT_START_PERCENT,
    endColor: backgroundAssistanceHover,
    endPercent: HOVER_GRADIENT_END_PERCENT
  });
  const defaultLabelColor = colors.textPrimary;
  switch (variant) {
    case "empty":
      return {
        buttonBackground: "transparent",
        hoverBackground: hoverGradient,
        labelColor: defaultLabelColor,
        labelCss: plainLabelCss(euiTheme, defaultLabelColor)
      };
    case "outlined":
      return {
        buttonBackground: "transparent",
        hoverBackground: hoverGradient,
        borderGradient: buildLinearGradient(
          {
            startColor: colors.backgroundFilledPrimary,
            endColor: colors.backgroundFilledAssistance
          },
          {
            angle: buttonGradientAngle
          }
        ),
        labelColor: defaultLabelColor,
        labelCss: gradientLabelCss(euiTheme, labelGradient)
      };
    case "accent": {
      const accentBackground = buildLinearGradient(
        {
          startColor: colors.backgroundFilledPrimary,
          endColor: colors.backgroundFilledAssistance
        },
        { angle: buttonGradientAngle }
      );
      return {
        buttonBackground: accentBackground,
        hoverBackground: `${hoverGradient}, ${accentBackground}`,
        labelColor: colors.textInverse,
        labelCss: plainLabelCss(euiTheme, colors.textInverse)
      };
    }
    case "base": {
      const baseBackground = buildLinearGradient(
        {
          startColor: colors.backgroundLightPrimary,
          endColor: colors.backgroundLightAssistance
        },
        { angle: buttonGradientAngle }
      );
      return {
        buttonBackground: baseBackground,
        hoverBackground: `${hoverGradient}, ${baseBackground}`,
        labelColor: defaultLabelColor,
        labelCss: gradientLabelCss(euiTheme, labelGradient, `${hoverGradient}, ${labelGradient}`)
      };
    }
  }
};
var useAiButtonGradientStyles = ({
  variant = "base",
  iconOnly
} = {}) => {
  const { euiTheme } = useEuiTheme();
  return useMemo(() => {
    const buttonGradientAngle = resolveGradientAngle({ iconOnly, variant });
    const { buttonBackground, hoverBackground, borderGradient, labelColor, labelCss } = resolveVariantStyles(variant, euiTheme, buttonGradientAngle);
    const buttonCss = css`
      background: ${buttonBackground} !important;
      color: ${labelColor} !important;
      ${borderGradient ? outlinedBorderGradientCss(borderGradient, euiTheme) : ""}

      &:hover:not(:disabled),
      &:focus-visible:not(:disabled) {
        background: ${hoverBackground} !important;
        /* EUI applies hover/active via an opaque ::before overlay
           (euiButtonInteractionStyles in global_styling/mixins/_button).
           Neutralising it so our custom gradient background is visible. */
        &::before {
          background-color: transparent !important;
        }
      }
      &:disabled {
        background: ${variant === "empty" || variant === "outlined" ? "transparent" : euiTheme.colors.backgroundBaseDisabled} !important;

        color: ${euiTheme.colors.textDisabled} !important;
        -webkit-text-fill-color: ${euiTheme.colors.textDisabled} !important;

        &::before {
          background-color: transparent !important;
        }
      }
    `;
    return { buttonCss, labelCss };
  }, [variant, iconOnly, euiTheme]);
};
var useSvgAiGradient = ({ variant } = {}) => {
  const { euiTheme } = useEuiTheme();
  const gradientId = useGeneratedHtmlId({ prefix: "kbnAiButtonIconGradient" });
  return useMemo(() => {
    const gradientUrl = `url(#${gradientId})`;
    const iconGradientCss = variant !== "accent" ? iconFillGradientCss({
      gradientUrl,
      disabledColor: euiTheme.colors.textDisabled
    }) : void 0;
    const labelColors = getLabelColors(euiTheme.colors);
    return {
      iconGradientCss,
      gradientId,
      colors: labelColors
    };
  }, [gradientId, variant, euiTheme]);
};

// src/upstream/ai-components/gradient_styles/svg_ai_gradient_defs.tsx
import { jsx, jsxs } from "@emotion/react/jsx-runtime";
var ICON_GRADIENT_START_OFFSET = 16;
var ICON_GRADIENT_END_OFFSET = 83;
var SvgAiGradientDefs = ({ gradientId, colors }) => {
  return /* @__PURE__ */ jsx("svg", { width: "0", height: "0", "aria-hidden": "true", focusable: "false", style: { position: "absolute" }, children: /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs(
    "linearGradient",
    {
      id: gradientId,
      x1: "-0.5",
      y1: "-2.5",
      x2: "15.5",
      y2: "9.5",
      gradientUnits: "userSpaceOnUse",
      children: [
        /* @__PURE__ */ jsx("stop", { offset: `${ICON_GRADIENT_START_OFFSET}%`, stopColor: colors.startColor }),
        /* @__PURE__ */ jsx("stop", { offset: `${ICON_GRADIENT_END_OFFSET}%`, stopColor: colors.endColor })
      ]
    }
  ) }) });
};

export {
  useAiButtonGradientStyles,
  useSvgAiGradient,
  SvgAiGradientDefs
};
//# sourceMappingURL=chunk-IEUFCWYV.js.map
