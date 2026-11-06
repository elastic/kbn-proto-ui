import {
  require_ui_chrome_layout
} from "./chunk-NXGUSL52.js";
import {
  __toESM
} from "./chunk-I5KYHNF2.js";

// src/replicas/Sidebar.tsx
var import_ui_chrome_layout = __toESM(require_ui_chrome_layout(), 1);
import { useEffect, useRef } from "react";
import { EuiPanel, EuiResizableButton, euiShadow, useEuiTheme } from "@elastic/eui";

// src/replicas/sidebarWidth.ts
var clampSidebarWidth = (width, viewportWidth) => Math.max(320, Math.min(Math.max(320, Math.floor(viewportWidth * 0.5)), width));
var getDefaultSidebarWidth = (viewportWidth = typeof window === "undefined" ? 1280 : window.innerWidth) => clampSidebarWidth(Math.floor(viewportWidth * 0.3), viewportWidth);

// src/replicas/Sidebar.tsx
import { jsx, jsxs } from "@emotion/react/jsx-runtime";
var sidebarRadius = (0, import_ui_chrome_layout.layoutVar)("sidebar.borderRadius", "0px");
function Sidebar({ width, onWidthChange, children, id, "aria-label": label = "Side panel" }) {
  const theme = useEuiTheme();
  const dragCleanup = useRef();
  useEffect(() => () => dragCleanup.current?.(), []);
  return /* @__PURE__ */ jsxs("aside", { id, "aria-label": label, css: { display: "flex", height: "100%", width: "100%", minHeight: 0 }, children: [
    /* @__PURE__ */ jsx(
      EuiResizableButton,
      {
        indicator: "border",
        isHorizontal: true,
        "aria-label": "Resize side panel. Use left and right arrow keys to adjust width.",
        "aria-valuemin": 320,
        "aria-valuemax": typeof window === "undefined" ? 640 : Math.max(320, Math.floor(window.innerWidth / 2)),
        "aria-valuenow": width,
        onPointerDown: (event) => {
          if (event.button !== 0) return;
          dragCleanup.current?.();
          const startX = event.clientX;
          const move = (moveEvent) => onWidthChange(clampSidebarWidth(width + startX - moveEvent.clientX, window.innerWidth));
          const end = () => {
            window.removeEventListener("pointermove", move);
            window.removeEventListener("pointerup", end);
            window.removeEventListener("pointercancel", end);
            dragCleanup.current = void 0;
          };
          window.addEventListener("pointermove", move);
          window.addEventListener("pointerup", end);
          window.addEventListener("pointercancel", end);
          dragCleanup.current = end;
        },
        onKeyDown: (event) => {
          const delta = event.key === "ArrowLeft" ? 10 : event.key === "ArrowRight" ? -10 : 0;
          if (delta) {
            event.preventDefault();
            onWidthChange(clampSidebarWidth(width + delta, window.innerWidth));
          }
        },
        css: { position: "relative", insetInlineStart: `-${theme.euiTheme.border.width.thin}`, blockSize: `calc(100% - ${sidebarRadius} * 2)`, flexShrink: 0, alignSelf: "center", touchAction: "none" }
      }
    ),
    /* @__PURE__ */ jsx(
      EuiPanel,
      {
        paddingSize: "none",
        hasBorder: false,
        hasShadow: false,
        borderRadius: "none",
        css: [{ display: "flex", flexDirection: "column", flexGrow: 1, minWidth: 0, minHeight: 0, overflow: "hidden", borderRadius: sidebarRadius, outline: (0, import_ui_chrome_layout.getHighContrastBorder)(theme) }, euiShadow(theme, "xs", { border: "none" })],
        children
      }
    )
  ] });
}
var KibanaSidebar = Sidebar;

export {
  clampSidebarWidth,
  getDefaultSidebarWidth,
  Sidebar,
  KibanaSidebar
};
//# sourceMappingURL=chunk-YQ4MX6UR.js.map
