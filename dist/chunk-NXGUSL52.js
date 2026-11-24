import {
  eui_exports,
  init_eui,
  init_react,
  init_react2,
  react_exports,
  react_exports2
} from "./chunk-N3KR57XQ.js";
import {
  __commonJS,
  __toCommonJS
} from "./chunk-I5KYHNF2.js";

// node_modules/@kbn/ui-chrome-layout/index.js
var require_ui_chrome_layout = __commonJS({
  "node_modules/@kbn/ui-chrome-layout/index.js"(exports) {
    (() => {
      "use strict";
      var t = { n: (o2) => {
        var e2 = o2 && o2.__esModule ? () => o2.default : () => o2;
        return t.d(e2, { a: e2 }), e2;
      }, d: (o2, e2) => {
        for (var i2 in e2) t.o(e2, i2) && !t.o(o2, i2) && Object.defineProperty(o2, i2, { enumerable: true, get: e2[i2] });
      }, o: (t2, o2) => Object.prototype.hasOwnProperty.call(t2, o2), r: (t2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
      } }, o = {};
      t.r(o), t.d(o, { APP_MAIN_SCROLL_CONTAINER_ID: () => a, ChromeLayout: () => W, ChromeLayoutConfigProvider: () => ut, FLYOUT_SELECTOR: () => n, GridLayoutGlobalStyles: () => D, LayoutDebugOverlay: () => Z, MAIN_CONTENT_SELECTORS: () => r, SIDE_PANEL_CONTENT_GAP: () => l, euiIncludeSelectorInFocusTrap: () => p, getHighContrastBorder: () => pt, getHighContrastSeparator: () => st, getScrollContainer: () => J, getScrollDimensions: () => nt, getScrollPosition: () => ot, getViewportBoundaries: () => tt, getViewportHeight: () => Q, isAtBottomOfPage: () => lt, layoutLevels: () => g, layoutVar: () => h, layoutVarName: () => u, scrollBy: () => rt, scrollTo: () => et, scrollToBottom: () => at, scrollToTop: () => it, useCurrentChromeApplicationBreakpoint: () => dt, useIsWithinChromeApplicationBreakpoints: () => ht, useLayoutConfig: () => B, useLayoutUpdate: () => w });
      const e = (init_react(), __toCommonJS(react_exports));
      var i = t.n(e);
      const a = "app-main-scroll", n = '.euiFlyout[role="dialog"]', r = ["main", '[role="main"]', `#${a}`], l = 8, p = { prop: { "data-eui-includes-in-flyout-focus-trap": true }, selector: '[data-eui-includes-in-flyout-focus-trap="true"]' }, s = (init_react2(), __toCommonJS(react_exports2)), c = (init_eui(), __toCommonJS(eui_exports)), d = (t2) => t2.replace(/([A-Z])/g, "-$1").toLowerCase(), h = (t2, o2) => {
        const e2 = u(t2);
        return o2 ? `var(${e2}, ${o2})` : `var(${e2})`;
      }, u = (t2) => {
        if (t2.startsWith("application.") && 3 === t2.split(".").length) {
          const o2 = t2.split("."), e2 = o2[1], i2 = o2[2];
          return `--kbn-application--${d(e2)}-${d(i2)}`;
        }
        {
          const [o2, e2] = t2.split(".");
          return `--kbn-layout--${o2}-${d(e2)}`;
        }
      }, g = { content: 0, header: 100, footer: 100, navigation: 999, sidebar: 1050, banner: 1050, applicationTopBar: 100, applicationBottomBar: 100, debug: 9999 };
      var b = { name: "1mfbp0j", styles: "background-color:transparent;border-radius:0;border:none" }, m = { name: "z5atxi", styles: "display:flex;flex-direction:column;flex-grow:1" };
      const f = { root: (t2 = "plain") => {
        const o2 = "framed" === t2;
        return (t3) => {
          const { euiTheme: e2 } = t3;
          return (0, s.css)("grid-area:application;height:calc(\n        100% - ", h("application.marginTop"), " - ", h("application.marginBottom"), "\n      );width:calc(100% - ", h("application.marginRight"), ");margin-top:", h("application.marginTop"), ";margin-bottom:", h("application.marginBottom"), ";margin-right:", h("application.marginRight"), ";min-width:0;min-height:0;z-index:", g.content, ";position:relative;", o2 && (0, s.css)("background-color:", e2.colors.backgroundBasePlain, ";border-radius:", e2.border.radius.frame, ";", (0, c.euiShadow)(t3, "xs", { border: "none" }), ";outline:", e2.border.width.thin, " solid ", e2.colors.borderBaseFloating, ";", ""), " ", !o2 && b, ";", "");
        };
      }, scrollContainer: (t2) => (0, s.css)("border-radius:inherit;display:flex;flex-direction:column;@media screen{", (0, c.euiOverflowScroll)(t2, { direction: "y" }), ";}&:focus-visible{outline:", t2.euiTheme.focus.width, " solid ", t2.euiTheme.focus.color, ";outline-offset:0;", (0, c.highContrastModeStyles)(t2, { preferred: `outline-width: calc(${t2.euiTheme.focus.width} * 2);` }), ";}", ""), content: () => m, topBar: ({ euiTheme: t2 }) => (0, s.css)("position:sticky;top:0;z-index:", g.applicationTopBar, ";height:", h("application.topBar.height"), ";flex-shrink:0;", ""), bottomBar: ({ euiTheme: t2 }) => (0, s.css)("position:sticky;bottom:0;z-index:", g.applicationBottomBar, ";height:", h("application.bottomBar.height"), ";flex-shrink:0;", "") }, x = "undefined" == typeof globalThis ? {} : globalThis.__KIBANA_LAYOUT_CONFIG_CTX__ ??= {}, v = x.LayoutConfigContext ??= (0, e.createContext)(void 0), y = x.LayoutUpdateContext ??= (0, e.createContext)(void 0);
      function B() {
        const t2 = (0, e.useContext)(v);
        if (void 0 === t2) throw new Error("useLayoutConfig must be used within a LayoutConfigProvider");
        return t2;
      }
      function w() {
        const t2 = (0, e.useContext)(y);
        if (void 0 === t2) throw new Error("useLayoutUpdate must be used within a LayoutConfigProvider");
        return t2;
      }
      function C(t2, o2) {
        return Object.entries(o2).reduce((o3, [e2, i2]) => {
          const a2 = e2;
          return t2[a2] !== i2 && (o3[a2] = i2), o3;
        }, {});
      }
      const T = ({ children: t2, topBar: o2, bottomBar: e2 }) => {
        const { appearance: i2 } = B();
        return (0, s.jsx)("div", { css: f.root(i2) }, (0, s.jsx)("div", { css: f.scrollContainer, id: a, className: "kbnChromeLayoutApplication", "data-test-subj": "kbnChromeLayoutApplication", tabIndex: -1 }, o2 && (0, s.jsx)("div", { css: f.topBar }, o2), (0, s.jsx)("div", { css: [f.content, "", ""] }, t2), e2 && (0, s.jsx)("div", { css: f.bottomBar }, e2)));
      };
      function S() {
        return S = Object.assign ? Object.assign.bind() : function(t2) {
          for (var o2 = 1; o2 < arguments.length; o2++) {
            var e2 = arguments[o2];
            for (var i2 in e2) ({}).hasOwnProperty.call(e2, i2) && (t2[i2] = e2[i2]);
          }
          return t2;
        }, S.apply(null, arguments);
      }
      const j = { root: ({ euiTheme: t2 }) => (0, s.css)("grid-area:banner;position:sticky;width:", h("banner.width"), ";height:", h("banner.height"), ";z-index:", g.banner, ";", "") }, k = ({ children: t2 }) => (0, s.jsx)("section", S({ css: j.root, className: "kbnChromeLayoutBanner", "data-test-subj": "kbnChromeLayoutBanner" }, p.prop), t2), L = { root: ({ euiTheme: t2 }) => (0, s.css)("grid-area:navigation;height:", h("navigation.height"), ";width:", h("navigation.width"), ";z-index:", g.navigation, ";display:flex;", "") }, H = ({ children: t2 }) => (0, s.jsx)("div", S({ css: L.root, className: "kbnChromeLayoutNavigation", "data-test-subj": "kbnChromeLayoutNavigation" }, p.prop), t2), $ = { root: (0, s.css)("position:sticky;grid-area:footer;width:", h("footer.width"), ";height:", h("footer.height"), ";z-index:", g.footer, ";", "") }, O = ({ children: t2 }) => (0, s.jsx)("footer", { css: $.root, className: "kbnChromeLayoutFooter", "data-test-subj": "kbnChromeLayoutFooter" }, t2), E = { root: ({ euiTheme: t2 }) => (0, s.css)("position:sticky;grid-area:header;height:", h("header.height"), ";max-width:", h("header.width"), ";z-index:", g.header, ";", "") }, _ = ({ children: t2 }) => (0, s.jsx)("div", S({ css: E.root, className: "kbnChromeLayoutHeader", "data-test-subj": "kbnChromeLayoutHeader" }, p.prop), t2), M = { root: (0, s.css)("grid-area:sidebar;display:flex;flex-direction:column;height:calc(\n    100% - ", h("application.marginTop"), " - ", h("application.marginBottom"), "\n  );width:calc(100% - ", h("application.marginRight"), ");margin-top:", h("application.marginTop"), ";margin-bottom:", h("application.marginBottom"), ";z-index:", g.sidebar, ";min-height:0;", "") }, P = ({ children: t2 }) => (0, s.jsx)("div", S({ css: M.root, className: "kbnChromeLayoutSidebar", "data-test-subj": "kbnChromeLayoutSidebar", "data-kbn-preserve-zindex": "true" }, p.prop), t2), N = { name: "14znybx", styles: "height:100vh;width:100vw;min-height:100%;min-width:100%;@media screen{overflow:hidden;}display:grid;grid-template-areas:'banner banner banner' 'header header header' 'navigation application sidebar' 'footer footer footer'" }, F = (0, e.createContext)(void 0), A = ({ children: t2, ...o2 }) => {
        var e2, i2, a2, n2, r2, l2, p2, c2, d2, h2;
        const u2 = B(), g2 = o2.header || null, b2 = o2.navigation || null, m2 = !!o2.banner, f2 = !!o2.footer, x2 = !!o2.sidebar, v2 = !!g2, y2 = !!b2, w2 = !!o2.applicationTopBar, C2 = !!o2.applicationBottomBar, T2 = { hasBanner: m2, bannerHeight: m2 && null !== (e2 = u2.bannerHeight) && void 0 !== e2 ? e2 : 0, hasFooter: f2, footerHeight: f2 && null !== (i2 = u2.footerHeight) && void 0 !== i2 ? i2 : 0, hasHeader: v2, headerHeight: v2 && null !== (a2 = u2.headerHeight) && void 0 !== a2 ? a2 : 0, hasNavigation: y2, navigationWidth: y2 && null !== (n2 = u2.navigationWidth) && void 0 !== n2 ? n2 : 0, hasSidebar: x2, sidebarWidth: x2 && null !== (r2 = u2.sidebarWidth) && void 0 !== r2 ? r2 : 0, hasApplicationTopBar: w2, applicationTopBarHeight: w2 && null !== (l2 = u2.applicationTopBarHeight) && void 0 !== l2 ? l2 : 0, hasApplicationBottomBar: C2, applicationBottomBarHeight: C2 && null !== (p2 = u2.applicationBottomBarHeight) && void 0 !== p2 ? p2 : 0, applicationMarginTop: null !== (c2 = u2.applicationMarginTop) && void 0 !== c2 ? c2 : 0, applicationMarginRight: null !== (d2 = u2.applicationMarginRight) && void 0 !== d2 ? d2 : 0, applicationMarginBottom: null !== (h2 = u2.applicationMarginBottom) && void 0 !== h2 ? h2 : 0 };
        return (0, s.jsx)(F.Provider, { value: T2 }, t2);
      }, z = () => {
        const t2 = (0, e.useContext)(F);
        if (void 0 === t2) throw new Error("useLayoutState must be used within a LayoutStateProvider");
        return t2;
      }, R = ({ children: t2, ...o2 }) => {
        const e2 = z(), i2 = ((t3) => {
          const { navigationWidth: o3, sidebarWidth: e3, bannerHeight: i3, headerHeight: a3, footerHeight: n3 } = t3;
          return { css: N, style: { gridTemplateColumns: `
      ${o3}px
      1fr
      ${e3}px
    `, gridTemplateRows: `
      ${i3}px
      ${a3}px
      1fr
      ${n3}px
    ` } };
        })(e2), a2 = (t3) => "function" == typeof t3 ? t3(e2) : t3, n2 = e2.hasBanner ? (0, s.jsx)(k, null, a2(o2.banner)) : null, r2 = e2.hasFooter ? (0, s.jsx)(O, null, a2(o2.footer)) : null, l2 = e2.hasSidebar ? (0, s.jsx)(P, null, a2(o2.sidebar)) : null, p2 = e2.hasHeader ? (0, s.jsx)(_, null, a2(o2.header)) : null, c2 = e2.hasNavigation ? (0, s.jsx)(H, null, a2(o2.navigation)) : null, d2 = (0, s.jsx)(T, { topBar: a2(o2.applicationTopBar), bottomBar: a2(o2.applicationBottomBar) }, a2(t2));
        return (0, s.jsx)("div", { css: i2.css, style: i2.style }, n2, p2, c2, d2, r2, l2);
      }, I = () => {
        const { appearance: t2 } = B(), { euiTheme: o2 } = (0, c.useEuiTheme)(), { bannerHeight: e2, footerHeight: i2, headerHeight: a2, navigationWidth: n2, sidebarWidth: r2, applicationTopBarHeight: l2, applicationBottomBarHeight: p2, applicationMarginTop: d2, applicationMarginBottom: h2, applicationMarginRight: g2 } = z(), b2 = e2 + a2, m2 = b2 + d2, f2 = i2 + h2, x2 = g2 + r2, v2 = n2 + x2, y2 = m2 + l2, w2 = f2 + p2, C2 = (0, s.css)(u("banner.top"), ":0;", u("banner.left"), ":0;", u("banner.height"), ":", e2, "px;", u("banner.width"), ":100vw;", u("banner.bottom"), ":calc(100vh - ", e2, "px);", u("banner.right"), ":0;", ""), T2 = (0, s.css)(u("header.top"), ":", e2, "px;", u("header.left"), ":0;", u("header.right"), ":0;", u("header.height"), ":", a2, "px;", u("header.width"), ":100vw;", u("header.bottom"), ":calc(100vh - ", b2, "px);", ""), S2 = (0, s.css)(u("footer.height"), ":", i2, "px;", u("footer.top"), ":calc(100vh - ", i2, "px);", u("footer.bottom"), ":0;", u("footer.left"), ":0;", u("footer.right"), ":0;", u("footer.width"), ":100vw;", ""), j2 = (0, s.css)(u("navigation.top"), ":", b2, "px;", u("navigation.bottom"), ":", i2, "px;", u("navigation.left"), ":0;", u("navigation.right"), ":calc(100vw - ", n2, "px);", u("navigation.height"), ":calc(100vh - ", b2 + i2, "px);", u("navigation.width"), ":", n2, "px;", ""), k2 = (0, s.css)(u("sidebar.top"), ":", b2, "px;", u("sidebar.bottom"), ":", i2, "px;", u("sidebar.right"), ":0;", u("sidebar.left"), ":calc(100vw - ", r2, "px);", u("sidebar.height"), ":calc(100vh - ", b2 + i2, "px);", u("sidebar.width"), ":", r2, "px;", u("sidebar.borderRadius"), ":", "framed" === t2 ? o2.border.radius.frame : "0px", ";", ""), L2 = (0, s.css)(u("application.marginTop"), ":", d2, "px;", u("application.marginBottom"), ":", h2, "px;", u("application.marginRight"), ":", g2, "px;", u("application.top"), ":", m2, "px;", u("application.bottom"), ":", f2, "px;", u("application.left"), ":", n2, "px;", u("application.right"), ":", x2, "px;", u("application.height"), ":calc(100vh - ", m2 + f2, "px);", u("application.width"), ":calc(100vw - ", v2, "px);", ""), H2 = (0, s.css)(u("application.topBar.height"), ":", l2, "px;", u("application.topBar.top"), ":", m2, "px;", u("application.topBar.left"), ":", n2, "px;", u("application.topBar.right"), ":", x2, "px;", u("application.topBar.width"), ":calc(100vw - ", v2, "px);", u("application.topBar.bottom"), ":calc(100vh - ", m2 + l2, "px);", ""), $2 = (0, s.css)(u("application.bottomBar.height"), ":", p2, "px;", u("application.bottomBar.top"), ":calc(100vh - ", i2 + p2, "px);", u("application.bottomBar.left"), ":", n2, "px;", u("application.bottomBar.right"), ":", x2, "px;", u("application.bottomBar.width"), ":calc(100vw - ", v2, "px);", u("application.bottomBar.bottom"), ":", i2, "px;", ""), O2 = (0, s.css)(u("application.content.top"), ":", y2, "px;", u("application.content.bottom"), ":", w2, "px;", u("application.content.left"), ":", n2, "px;", u("application.content.right"), ":", x2, "px;", u("application.content.height"), ":calc(100vh - ", y2 + w2, "px);", u("application.content.width"), ":calc(100vw - ", v2, "px);", ""), E2 = (0, s.css)(":root{", C2, " ", T2, " ", j2, " ", k2, " ", L2, " ", H2, " ", $2, " ", O2, " ", S2, ";}", "");
        return (0, s.jsx)(s.Global, { styles: E2 });
      }, W = ({ children: t2, ...o2 }) => (0, s.jsx)(A, o2, (0, s.jsx)(I, null), (0, s.jsx)(R, o2, t2));
      var U = { name: "14ndeku", styles: ":root{--euiFixedHeadersOffset:0px;}@media screen{:root{overflow:hidden;}}" };
      const G = (t2, o2) => (0, s.css)("body{.euiFlyout.euiCollapsibleNav{", (0, c.logicalCSS)("top", h("application.top", "0px")), ";", (0, c.logicalCSS)("left", h("application.left", "0px")), ";", (0, c.logicalCSS)("bottom", h("application.bottom", "0px")), ";}.euiOverlayMask[data-relative-to-header='below']{", (0, c.logicalCSS)("top", h("application.top", "0px")), ";", (0, c.logicalCSS)("left", h("application.left", "0px")), ";", (0, c.logicalCSS)("right", h("application.right", "0px")), ";", (0, c.logicalCSS)("bottom", h("application.bottom", "0px")), ";", "framed" === o2 && `border-radius: ${t2.border.radius.frame};`, ";}.euiFlyout[class*='right']{", "framed" === o2 && `&:not([data-managed-flyout-layout-mode="side-by-side"][data-managed-flyout-level="child"]) {
          border-top-right-radius: ${t2.border.radius.frame};
          border-bottom-right-radius: ${t2.border.radius.frame};
          // EUI clips overlay-right flyout shadows with a sharp polygon; round it to match
          // the framed radius so the shadow doesn't square off at the top/bottom-right.
          clip-path: inset(
            0 0 0 -50% round 0 ${t2.border.radius.frame}
              ${t2.border.radius.frame} 0
          ) !important;
          .euiFlyoutFooter {
            border-bottom-right-radius: ${t2.border.radius.frame};
          }
        }
        // Preserve EUI's unclipped shadow when a child flyout is stacked on top.
        &.euiFlyout--hasChild {
          clip-path: none !important;
        }`, ";}.euiOverlayMask[data-relative-to-header='above']+[data-euiportal='true'] .euiFlyout[class*='right']{border-radius:0;clip-path:polygon(-50% 0, 100% 0, 100% 100%, -50% 100%)!important;}}#", a, "{", (0, c.logicalCSS)("padding-right", "var(--euiPushFlyoutOffsetInlineEnd, 0px)"), ";", (0, c.logicalCSS)("padding-left", "var(--euiPushFlyoutOffsetInlineStart, 0px)"), ";", (0, c.logicalCSS)("padding-bottom", "var(--euiBottomBarOffset, 0px)"), ";}body{", (0, c.logicalCSS)("padding-right", "0px !important"), ";", (0, c.logicalCSS)("padding-left", "0px !important"), ";", (0, c.logicalCSS)("padding-bottom", "0px !important"), ";", (0, c.logicalCSS)("padding-top", "0px !important"), ";}.euiBottomBar.euiBottomBar--fixed{left:", h("application.left", "0px"), "!important;right:", h("application.right", "0px"), "!important;bottom:", h("application.bottom", "0px"), "!important;border-bottom-left-radius:", "framed" === o2 ? t2.border.radius.frame : t2.border.radius.medium, "!important;border-bottom-right-radius:", "framed" === o2 ? t2.border.radius.frame : t2.border.radius.medium, "!important;box-shadow:", t2.shadows.xs.down, "!important;clip-path:inset(0 -10px -10px -10px)!important;}", ""), D = ({ appearance: t2 = "plain" }) => {
        const o2 = (0, c.useEuiTheme)();
        return (0, s.jsx)(s.Global, { styles: [U, G(o2.euiTheme, t2), "", ""] });
      }, q = (0, s.css)("pointer-events:none;position:fixed;inset:0;z-index:", g.debug, ";", ""), V = { name: "1ffs6b8", styles: "position:absolute;border:2px dashed rgba(0, 153, 255, 0.8);background:rgba(0, 153, 255, 0.1);color:#0099ff;font-size:12px;font-family:monospace;display:flex;align-items:flex-start;justify-content:flex-start;pointer-events:none" }, K = { name: "10i53l1", styles: "background:rgba(0, 153, 255, 0.85);color:white;padding:2px 6px;border-radius:0 0 4px 0;font-size:11px;margin:0;pointer-events:none" }, Y = [{ name: "banner", style: { top: h("banner.top"), left: h("banner.left"), right: h("banner.right"), bottom: h("banner.bottom"), width: h("banner.width"), height: h("banner.height") } }, { name: "header", style: { top: h("header.top"), bottom: h("header.bottom"), left: h("header.left"), right: h("header.right"), width: h("header.width"), height: h("header.height") } }, { name: "navigation", style: { top: h("navigation.top"), bottom: h("navigation.bottom"), left: h("navigation.left"), right: h("navigation.right"), width: h("navigation.width"), height: h("navigation.height") } }, { name: "sidebar", style: { top: h("sidebar.top"), bottom: h("sidebar.bottom"), left: h("sidebar.left"), right: h("sidebar.right"), width: h("sidebar.width"), height: h("sidebar.height") } }, { name: "application", style: { top: h("application.top"), bottom: h("application.bottom"), left: h("application.left"), right: h("application.right"), width: h("application.width"), height: h("application.height") } }, { name: "applicationTopBar", style: { top: h("application.topBar.top"), bottom: h("application.topBar.bottom"), left: h("application.topBar.left"), right: h("application.topBar.right"), width: h("application.topBar.width"), height: h("application.topBar.height") } }, { name: "footer", style: { top: h("footer.top"), bottom: h("footer.bottom"), left: h("footer.left"), right: h("footer.right"), width: h("footer.width"), height: h("footer.height") } }, { name: "applicationBottomBar", style: { top: h("application.bottomBar.top"), bottom: h("application.bottomBar.bottom"), left: h("application.bottomBar.left"), right: h("application.bottomBar.right"), width: h("application.bottomBar.width"), height: h("application.bottomBar.height") } }, { name: "applicationContent", style: { top: h("application.content.top"), left: h("application.content.left"), right: h("application.content.right"), width: h("application.content.width"), height: h("application.content.height") } }], X = { banner: "#0099ff", header: "#00bfae", navigation: "#c837ab", sidebar: "#ffd600", application: "#4caf50", applicationTopBar: "#1976d2", applicationBottomBar: "#e65100", applicationContent: "#00bcd4", footer: "#7c4dff" }, Z = ({ colors: t2 = {} }) => {
        const o2 = { ...X, ...t2 };
        return (0, s.jsx)("div", { css: q }, Y.map((t3) => {
          const e2 = o2[t3.name] || Object.values(X)[0];
          return (0, s.jsx)("div", { key: t3.name, css: (0, s.css)([V, `
                border-color: ${e2};
                background: ${e2}1A;
                color: ${e2};
              `], "", ""), style: t3.style }, (0, s.jsx)("span", { css: (0, s.css)([K, `background: ${e2};`], "", "") }, t3.name));
        }));
      }, J = () => {
        const t2 = document.getElementById(a);
        return t2 instanceof HTMLElement ? t2 : document.documentElement;
      }, Q = (t2 = J()) => t2.clientHeight, tt = (t2 = J()) => {
        const o2 = t2.getBoundingClientRect();
        return { top: o2.top, bottom: o2.top + t2.clientHeight };
      }, ot = (t2 = J()) => t2.scrollTop, et = (t2, o2 = J()) => {
        o2.scrollTo({ top: t2.top, behavior: t2.behavior });
      }, it = (t2 = {}, o2 = J()) => {
        et({ top: 0, behavior: t2.behavior }, o2);
      }, at = (t2 = {}, o2 = J()) => {
        et({ top: o2.scrollHeight, behavior: t2.behavior }, o2);
      }, nt = (t2 = J()) => ({ scrollTop: t2.scrollTop, scrollHeight: t2.scrollHeight, clientHeight: t2.clientHeight }), rt = (t2, o2 = J()) => {
        o2.scrollBy({ top: t2.top, behavior: t2.behavior });
      }, lt = (t2 = J()) => {
        const { scrollTop: o2, scrollHeight: e2, clientHeight: i2 } = nt(t2);
        return e2 - i2 - o2 <= 1;
      }, pt = (t2) => {
        const { euiTheme: o2, highContrastMode: e2 } = t2;
        if (e2) return `${o2.border.width.thin} solid ${o2.border.color}`;
        if ("DARK" === t2.colorMode) {
          const t3 = o2.border.thin;
          return t3 ? String(t3) : "none";
        }
        return "none";
      }, st = (t2, o2 = {}) => {
        const { euiTheme: e2, highContrastMode: i2 } = t2, { side: a2 = "bottom", width: n2 = e2.size.xl, left: r2 = "0", right: l2 = "0" } = o2;
        return i2 ? `
      ${"top" === a2 ? "border-top" : "border-bottom"}: ${e2.border.width.thin} solid ${e2.border.color};
    ` : `
    &::${"top" === a2 ? "before" : "after"} {
      content: '';
      position: absolute;
      ${a2}: 0;
      left: ${r2};
      right: ${l2};
      width: ${n2};
      margin: 0 auto;
      height: ${e2.border.width.thin};
      background-color: ${e2.colors.borderBasePlain};
    }
  `;
      }, ct = ["xs", "s", "m", "l", "xl"], dt = () => {
        const { euiTheme: t2 } = (0, c.useEuiTheme)(), [o2, i2] = (0, e.useState)();
        return (0, e.useLayoutEffect)(() => {
          const o3 = document.getElementById(a);
          if (!(o3 instanceof HTMLElement)) return void i2(void 0);
          const e2 = (o4) => {
            i2(((t3, o5) => ct.reduce((e3, i3) => t3 >= o5[i3] ? i3 : e3, ct[0]))(o4, t2.breakpoint));
          }, { paddingLeft: n2, paddingRight: r2 } = getComputedStyle(o3), l2 = o3.clientWidth - (parseFloat(n2) || 0) - (parseFloat(r2) || 0);
          e2(l2);
          const p2 = new ResizeObserver(([t3]) => {
            var o4, i3;
            const a2 = null !== (o4 = null === (i3 = t3.contentBoxSize[0]) || void 0 === i3 ? void 0 : i3.inlineSize) && void 0 !== o4 ? o4 : t3.contentRect.width;
            e2(a2);
          });
          return p2.observe(o3, { box: "content-box" }), () => {
            p2.disconnect();
          };
        }, [t2.breakpoint]), o2;
      }, ht = (t2, o2 = true) => {
        const e2 = dt();
        return Boolean(e2 && o2 && t2.includes(e2));
      };
      i();
      const ut = ({ value: t2, children: o2 }) => {
        const [i2, a2] = (0, e.useState)(t2), [n2, r2] = (0, e.useState)({});
        (0, e.useEffect)(() => {
          a2((o3) => {
            const e2 = C(o3, t2);
            return 0 === Object.keys(e2).length ? o3 : (r2((t3) => {
              const o4 = { ...t3 };
              return Object.keys(e2).forEach((t4) => {
                delete o4[t4];
              }), o4;
            }), { ...o3, ...e2 });
          });
        }, [t2]);
        const l2 = (0, e.useCallback)((t3) => {
          r2((o3) => {
            const e2 = C(o3, t3);
            return 0 === Object.keys(e2).length ? o3 : { ...o3, ...e2 };
          });
        }, []), p2 = { ...i2, ...n2 };
        return (0, s.jsx)(y.Provider, { value: l2 }, (0, s.jsx)(v.Provider, { value: p2 }, o2));
      };
      var gt = exports;
      for (var bt in o) gt[bt] = o[bt];
      o.__esModule && Object.defineProperty(gt, "__esModule", { value: true });
    })();
  }
});

export {
  require_ui_chrome_layout
};
//# sourceMappingURL=chunk-NXGUSL52.js.map
