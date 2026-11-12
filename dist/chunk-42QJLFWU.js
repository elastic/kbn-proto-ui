import {
  AiButton
} from "./chunk-WIY7IFMS.js";

// src/rebuilt/ChromeHeader.tsx
import {
  EuiAvatar,
  EuiBreadcrumbs,
  EuiButtonEmpty,
  EuiButtonIcon,
  EuiIcon as EuiIcon2,
  EuiFieldSearch,
  useEuiTheme as useEuiTheme3
} from "@elastic/eui";

// src/rebuilt/chrome-header/HeaderActionButton.tsx
import { forwardRef } from "react";
import { css } from "@emotion/react";
import { useEuiTheme } from "@elastic/eui";
import { jsx } from "@emotion/react/jsx-runtime";
var headerButtonBaseStyles = css({
  display: "inline-flex",
  alignItems: "center",
  boxSizing: "border-box",
  height: 32,
  background: "transparent",
  cursor: "pointer",
  "&:hover": { background: "var(--header-btn-hover)" },
  "&:focus-visible": { outline: "2px solid var(--header-btn-focus)", outlineOffset: -2 }
});
var headerButtonBorderedStyles = css({ border: "1px solid var(--header-btn-border)" });
function useHeaderButtonStyleVars() {
  const { euiTheme } = useEuiTheme();
  return {
    "--header-btn-border": euiTheme.colors.borderBasePlain,
    "--header-btn-hover": euiTheme.colors.backgroundBaseInteractiveHover,
    "--header-btn-focus": euiTheme.colors.primary,
    borderRadius: euiTheme.border.radius.control
  };
}
var HeaderActionButton = forwardRef(
  ({ variant, children, onClick, isSelected, ...aria }, ref) => /* @__PURE__ */ jsx(
    "button",
    {
      ...aria,
      ref,
      type: "button",
      "aria-pressed": isSelected,
      "data-selected": isSelected,
      onClick,
      css: [
        headerButtonBaseStyles,
        { width: 32, padding: 0, justifyContent: "center" },
        variant === "bordered" ? headerButtonBorderedStyles : { border: "none" },
        isSelected ? { background: "var(--header-btn-hover)" } : void 0
      ],
      style: useHeaderButtonStyleVars(),
      children
    }
  )
);
HeaderActionButton.displayName = "HeaderActionButton";

// src/rebuilt/chrome-header/SearchButton.tsx
import { useEffect } from "react";
import { EuiBadge, EuiIcon, useEuiBreakpoint, useEuiFontSize, useEuiTheme as useEuiTheme2 } from "@elastic/eui";
import { jsx as jsx2, jsxs } from "@emotion/react/jsx-runtime";
function SearchButton({ onClick }) {
  const { euiTheme } = useEuiTheme2();
  const compactQuery = useEuiBreakpoint(["xs", "s"]);
  const fontSize = useEuiFontSize("s").fontSize;
  const isMac = typeof navigator !== "undefined" && /Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent);
  useEffect(() => {
    if (!onClick) return;
    const keydown = (event) => {
      if (event.key.toLowerCase() !== "/") return;
      const target = event.target;
      if (target instanceof HTMLElement && (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target.isContentEditable)) return;
      if (event.shiftKey || event.altKey) return;
      if (isMac ? !event.metaKey || event.ctrlKey : !event.ctrlKey || event.metaKey) return;
      event.preventDefault();
      onClick();
    };
    document.addEventListener("keydown", keydown);
    return () => document.removeEventListener("keydown", keydown);
  }, [isMac, onClick]);
  const collapsible = { [compactQuery]: { display: "none" } };
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      "aria-label": "Search",
      "data-test-subj": "chromeHeaderSearchButton",
      onClick,
      css: [headerButtonBaseStyles, headerButtonBorderedStyles, {
        padding: `0 ${euiTheme.size.s}`,
        gap: euiTheme.size.s,
        whiteSpace: "nowrap",
        [compactQuery]: { width: 32, padding: 0, justifyContent: "center", gap: 0 }
      }],
      style: useHeaderButtonStyleVars(),
      children: [
        /* @__PURE__ */ jsxs("span", { css: { display: "inline-flex", alignItems: "center", gap: euiTheme.size.s, minWidth: 0 }, children: [
          /* @__PURE__ */ jsx2(EuiIcon, { type: "magnify", size: "m", color: euiTheme.colors.textParagraph, "aria-hidden": true }),
          /* @__PURE__ */ jsx2("span", { css: [{ color: euiTheme.colors.textDisabled, fontSize, userSelect: "none" }, collapsible], children: "Find content..." })
        ] }),
        /* @__PURE__ */ jsx2(EuiBadge, { css: [{ color: euiTheme.colors.textSubdued, backgroundColor: euiTheme.colors.backgroundBaseSubdued, flexShrink: 0 }, collapsible], children: isMac ? "\u2318 /" : "Ctrl /" })
      ]
    }
  );
}

// src/rebuilt/ChromeHeader.tsx
import { Fragment, jsx as jsx3, jsxs as jsxs2 } from "@emotion/react/jsx-runtime";
var logos = {
  observability: "logoObservability",
  security: "logoSecurity",
  search: "logoEnterpriseSearch",
  classic: "logoKibana"
};
function ChromeHeader({
  solution = "observability",
  breadcrumbs = [],
  spaceName = "Default",
  userName = "Elastic User",
  onSpaceClick,
  onUserClick,
  onHelpClick,
  onSearchClick,
  searchValue,
  onSearchChange,
  onSearchSubmit,
  isAgentOpen = false,
  onAgentClick,
  agentControlsId,
  colorMode = "light",
  onToggleColorMode,
  trailing,
  switcher,
  projectPicker,
  subscriptionBadge,
  afterUserMenu,
  actions,
  activeSidebarApp,
  onActiveSidebarAppChange,
  sidebarControlsId
}) {
  const { euiTheme } = useEuiTheme3();
  const resolvedSwitcher = switcher === void 0 ? /* @__PURE__ */ jsx3(EuiButtonEmpty, { size: "s", color: "text", iconType: logos[solution], onClick: onSpaceClick, children: spaceName }) : switcher;
  const separator = /* @__PURE__ */ jsx3("div", { "aria-hidden": "true", "data-test-subj": "kibanaHeaderSeparator", css: {
    width: euiTheme.border.width.thin,
    height: euiTheme.size.l,
    flexShrink: 0,
    background: euiTheme.colors.borderBasePlain
  } });
  return /* @__PURE__ */ jsxs2("div", { "data-test-subj": "kibanaHeader", css: { display: "flex", alignItems: "center", height: 48, minWidth: 0, paddingRight: euiTheme.size.base }, children: [
    /* @__PURE__ */ jsx3("div", { css: { display: "flex", alignItems: "center", flexShrink: 0 }, children: resolvedSwitcher && /* @__PURE__ */ jsxs2(Fragment, { children: [
      separator,
      /* @__PURE__ */ jsx3("div", { "data-test-subj": "kibanaHeaderSwitcher", css: { display: "flex", alignItems: "center", gap: euiTheme.size.xs, marginInline: euiTheme.size.xs }, children: resolvedSwitcher })
    ] }) }),
    separator,
    projectPicker && /* @__PURE__ */ jsx3("div", { "data-test-subj": "kibanaHeaderProjectPicker", css: { display: "flex", alignItems: "center", flexShrink: 0, marginInlineStart: euiTheme.size.xs }, children: projectPicker }),
    subscriptionBadge && /* @__PURE__ */ jsxs2(Fragment, { children: [
      projectPicker && separator,
      /* @__PURE__ */ jsx3("div", { "data-test-subj": "kibanaHeaderSubscriptionBadge", css: { display: "flex", alignItems: "center", flexShrink: 0, marginInline: euiTheme.size.s }, children: subscriptionBadge })
    ] }),
    /* @__PURE__ */ jsx3("div", { css: { flex: 1, minWidth: 0, marginInline: euiTheme.size.s }, children: /* @__PURE__ */ jsx3(EuiBreadcrumbs, { breadcrumbs, truncate: true }) }),
    /* @__PURE__ */ jsxs2("div", { css: { display: "flex", alignItems: "center", flexShrink: 0, gap: euiTheme.size.s }, children: [
      !onSearchClick && (searchValue !== void 0 || onSearchChange || onSearchSubmit) ? /* @__PURE__ */ jsx3("form", { role: "search", onSubmit: (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        onSearchSubmit?.(String(data.get("contentSearch") ?? ""));
      }, css: { width: "clamp(120px, 18vw, 220px)", "& .euiFormControlLayout": { backgroundColor: "transparent" } }, children: /* @__PURE__ */ jsx3(
        EuiFieldSearch,
        {
          name: "contentSearch",
          "aria-label": "Find content",
          placeholder: "Find content...",
          compressed: true,
          isClearable: false,
          value: searchValue,
          onChange: (event) => onSearchChange?.(event.target.value),
          append: /* @__PURE__ */ jsx3("span", { css: { fontSize: 12, color: euiTheme.colors.textSubdued, paddingInline: 4 }, children: "\u2318/" })
        }
      ) }) : /* @__PURE__ */ jsx3(SearchButton, { onClick: onSearchClick }),
      /* @__PURE__ */ jsx3(HeaderActionButton, { variant: "bordered", "aria-label": "Help", onClick: onHelpClick, children: /* @__PURE__ */ jsx3(EuiIcon2, { type: "question", color: "subdued", "aria-hidden": true }) }),
      actions?.map((action) => {
        const linked = action.sidebarAppId !== void 0;
        const isOpen = linked && activeSidebarApp === action.sidebarAppId;
        return /* @__PURE__ */ jsx3(
          HeaderActionButton,
          {
            variant: action.variant ?? "bordered",
            "aria-label": action.label,
            isSelected: linked ? isOpen : void 0,
            "aria-expanded": linked ? isOpen : void 0,
            "aria-controls": isOpen ? sidebarControlsId : void 0,
            onClick: linked ? () => onActiveSidebarAppChange?.(isOpen ? null : action.sidebarAppId) : action.onClick,
            children: /* @__PURE__ */ jsx3(EuiIcon2, { type: action.iconType, color: "subdued", "aria-hidden": true })
          },
          action.id
        );
      }),
      onAgentClick && /* @__PURE__ */ jsx3(
        AiButton,
        {
          size: "s",
          iconType: "productAgent",
          variant: isAgentOpen ? "accent" : "base",
          onClick: onAgentClick,
          "aria-label": "AI Agent",
          "aria-expanded": isAgentOpen,
          "aria-controls": agentControlsId,
          isSelected: isAgentOpen,
          children: "AI Agent"
        }
      ),
      onToggleColorMode && /* @__PURE__ */ jsx3(
        EuiButtonIcon,
        {
          iconType: colorMode === "light" ? "moon" : "sun",
          "aria-label": `Switch to ${colorMode === "light" ? "dark" : "light"} mode`,
          onClick: onToggleColorMode
        }
      ),
      trailing,
      /* @__PURE__ */ jsx3(
        "button",
        {
          type: "button",
          "aria-label": `User menu: ${userName}`,
          onClick: onUserClick,
          css: { border: 0, background: "transparent", padding: 0, borderRadius: "50%", cursor: onUserClick ? "pointer" : "default", flexShrink: 0 },
          children: /* @__PURE__ */ jsx3(EuiAvatar, { name: userName, size: "s", color: euiTheme.colors.vis.euiColorVis1 })
        }
      ),
      afterUserMenu
    ] })
  ] });
}
var KibanaHeader = ChromeHeader;

export {
  headerButtonBaseStyles,
  useHeaderButtonStyleVars,
  ChromeHeader,
  KibanaHeader
};
//# sourceMappingURL=chunk-42QJLFWU.js.map
