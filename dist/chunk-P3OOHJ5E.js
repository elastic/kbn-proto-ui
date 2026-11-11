// src/rebuilt/agent-builder/AgentSidebar.tsx
import { useRef, useState } from "react";
import {
  EuiButtonEmpty,
  EuiButtonIcon,
  EuiIcon,
  EuiMarkdownFormat,
  EuiPanel,
  EuiText,
  EuiTitle,
  useEuiTheme
} from "@elastic/eui";
import { jsx, jsxs } from "@emotion/react/jsx-runtime";
function AgentSidebar({
  onClose,
  attachment,
  messages = [],
  onSubmit,
  isResponding = false,
  initialMessage = "",
  title = "New Conversation",
  welcome,
  connector,
  onNavigationClick,
  onMoreClick,
  children
}) {
  const { euiTheme } = useEuiTheme();
  const [draft, setDraft] = useState(initialMessage);
  const inputRef = useRef(null);
  const send = () => {
    if (!draft.trim() || isResponding || !onSubmit) return;
    onSubmit(draft.trim(), attachment);
    setDraft("");
    inputRef.current?.focus();
  };
  return /* @__PURE__ */ jsxs("div", { css: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minHeight: 0,
    background: `linear-gradient(${euiTheme.colors.backgroundBasePlain} 21.09%, ${euiTheme.colors.backgroundBaseSubdued} 51.44%, ${euiTheme.colors.backgroundBasePlain} 87.98%)`
  }, children: [
    /* @__PURE__ */ jsxs("div", { css: { flexShrink: 0, height: 64, padding: 16, display: "flex", gap: 8, alignItems: "center" }, children: [
      /* @__PURE__ */ jsx(EuiButtonIcon, { iconType: "menu", color: "text", "aria-label": "Open conversation navigation", onClick: onNavigationClick, isDisabled: !onNavigationClick }),
      /* @__PURE__ */ jsxs("div", { css: { flex: 1, minWidth: 0 }, children: [
        /* @__PURE__ */ jsx("h2", { css: { fontSize: 14, fontWeight: euiTheme.font.weight.medium, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: title }),
        /* @__PURE__ */ jsx(EuiText, { size: "xs", color: "subdued", children: "Elastic AI Agent" })
      ] }),
      /* @__PURE__ */ jsx(EuiButtonIcon, { iconType: "boxesVertical", size: "s", color: "text", "aria-label": "More conversation actions", onClick: onMoreClick, isDisabled: !onMoreClick }),
      /* @__PURE__ */ jsx(EuiButtonIcon, { iconType: "cross", color: "text", "aria-label": "Close AI Agent", onClick: onClose })
    ] }),
    /* @__PURE__ */ jsxs("div", { role: "log", "aria-label": "Conversation", "aria-live": "polite", css: {
      flex: "1 1 0",
      minHeight: 0,
      overflowY: "auto",
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 24,
      ...messages.length || children ? {} : { justifyContent: "center", alignItems: "center" }
    }, children: [
      children ?? (messages.length ? messages.map((message) => message.role === "user" ? /* @__PURE__ */ jsx(
        EuiPanel,
        {
          color: "subdued",
          paddingSize: "m",
          hasBorder: false,
          hasShadow: false,
          css: { alignSelf: "flex-end", flexGrow: 0, flexShrink: 0, maxWidth: "85%", overflowWrap: "anywhere" },
          children: /* @__PURE__ */ jsx(EuiText, { size: "s", css: { whiteSpace: "pre-wrap" }, children: message.text })
        },
        message.id
      ) : /* @__PURE__ */ jsx("div", { css: { overflowWrap: "anywhere" }, children: /* @__PURE__ */ jsx(EuiMarkdownFormat, { textSize: "s", children: message.text }) }, message.id)) : welcome ?? /* @__PURE__ */ jsx(EuiTitle, { size: "m", children: /* @__PURE__ */ jsxs("h2", { css: { textAlign: "center", letterSpacing: "-0.2px" }, children: [
        "How can I help you?",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { css: { color: euiTheme.colors.textPrimary }, children: "I can investigate alerts" })
      ] }) })),
      isResponding && /* @__PURE__ */ jsx(EuiText, { size: "s", color: "subdued", role: "status", children: "Thinking\u2026" })
    ] }),
    /* @__PURE__ */ jsx("div", { css: { flexShrink: 0, padding: 16 }, children: /* @__PURE__ */ jsxs(
      "form",
      {
        "aria-label": "Message input form",
        onSubmit: (event) => {
          event.preventDefault();
          send();
        },
        css: {
          border: euiTheme.border.thin,
          borderRadius: 16,
          backgroundColor: euiTheme.colors.backgroundBasePlain,
          minHeight: 150,
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 8,
          "&:focus-within": { borderColor: euiTheme.colors.borderStrongPrimary }
        },
        children: [
          attachment && /* @__PURE__ */ jsxs(EuiPanel, { color: "subdued", paddingSize: "s", hasShadow: false, css: { alignSelf: "flex-start", maxWidth: "100%", display: "flex", alignItems: "center", gap: 8 }, children: [
            /* @__PURE__ */ jsx(EuiIcon, { type: attachment.iconType ?? "dashboardApp" }),
            /* @__PURE__ */ jsx(EuiText, { size: "s", css: { minWidth: 0, overflowWrap: "anywhere" }, children: /* @__PURE__ */ jsx("strong", { children: attachment.title }) })
          ] }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              ref: inputRef,
              value: draft,
              placeholder: "Ask anything",
              "aria-label": "Message input",
              onChange: (event) => setDraft(event.target.value),
              onKeyDown: (event) => {
                if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) {
                  event.preventDefault();
                  send();
                }
              },
              css: {
                flexGrow: 1,
                minHeight: 40,
                maxHeight: 240,
                resize: "none",
                border: "none",
                outline: "none",
                background: "transparent",
                padding: 0,
                font: "inherit",
                fontSize: 16,
                lineHeight: "1.4286rem",
                color: euiTheme.colors.textParagraph,
                "&:focus, &:focus-visible": { outline: "none" },
                "&::placeholder": { color: euiTheme.colors.textSubdued }
              }
            }
          ),
          /* @__PURE__ */ jsxs("div", { css: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }, children: [
            /* @__PURE__ */ jsx("div", { css: { minWidth: 0 }, children: connector && /* @__PURE__ */ jsx(EuiButtonEmpty, { size: "xs", color: "text", flush: "both", onClick: connector.onClick, isDisabled: !connector.onClick, "aria-label": `Select connector, ${connector.label}`, children: /* @__PURE__ */ jsxs("span", { css: { display: "inline-flex", alignItems: "center", gap: 8 }, children: [
              connector.logo && /* @__PURE__ */ jsx("img", { src: connector.logo, alt: "", width: 16, height: 16 }),
              connector.label
            ] }) }) }),
            /* @__PURE__ */ jsx(EuiButtonIcon, { type: "submit", iconType: "sortUp", display: "fill", size: "s", "aria-label": "Send message", isDisabled: !draft.trim() || isResponding || !onSubmit })
          ] })
        ]
      }
    ) })
  ] });
}

export {
  AgentSidebar
};
//# sourceMappingURL=chunk-P3OOHJ5E.js.map
