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
} from "./chunk-DPTNLL5Q.js";
import {
  layoutVarName
} from "./chunk-IWNNG2OT.js";
import {
  require_ui_chrome_layout
} from "./chunk-NXGUSL52.js";
import {
  ChromeHeader
} from "./chunk-26YMVCWC.js";
import {
  KibanaSideNav
} from "./chunk-YCIE2MCI.js";
import {
  __toESM
} from "./chunk-I5KYHNF2.js";

// src/wrappers/KibanaChromeLayout.tsx
var import_ui_chrome_layout = __toESM(require_ui_chrome_layout(), 1);
import { useCallback, useEffect, useId, useState } from "react";
import { Global } from "@emotion/react";

// src/wrappers/reservedInlineEnd.ts
import { css } from "@emotion/react";
function reservedInlineEndVariables({ reserved, navigationWidth, sidebarWidth, applicationMarginRight }) {
  const r = `${reserved}px`;
  const fullWidth = `calc(100vw - ${reserved}px)`;
  const applicationRight = `${applicationMarginRight + sidebarWidth + reserved}px`;
  const applicationWidth = `calc(100vw - ${navigationWidth + applicationMarginRight + sidebarWidth + reserved}px)`;
  return {
    "banner.right": r,
    "banner.width": fullWidth,
    "header.right": r,
    "header.width": fullWidth,
    "footer.right": r,
    "footer.width": fullWidth,
    "navigation.right": `calc(100vw - ${navigationWidth + reserved}px)`,
    "sidebar.right": r,
    "sidebar.left": `calc(100vw - ${sidebarWidth + reserved}px)`,
    "application.right": applicationRight,
    "application.width": applicationWidth,
    "application.topBar.right": applicationRight,
    "application.topBar.width": applicationWidth,
    "application.bottomBar.right": applicationRight,
    "application.bottomBar.width": applicationWidth,
    "application.content.right": applicationRight,
    "application.content.width": applicationWidth
  };
}
function reservedInlineEndStyles(input) {
  const variables = Object.entries(reservedInlineEndVariables(input)).map(([name, value]) => `${layoutVarName(name)}: ${value};`).join("\n");
  return css`
    /* Doubled :root outranks the layout's own :root block regardless of insertion order. */
    :root:root {
      ${variables}
    }
    /* Kibana's grid: the element whose children are the layout's header, navigation and sidebar. */
    div:has(> .kbnChromeLayoutHeader) {
      inline-size: calc(100vw - ${input.reserved}px);
      min-inline-size: 0;
    }
  `;
}

// src/wrappers/KibanaChromeLayout.tsx
import { Fragment, jsx, jsxs } from "@emotion/react/jsx-runtime";
var APPLICATION_MARGIN_RIGHT = 8;
function KibanaChromeLayout({ solution = "observability", breadcrumbs, agent, sidebarApps = [], activeSidebarApp, onActiveSidebarAppChange, logo, header, appHeader: suppliedAppHeader, pageHeader, reservedInlineEnd = 0, children, onWidthChange, ...nav }) {
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
  const reserved = Math.max(0, reservedInlineEnd);
  useEffect(() => {
    const resize = () => setSidebarWidth((width) => clampSidebarWidth(width, window.innerWidth - reserved));
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [reserved]);
  const agentProps = agent ? (({ open, onOpenChange, ...props }) => props)(agent) : void 0;
  const apps = agent ? [
    ...sidebarApps.filter((app) => app.id !== "agent"),
    { id: "agent", label: "AI Agent", render: () => /* @__PURE__ */ jsx(AgentSidebar, { ...agentProps, onClose: () => changeSidebarApp(null) }) }
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
  const openSidebarWidth = openApp ? sidebarWidth : 0;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(import_ui_chrome_layout.GridLayoutGlobalStyles, { appearance: "framed" }),
    reserved > 0 ? /* @__PURE__ */ jsx(Global, { styles: reservedInlineEndStyles({ reserved, navigationWidth, sidebarWidth: openSidebarWidth, applicationMarginRight: APPLICATION_MARGIN_RIGHT }) }) : null,
    /* @__PURE__ */ jsx(import_ui_chrome_layout.ChromeLayoutConfigProvider, { value: {
      appearance: "framed",
      headerHeight: 48,
      navigationWidth,
      sidebarWidth: openSidebarWidth,
      applicationTopBarHeight: appHeaderHeight,
      applicationMarginRight: APPLICATION_MARGIN_RIGHT,
      applicationMarginBottom: 8
    }, children: /* @__PURE__ */ jsx(
      import_ui_chrome_layout.ChromeLayout,
      {
        applicationTopBar: appHeader ? /* @__PURE__ */ jsx("div", { ref: setAppHeaderNode, children: /* @__PURE__ */ jsx(ChromeAppHeader, { ...appHeader, sticky: false }) }) : void 0,
        header: /* @__PURE__ */ jsx(
          ChromeHeader,
          {
            ...header,
            solution,
            breadcrumbs,
            logo,
            sideNavWidth: navigationWidth,
            activeSidebarApp: activeId,
            onActiveSidebarAppChange: changeSidebarApp,
            sidebarControlsId: sidebarId,
            isAgentOpen: activeId === "agent",
            onAgentClick: apps.some((app) => app.id === "agent") ? () => changeSidebarApp(activeId === "agent" ? null : "agent") : void 0,
            agentControlsId: activeId === "agent" ? sidebarId : void 0
          }
        ),
        navigation: /* @__PURE__ */ jsx(KibanaSideNav, { ...nav, solution, onWidthChange: updateNavigationWidth }),
        sidebar: openApp ? /* @__PURE__ */ jsx(Sidebar, { id: sidebarId, "aria-label": openApp.label ?? openApp.id, width: sidebarWidth, onWidthChange: setSidebarWidth, children: openApp.render() }, openApp.id) : null,
        children: /* @__PURE__ */ jsx("div", { css: { height: (0, import_ui_chrome_layout.layoutVar)("application.content.height", "100%"), display: "flex", flexDirection: "column", minHeight: 0, overflow: "hidden" }, children })
      }
    ) })
  ] });
}
var KibanaChrome = KibanaChromeLayout;

export {
  KibanaChromeLayout,
  KibanaChrome
};
//# sourceMappingURL=chunk-X5P6GMI4.js.map
