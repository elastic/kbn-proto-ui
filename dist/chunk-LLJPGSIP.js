import {
  Sidebar,
  clampSidebarWidth,
  getDefaultSidebarWidth
} from "./chunk-HHEX5IEH.js";
import {
  AgentSidebar
} from "./chunk-P3OOHJ5E.js";
import {
  ChromeAppHeader
} from "./chunk-EM2GFXKE.js";
import {
  require_ui_chrome_layout
} from "./chunk-NXGUSL52.js";
import {
  ChromeHeader,
  headerButtonBaseStyles,
  useHeaderButtonStyleVars
} from "./chunk-42QJLFWU.js";
import {
  KibanaSideNav
} from "./chunk-YCIE2MCI.js";
import {
  __toESM
} from "./chunk-I5KYHNF2.js";

// src/wrappers/KibanaChromeLayout.tsx
var import_ui_chrome_layout = __toESM(require_ui_chrome_layout(), 1);
import { useCallback, useEffect, useId, useState } from "react";

// src/rebuilt/chrome-header/HeaderLogo.tsx
import { css } from "@emotion/react";
import { EuiIcon } from "@elastic/eui";
import { jsx } from "@emotion/react/jsx-runtime";
var logoLinkStyles = css({
  width: 32,
  justifyContent: "center",
  border: "none",
  padding: 0,
  textDecoration: "none",
  color: "inherit",
  svg: { width: 20, height: 20 }
});
var isModifiedClick = (event) => event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
function ChromeHeaderLogo({ href, onClick, label = "Elastic home" }) {
  const styleVars = useHeaderButtonStyleVars();
  const logo = /* @__PURE__ */ jsx(EuiIcon, { type: "logoElastic", size: "l", "aria-hidden": true });
  if (href !== void 0) {
    return /* @__PURE__ */ jsx(
      "a",
      {
        href,
        "aria-label": label,
        "data-test-subj": "nav-header-logo",
        css: [headerButtonBaseStyles, logoLinkStyles],
        style: styleVars,
        onClick: onClick ? (event) => {
          if (isModifiedClick(event)) return;
          event.preventDefault();
          onClick(event);
        } : void 0,
        children: logo
      }
    );
  }
  if (onClick) {
    return /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        "aria-label": label,
        "data-test-subj": "nav-header-logo",
        css: [headerButtonBaseStyles, logoLinkStyles],
        style: styleVars,
        onClick,
        children: logo
      }
    );
  }
  return /* @__PURE__ */ jsx(
    "span",
    {
      "data-test-subj": "nav-header-logo",
      role: "img",
      "aria-label": "Elastic",
      css: { display: "inline-flex", svg: { width: 20, height: 20 } },
      children: logo
    }
  );
}

// src/wrappers/KibanaChromeLayout.tsx
import { Fragment, jsx as jsx2, jsxs } from "@emotion/react/jsx-runtime";
function KibanaChromeLayout({ solution = "observability", breadcrumbs, agent, sidebarApps = [], activeSidebarApp, onActiveSidebarAppChange, logo, header, appHeader: suppliedAppHeader, pageHeader, children, onWidthChange, ...nav }) {
  const appHeader = suppliedAppHeader ?? pageHeader;
  const [navigationWidth, setNavigationWidth] = useState(0);
  const [appHeaderNode, setAppHeaderNode] = useState(null);
  const [appHeaderHeight, setAppHeaderHeight] = useState(0);
  const [sidebarWidth, setSidebarWidth] = useState(getDefaultSidebarWidth);
  const sidebarId = useId();
  useEffect(() => {
    if (!appHeaderNode) {
      setAppHeaderHeight(0);
      return;
    }
    const measure = () => setAppHeaderHeight(appHeaderNode.getBoundingClientRect().height);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(appHeaderNode);
    return () => observer.disconnect();
  }, [appHeaderNode]);
  const updateNavigationWidth = useCallback((width) => {
    setNavigationWidth(width);
    onWidthChange?.(width);
  }, [onWidthChange]);
  useEffect(() => {
    const resize = () => setSidebarWidth((width) => clampSidebarWidth(width, window.innerWidth));
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  const agentProps = agent ? (({ open, onOpenChange, ...props }) => props)(agent) : void 0;
  const apps = agent ? [
    ...sidebarApps.filter((app) => app.id !== "agent"),
    { id: "agent", label: "AI Agent", render: () => /* @__PURE__ */ jsx2(AgentSidebar, { ...agentProps, onClose: () => changeSidebarApp(null) }) }
  ] : sidebarApps;
  const requestedApp = activeSidebarApp !== void 0 ? activeSidebarApp : agent?.open ? "agent" : null;
  const openApp = apps.find((app) => app.id === requestedApp);
  const activeId = openApp?.id ?? null;
  function changeSidebarApp(id) {
    if (id !== null && !apps.some((app) => app.id === id)) return;
    if (id === activeId) return;
    onActiveSidebarAppChange?.(id);
    if (agent && agent.open !== (id === "agent")) agent.onOpenChange(id === "agent");
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2(import_ui_chrome_layout.GridLayoutGlobalStyles, { appearance: "framed" }),
    /* @__PURE__ */ jsx2(import_ui_chrome_layout.ChromeLayoutConfigProvider, { value: {
      appearance: "framed",
      headerHeight: 48,
      navigationWidth,
      sidebarWidth: openApp ? sidebarWidth : 0,
      applicationTopBarHeight: appHeaderHeight,
      applicationMarginRight: 8,
      applicationMarginBottom: 8
    }, children: /* @__PURE__ */ jsx2(
      import_ui_chrome_layout.ChromeLayout,
      {
        applicationTopBar: appHeader ? /* @__PURE__ */ jsx2("div", { ref: setAppHeaderNode, children: /* @__PURE__ */ jsx2(ChromeAppHeader, { ...appHeader, sticky: false }) }) : void 0,
        header: /* @__PURE__ */ jsxs("div", { css: { display: "flex", alignItems: "center", height: 48 }, children: [
          /* @__PURE__ */ jsx2("div", { css: { width: navigationWidth, display: "flex", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ jsx2(ChromeHeaderLogo, { ...logo }) }),
          /* @__PURE__ */ jsx2("div", { css: { flex: 1, minWidth: 0 }, children: /* @__PURE__ */ jsx2(
            ChromeHeader,
            {
              ...header,
              solution,
              breadcrumbs,
              activeSidebarApp: activeId,
              onActiveSidebarAppChange: changeSidebarApp,
              sidebarControlsId: sidebarId,
              isAgentOpen: activeId === "agent",
              onAgentClick: apps.some((app) => app.id === "agent") ? () => changeSidebarApp(activeId === "agent" ? null : "agent") : void 0,
              agentControlsId: activeId === "agent" ? sidebarId : void 0
            }
          ) })
        ] }),
        navigation: /* @__PURE__ */ jsx2(KibanaSideNav, { ...nav, solution, onWidthChange: updateNavigationWidth }),
        sidebar: openApp ? /* @__PURE__ */ jsx2(Sidebar, { id: sidebarId, "aria-label": openApp.label ?? openApp.id, width: sidebarWidth, onWidthChange: setSidebarWidth, children: openApp.render() }, openApp.id) : null,
        children: /* @__PURE__ */ jsx2("div", { css: { height: (0, import_ui_chrome_layout.layoutVar)("application.content.height", "100%"), display: "flex", flexDirection: "column", minHeight: 0, overflow: "hidden" }, children })
      }
    ) })
  ] });
}
var KibanaChrome = KibanaChromeLayout;

export {
  KibanaChromeLayout,
  KibanaChrome
};
//# sourceMappingURL=chunk-LLJPGSIP.js.map
