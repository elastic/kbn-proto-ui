import {
  AiButton
} from "./chunk-TEUYHJMB.js";

// src/replicas/KibanaHeader.tsx
import {
  EuiAvatar,
  EuiBreadcrumbs,
  EuiButton,
  EuiButtonEmpty,
  EuiButtonIcon,
  EuiFieldSearch,
  useEuiTheme
} from "@elastic/eui";
import { jsx, jsxs } from "@emotion/react/jsx-runtime";
var logos = {
  observability: "logoObservability",
  security: "logoSecurity",
  search: "logoEnterpriseSearch",
  classic: "logoKibana"
};
function KibanaHeader({
  solution = "observability",
  breadcrumbs = [],
  spaceName = "Default",
  userName = "Elastic User",
  onSpaceClick,
  onUserClick,
  onHelpClick,
  searchValue,
  onSearchChange,
  onSearchSubmit,
  isAgentOpen = false,
  onAgentClick,
  agentControlsId,
  colorMode = "light",
  onToggleColorMode,
  trailing
}) {
  const { euiTheme } = useEuiTheme();
  return /* @__PURE__ */ jsxs("div", { css: { display: "flex", alignItems: "center", gap: euiTheme.size.s, height: 48, minWidth: 0, paddingRight: 16 }, children: [
    /* @__PURE__ */ jsx(EuiButtonEmpty, { size: "s", color: "text", iconType: logos[solution], isDisabled: !onSpaceClick, onClick: onSpaceClick, children: spaceName }),
    /* @__PURE__ */ jsx("div", { css: { flex: 1, minWidth: 0 }, children: /* @__PURE__ */ jsx(EuiBreadcrumbs, { breadcrumbs, truncate: true }) }),
    /* @__PURE__ */ jsx("form", { role: "search", onSubmit: (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      onSearchSubmit?.(String(data.get("contentSearch") ?? ""));
    }, css: { width: "clamp(120px, 18vw, 220px)", "& .euiFormControlLayout": { backgroundColor: "transparent" } }, children: /* @__PURE__ */ jsx(
      EuiFieldSearch,
      {
        name: "contentSearch",
        "aria-label": "Find content",
        placeholder: "Find content...",
        compressed: true,
        isClearable: false,
        value: searchValue,
        onChange: (event) => onSearchChange?.(event.target.value),
        disabled: !onSearchChange && !onSearchSubmit,
        append: /* @__PURE__ */ jsx("span", { css: { fontSize: 12, color: euiTheme.colors.textSubdued, paddingInline: 4 }, children: "\u2318/" })
      }
    ) }),
    /* @__PURE__ */ jsx(EuiButton, { iconType: "question", color: "text", size: "s", minWidth: false, "aria-label": "Help", onClick: onHelpClick, isDisabled: !onHelpClick }),
    onAgentClick && /* @__PURE__ */ jsx(
      AiButton,
      {
        size: "s",
        color: "text",
        iconType: "productAgent",
        variant: isAgentOpen ? "accent" : "outlined",
        onClick: onAgentClick,
        "aria-label": "AI Agent",
        "aria-expanded": isAgentOpen,
        "aria-controls": agentControlsId,
        isSelected: isAgentOpen,
        children: "AI Agent"
      }
    ),
    onToggleColorMode && /* @__PURE__ */ jsx(
      EuiButtonIcon,
      {
        iconType: colorMode === "light" ? "moon" : "sun",
        "aria-label": `Switch to ${colorMode === "light" ? "dark" : "light"} mode`,
        onClick: onToggleColorMode
      }
    ),
    trailing,
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        "aria-label": `User menu: ${userName}`,
        disabled: !onUserClick,
        onClick: onUserClick,
        css: { border: 0, background: "transparent", padding: 0, borderRadius: "50%", cursor: onUserClick ? "pointer" : "default", flexShrink: 0 },
        children: /* @__PURE__ */ jsx(EuiAvatar, { name: userName, size: "s", color: euiTheme.colors.vis.euiColorVis1 })
      }
    )
  ] });
}

export {
  KibanaHeader
};
//# sourceMappingURL=chunk-3YLYNONM.js.map
