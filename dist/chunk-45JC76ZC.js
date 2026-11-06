// src/replicas/app-header/ChromeAppHeader.tsx
import {
  EuiButtonEmpty,
  EuiButtonIcon as EuiButtonIcon3,
  EuiHealth,
  EuiLink,
  EuiText as EuiText2,
  EuiToolTip as EuiToolTip3,
  useEuiTheme as useEuiTheme3
} from "@elastic/eui";

// src/replicas/app-header/PageHeaderMenu.tsx
import { useRef, useState } from "react";
import {
  EuiBadge,
  EuiButton,
  EuiButtonIcon,
  EuiContextMenu,
  EuiHeaderLink,
  EuiHideFor,
  EuiIcon,
  EuiIconTip,
  EuiPopover,
  EuiSplitButton,
  EuiSwitch,
  EuiText,
  EuiToolTip,
  useEuiTheme
} from "@elastic/eui";
import { Fragment, jsx, jsxs } from "@emotion/react/jsx-runtime";
var plainText = (value) => typeof value === "string" ? value : "";
var resolveValue = (value) => typeof value === "function" ? value() : value;
var disabled = (value) => Boolean(resolveValue(value));
var modified = (event) => event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
var titleCase = (value) => value.charAt(0).toUpperCase() + value.slice(1);
function ActionPopover({ items, button, width = 256, testId }) {
  const { euiTheme } = useEuiTheme();
  const [open, setOpen] = useState(false);
  const anchor = useRef(null);
  const opener = useRef(null);
  const close = () => setOpen(false);
  const panels = [];
  let nextId = 0;
  const build = (entries, title, panelWidth = width) => {
    const id = nextId++;
    const panelItems = [];
    for (const item of entries) {
      if (item.separator === "above") panelItems.push({ isSeparator: true, key: `${item.id}-above` });
      const childWidth = "popoverWidth" in item && typeof item.popoverWidth === "number" ? item.popoverWidth : width;
      const child = item.items?.length ? build(item.items, plainText(item.label), childWidth) : void 0;
      panelItems.push({
        name: /* @__PURE__ */ jsxs("span", { children: [
          titleCase(plainText(item.label)),
          item.labelBadgeText && /* @__PURE__ */ jsxs(Fragment, { children: [
            " ",
            /* @__PURE__ */ jsx(EuiBadge, { color: "hollow", children: plainText(item.labelBadgeText) })
          ] }),
          item.description && /* @__PURE__ */ jsx(EuiText, { size: "xs", color: "subdued", children: plainText(item.description) })
        ] }),
        icon: item.iconType,
        disabled: disabled(item.disableButton) || item.isLoading,
        href: item.href,
        target: item.target,
        panel: child,
        "data-test-subj": item.testId,
        toolTipContent: [plainText(resolveValue(item.tooltipTitle)), plainText(resolveValue(item.tooltipContent))].filter(Boolean).join(": "),
        css: { color: item.isDestructive ? euiTheme.colors.textDanger : void 0 },
        onClick: (event) => {
          if (child !== void 0 || disabled(item.disableButton) || item.isLoading) return;
          if (item.href && modified(event)) return;
          if (item.href && item.run) event.preventDefault();
          const triggerElement = event.currentTarget;
          const fallback = opener.current ?? anchor.current?.querySelector("button, a");
          close();
          item.run?.({ triggerElement, returnFocus: () => (triggerElement.isConnected ? triggerElement : fallback)?.focus() });
        }
      });
      if (item.separator === "below") panelItems.push({ isSeparator: true, key: `${item.id}-below` });
    }
    panels.push({ id, title, items: panelItems, width: panelWidth });
    return id;
  };
  build(items);
  return /* @__PURE__ */ jsx(
    EuiPopover,
    {
      button: /* @__PURE__ */ jsx("span", { ref: anchor, css: { display: "inline-flex" }, onClickCapture: (event) => {
        if (event.target instanceof Element) opener.current = event.target.closest("button, a");
      }, children: button(() => setOpen((value) => !value), open) }),
      isOpen: open,
      closePopover: close,
      panelPaddingSize: "none",
      anchorPosition: "downRight",
      "data-test-subj": testId,
      children: /* @__PURE__ */ jsx(EuiContextMenu, { initialPanelId: 0, panels })
    }
  );
}
function MenuButton({ item, primary = false }) {
  const split = "splitButtonProps" in item ? item.splitButtonProps : void 0;
  const label = titleCase(plainText(item.label));
  const isDisabled = disabled(item.disableButton);
  const tooltip = { content: plainText(resolveValue(item.tooltipContent)), title: plainText(resolveValue(item.tooltipTitle)) };
  const handleClick = (event) => {
    if (isDisabled || item.isLoading || split?.isMainButtonDisabled) return;
    if (item.href && modified(event)) return;
    if (item.href && item.run) event.preventDefault();
    const triggerElement = event.currentTarget;
    item.run?.({ triggerElement, returnFocus: () => triggerElement.focus() });
  };
  const tracking = { "data-ebt-element": "appMenu", "data-ebt-action": item.ebt?.action, "data-ebt-detail": item.ebt?.detail };
  const standard = (toggle, open = false) => {
    const props = {
      id: item.htmlId,
      "data-test-subj": item.testId,
      ...tracking,
      iconType: item.iconType,
      href: item.href,
      target: item.href ? item.target : void 0,
      isDisabled,
      isLoading: item.isLoading,
      isSelected: open || item.isSelected,
      "aria-haspopup": item.items?.length ? "menu" : void 0,
      onClick: toggle ?? handleClick
    };
    return primary ? /* @__PURE__ */ jsx(EuiButton, { ...props, color: "text", size: "s", children: label }) : /* @__PURE__ */ jsx(EuiHeaderLink, { ...props, color: "text", size: "s", iconSide: "left", children: label });
  };
  let control;
  if (split) {
    const secondary = (toggle, open = false, mainToggle) => /* @__PURE__ */ jsxs(
      EuiSplitButton,
      {
        size: "s",
        color: "text",
        fill: false,
        isDisabled,
        isLoading: item.isLoading,
        children: [
          /* @__PURE__ */ jsxs(
            EuiSplitButton.ActionPrimary,
            {
              id: item.htmlId,
              "data-test-subj": item.testId,
              ...tracking,
              href: item.href,
              target: item.target,
              onClick: mainToggle ?? handleClick,
              isSelected: open || item.isSelected,
              isDisabled: split.isMainButtonDisabled,
              isLoading: split.isMainButtonLoading,
              tooltipProps: tooltip.content || tooltip.title ? tooltip : void 0,
              children: [
                (item.iconType || split.iconType) && !split.isMainButtonLoading && /* @__PURE__ */ jsxs("span", { css: { display: "inline-flex", position: "relative", marginInlineEnd: 4 }, children: [
                  /* @__PURE__ */ jsx(EuiIcon, { type: item.iconType || split.iconType }),
                  split.showNotificationIndicator && /* @__PURE__ */ jsx("span", { css: { position: "absolute", top: -4, right: -4 }, children: /* @__PURE__ */ jsx(EuiIconTip, { type: "dot", color: "primary", content: plainText(split.notificationIndicatorTooltipContent) }) })
                ] }),
                label
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            EuiSplitButton.ActionSecondary,
            {
              iconType: split.secondaryButtonIconType ?? "chevronSingleDown",
              "aria-label": plainText(split.secondaryButtonAriaLabel),
              isDisabled: split.isSecondaryButtonDisabled,
              "data-test-subj": item.testId ? `${item.testId}-secondary-button` : void 0,
              tooltipProps: split.secondaryButtonTooltipContent ? { content: plainText(split.secondaryButtonTooltipContent) } : void 0,
              onClick: toggle ?? ((event) => {
                const triggerElement = event.currentTarget;
                split.run?.({ triggerElement, returnFocus: () => triggerElement.focus() });
              })
            }
          )
        ]
      }
    );
    const withSecondary = (mainToggle) => split.items?.length ? /* @__PURE__ */ jsx(ActionPopover, { items: split.items, width: item.popoverWidth, testId: item.popoverTestId, button: (toggle, open) => secondary(toggle, open, mainToggle) }) : secondary(void 0, false, mainToggle);
    control = item.items?.length ? /* @__PURE__ */ jsx(ActionPopover, { items: item.items, width: item.popoverWidth, testId: item.popoverTestId, button: (toggle) => withSecondary(toggle) }) : withSecondary();
  } else if (item.items?.length) {
    control = /* @__PURE__ */ jsx(ActionPopover, { items: item.items, width: item.popoverWidth, testId: item.popoverTestId, button: standard });
  } else {
    control = standard();
    if (tooltip.content || tooltip.title) control = /* @__PURE__ */ jsx(EuiToolTip, { ...tooltip, children: control });
  }
  return /* @__PURE__ */ jsx(EuiHideFor, { sizes: item.hidden ?? "none", children: control });
}
function PageHeaderMenu({ menu }) {
  if (!menu) return null;
  const sorted = [...menu.items ?? []].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  const limit = sorted.some((item) => item.overflow) || sorted.length > 3 ? 2 : 3;
  const visible = sorted.filter((item) => !item.overflow).slice(0, limit);
  const overflow = sorted.filter((item) => !visible.includes(item));
  const toggle = menu.switch;
  const switchButton = toggle && /* @__PURE__ */ jsx(
    EuiSwitch,
    {
      id: toggle.id,
      label: plainText(toggle.label),
      checked: toggle.checked,
      onChange: (event) => toggle.onChange(event.target.checked),
      disabled: toggle.disabled,
      compressed: true,
      labelProps: toggle.labelProps,
      "data-test-subj": toggle["data-test-subj"],
      css: { marginInlineEnd: 8 }
    }
  );
  return /* @__PURE__ */ jsxs("div", { css: { display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }, children: [
    toggle && (toggle.tooltipContent || toggle.tooltipTitle ? /* @__PURE__ */ jsx(EuiToolTip, { content: plainText(resolveValue(toggle.tooltipContent)), title: plainText(resolveValue(toggle.tooltipTitle)), children: switchButton }) : switchButton),
    /* @__PURE__ */ jsxs("div", { css: { display: "flex", alignItems: "center" }, children: [
      visible.map((item) => /* @__PURE__ */ jsx(MenuButton, { item }, item.id)),
      overflow.length > 0 && /* @__PURE__ */ jsx(ActionPopover, { items: overflow, button: (toggleOpen, open) => /* @__PURE__ */ jsx(
        EuiButtonIcon,
        {
          iconType: "boxesVertical",
          color: "text",
          size: "s",
          "aria-label": "More",
          "aria-haspopup": "menu",
          "aria-expanded": open,
          onClick: toggleOpen
        }
      ) })
    ] }),
    menu.primaryActionItem && /* @__PURE__ */ jsx(MenuButton, { item: menu.primaryActionItem, primary: true })
  ] });
}

// src/replicas/app-header/PageHeaderTitle.tsx
import { useEffect, useId, useRef as useRef2, useState as useState2 } from "react";
import { EuiTitle, useEuiTheme as useEuiTheme2 } from "@elastic/eui";
import { jsx as jsx2, jsxs as jsxs2 } from "@emotion/react/jsx-runtime";
function PageHeaderTitle({ title, compact, hasBack }) {
  const { euiTheme } = useEuiTheme2();
  const editable = typeof title === "object" && title !== null;
  const text = plainText(editable ? title.text : title);
  const placeholder = editable ? plainText(title.placeholder) : "";
  const [editing, setEditing] = useState2(false);
  const [draft, setDraft] = useState2(text);
  const [error, setError] = useState2("");
  const [saving, setSaving] = useState2(false);
  const pending = useRef2(false);
  const resolved = useRef2(false);
  const input = useRef2(null);
  const button = useRef2(null);
  const errorId = useId();
  useEffect(() => {
    if (!editing) setDraft(text);
  }, [text, editing]);
  useEffect(() => {
    if (editing) {
      input.current?.focus();
      input.current?.select();
    }
  }, [editing]);
  const finish = (restoreFocus) => {
    resolved.current = true;
    setEditing(false);
    if (restoreFocus) requestAnimationFrame(() => button.current?.focus());
  };
  const save = async (restoreFocus) => {
    if (!editable || pending.current || resolved.current) return;
    const nextTitle = draft.trim();
    if (nextTitle === text.trim()) {
      finish(restoreFocus);
      return;
    }
    if (!nextTitle) {
      setError("Title cannot be empty.");
      return;
    }
    pending.current = true;
    setSaving(true);
    try {
      const result = await title.onSave(nextTitle);
      if (typeof result === "string" && result) {
        setError(result);
        return;
      }
      setError("");
      finish(restoreFocus);
    } catch {
      setError("Enter a valid title.");
    } finally {
      pending.current = false;
      setSaving(false);
    }
  };
  if (!editable && !text) return null;
  return /* @__PURE__ */ jsxs2("div", { css: { minWidth: 0, maxWidth: "100%", position: "relative", paddingInlineStart: compact && !hasBack ? 8 : void 0 }, children: [
    /* @__PURE__ */ jsx2(EuiTitle, { size: compact ? "xs" : "s", children: /* @__PURE__ */ jsx2("h1", { css: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: editing ? /* @__PURE__ */ jsx2(
      "input",
      {
        ref: input,
        value: draft,
        disabled: saving,
        "aria-label": editable ? plainText(title.ariaLabel) || "Edit title" : "Edit title",
        "aria-invalid": !!error,
        "aria-describedby": error ? errorId : void 0,
        placeholder,
        onChange: (event) => {
          setDraft(event.target.value);
          setError("");
        },
        onBlur: () => {
          void save(false);
        },
        onKeyDown: (event) => {
          if (event.nativeEvent.isComposing) return;
          if (event.key === "Enter") {
            event.preventDefault();
            void save(true);
          }
          if (event.key === "Escape" && !pending.current) {
            event.preventDefault();
            setError("");
            finish(true);
          }
        },
        css: { width: `${Math.max(draft.length, placeholder.length, 4) + 1}ch`, maxWidth: "100%", padding: 0, border: 0, background: "transparent", color: "inherit", font: "inherit", outlineOffset: 2 }
      }
    ) : editable ? /* @__PURE__ */ jsx2(
      "button",
      {
        ref: button,
        type: "button",
        onClick: () => {
          resolved.current = false;
          setError("");
          setDraft(text);
          setEditing(true);
        },
        "aria-label": plainText(title.ariaLabel) || "Edit title",
        css: { padding: 0, border: 0, background: "transparent", color: text ? "inherit" : euiTheme.colors.textSubdued, font: "inherit", cursor: "text", maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis", "&:hover": { boxShadow: `0 0 0 4px ${euiTheme.colors.backgroundBaseSubdued}` } },
        children: text || placeholder
      }
    ) : text }) }),
    error && /* @__PURE__ */ jsx2("span", { id: errorId, role: "alert", css: { position: "absolute", top: "100%", fontSize: 12, color: euiTheme.colors.textDanger, zIndex: 1 }, children: error })
  ] });
}

// src/replicas/app-header/PageHeaderExtras.tsx
import { useState as useState3 } from "react";
import {
  EuiBadge as EuiBadge2,
  EuiButtonIcon as EuiButtonIcon2,
  EuiIcon as EuiIcon2,
  EuiIconTip as EuiIconTip2,
  EuiNotificationBadge,
  EuiPopover as EuiPopover2,
  EuiTab,
  EuiTabs,
  EuiToolTip as EuiToolTip2
} from "@elastic/eui";
import { Fragment as Fragment2, jsx as jsx3, jsxs as jsxs3 } from "@emotion/react/jsx-runtime";
var badgeItems = (items) => items.map((item, index) => ({
  id: String(index),
  label: plainText(item.name),
  iconType: item.icon,
  testId: item["data-test-subj"],
  disableButton: item.disabled,
  tooltipContent: plainText(item.toolTipContent),
  popoverWidth: item.popoverWidth,
  ...item.items ? { items: badgeItems(item.items) } : { run: item.onClick ?? (() => {
  }) }
}));
function Badge({ badge }) {
  const label = plainText(badge.label);
  const render = (onClick) => {
    const props = {
      color: badge.color ?? "hollow",
      "data-test-subj": badge["data-test-subj"],
      css: { maxWidth: 200 },
      iconType: badge.items ? "chevronSingleDown" : void 0,
      iconSide: "right"
    };
    const control = onClick ? /* @__PURE__ */ jsx3(EuiBadge2, { ...props, onClick, onClickAriaLabel: plainText(badge.onClickAriaLabel) || `Click ${label} badge`, children: label }) : /* @__PURE__ */ jsx3(EuiBadge2, { ...props, children: label });
    return badge.tooltip ? /* @__PURE__ */ jsx3(EuiToolTip2, { content: plainText(badge.tooltip), children: control }) : control;
  };
  if (badge.items) return /* @__PURE__ */ jsx3(ActionPopover, { items: badgeItems(badge.items), width: badge.popoverWidth, button: (toggle) => render(toggle) });
  return render(badge.onClick);
}
function PageHeaderBadges({ badges = [] }) {
  const [open, setOpen] = useState3(false);
  const visible = badges.length > 3 ? badges.slice(0, 2) : badges;
  const overflow = badges.length > 3 ? badges.slice(2) : [];
  return /* @__PURE__ */ jsxs3(Fragment2, { children: [
    visible.map((badge, index) => /* @__PURE__ */ jsx3(Badge, { badge }, index)),
    overflow.length > 0 && /* @__PURE__ */ jsx3(
      EuiPopover2,
      {
        isOpen: open,
        closePopover: () => setOpen(false),
        panelPaddingSize: "s",
        button: /* @__PURE__ */ jsxs3(EuiBadge2, { color: "hollow", onClick: () => setOpen((value) => !value), onClickAriaLabel: `Show ${overflow.length} more badges`, children: [
          "+",
          overflow.length
        ] }),
        children: /* @__PURE__ */ jsx3("div", { css: { display: "flex", gap: 4, flexWrap: "wrap", maxWidth: 240 }, children: overflow.map((badge, index) => /* @__PURE__ */ jsx3(Badge, { badge: { ...badge, onClick: badge.onClick ? () => {
          badge.onClick?.();
          setOpen(false);
        } : void 0 } }, index)) })
      }
    )
  ] });
}
function PageHeaderTabs({ tabs }) {
  return /* @__PURE__ */ jsx3(EuiTabs, { size: "m", bottomBorder: false, children: tabs.map((tab) => {
    const badge = typeof tab.badge === "number" ? /* @__PURE__ */ jsx3(EuiNotificationBadge, { color: "subdued", size: "m", children: tab.badge }) : tab.badge ? tab.badge.tooltip ? /* @__PURE__ */ jsx3(EuiIconTip2, { type: tab.badge.iconType, color: tab.badge.color, content: plainText(tab.badge.tooltip) }) : /* @__PURE__ */ jsx3(EuiIcon2, { type: tab.badge.iconType, color: tab.badge.color, "aria-hidden": true }) : void 0;
    const label = tab.toolTipContent ? /* @__PURE__ */ jsx3(EuiToolTip2, { content: plainText(tab.toolTipContent), children: /* @__PURE__ */ jsx3("span", { children: plainText(tab.label) }) }) : plainText(tab.label);
    return /* @__PURE__ */ jsxs3("span", { css: { display: "inline-flex", alignItems: "center" }, children: [
      /* @__PURE__ */ jsx3(
        EuiTab,
        {
          id: tab.id,
          isSelected: tab.isSelected,
          onClick: tab.onClick,
          href: tab.href,
          disabled: tab.disabled,
          "data-test-subj": tab["data-test-subj"],
          append: badge,
          children: label
        }
      ),
      tab.isSelected && tab.actions && /* @__PURE__ */ jsx3(ActionPopover, { items: tab.actions.items.map((item) => ({
        id: item.id,
        label: item.label,
        iconType: item.iconType,
        disableButton: item.disabled,
        run: item.onClick,
        testId: item["data-test-subj"]
      })), button: (toggle, open) => /* @__PURE__ */ jsx3(
        EuiButtonIcon2,
        {
          iconType: "ellipsis",
          size: "xs",
          "aria-label": plainText(tab.actions.ariaLabel),
          "data-test-subj": tab.actions["data-test-subj"],
          onClick: toggle,
          "aria-expanded": open,
          "aria-haspopup": "menu"
        }
      ) })
    ] }, tab.id);
  }) });
}

// src/replicas/app-header/ChromeAppHeader.tsx
import { Fragment as Fragment3, jsx as jsx4, jsxs as jsxs4 } from "@emotion/react/jsx-runtime";
function ChromeAppHeader({
  title,
  back,
  badges,
  share,
  favorite,
  description,
  metadata,
  tabs,
  menu,
  titleAppend,
  spacing,
  borderless = false,
  sticky = true
}) {
  const { euiTheme: theme } = useEuiTheme3();
  const sparse = title === void 0 && !badges?.length && !tabs?.length && !description && !metadata?.length && titleAppend == null && !favorite && !share;
  const resolvedSpacing = spacing ?? (sparse ? "compact" : "standard");
  const compact = resolvedSpacing === "compact";
  const inset = resolvedSpacing === "flush" ? void 0 : compact ? theme.size.s : resolvedSpacing === "largeBleed" ? theme.size.l : theme.size.base;
  const bleed = resolvedSpacing === "bleed" || resolvedSpacing === "largeBleed";
  const hasSecondary = !!description || !!metadata?.length;
  const hasTabs = !!tabs?.length;
  const hasAppend = titleAppend != null;
  const isFavorite = favorite?.status === "favorited" || favorite?.status === "removing";
  const favoriteBusy = favorite?.status === "adding" || favorite?.status === "removing";
  const shareLabel = plainText(share?.label) || "Share";
  const iconCss = { width: 24, height: 24, color: theme.colors.textSubdued };
  if (sparse && !back && !menu?.items?.length && !menu?.primaryActionItem && !menu?.switch) return null;
  return /* @__PURE__ */ jsxs4("div", { "data-test-subj": "kibanaPageHeader", css: {
    position: sticky ? "sticky" : void 0,
    top: sticky ? 0 : void 0,
    zIndex: sticky ? theme.levels.mask : void 0,
    flexShrink: 0,
    minWidth: 0,
    boxSizing: "border-box",
    paddingInline: inset,
    marginInline: bleed ? `-${inset}` : void 0,
    marginTop: bleed ? `-${inset}` : void 0,
    background: theme.colors.backgroundBasePlain,
    borderBottom: borderless ? void 0 : theme.border.thin,
    marginBottom: borderless ? void 0 : `-${theme.border.width.thin}`
  }, children: [
    /* @__PURE__ */ jsxs4("div", { css: {
      display: "flex",
      alignItems: "center",
      gap: theme.size.m,
      flexWrap: "wrap",
      minWidth: 0,
      boxSizing: "border-box",
      minHeight: hasSecondary || hasTabs ? hasAppend ? void 0 : `calc(${compact ? 48 : 64}px - ${inset ?? theme.size.base} + ${theme.size.xs})` : compact ? 48 : 64,
      paddingBlockStart: hasAppend ? void 0 : inset ?? theme.size.base,
      paddingBlockEnd: hasAppend ? void 0 : hasSecondary || hasTabs ? theme.size.xs : inset ?? theme.size.base
    }, children: [
      /* @__PURE__ */ jsxs4("div", { css: { display: "flex", alignItems: "center", flex: 1, minWidth: 0 }, children: [
        /* @__PURE__ */ jsxs4("div", { css: { display: "flex", alignItems: "center", gap: theme.size.xs, minWidth: 0, maxWidth: hasAppend ? "min(40%, 360px)" : "100%" }, children: [
          /* @__PURE__ */ jsxs4("div", { css: { display: "flex", alignItems: "center", gap: theme.size.s, minWidth: 0 }, children: [
            back && /* @__PURE__ */ jsx4(EuiToolTip3, { content: `Back to ${plainText(back.label)}`, children: /* @__PURE__ */ jsx4(
              EuiButtonIcon3,
              {
                iconType: "sortLeft",
                color: "text",
                display: "empty",
                size: "xs",
                css: { color: theme.colors.textSubdued, flexShrink: 0 },
                href: back.href,
                onClick: back.onClick,
                "aria-label": `Back to ${plainText(back.label)}`
              }
            ) }),
            title !== void 0 && /* @__PURE__ */ jsx4(PageHeaderTitle, { title, compact, hasBack: !!back })
          ] }),
          /* @__PURE__ */ jsx4(PageHeaderBadges, { badges }),
          share && /* @__PURE__ */ jsx4(EuiToolTip3, { content: plainText(share.tooltip?.content) || shareLabel, title: plainText(share.tooltip?.title) || void 0, children: /* @__PURE__ */ jsx4(
            EuiButtonIcon3,
            {
              iconType: "share",
              color: "text",
              display: "empty",
              size: "xs",
              css: iconCss,
              "aria-label": shareLabel,
              isDisabled: share.isDisabled,
              onClick: (event) => {
                const trigger = event.currentTarget;
                void share.onClick({ returnFocus: () => trigger.focus() });
              }
            }
          ) }),
          favorite && /* @__PURE__ */ jsx4(EuiToolTip3, { content: isFavorite ? "Remove from Starred" : "Add to Starred", children: /* @__PURE__ */ jsx4(
            EuiButtonIcon3,
            {
              iconType: isFavorite ? "starFilled" : "starEmpty",
              color: "text",
              display: "empty",
              size: "xs",
              css: iconCss,
              "aria-label": isFavorite ? "Remove from Starred" : "Add to Starred",
              "aria-pressed": isFavorite,
              "aria-busy": favoriteBusy,
              isDisabled: favorite.isDisabled || favoriteBusy,
              onClick: favorite.onToggle
            }
          ) })
        ] }),
        hasAppend && /* @__PURE__ */ jsx4("div", { css: { display: "flex", alignItems: "center", flex: "1 1 0", minWidth: 0 }, children: titleAppend })
      ] }),
      /* @__PURE__ */ jsx4(PageHeaderMenu, { menu })
    ] }),
    hasSecondary && /* @__PURE__ */ jsx4("div", { css: { display: "flex", alignItems: "center", flexWrap: "wrap", gap: `${theme.size.xs} ${theme.size.m}`, paddingBlockEnd: hasTabs ? theme.size.xs : inset ?? theme.size.base }, children: description ? /* @__PURE__ */ jsx4(EuiText2, { size: "xs", color: "subdued", css: { maxInlineSize: "80ch" }, children: /* @__PURE__ */ jsxs4("p", { children: [
      plainText(typeof description === "string" ? description : description.text),
      typeof description === "object" && description.learnMoreUrl && /* @__PURE__ */ jsxs4(Fragment3, { children: [
        " ",
        /* @__PURE__ */ jsx4(EuiLink, { href: description.learnMoreUrl, external: true, target: "_blank", children: "Learn more" })
      ] })
    ] }) }) : metadata?.slice(0, 3).map((item, index) => {
      if (!item) return null;
      const css = { color: theme.colors.textSubdued, fontWeight: theme.font.weight.bold };
      if (item.type === "health") return /* @__PURE__ */ jsx4(EuiHealth, { color: item.color, textSize: "xs", css, "data-test-subj": item["data-test-subj"], children: plainText(item.label) }, index);
      if (item.type === "button") return /* @__PURE__ */ jsx4(
        EuiButtonEmpty,
        {
          color: "text",
          flush: "both",
          size: "xs",
          href: item.href,
          onClick: item.onClick,
          css: { ...css, height: "auto", minHeight: 0, lineHeight: "inherit" },
          "data-test-subj": item["data-test-subj"],
          children: plainText(item.label)
        },
        index
      );
      return /* @__PURE__ */ jsxs4(EuiText2, { size: "xs", css, "data-test-subj": item["data-test-subj"], children: [
        plainText(item.label),
        item.value !== void 0 && /* @__PURE__ */ jsxs4("span", { css: { fontWeight: theme.font.weight.medium }, children: [
          " ",
          plainText(item.value)
        ] })
      ] }, index);
    }) }),
    hasTabs && /* @__PURE__ */ jsx4(PageHeaderTabs, { tabs })
  ] });
}
var KibanaPageHeader = ChromeAppHeader;

export {
  ChromeAppHeader,
  KibanaPageHeader
};
//# sourceMappingURL=chunk-45JC76ZC.js.map
