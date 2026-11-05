import {
  AgentSidebar
} from "./chunk-UEWAMQVR.js";
import {
  KibanaHeader
} from "./chunk-3YLYNONM.js";
import {
  KibanaSideNav
} from "./chunk-I74ZXOIK.js";
import {
  KibanaSidebar,
  clampSidebarWidth,
  getDefaultSidebarWidth
} from "./chunk-OZHSUTEH.js";
import {
  require_ui_chrome_layout
} from "./chunk-NXGUSL52.js";
import {
  __toESM
} from "./chunk-I5KYHNF2.js";

// src/wrappers/KibanaChrome.tsx
var import_ui_chrome_layout = __toESM(require_ui_chrome_layout(), 1);
import { useCallback, useEffect, useId, useState } from "react";
import { EuiIcon } from "@elastic/eui";
import { Fragment, jsx, jsxs } from "@emotion/react/jsx-runtime";
function KibanaChrome({ solution = "observability", breadcrumbs, agent, header, children, onWidthChange, ...nav }) {
  const [navigationWidth, setNavigationWidth] = useState(0);
  const [sidebarWidth, setSidebarWidth] = useState(getDefaultSidebarWidth);
  const agentId = useId();
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(import_ui_chrome_layout.GridLayoutGlobalStyles, { appearance: "framed" }),
    /* @__PURE__ */ jsx(import_ui_chrome_layout.ChromeLayoutConfigProvider, { value: {
      appearance: "framed",
      headerHeight: 48,
      navigationWidth,
      sidebarWidth: agent?.open ? sidebarWidth : 0,
      applicationMarginRight: 8,
      applicationMarginBottom: 8
    }, children: /* @__PURE__ */ jsx(
      import_ui_chrome_layout.ChromeLayout,
      {
        header: /* @__PURE__ */ jsxs("div", { css: { display: "flex", alignItems: "center", height: 48 }, children: [
          /* @__PURE__ */ jsx("div", { css: { width: navigationWidth, display: "flex", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ jsx(EuiIcon, { type: "logoElastic", size: "l" }) }),
          /* @__PURE__ */ jsx("div", { css: { flex: 1, minWidth: 0 }, children: /* @__PURE__ */ jsx(
            KibanaHeader,
            {
              ...header,
              solution,
              breadcrumbs,
              isAgentOpen: agent?.open,
              onAgentClick: agent ? () => agent.onOpenChange(!agent.open) : void 0,
              agentControlsId: agent?.open ? agentId : void 0
            }
          ) })
        ] }),
        navigation: /* @__PURE__ */ jsx(KibanaSideNav, { ...nav, solution, onWidthChange: updateNavigationWidth }),
        sidebar: agent?.open ? /* @__PURE__ */ jsx(KibanaSidebar, { id: agentId, width: sidebarWidth, onWidthChange: setSidebarWidth, children: /* @__PURE__ */ jsx(AgentSidebar, { ...agentProps, onClose: () => agent.onOpenChange(false) }) }) : null,
        children: /* @__PURE__ */ jsx("div", { css: { height: (0, import_ui_chrome_layout.layoutVar)("application.content.height", "100%"), display: "flex", flexDirection: "column", minHeight: 0, overflow: "hidden" }, children })
      }
    ) })
  ] });
}

export {
  KibanaChrome
};
//# sourceMappingURL=chunk-76P6PLW3.js.map
