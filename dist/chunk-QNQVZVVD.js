import {
  SvgAiGradientDefs,
  useAiButtonGradientStyles,
  useSvgAiGradient
} from "./chunk-HU2LJ7FL.js";

// src/kibana-copies/ai-components/ai_button/ai_button_base.tsx
import { EuiButton, EuiButtonEmpty, EuiButtonIcon, EuiToolTip } from "@elastic/eui";

// src/kibana-copies/ai-components/ai_button/ai_button_xs_size_styles.ts
import { css } from "@emotion/react";
import { useMemo } from "react";
import { useEuiFontSize, useEuiTheme } from "@elastic/eui";
var useAiButtonXsSizeCss = () => {
  const { euiTheme } = useEuiTheme();
  const { fontSize, lineHeight } = useEuiFontSize("xs");
  return useMemo(
    () => css`
      height: ${euiTheme.size.l};
      min-width: ${euiTheme.base * 6}px;
      padding: 0 ${euiTheme.size.s};
      border-radius: ${euiTheme.border.radius.small};
      font-size: ${fontSize};
      line-height: ${lineHeight};
    `,
    [euiTheme, fontSize, lineHeight]
  );
};

// src/utilities/kibanaI18n.ts
var i18n = {
  translate(_id, { defaultMessage }) {
    return defaultMessage;
  }
};

// src/kibana-copies/ai-components/ai_button/constants.ts
var ADD_TO_CHAT_LABEL = i18n.translate("kbnUI.aiComponents.addToChatLabel", {
  defaultMessage: "Add to chat"
});

// src/kibana-copies/ai-components/ai_button/ai_button_base.tsx
import { Fragment, jsx, jsxs } from "@emotion/react/jsx-runtime";
var usesAddToChatLabel = (iconType) => iconType === "addToChat";
var resolveButtonLabel = (iconType, children) => usesAddToChatLabel(iconType) ? ADD_TO_CHAT_LABEL : children;
var resolveIconOnlyTooltipContent = ({
  iconType,
  ariaLabel,
  toolTipContent
}) => {
  if (usesAddToChatLabel(iconType)) {
    return ADD_TO_CHAT_LABEL;
  }
  if (toolTipContent != null) {
    return toolTipContent;
  }
  return ariaLabel;
};
var getSyncedIconSize = (size) => size === "xs" ? "s" : "m";
var BUTTON_ONLY_KEYS = [
  "form",
  "formAction",
  "formEncType",
  "formMethod",
  "formNoValidate",
  "formTarget",
  "name",
  "type",
  "value"
];
var ANCHOR_ONLY_KEYS = ["href", "target", "rel", "download", "referrerPolicy", "ping"];
function filterForButtonOrAnchor(rest, hasHref) {
  const filtered = { ...rest };
  for (const k of hasHref ? BUTTON_ONLY_KEYS : ANCHOR_ONLY_KEYS) {
    delete filtered[k];
  }
  return filtered;
}
var AiButtonBase = (props) => {
  const variant = props.variant ?? "base";
  const euiButtonXsSizeCss = useAiButtonXsSizeCss();
  const { buttonCss, labelCss } = useAiButtonGradientStyles({
    variant,
    iconOnly: props.iconOnly
  });
  const { gradientId, iconGradientCss, colors } = useSvgAiGradient({ variant });
  const svgGradientDefs = iconGradientCss ? /* @__PURE__ */ jsx(SvgAiGradientDefs, { gradientId, colors }) : null;
  if (props.iconOnly === true) {
    const {
      iconType: iconType2,
      css: userCss2,
      display: _display,
      iconOnly: _iconOnly2,
      variant: _variant2,
      withToolTip,
      toolTipContent,
      "aria-label": ariaLabel,
      ...rest2
    } = props;
    const filtered2 = filterForButtonOrAnchor(rest2, !!rest2.href);
    const iconProps = {
      ...filtered2,
      "aria-label": ariaLabel,
      iconType: iconType2,
      iconSize: rest2.iconSize ?? getSyncedIconSize(rest2.size),
      css: [buttonCss, iconGradientCss, userCss2]
    };
    const iconButton = /* @__PURE__ */ jsx(EuiButtonIcon, { ...iconProps });
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      svgGradientDefs,
      withToolTip === true ? /* @__PURE__ */ jsx(
        EuiToolTip,
        {
          content: resolveIconOnlyTooltipContent({ iconType: iconType2, ariaLabel, toolTipContent }),
          children: iconButton
        }
      ) : iconButton
    ] });
  }
  if (props.variant === "empty" || props.variant === "outlined") {
    const {
      variant: _variant2,
      iconOnly: _iconOnly2,
      children: children2,
      css: userCss2,
      iconType: iconType2,
      textProps,
      ...rest2
    } = props;
    const filtered2 = filterForButtonOrAnchor(rest2, !!rest2.href);
    const emptyProps = {
      ...filtered2,
      iconSize: rest2.iconSize ?? getSyncedIconSize(rest2.size),
      iconType: iconType2,
      css: [buttonCss, iconGradientCss, userCss2],
      // Apply label styles on EUI's text span so padding is not doubled and truncation still works.
      textProps: {
        ...textProps,
        css: [labelCss, textProps !== false ? textProps?.css : void 0]
      },
      children: resolveButtonLabel(iconType2, children2)
    };
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      svgGradientDefs,
      /* @__PURE__ */ jsx(EuiButtonEmpty, { ...emptyProps })
    ] });
  }
  const {
    variant: _variant,
    iconOnly: _iconOnly,
    children,
    css: userCss,
    iconType,
    size,
    ...rest
  } = props;
  const buttonSize = size === "xs" ? "s" : size;
  const filtered = filterForButtonOrAnchor(rest, !!rest.href);
  const buttonProps = {
    ...filtered,
    size: buttonSize,
    iconSize: rest.iconSize ?? getSyncedIconSize(size),
    iconType,
    css: [buttonCss, iconGradientCss, size === "xs" && euiButtonXsSizeCss, userCss],
    fill: variant === "accent",
    children: /* @__PURE__ */ jsx("span", { css: labelCss, children: resolveButtonLabel(iconType, children) })
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    svgGradientDefs,
    /* @__PURE__ */ jsx(EuiButton, { ...buttonProps })
  ] });
};

export {
  AiButtonBase
};
//# sourceMappingURL=chunk-QNQVZVVD.js.map
