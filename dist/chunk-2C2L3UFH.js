// src/rebuilt/KibanaProjectPicker.tsx
import { EuiButton, EuiButtonEmpty, EuiText, EuiToolTip } from "@elastic/eui";
import { jsx } from "@emotion/react/jsx-runtime";
var compactNumber = new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 0 });
function KibanaProjectPicker({ selected, total, onClick, tooltip = "Cross-project search scope selector" }) {
  const shouldWarn = selected === 0;
  const label = !shouldWarn && selected === total ? "All" : `${compactNumber.format(selected).toLowerCase()}/${compactNumber.format(total).toLowerCase()}`;
  const buttonProps = {
    size: "s",
    onClick,
    "aria-label": `${tooltip}: ${label}`,
    "data-test-subj": "cps-project-picker-button",
    css: { minWidth: "unset" }
  };
  const content = /* @__PURE__ */ jsx(EuiText, { size: "s", css: { "& > *": { fontVariantNumeric: "tabular-nums" } }, children: /* @__PURE__ */ jsx("span", { "data-test-subj": "cps-project-picker-button-label", children: label }) });
  return /* @__PURE__ */ jsx(EuiToolTip, { content: tooltip, children: shouldWarn ? /* @__PURE__ */ jsx(EuiButton, { ...buttonProps, color: "warning", iconType: "warning", children: content }) : /* @__PURE__ */ jsx(EuiButtonEmpty, { ...buttonProps, color: "text", iconType: "crossProjectSearch", children: content }) });
}

export {
  KibanaProjectPicker
};
//# sourceMappingURL=chunk-2C2L3UFH.js.map
