// src/rebuilt/unified-tabs/KibanaTabs.tsx
import { useLayoutEffect, useRef as useRef2, useState as useState2 } from "react";
import { EuiButtonIcon as EuiButtonIcon2, EuiContextMenuItem as EuiContextMenuItem2, EuiContextMenuPanel as EuiContextMenuPanel2, EuiPopover as EuiPopover2, useEuiTheme as useEuiTheme3, useGeneratedHtmlId } from "@elastic/eui";

// src/rebuilt/unified-tabs/ReplicaTab.tsx
import { useEffect, useRef, useState } from "react";
import { EuiButtonIcon, EuiContextMenuItem, EuiContextMenuPanel, EuiFieldText, EuiPopover, EuiText, useEuiTheme as useEuiTheme2 } from "@elastic/eui";

// src/rebuilt/unified-tabs/TabCorner.tsx
import { useEuiTheme } from "@elastic/eui";
import { jsx, jsxs } from "@emotion/react/jsx-runtime";
var TabCorner = ({ side }) => {
  const { euiTheme } = useEuiTheme();
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      "aria-hidden": true,
      viewBox: "0 0 8 8",
      fill: "none",
      style: {
        position: "absolute",
        bottom: 0,
        width: euiTheme.size.s,
        height: euiTheme.size.s,
        ...side === "left" ? { left: `-${euiTheme.size.s}`, transform: "scaleX(-1)" } : { right: `-${euiTheme.size.s}` }
      },
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M8 7.92676C7.67329 7.97351 7.33964 8 7 8H8V7.92676ZM0 8H7C3.13401 8 0 4.86599 0 1C0 0.660412 0.0255308 0.326664 0.0722656 0H0V8Z",
            fill: euiTheme.colors.backgroundBasePlain
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M7 8C3.13401 8 0 4.86599 0 1C0 0.660412 0.0255308 0.326664 0.0722656 0",
            stroke: euiTheme.colors.borderBaseSubdued,
            strokeWidth: euiTheme.border.width.thin,
            vectorEffect: "non-scaling-stroke"
          }
        )
      ]
    }
  );
};

// src/rebuilt/unified-tabs/ReplicaTab.tsx
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "@emotion/react/jsx-runtime";
function ReplicaTab({ item, selected, contentId, unsaved, hideSeparator, canClose, canRename, onSelect, onClose, onRename, onNavigate }) {
  const { euiTheme: theme } = useEuiTheme2();
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(item.label);
  const [menuOpen, setMenuOpen] = useState(false);
  const tabRef = useRef(null);
  const finished = useRef(false);
  const editTimer = useRef();
  useEffect(() => () => clearTimeout(editTimer.current), []);
  useEffect(() => {
    if (!selected) {
      setEditing(false);
      setMenuOpen(false);
    }
  }, [selected]);
  const edit = (delay = 0) => {
    onSelect();
    setMenuOpen(false);
    clearTimeout(editTimer.current);
    editTimer.current = setTimeout(() => {
      setValue(item.label);
      finished.current = false;
      setEditing(true);
    }, delay);
  };
  const finish = (save) => {
    if (finished.current) return;
    const label = value.trim();
    if (save && (!label || label.length > 120)) return;
    finished.current = true;
    if (save && label !== item.label) onRename(label);
    setEditing(false);
    tabRef.current?.focus();
  };
  return /* @__PURE__ */ jsxs2("div", { "data-test-subj": `unifiedTabs_tab_${item.id}`, css: {
    position: "relative",
    display: "inline-block",
    flexShrink: 0,
    borderRadius: theme.border.radius.small,
    margin: `${theme.size.xs} ${theme.size.xs} -${theme.border.width.thin}`,
    paddingBottom: theme.size.xs,
    background: selected ? theme.colors.backgroundBasePlain : "transparent",
    borderTop: `${theme.border.width.thick} solid ${selected ? theme.colors.primary : "transparent"}`,
    borderLeft: `${theme.border.width.thin} solid ${selected ? theme.colors.borderBaseSubdued : "transparent"}`,
    borderRight: `${theme.border.width.thin} solid ${selected ? theme.colors.borderBaseSubdued : "transparent"}`,
    borderBottomLeftRadius: selected ? 0 : void 0,
    borderBottomRightRadius: selected ? 0 : void 0,
    "&:hover .kbnProtoTabBody": { background: selected ? void 0 : theme.colors.backgroundLightPrimary, borderRadius: theme.border.radius.small },
    "&:hover .kbnProtoTabActions, &:focus-within .kbnProtoTabActions": { opacity: 1 },
    "&:hover .kbnProtoTabLabel, &:focus-within .kbnProtoTabLabel": {
      width: `calc(100% - ${theme.size.l} * 2 - ${theme.size.xs})`,
      maskImage: `linear-gradient(to right, black calc(100% - ${theme.size.s}), transparent 100%)`
    },
    "&::before": {
      content: '""',
      position: "absolute",
      right: `-${theme.size.xs}`,
      top: `calc(50% - ${theme.size.xxs})`,
      transform: "translateY(-50%)",
      width: theme.border.width.thin,
      height: theme.size.base,
      background: theme.colors.borderBasePlain,
      opacity: hideSeparator ? 0 : 1,
      pointerEvents: "none"
    }
  }, children: [
    /* @__PURE__ */ jsxs2("div", { className: "kbnProtoTabBody", css: { position: "relative", minWidth: 112, maxWidth: 280 }, children: [
      /* @__PURE__ */ jsx2(
        "div",
        {
          ref: tabRef,
          role: "tab",
          id: `tab-${item.id}`,
          "aria-controls": contentId,
          "aria-selected": selected,
          "aria-label": item.label,
          tabIndex: selected ? 0 : -1,
          "data-test-subj": `unifiedTabs_selectTabBtn_${item.id}`,
          onClick: editing ? void 0 : onSelect,
          onDoubleClick: canRename && !editing ? () => edit() : void 0,
          onKeyDown: (event) => {
            if (editing) return;
            if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
              event.preventDefault();
              onNavigate(event.key);
            }
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              onSelect();
            }
            if (event.key === "F10" && event.shiftKey && canRename) {
              event.preventDefault();
              setMenuOpen(true);
            }
          },
          css: {
            display: "inline-flex",
            alignItems: "center",
            width: "100%",
            height: theme.size.xxl,
            paddingInline: theme.size.xs,
            cursor: "pointer",
            "&:focus-visible": { outline: `2px solid ${theme.colors.primary}`, outlineOffset: -2 }
          },
          children: editing ? /* @__PURE__ */ jsx2(
            EuiFieldText,
            {
              compressed: true,
              autoFocus: true,
              "aria-label": "Rename tab",
              value,
              maxLength: 120,
              isInvalid: !value.trim() || value.length > 120,
              onChange: (event) => setValue(event.target.value),
              onKeyDown: (event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  finish(true);
                }
                if (event.key === "Escape") {
                  event.stopPropagation();
                  finish(false);
                }
              },
              onBlur: () => finish(true),
              css: { height: 28, marginTop: theme.size.xxs }
            }
          ) : /* @__PURE__ */ jsxs2("div", { className: "kbnProtoTabLabel", css: { paddingInline: theme.size.xs, minWidth: 0 }, children: [
            /* @__PURE__ */ jsx2(EuiText, { size: "s", className: "eui-textTruncate", css: {
              width: 96,
              maxWidth: "100%",
              color: selected ? theme.colors.text : theme.colors.subduedText,
              fontWeight: selected ? theme.font.weight.semiBold : theme.font.weight.regular
            }, children: item.label }),
            unsaved && /* @__PURE__ */ jsx2("span", { title: "Unsaved changes", "aria-label": "Unsaved changes", css: { position: "absolute", right: theme.size.s, top: theme.size.m }, children: "\u2022" })
          ] })
        }
      ),
      !editing && /* @__PURE__ */ jsxs2("div", { className: "kbnProtoTabActions", css: { position: "absolute", top: theme.size.s, right: theme.size.xs, display: "flex", opacity: menuOpen ? 1 : 0 }, children: [
        item.customMenuButton ?? (canRename && /* @__PURE__ */ jsx2(
          EuiPopover,
          {
            isOpen: menuOpen,
            closePopover: () => setMenuOpen(false),
            panelPaddingSize: "none",
            hasArrow: false,
            anchorPosition: "downLeft",
            button: /* @__PURE__ */ jsx2(
              EuiButtonIcon,
              {
                iconType: "boxesVertical",
                "aria-label": "Actions",
                title: "Actions",
                tabIndex: selected ? 0 : -1,
                color: "text",
                "data-test-subj": `unifiedTabs_tabMenuBtn_${item.id}`,
                onClick: () => setMenuOpen(!menuOpen)
              }
            ),
            children: /* @__PURE__ */ jsx2(EuiContextMenuPanel, { items: [/* @__PURE__ */ jsx2(EuiContextMenuItem, { onClick: () => edit(100), children: "Rename" }, "rename")] })
          }
        )),
        canClose && /* @__PURE__ */ jsx2(
          EuiButtonIcon,
          {
            iconType: "cross",
            "aria-label": "Close tab",
            title: "Close tab",
            tabIndex: selected ? 0 : -1,
            color: "text",
            "data-test-subj": `unifiedTabs_closeTabBtn_${item.id}`,
            onClick: onClose
          }
        )
      ] })
    ] }),
    selected && /* @__PURE__ */ jsxs2(Fragment, { children: [
      /* @__PURE__ */ jsx2(TabCorner, { side: "left" }),
      /* @__PURE__ */ jsx2(TabCorner, { side: "right" })
    ] })
  ] });
}

// src/rebuilt/unified-tabs/KibanaTabs.tsx
import { Fragment as Fragment2, jsx as jsx3, jsxs as jsxs3 } from "@emotion/react/jsx-runtime";
function KibanaTabs({
  items,
  selectedItemId,
  createItem,
  onChanged,
  renderContent,
  wrapTabsBar,
  hideTabsBar = false,
  tabContentIdOverride,
  appendRight,
  customNewTabButton,
  unsavedItemIds,
  disableCloseButton = false,
  disableInlineLabelEditing = false,
  disableTabsBarMenu = false,
  "data-test-subj": testSubject
}) {
  const { euiTheme: theme } = useEuiTheme3();
  const generatedId = useGeneratedHtmlId({ prefix: "unifiedTabs" });
  const contentId = tabContentIdOverride ?? generatedId;
  const selectedItem = items.find((item) => item.id === selectedItemId) ?? items[0] ?? null;
  const [menuOpen, setMenuOpen] = useState2(false);
  const focusId = useRef2(null);
  const barRef = useRef2(null);
  useLayoutEffect(() => {
    if (focusId.current !== null && selectedItem?.id === focusId.current) {
      barRef.current?.querySelector(`[role="tab"][aria-selected="true"]`)?.focus();
      focusId.current = null;
    }
  }, [items, selectedItem]);
  const select = (item) => {
    focusId.current = item.id;
    if (selectedItem?.id !== item.id) onChanged({ items, selectedItem: item });
  };
  const add = () => {
    const item = createItem();
    focusId.current = item.id;
    onChanged({ items: [...items, item], selectedItem: item });
  };
  const close = (item) => {
    if (disableCloseButton || items.length < 2) return;
    const index = items.findIndex((tab) => tab.id === item.id);
    const nextItems = items.filter((tab) => tab.id !== item.id);
    const nextSelected = selectedItem?.id === item.id ? nextItems[Math.min(index, nextItems.length - 1)] : selectedItem;
    focusId.current = nextSelected?.id ?? null;
    onChanged({ items: nextItems, selectedItem: nextSelected });
  };
  const bar = /* @__PURE__ */ jsxs3("div", { ref: barRef, css: { display: "flex", alignItems: "center", width: "100%", minWidth: 0, gap: theme.size.xs, background: theme.colors.backgroundBasePlain }, children: [
    /* @__PURE__ */ jsxs3("div", { css: { display: "flex", alignItems: "center", flex: 1, minWidth: 0, gap: theme.size.xs }, children: [
      /* @__PURE__ */ jsx3("div", { role: "tablist", "aria-label": "Tabs", "aria-orientation": "horizontal", css: {
        display: "flex",
        alignItems: "flex-end",
        minWidth: 0,
        overflowX: "auto",
        scrollbarWidth: "none",
        paddingInline: theme.size.xs,
        paddingBottom: theme.size.s,
        marginBottom: `-${theme.size.s}`
      }, children: items.map((item, index) => /* @__PURE__ */ jsx3(
        ReplicaTab,
        {
          item,
          selected: selectedItem?.id === item.id,
          contentId,
          unsaved: unsavedItemIds?.includes(item.id),
          hideSeparator: selectedItem?.id === item.id || selectedItem?.id === items[index + 1]?.id || index === items.length - 1,
          canClose: !disableCloseButton && items.length > 1,
          canRename: !disableInlineLabelEditing,
          onSelect: () => select(item),
          onClose: () => close(item),
          onRename: (label) => {
            const updated = { ...item, label };
            focusId.current = updated.id;
            onChanged({ items: items.map((tab) => tab.id === item.id ? updated : tab), selectedItem: updated });
          },
          onNavigate: (key) => {
            const next = key === "Home" ? 0 : key === "End" ? items.length - 1 : (index + (key === "ArrowRight" ? 1 : -1) + items.length) % items.length;
            select(items[next]);
          }
        },
        item.id
      )) }),
      /* @__PURE__ */ jsx3("span", { css: { flexShrink: 0 }, children: customNewTabButton ?? /* @__PURE__ */ jsx3(EuiButtonIcon2, { iconType: "plus", "aria-label": "New tab", title: "New tab", size: "xs", color: "text", onClick: add }) })
    ] }),
    !disableTabsBarMenu && /* @__PURE__ */ jsx3(
      EuiPopover2,
      {
        isOpen: menuOpen,
        closePopover: () => setMenuOpen(false),
        panelPaddingSize: "none",
        hasArrow: false,
        anchorPosition: "downRight",
        button: /* @__PURE__ */ jsx3(EuiButtonIcon2, { iconType: "chevronSingleDown", "aria-label": "Tabs menu", title: "Tabs menu", size: "xs", color: "text", onClick: () => setMenuOpen(!menuOpen) }),
        children: /* @__PURE__ */ jsx3(EuiContextMenuPanel2, { items: items.map((item) => /* @__PURE__ */ jsx3(
          EuiContextMenuItem2,
          {
            icon: selectedItem?.id === item.id ? "check" : "empty",
            onClick: () => {
              setMenuOpen(false);
              select(item);
            },
            children: item.label
          },
          item.id
        )) })
      }
    ),
    appendRight && /* @__PURE__ */ jsxs3(Fragment2, { children: [
      /* @__PURE__ */ jsx3("span", { "aria-hidden": true, css: { width: theme.border.width.thin, height: 28, background: theme.colors.borderBasePlain, flexShrink: 0 } }),
      /* @__PURE__ */ jsx3("div", { css: { flexShrink: 0, marginRight: theme.size.s }, children: appendRight })
    ] })
  ] });
  const barNode = hideTabsBar ? null : bar;
  const renderedBar = wrapTabsBar ? wrapTabsBar(barNode) : barNode;
  return /* @__PURE__ */ jsxs3("div", { "data-test-subj": testSubject, css: renderContent ? { display: "flex", flexDirection: "column", height: "100%", minHeight: 0, minWidth: 0 } : void 0, children: [
    renderedBar != null && /* @__PURE__ */ jsx3("div", { css: { flexShrink: 0, borderBottom: theme.border.thin }, children: renderedBar }),
    renderContent && selectedItem && /* @__PURE__ */ jsx3(
      "div",
      {
        role: "tabpanel",
        id: contentId,
        "aria-labelledby": `tab-${selectedItem.id}`,
        "data-test-subj": "unifiedTabs_selectedTabContent",
        css: { display: "flex", flexDirection: "column", flex: "1 1 0", minHeight: 0, minWidth: 0 },
        children: renderContent(selectedItem)
      }
    )
  ] });
}

export {
  KibanaTabs
};
//# sourceMappingURL=chunk-7ZQULD7R.js.map
