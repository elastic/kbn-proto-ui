import {
  getSolutionNav
} from "./chunk-GWFHTNQL.js";
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
  __toCommonJS,
  __toESM
} from "./chunk-I5KYHNF2.js";

// node_modules/@kbn/ui-side-navigation/index.js
var require_ui_side_navigation = __commonJS({
  "node_modules/@kbn/ui-side-navigation/index.js"(exports) {
    (() => {
      var e = { 56: (e2, t2, i2) => {
        (() => {
          "use strict";
          var e3 = { n: (t3) => {
            var i3 = t3 && t3.__esModule ? () => t3.default : () => t3;
            return e3.d(i3, { a: i3 }), i3;
          }, d: (t3, i3) => {
            for (var o3 in i3) e3.o(i3, o3) && !e3.o(t3, o3) && Object.defineProperty(t3, o3, { enumerable: true, get: i3[o3] });
          }, o: (e4, t3) => Object.prototype.hasOwnProperty.call(e4, t3), r: (e4) => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e4, "__esModule", { value: true });
          } }, o2 = {};
          e3.r(o2), e3.d(o2, { APP_MAIN_SCROLL_CONTAINER_ID: () => r, ChromeLayout: () => W, ChromeLayoutConfigProvider: () => me, FLYOUT_SELECTOR: () => s, GridLayoutGlobalStyles: () => V, LayoutDebugOverlay: () => Q, MAIN_CONTENT_SELECTORS: () => l, SIDE_PANEL_CONTENT_GAP: () => d, euiIncludeSelectorInFocusTrap: () => c, getHighContrastBorder: () => ce, getHighContrastSeparator: () => ue, getScrollContainer: () => ee, getScrollDimensions: () => se, getScrollPosition: () => oe, getViewportBoundaries: () => ie, getViewportHeight: () => te, isAtBottomOfPage: () => de, layoutLevels: () => b, layoutVar: () => g, layoutVarName: () => m, scrollBy: () => le, scrollTo: () => ne, scrollToBottom: () => re, scrollToTop: () => ae, useCurrentChromeApplicationBreakpoint: () => he, useIsWithinChromeApplicationBreakpoints: () => ge, useLayoutConfig: () => k, useLayoutUpdate: () => S });
          const n2 = i2(15);
          var a2 = e3.n(n2);
          const r = "app-main-scroll", s = '.euiFlyout[role="dialog"]', l = ["main", '[role="main"]', `#${r}`], d = 8, c = { prop: { "data-eui-includes-in-flyout-focus-trap": true }, selector: '[data-eui-includes-in-flyout-focus-trap="true"]' }, u = i2(537), p = i2(477), h = (e4) => e4.replace(/([A-Z])/g, "-$1").toLowerCase(), g = (e4, t3) => {
            const i3 = m(e4);
            return t3 ? `var(${i3}, ${t3})` : `var(${i3})`;
          }, m = (e4) => {
            if (e4.startsWith("application.") && 3 === e4.split(".").length) {
              const t3 = e4.split("."), i3 = t3[1], o3 = t3[2];
              return `--kbn-application--${h(i3)}-${h(o3)}`;
            }
            {
              const [t3, i3] = e4.split(".");
              return `--kbn-layout--${t3}-${h(i3)}`;
            }
          }, b = { content: 0, header: 100, footer: 100, navigation: 999, sidebar: 1050, banner: 1050, applicationTopBar: 100, applicationBottomBar: 100, debug: 9999 };
          var f = { name: "1mfbp0j", styles: "background-color:transparent;border-radius:0;border:none" }, v = { name: "z5atxi", styles: "display:flex;flex-direction:column;flex-grow:1" };
          const x = { root: (e4 = "plain") => {
            const t3 = "framed" === e4;
            return (e5) => {
              const { euiTheme: i3 } = e5;
              return (0, u.css)("grid-area:application;height:calc(\n        100% - ", g("application.marginTop"), " - ", g("application.marginBottom"), "\n      );width:calc(100% - ", g("application.marginRight"), ");margin-top:", g("application.marginTop"), ";margin-bottom:", g("application.marginBottom"), ";margin-right:", g("application.marginRight"), ";min-width:0;min-height:0;z-index:", b.content, ";position:relative;", t3 && (0, u.css)("background-color:", i3.colors.backgroundBasePlain, ";border-radius:", i3.border.radius.frame, ";", (0, p.euiShadow)(e5, "xs", { border: "none" }), ";outline:", i3.border.width.thin, " solid ", i3.colors.borderBaseFloating, ";", ""), " ", !t3 && f, ";", "");
            };
          }, scrollContainer: (e4) => (0, u.css)("border-radius:inherit;display:flex;flex-direction:column;@media screen{", (0, p.euiOverflowScroll)(e4, { direction: "y" }), ";}&:focus-visible{outline:", e4.euiTheme.focus.width, " solid ", e4.euiTheme.focus.color, ";outline-offset:0;", (0, p.highContrastModeStyles)(e4, { preferred: `outline-width: calc(${e4.euiTheme.focus.width} * 2);` }), ";}", ""), content: () => v, topBar: ({ euiTheme: e4 }) => (0, u.css)("position:sticky;top:0;z-index:", b.applicationTopBar, ";height:", g("application.topBar.height"), ";flex-shrink:0;", ""), bottomBar: ({ euiTheme: e4 }) => (0, u.css)("position:sticky;bottom:0;z-index:", b.applicationBottomBar, ";height:", g("application.bottomBar.height"), ";flex-shrink:0;", "") }, y = "undefined" == typeof globalThis ? {} : globalThis.__KIBANA_LAYOUT_CONFIG_CTX__ ??= {}, w = y.LayoutConfigContext ??= (0, n2.createContext)(void 0), j = y.LayoutUpdateContext ??= (0, n2.createContext)(void 0);
          function k() {
            const e4 = (0, n2.useContext)(w);
            if (void 0 === e4) throw new Error("useLayoutConfig must be used within a LayoutConfigProvider");
            return e4;
          }
          function S() {
            const e4 = (0, n2.useContext)(j);
            if (void 0 === e4) throw new Error("useLayoutUpdate must be used within a LayoutConfigProvider");
            return e4;
          }
          function I(e4, t3) {
            return Object.entries(t3).reduce((t4, [i3, o3]) => {
              const n3 = i3;
              return e4[n3] !== o3 && (t4[n3] = o3), t4;
            }, {});
          }
          const T = ({ children: e4, topBar: t3, bottomBar: i3 }) => {
            const { appearance: o3 } = k();
            return (0, u.jsx)("div", { css: x.root(o3) }, (0, u.jsx)("div", { css: x.scrollContainer, id: r, className: "kbnChromeLayoutApplication", "data-test-subj": "kbnChromeLayoutApplication", tabIndex: -1 }, t3 && (0, u.jsx)("div", { css: x.topBar }, t3), (0, u.jsx)("div", { css: [x.content, "", ""] }, e4), i3 && (0, u.jsx)("div", { css: x.bottomBar }, i3)));
          };
          function C() {
            return C = Object.assign ? Object.assign.bind() : function(e4) {
              for (var t3 = 1; t3 < arguments.length; t3++) {
                var i3 = arguments[t3];
                for (var o3 in i3) ({}).hasOwnProperty.call(i3, o3) && (e4[o3] = i3[o3]);
              }
              return e4;
            }, C.apply(null, arguments);
          }
          const M = { root: ({ euiTheme: e4 }) => (0, u.css)("grid-area:banner;position:sticky;width:", g("banner.width"), ";height:", g("banner.height"), ";z-index:", b.banner, ";", "") }, B = ({ children: e4 }) => (0, u.jsx)("section", C({ css: M.root, className: "kbnChromeLayoutBanner", "data-test-subj": "kbnChromeLayoutBanner" }, c.prop), e4), E = { root: ({ euiTheme: e4 }) => (0, u.css)("grid-area:navigation;height:", g("navigation.height"), ";width:", g("navigation.width"), ";z-index:", b.navigation, ";display:flex;", "") }, P = ({ children: e4 }) => (0, u.jsx)("div", C({ css: E.root, className: "kbnChromeLayoutNavigation", "data-test-subj": "kbnChromeLayoutNavigation" }, c.prop), e4), N = { root: (0, u.css)("position:sticky;grid-area:footer;width:", g("footer.width"), ";height:", g("footer.height"), ";z-index:", b.footer, ";", "") }, O = ({ children: e4 }) => (0, u.jsx)("footer", { css: N.root, className: "kbnChromeLayoutFooter", "data-test-subj": "kbnChromeLayoutFooter" }, e4), z = { root: ({ euiTheme: e4 }) => (0, u.css)("position:sticky;grid-area:header;height:", g("header.height"), ";max-width:", g("header.width"), ";z-index:", b.header, ";", "") }, $ = ({ children: e4 }) => (0, u.jsx)("div", C({ css: z.root, className: "kbnChromeLayoutHeader", "data-test-subj": "kbnChromeLayoutHeader" }, c.prop), e4), L = { root: (0, u.css)("grid-area:sidebar;display:flex;flex-direction:column;height:calc(\n    100% - ", g("application.marginTop"), " - ", g("application.marginBottom"), "\n  );width:calc(100% - ", g("application.marginRight"), ");margin-top:", g("application.marginTop"), ";margin-bottom:", g("application.marginBottom"), ";z-index:", b.sidebar, ";min-height:0;", "") }, H = ({ children: e4 }) => (0, u.jsx)("div", C({ css: L.root, className: "kbnChromeLayoutSidebar", "data-test-subj": "kbnChromeLayoutSidebar", "data-kbn-preserve-zindex": "true" }, c.prop), e4), R = { name: "14znybx", styles: "height:100vh;width:100vw;min-height:100%;min-width:100%;@media screen{overflow:hidden;}display:grid;grid-template-areas:'banner banner banner' 'header header header' 'navigation application sidebar' 'footer footer footer'" }, A = (0, n2.createContext)(void 0), F = ({ children: e4, ...t3 }) => {
            var i3, o3, n3, a3, r2, s2, l2, d2, c2, p2;
            const h2 = k(), g2 = t3.header || null, m2 = t3.navigation || null, b2 = !!t3.banner, f2 = !!t3.footer, v2 = !!t3.sidebar, x2 = !!g2, y2 = !!m2, w2 = !!t3.applicationTopBar, j2 = !!t3.applicationBottomBar, S2 = { hasBanner: b2, bannerHeight: b2 && null !== (i3 = h2.bannerHeight) && void 0 !== i3 ? i3 : 0, hasFooter: f2, footerHeight: f2 && null !== (o3 = h2.footerHeight) && void 0 !== o3 ? o3 : 0, hasHeader: x2, headerHeight: x2 && null !== (n3 = h2.headerHeight) && void 0 !== n3 ? n3 : 0, hasNavigation: y2, navigationWidth: y2 && null !== (a3 = h2.navigationWidth) && void 0 !== a3 ? a3 : 0, hasSidebar: v2, sidebarWidth: v2 && null !== (r2 = h2.sidebarWidth) && void 0 !== r2 ? r2 : 0, hasApplicationTopBar: w2, applicationTopBarHeight: w2 && null !== (s2 = h2.applicationTopBarHeight) && void 0 !== s2 ? s2 : 0, hasApplicationBottomBar: j2, applicationBottomBarHeight: j2 && null !== (l2 = h2.applicationBottomBarHeight) && void 0 !== l2 ? l2 : 0, applicationMarginTop: null !== (d2 = h2.applicationMarginTop) && void 0 !== d2 ? d2 : 0, applicationMarginRight: null !== (c2 = h2.applicationMarginRight) && void 0 !== c2 ? c2 : 0, applicationMarginBottom: null !== (p2 = h2.applicationMarginBottom) && void 0 !== p2 ? p2 : 0 };
            return (0, u.jsx)(A.Provider, { value: S2 }, e4);
          }, U = () => {
            const e4 = (0, n2.useContext)(A);
            if (void 0 === e4) throw new Error("useLayoutState must be used within a LayoutStateProvider");
            return e4;
          }, _ = ({ children: e4, ...t3 }) => {
            const i3 = U(), o3 = ((e5) => {
              const { navigationWidth: t4, sidebarWidth: i4, bannerHeight: o4, headerHeight: n4, footerHeight: a4 } = e5;
              return { css: R, style: { gridTemplateColumns: `
      ${t4}px
      1fr
      ${i4}px
    `, gridTemplateRows: `
      ${o4}px
      ${n4}px
      1fr
      ${a4}px
    ` } };
            })(i3), n3 = (e5) => "function" == typeof e5 ? e5(i3) : e5, a3 = i3.hasBanner ? (0, u.jsx)(B, null, n3(t3.banner)) : null, r2 = i3.hasFooter ? (0, u.jsx)(O, null, n3(t3.footer)) : null, s2 = i3.hasSidebar ? (0, u.jsx)(H, null, n3(t3.sidebar)) : null, l2 = i3.hasHeader ? (0, u.jsx)($, null, n3(t3.header)) : null, d2 = i3.hasNavigation ? (0, u.jsx)(P, null, n3(t3.navigation)) : null, c2 = (0, u.jsx)(T, { topBar: n3(t3.applicationTopBar), bottomBar: n3(t3.applicationBottomBar) }, n3(e4));
            return (0, u.jsx)("div", { css: o3.css, style: o3.style }, a3, l2, d2, c2, r2, s2);
          }, D = () => {
            const { appearance: e4 } = k(), { euiTheme: t3 } = (0, p.useEuiTheme)(), { bannerHeight: i3, footerHeight: o3, headerHeight: n3, navigationWidth: a3, sidebarWidth: r2, applicationTopBarHeight: s2, applicationBottomBarHeight: l2, applicationMarginTop: d2, applicationMarginBottom: c2, applicationMarginRight: h2 } = U(), g2 = i3 + n3, b2 = g2 + d2, f2 = o3 + c2, v2 = h2 + r2, x2 = a3 + v2, y2 = b2 + s2, w2 = f2 + l2, j2 = (0, u.css)(m("banner.top"), ":0;", m("banner.left"), ":0;", m("banner.height"), ":", i3, "px;", m("banner.width"), ":100vw;", m("banner.bottom"), ":calc(100vh - ", i3, "px);", m("banner.right"), ":0;", ""), S2 = (0, u.css)(m("header.top"), ":", i3, "px;", m("header.left"), ":0;", m("header.right"), ":0;", m("header.height"), ":", n3, "px;", m("header.width"), ":100vw;", m("header.bottom"), ":calc(100vh - ", g2, "px);", ""), I2 = (0, u.css)(m("footer.height"), ":", o3, "px;", m("footer.top"), ":calc(100vh - ", o3, "px);", m("footer.bottom"), ":0;", m("footer.left"), ":0;", m("footer.right"), ":0;", m("footer.width"), ":100vw;", ""), T2 = (0, u.css)(m("navigation.top"), ":", g2, "px;", m("navigation.bottom"), ":", o3, "px;", m("navigation.left"), ":0;", m("navigation.right"), ":calc(100vw - ", a3, "px);", m("navigation.height"), ":calc(100vh - ", g2 + o3, "px);", m("navigation.width"), ":", a3, "px;", ""), C2 = (0, u.css)(m("sidebar.top"), ":", g2, "px;", m("sidebar.bottom"), ":", o3, "px;", m("sidebar.right"), ":0;", m("sidebar.left"), ":calc(100vw - ", r2, "px);", m("sidebar.height"), ":calc(100vh - ", g2 + o3, "px);", m("sidebar.width"), ":", r2, "px;", m("sidebar.borderRadius"), ":", "framed" === e4 ? t3.border.radius.frame : "0px", ";", ""), M2 = (0, u.css)(m("application.marginTop"), ":", d2, "px;", m("application.marginBottom"), ":", c2, "px;", m("application.marginRight"), ":", h2, "px;", m("application.top"), ":", b2, "px;", m("application.bottom"), ":", f2, "px;", m("application.left"), ":", a3, "px;", m("application.right"), ":", v2, "px;", m("application.height"), ":calc(100vh - ", b2 + f2, "px);", m("application.width"), ":calc(100vw - ", x2, "px);", ""), B2 = (0, u.css)(m("application.topBar.height"), ":", s2, "px;", m("application.topBar.top"), ":", b2, "px;", m("application.topBar.left"), ":", a3, "px;", m("application.topBar.right"), ":", v2, "px;", m("application.topBar.width"), ":calc(100vw - ", x2, "px);", m("application.topBar.bottom"), ":calc(100vh - ", b2 + s2, "px);", ""), E2 = (0, u.css)(m("application.bottomBar.height"), ":", l2, "px;", m("application.bottomBar.top"), ":calc(100vh - ", o3 + l2, "px);", m("application.bottomBar.left"), ":", a3, "px;", m("application.bottomBar.right"), ":", v2, "px;", m("application.bottomBar.width"), ":calc(100vw - ", x2, "px);", m("application.bottomBar.bottom"), ":", o3, "px;", ""), P2 = (0, u.css)(m("application.content.top"), ":", y2, "px;", m("application.content.bottom"), ":", w2, "px;", m("application.content.left"), ":", a3, "px;", m("application.content.right"), ":", v2, "px;", m("application.content.height"), ":calc(100vh - ", y2 + w2, "px);", m("application.content.width"), ":calc(100vw - ", x2, "px);", ""), N2 = (0, u.css)(":root{", j2, " ", S2, " ", T2, " ", C2, " ", M2, " ", B2, " ", E2, " ", P2, " ", I2, ";}", "");
            return (0, u.jsx)(u.Global, { styles: N2 });
          }, W = ({ children: e4, ...t3 }) => (0, u.jsx)(F, t3, (0, u.jsx)(D, null), (0, u.jsx)(_, t3, e4));
          var G = { name: "14ndeku", styles: ":root{--euiFixedHeadersOffset:0px;}@media screen{:root{overflow:hidden;}}" };
          const q = (e4, t3) => (0, u.css)("body{.euiFlyout.euiCollapsibleNav{", (0, p.logicalCSS)("top", g("application.top", "0px")), ";", (0, p.logicalCSS)("left", g("application.left", "0px")), ";", (0, p.logicalCSS)("bottom", g("application.bottom", "0px")), ";}.euiOverlayMask[data-relative-to-header='below']{", (0, p.logicalCSS)("top", g("application.top", "0px")), ";", (0, p.logicalCSS)("left", g("application.left", "0px")), ";", (0, p.logicalCSS)("right", g("application.right", "0px")), ";", (0, p.logicalCSS)("bottom", g("application.bottom", "0px")), ";", "framed" === t3 && `border-radius: ${e4.border.radius.frame};`, ";}.euiFlyout[class*='right']{", "framed" === t3 && `&:not([data-managed-flyout-layout-mode="side-by-side"][data-managed-flyout-level="child"]) {
          border-top-right-radius: ${e4.border.radius.frame};
          border-bottom-right-radius: ${e4.border.radius.frame};
          // EUI clips overlay-right flyout shadows with a sharp polygon; round it to match
          // the framed radius so the shadow doesn't square off at the top/bottom-right.
          clip-path: inset(
            0 0 0 -50% round 0 ${e4.border.radius.frame}
              ${e4.border.radius.frame} 0
          ) !important;
          .euiFlyoutFooter {
            border-bottom-right-radius: ${e4.border.radius.frame};
          }
        }
        // Preserve EUI's unclipped shadow when a child flyout is stacked on top.
        &.euiFlyout--hasChild {
          clip-path: none !important;
        }`, ";}.euiOverlayMask[data-relative-to-header='above']+[data-euiportal='true'] .euiFlyout[class*='right']{border-radius:0;clip-path:polygon(-50% 0, 100% 0, 100% 100%, -50% 100%)!important;}}#", r, "{", (0, p.logicalCSS)("padding-right", "var(--euiPushFlyoutOffsetInlineEnd, 0px)"), ";", (0, p.logicalCSS)("padding-left", "var(--euiPushFlyoutOffsetInlineStart, 0px)"), ";", (0, p.logicalCSS)("padding-bottom", "var(--euiBottomBarOffset, 0px)"), ";}body{", (0, p.logicalCSS)("padding-right", "0px !important"), ";", (0, p.logicalCSS)("padding-left", "0px !important"), ";", (0, p.logicalCSS)("padding-bottom", "0px !important"), ";", (0, p.logicalCSS)("padding-top", "0px !important"), ";}.euiBottomBar.euiBottomBar--fixed{left:", g("application.left", "0px"), "!important;right:", g("application.right", "0px"), "!important;bottom:", g("application.bottom", "0px"), "!important;border-bottom-left-radius:", "framed" === t3 ? e4.border.radius.frame : e4.border.radius.medium, "!important;border-bottom-right-radius:", "framed" === t3 ? e4.border.radius.frame : e4.border.radius.medium, "!important;box-shadow:", e4.shadows.xs.down, "!important;clip-path:inset(0 -10px -10px -10px)!important;}", ""), V = ({ appearance: e4 = "plain" }) => {
            const t3 = (0, p.useEuiTheme)();
            return (0, u.jsx)(u.Global, { styles: [G, q(t3.euiTheme, e4), "", ""] });
          }, K = (0, u.css)("pointer-events:none;position:fixed;inset:0;z-index:", b.debug, ";", ""), Y = { name: "1ffs6b8", styles: "position:absolute;border:2px dashed rgba(0, 153, 255, 0.8);background:rgba(0, 153, 255, 0.1);color:#0099ff;font-size:12px;font-family:monospace;display:flex;align-items:flex-start;justify-content:flex-start;pointer-events:none" }, J = { name: "10i53l1", styles: "background:rgba(0, 153, 255, 0.85);color:white;padding:2px 6px;border-radius:0 0 4px 0;font-size:11px;margin:0;pointer-events:none" }, X = [{ name: "banner", style: { top: g("banner.top"), left: g("banner.left"), right: g("banner.right"), bottom: g("banner.bottom"), width: g("banner.width"), height: g("banner.height") } }, { name: "header", style: { top: g("header.top"), bottom: g("header.bottom"), left: g("header.left"), right: g("header.right"), width: g("header.width"), height: g("header.height") } }, { name: "navigation", style: { top: g("navigation.top"), bottom: g("navigation.bottom"), left: g("navigation.left"), right: g("navigation.right"), width: g("navigation.width"), height: g("navigation.height") } }, { name: "sidebar", style: { top: g("sidebar.top"), bottom: g("sidebar.bottom"), left: g("sidebar.left"), right: g("sidebar.right"), width: g("sidebar.width"), height: g("sidebar.height") } }, { name: "application", style: { top: g("application.top"), bottom: g("application.bottom"), left: g("application.left"), right: g("application.right"), width: g("application.width"), height: g("application.height") } }, { name: "applicationTopBar", style: { top: g("application.topBar.top"), bottom: g("application.topBar.bottom"), left: g("application.topBar.left"), right: g("application.topBar.right"), width: g("application.topBar.width"), height: g("application.topBar.height") } }, { name: "footer", style: { top: g("footer.top"), bottom: g("footer.bottom"), left: g("footer.left"), right: g("footer.right"), width: g("footer.width"), height: g("footer.height") } }, { name: "applicationBottomBar", style: { top: g("application.bottomBar.top"), bottom: g("application.bottomBar.bottom"), left: g("application.bottomBar.left"), right: g("application.bottomBar.right"), width: g("application.bottomBar.width"), height: g("application.bottomBar.height") } }, { name: "applicationContent", style: { top: g("application.content.top"), left: g("application.content.left"), right: g("application.content.right"), width: g("application.content.width"), height: g("application.content.height") } }], Z = { banner: "#0099ff", header: "#00bfae", navigation: "#c837ab", sidebar: "#ffd600", application: "#4caf50", applicationTopBar: "#1976d2", applicationBottomBar: "#e65100", applicationContent: "#00bcd4", footer: "#7c4dff" }, Q = ({ colors: e4 = {} }) => {
            const t3 = { ...Z, ...e4 };
            return (0, u.jsx)("div", { css: K }, X.map((e5) => {
              const i3 = t3[e5.name] || Object.values(Z)[0];
              return (0, u.jsx)("div", { key: e5.name, css: (0, u.css)([Y, `
                border-color: ${i3};
                background: ${i3}1A;
                color: ${i3};
              `], "", ""), style: e5.style }, (0, u.jsx)("span", { css: (0, u.css)([J, `background: ${i3};`], "", "") }, e5.name));
            }));
          }, ee = () => {
            const e4 = document.getElementById(r);
            return e4 instanceof HTMLElement ? e4 : document.documentElement;
          }, te = (e4 = ee()) => e4.clientHeight, ie = (e4 = ee()) => {
            const t3 = e4.getBoundingClientRect();
            return { top: t3.top, bottom: t3.top + e4.clientHeight };
          }, oe = (e4 = ee()) => e4.scrollTop, ne = (e4, t3 = ee()) => {
            t3.scrollTo({ top: e4.top, behavior: e4.behavior });
          }, ae = (e4 = {}, t3 = ee()) => {
            ne({ top: 0, behavior: e4.behavior }, t3);
          }, re = (e4 = {}, t3 = ee()) => {
            ne({ top: t3.scrollHeight, behavior: e4.behavior }, t3);
          }, se = (e4 = ee()) => ({ scrollTop: e4.scrollTop, scrollHeight: e4.scrollHeight, clientHeight: e4.clientHeight }), le = (e4, t3 = ee()) => {
            t3.scrollBy({ top: e4.top, behavior: e4.behavior });
          }, de = (e4 = ee()) => {
            const { scrollTop: t3, scrollHeight: i3, clientHeight: o3 } = se(e4);
            return i3 - o3 - t3 <= 1;
          }, ce = (e4) => {
            const { euiTheme: t3, highContrastMode: i3 } = e4;
            if (i3) return `${t3.border.width.thin} solid ${t3.border.color}`;
            if ("DARK" === e4.colorMode) {
              const e5 = t3.border.thin;
              return e5 ? String(e5) : "none";
            }
            return "none";
          }, ue = (e4, t3 = {}) => {
            const { euiTheme: i3, highContrastMode: o3 } = e4, { side: n3 = "bottom", width: a3 = i3.size.xl, left: r2 = "0", right: s2 = "0" } = t3;
            return o3 ? `
      ${"top" === n3 ? "border-top" : "border-bottom"}: ${i3.border.width.thin} solid ${i3.border.color};
    ` : `
    &::${"top" === n3 ? "before" : "after"} {
      content: '';
      position: absolute;
      ${n3}: 0;
      left: ${r2};
      right: ${s2};
      width: ${a3};
      margin: 0 auto;
      height: ${i3.border.width.thin};
      background-color: ${i3.colors.borderBasePlain};
    }
  `;
          }, pe = ["xs", "s", "m", "l", "xl"], he = () => {
            const { euiTheme: e4 } = (0, p.useEuiTheme)(), [t3, i3] = (0, n2.useState)();
            return (0, n2.useLayoutEffect)(() => {
              const t4 = document.getElementById(r);
              if (!(t4 instanceof HTMLElement)) return void i3(void 0);
              const o3 = (t5) => {
                i3(((e5, t6) => pe.reduce((i4, o4) => e5 >= t6[o4] ? o4 : i4, pe[0]))(t5, e4.breakpoint));
              }, { paddingLeft: n3, paddingRight: a3 } = getComputedStyle(t4), s2 = t4.clientWidth - (parseFloat(n3) || 0) - (parseFloat(a3) || 0);
              o3(s2);
              const l2 = new ResizeObserver(([e5]) => {
                var t5, i4;
                const n4 = null !== (t5 = null === (i4 = e5.contentBoxSize[0]) || void 0 === i4 ? void 0 : i4.inlineSize) && void 0 !== t5 ? t5 : e5.contentRect.width;
                o3(n4);
              });
              return l2.observe(t4, { box: "content-box" }), () => {
                l2.disconnect();
              };
            }, [e4.breakpoint]), t3;
          }, ge = (e4, t3 = true) => {
            const i3 = he();
            return Boolean(i3 && t3 && e4.includes(i3));
          };
          a2();
          const me = ({ value: e4, children: t3 }) => {
            const [i3, o3] = (0, n2.useState)(e4), [a3, r2] = (0, n2.useState)({});
            (0, n2.useEffect)(() => {
              o3((t4) => {
                const i4 = I(t4, e4);
                return 0 === Object.keys(i4).length ? t4 : (r2((e5) => {
                  const t5 = { ...e5 };
                  return Object.keys(i4).forEach((e6) => {
                    delete t5[e6];
                  }), t5;
                }), { ...t4, ...i4 });
              });
            }, [e4]);
            const s2 = (0, n2.useCallback)((e5) => {
              r2((t4) => {
                const i4 = I(t4, e5);
                return 0 === Object.keys(i4).length ? t4 : { ...t4, ...i4 };
              });
            }, []), l2 = { ...i3, ...a3 };
            return (0, u.jsx)(j.Provider, { value: s2 }, (0, u.jsx)(w.Provider, { value: l2 }, t3));
          };
          var be = t2;
          for (var fe in o2) be[fe] = o2[fe];
          o2.__esModule && Object.defineProperty(be, "__esModule", { value: true });
        })();
      }, 477: (e2) => {
        "use strict";
        e2.exports = (init_eui(), __toCommonJS(eui_exports));
      }, 537: (e2) => {
        "use strict";
        e2.exports = (init_react2(), __toCommonJS(react_exports2));
      }, 15: (e2) => {
        "use strict";
        e2.exports = (init_react(), __toCommonJS(react_exports));
      } }, t = {};
      function i(o2) {
        var n2 = t[o2];
        if (void 0 !== n2) return n2.exports;
        var a2 = t[o2] = { exports: {} };
        return e[o2](a2, a2.exports, i), a2.exports;
      }
      i.n = (e2) => {
        var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
        return i.d(t2, { a: t2 }), t2;
      }, i.d = (e2, t2) => {
        for (var o2 in t2) i.o(t2, o2) && !i.o(e2, o2) && Object.defineProperty(e2, o2, { enumerable: true, get: t2[o2] });
      }, i.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), i.r = (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      };
      var o = {};
      (() => {
        "use strict";
        i.r(o), i.d(o, { SideNavigation: () => ae });
        var e2 = i(15), t2 = i.n(e2);
        function n2() {
          return n2 = Object.assign ? Object.assign.bind() : function(e3) {
            for (var t3 = 1; t3 < arguments.length; t3++) {
              var i2 = arguments[t3];
              for (var o2 in i2) ({}).hasOwnProperty.call(i2, o2) && (e3[o2] = i2[o2]);
            }
            return e3;
          }, n2.apply(null, arguments);
        }
        var a2 = i(537);
        const r = ({ id: e3, defaultMessage: i2, values: o2 }) => o2 && i2 ? (0, a2.jsx)(t2().Fragment, null, Object.entries(o2).reduce((e4, [t3, i3]) => e4.replace(new RegExp(`\\{${t3}\\}`, "g"), String(i3)), i2)) : (0, a2.jsx)(t2().Fragment, null, null != i2 ? i2 : e3), s = (e3, t3) => {
          var i2;
          const o2 = null !== (i2 = null == t3 ? void 0 : t3.defaultMessage) && void 0 !== i2 ? i2 : e3;
          return null != t3 && t3.values ? Object.entries(t3.values).reduce((e4, [t4, i3]) => e4.replace(new RegExp(`\\{${t4}\\}`, "g"), String(i3)), o2) : o2;
        };
        var l = i(477);
        const d = "kbnChromeNav", c = `${d}-root`, u = `${d}-primaryNavigation`, p = `${d}-moreMenu`, h = `${d}-mainPanel`;
        var g = { name: "ozd7xs", styles: "flex-shrink:0" };
        const m = ({ type: e3, isInverted: t3, alignment: i2 = "bottom" }) => {
          const { euiTheme: o2 } = (0, l.useEuiTheme)(), n3 = "new" === e3, r2 = g, d2 = (0, a2.css)(r2, ";vertical-align:", "text-bottom" === i2 ? "text-bottom" : "bottom", ";", ""), c2 = { techPreview: { iconType: "flask", label: s("kbnUI.sideNavigation.techPreviewBadgeLabel", { defaultMessage: "Tech preview" }) }, beta: { iconType: "beta", label: s("kbnUI.sideNavigation.betaBadgeLabel", { defaultMessage: "Beta" }) }, new: { label: s("kbnUI.sideNavigation.newBadgeLabel", { defaultMessage: "New" }) } };
          return (0, a2.jsx)(l.EuiThemeProvider, { colorMode: t3 ? "dark" : void 0 }, n3 ? (0, a2.jsx)(l.EuiBadge, { css: r2, children: c2[e3].label, color: o2.colors.backgroundFilledPrimary }) : (0, a2.jsx)(l.EuiBetaBadge, { css: d2, iconType: c2[e3].iconType, label: c2[e3].label, size: "s" }));
        };
        var b = i(56);
        const f = ({ euiTheme: e3 }) => `
    outline-color: var(--high-contrast-hover-indicator-color, ${e3.border.color});
    outline-width: ${e3.border.width.thin};
    outline-style: dashed;
    outline-offset: -${e3.border.width.thin};
`, v = (e3 = "") => {
          const t3 = (0, l.useEuiTheme)(), { highContrastMode: i2 } = t3, o2 = { preferred: (0, a2.css)("border:", t3.euiTheme.border.width.thin, " solid transparent;transition:none;&:hover ", e3, "{", f(t3), ";}", ""), forced: (0, a2.css)("border:none;&:hover ", e3, "{", f(t3), ";}", "") };
          return i2 ? o2[i2] : void 0;
        }, x = ({ isHighlighted: e3 }) => {
          const { euiTheme: t3 } = (0, l.useEuiTheme)(), i2 = (0, a2.css)("position:absolute;top:1px;right:1px;pointer-events:none;stroke:", e3 ? t3.components.buttons.backgroundText : t3.colors.body, ";stroke-width:2px;paint-order:stroke;", "");
          return (0, a2.jsx)(l.EuiIcon, { css: i2, color: "primary", type: "dot", size: "m", "aria-hidden": true });
        };
        var y = { name: "5tpiub", styles: "position:relative;display:inline-flex" }, w = { name: "e3viwr", styles: "display:flex;justify-content:center;width:100%" };
        const j = (0, e2.forwardRef)(({ badgeType: t3, hasContent: i2, iconType: o2, id: r2, isCurrent: s2, isHighlighted: c2, isNew: u2, label: p2, ...h2 }, g2) => {
          const { euiTheme: b2 } = (0, l.useEuiTheme)(), f2 = v(), j2 = w, k2 = (0, a2.css)("--high-contrast-hover-indicator-color:", b2.colors.textParagraph, ";", f2, ";", ""), S2 = y, I2 = { "aria-current": s2 ? "page" : void 0, "aria-label": p2, buttonRef: g2, color: "text", "data-highlighted": c2 ? "true" : "false", "data-test-subj": `${d}-footerItem-${r2}`, "data-menu-item": "true", display: c2 ? "base" : "empty", iconType: "empty", size: "s", css: k2, ...h2 }, T2 = (0, a2.jsx)("div", { css: S2 }, (0, a2.jsx)(e2.Suspense, { fallback: (0, a2.jsx)(l.EuiButtonIcon, n2({ buttonRef: g2 }, I2)) }, (0, a2.jsx)(l.EuiButtonIcon, n2({ buttonRef: g2 }, I2, { iconType: o2 || "empty" }))), u2 && (0, a2.jsx)(x, { isHighlighted: c2 }));
          if (!i2) {
            const e3 = (0, a2.css)("display:flex;align-items:center;gap:", b2.size.s, ";", ""), i3 = "new" !== t3 || u2 ? t3 : void 0, o3 = i3 ? (0, a2.jsx)("span", { css: e3 }, p2, (0, a2.jsx)(m, { type: i3, isInverted: true })) : p2;
            return (0, a2.jsx)(l.EuiToolTip, { anchorProps: { css: j2 }, content: o3, disableScreenReaderOutput: true, position: "right", repositionOnScroll: true, offset: 4 }, T2);
          }
          return (0, a2.jsx)("div", { css: j2 }, T2);
        }), k = (e3) => Array.from(e3.querySelectorAll("button, a")).filter((e4) => !e4.hasAttribute("disabled") && !e4.getAttribute("aria-hidden")), S = (e3) => {
          var t3;
          e3.stopPropagation();
          const i2 = e3.currentTarget, o2 = k(i2), n3 = o2.findIndex((e4) => e4 === document.activeElement);
          let a3 = n3;
          switch (e3.key) {
            case "ArrowDown":
              e3.preventDefault(), a3 = (n3 + 1) % o2.length;
              break;
            case "ArrowUp":
              e3.preventDefault(), a3 = (n3 - 1 + o2.length) % o2.length;
              break;
            case "Home":
              e3.preventDefault(), a3 = 0;
              break;
            case "End":
              e3.preventDefault(), a3 = o2.length - 1;
              break;
            default:
              return;
          }
          null === (t3 = o2[a3]) || void 0 === t3 || t3.focus();
        }, I = (e3) => {
          e3.forEach((e4, t3) => {
            e4.tabIndex = 0 === t3 ? 0 : -1;
          });
        }, T = (0, e2.forwardRef)(({ children: i2, isCollapsed: o2, collapseButton: n3 }, r2) => {
          const c2 = (0, l.useEuiTheme)(), u2 = (0, l.useGeneratedHtmlId)({ prefix: "footer-navigation-instructions" }), p2 = (0, e2.useMemo)(() => ((e3, t3) => {
            const { euiTheme: i3 } = e3;
            return { root: (0, a2.css)("align-items:center;display:flex;position:relative;flex-direction:column;gap:", i3.size.xs, ";justify-content:center;padding-top:", t3 ? i3.size.s : i3.size.m, ";", (0, b.getHighContrastSeparator)(e3, { side: "top" }), ";", ""), collapseDivider: (0, a2.css)("position:relative;background-color:transparent;", (0, b.getHighContrastSeparator)(e3, { side: "top" }), ";", "") };
          })(c2, o2), [c2, o2]);
          return (0, a2.jsx)(t2().Fragment, null, (0, a2.jsx)(l.EuiScreenReaderOnly, null, (0, a2.jsx)("p", { id: u2 }, s("kbnUI.sideNavigation.footerInstructions", { defaultMessage: "You are in the main navigation footer menu. Use Up and Down arrow keys to navigate the menu." }))), (0, a2.jsx)("footer", { "aria-label": s("kbnUI.sideNavigation.footerAriaLabel", { defaultMessage: "Side navigation" }), css: p2.root, onKeyDown: S, ref: (e3) => {
            if ("function" == typeof r2 ? r2(e3) : r2 && (r2.current = e3), e3) {
              const t3 = k(e3);
              I(t3);
            }
          }, "data-test-subj": `${d}-footer` }, "function" == typeof i2 ? i2({ footerNavigationInstructionsId: u2 }) : i2, n3 && (0, a2.jsx)(t2().Fragment, null, (0, a2.jsx)(l.EuiHorizontalRule, { margin: "xs", css: p2.collapseDivider }), n3)));
        }), C = Object.assign(T, { Item: j });
        function M(e3 = false) {
          const { euiTheme: t3 } = (0, l.useEuiTheme)(), { fontSize: i2, lineHeight: o2 } = (0, l.useEuiFontSize)("s"), n3 = (0, a2.css)("padding-top:calc((", 64, "px - ", o2, ") / 2);", "");
          return (0, a2.css)("--border-width:", t3.border.width.thin, ";--horizontal-padding:calc(20px - var(--border-width));flex-shrink:0;padding:", t3.size.base, " var(--horizontal-padding) ", t3.size.xxs, " var(--horizontal-padding);margin:0 1px;", e3 && n3, " & h4{font-size:", i2, ";line-height:", o2, ";}", "");
        }
        const B = (0, e2.createContext)(null), E = () => {
          const t3 = (0, e2.useContext)(B);
          if (!t3) throw new Error("useNestedMenu must be used within a NestedSecondaryMenu");
          return t3;
        };
        var P = { name: "1r5gb7q", styles: "display:inline-block" }, N = { name: "17596ix", styles: "display:block;min-width:0;overflow:hidden;white-space:nowrap" };
        var O = { name: "1e5o0u4", styles: "flex-shrink:0;margin-left:auto;opacity:0.6" };
        const z = (e3 = false) => (0, a2.css)((0, l.useEuiOverflowScroll)("y", e3), " flex:1 1 auto;min-height:0;", ""), $ = { name: "18tzzkj", styles: "display:flex;flex-direction:column;min-height:0" }, L = (0, e2.forwardRef)(({ badgeType: e3, children: t3, footer: i2, title: o2, isNew: n3 = false, isPanel: r2 = false }, s2) => {
          const { euiTheme: d2 } = (0, l.useEuiTheme)(), c2 = M(r2), u2 = z(true), p2 = (0, a2.css)("display:flex;align-items:center;gap:", d2.size.xs, ";", "");
          return (0, a2.jsx)("div", { ref: s2, css: $ }, (0, a2.jsx)(l.EuiTitle, { css: c2, size: "xs" }, (0, a2.jsx)("div", { css: p2 }, (0, a2.jsx)("h4", null, o2), e3 && ("new" !== e3 || n3) && (0, a2.jsx)(m, { type: e3, alignment: "text-bottom" }))), (0, a2.jsx)("div", { css: u2 }, t3), i2);
        }), H = Object.assign(L, { Item: ({ badgeType: t3, children: i2, hasSubmenu: o2, href: r2, iconType: s2, id: c2, isCurrent: u2, isExternal: p2, isHighlighted: h2, isNew: g2 = false, testSubjPrefix: b2, ...f2 }) => {
          const { euiTheme: x2 } = (0, l.useEuiTheme)(), y2 = (0, l.useEuiButtonColorCSS)({ display: "base" }).primary, w2 = v(), j2 = (k2 = u2, (0, e2.useCallback)((e3) => {
            e3 && k2 && requestAnimationFrame(() => {
              e3.scrollIntoView({ behavior: "smooth", block: "nearest" });
            });
          }, [k2]));
          var k2;
          const S2 = null != b2 ? b2 : `${d}-secondaryItem`, I2 = s2 ? "left" : "right", T2 = { iconSide: I2, iconType: p2 ? "external" : s2, ...p2 && { target: "_blank" } }, C2 = `${d}-submenuIcon`, M2 = (0, a2.css)("font-weight:", h2 ? x2.font.weight.semiBold : x2.font.weight.regular, ";padding:6px ", x2.size.s, ";width:100%;>span{justify-content:", "left" === I2 ? "flex-start" : "space-between", ";}svg:not(.euiBetaBadge__icon):not(.", C2, "){color:", "right" === I2 ? x2.colors.textDisabled : "inherit", ";}--high-contrast-hover-indicator-color:", h2 ? x2.colors.textPrimary : x2.colors.textParagraph, ";", w2, ";", ""), B2 = (0, a2.css)("align-items:center;display:flex;flex:1;gap:", x2.size.xs, ";min-width:0;", ""), E2 = O, z2 = t3 && "new" !== t3 ? (0, a2.jsx)(m, { type: t3 }) : g2 ? (0, a2.jsx)(m, { type: "new" }) : void 0, { isOverflowing: $2, labelProps: L2, trackProps: H2 } = (({ gutter: t4, isLabelFirst: i3, isLabelLast: o3 }) => {
            const { euiTheme: n3 } = (0, l.useEuiTheme)(), r3 = (0, e2.useMemo)(() => ((e3, t5) => {
              const i4 = e3.animation.slow, o4 = "calc(var(--label-overflow-width) * 20ms)", n4 = t5, r4 = e3.size.l, s4 = [[1, 1], [0.8, 0.92], [0.6, 0.7], [0.4, 0.42], [0.2, 0.15], [0, 0]].map(([e4, t6]) => `rgb(0 0 0 / ${t6}) calc(100% - var(--label-fade-end) * ${e4})`).join(", "), d3 = e3.animation.normal, c4 = a2.keyframes`
    from {
      --label-fade-start: 0px;
    }
    to {
      --label-fade-start: ${n4};
    }
  `, u4 = a2.keyframes`
    from {
      --label-fade-end: ${r4};
    }
    to {
      --label-fade-end: 0px;
    }
  `, p4 = a2.keyframes`
    to {
      transform: translateX(calc(var(--label-overflow-width) * -1px));
    }
  `;
              return { label: N, labelOverflowing: (0, a2.css)("@property --label-fade-start{syntax:'<length>';inherits:false;initial-value:0px;}@property --label-fade-end{syntax:'<length>';inherits:false;initial-value:0px;}--label-fade-start:0px;--label-fade-end:", r4, ";mask-image:linear-gradient(\n        to right,\n        transparent,\n        black var(--label-fade-start),\n        ", s4, "\n      );", l.euiCanAnimate, "{button:hover &,a:hover &,button:focus-visible &,a:focus-visible &{--label-fade-start:", n4, ";--label-fade-end:0px;animation:", c4, " ", d3, " ", i4, " both,", u4, " ", d3, " calc(", i4, " + max(0ms, ", o4, " - ", d3, ")) both;}button:hover &>span,a:hover &>span,button:focus-visible &>span,a:focus-visible &>span{animation:", p4, " ", o4, " linear ", i4, " both;}}", ""), labelOverflowingFirst: (0, a2.css)("margin-left:calc(", t5, " * -1);padding-left:", t5, ";", ""), labelOverflowingLast: (0, a2.css)("margin-right:calc(", t5, " * -1);padding-right:", t5, ";", ""), track: P };
            })(n3, t4), [n3, t4]), [s3, d2] = (0, e2.useState)(null), [c3, u3] = (0, e2.useState)(null), [p3, h3] = (0, e2.useState)(0);
            (0, e2.useLayoutEffect)(() => {
              if (!s3 || !c3) return;
              const e3 = () => {
                const { paddingLeft: e4, paddingRight: t6 } = getComputedStyle(s3), i4 = s3.clientWidth - parseFloat(e4) - parseFloat(t6);
                h3(Math.max(0, c3.offsetWidth - i4));
              };
              e3();
              const t5 = new ResizeObserver(e3);
              return t5.observe(s3), t5.observe(c3), () => t5.disconnect();
            }, [s3, c3]);
            const g3 = p3 > 0;
            return { isOverflowing: g3, labelProps: { ref: d2, css: [r3.label, g3 && r3.labelOverflowing, g3 && i3 && r3.labelOverflowingFirst, g3 && o3 && r3.labelOverflowingLast], style: g3 ? { "--label-overflow-width": p3 } : void 0 }, trackProps: { ref: u3, css: r3.track } };
          })({ gutter: x2.size.s, isLabelFirst: !s2, isLabelLast: !z2 && !o2 && !p2 }), R2 = (0, a2.jsx)("div", { css: B2 }, (0, a2.jsx)("span", L2, (0, a2.jsx)("span", H2, i2)), z2, o2 && (0, a2.jsx)(l.EuiIcon, { "aria-hidden": true, className: C2, color: x2.colors.textDisabled, css: E2, size: "m", type: "chevronSingleRight" }));
          return (0, a2.jsx)("li", { ref: j2, role: "none" }, (0, a2.jsx)(l.EuiToolTip, { content: $2 ? i2 : void 0, disableScreenReaderOutput: true, display: "block", offset: 4, position: "right", repositionOnScroll: true }, (0, a2.jsx)(l.EuiButtonEmpty, n2({ id: c2, "aria-current": u2 ? "page" : void 0, color: h2 ? "primary" : "text", css: [h2 && y2, M2, "", ""], "data-highlighted": h2 ? "true" : "false", "data-test-subj": `${S2}-${c2}`, href: o2 ? void 0 : r2, size: "s", textProps: false }, T2, f2), R2)));
        }, Section: ({ children: t3, id: i2, isPaginated: o2 = false, label: n3 }) => {
          var r2;
          const c2 = (0, l.useEuiTheme)(), { euiTheme: u2, highContrastMode: p2 } = c2, { hasMore: h2, listRef: g2, showMore: m2, visibleItems: b2 } = ((t4, i3) => {
            const [o3, n4] = (0, e2.useState)(5), a3 = (0, e2.useRef)(null), r3 = (0, e2.useRef)(null), s2 = e2.Children.toArray(t4), l2 = i3 && s2.length > o3;
            return (0, e2.useEffect)(() => {
              var e3, t5;
              const i4 = r3.current;
              if (null === i4) return;
              r3.current = null;
              const o4 = null === (e3 = a3.current) || void 0 === e3 ? void 0 : e3.children[i4];
              o4 instanceof HTMLElement && (null === (t5 = k(o4)[0]) || void 0 === t5 || t5.focus());
            }, [o3]), { hasMore: l2, listRef: a3, showMore: () => {
              r3.current = o3, n4((e3) => e3 + 10);
            }, visibleItems: l2 ? s2.slice(0, o3) : s2 };
          })(t3, o2), f2 = n3 ? n3.replace(/\s+/g, "-").toLowerCase() : void 0, v2 = (0, a2.css)("padding:", u2.size.m, ";position:relative;&:not(:last-child){", p2 ? `
        border-bottom: ${u2.border.width.thin} solid ${u2.border.color};
        margin-left: ${u2.size.m};
        margin-right: ${u2.size.m};
        padding-left: 0;
        padding-right: 0;
      ` : `
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: ${u2.size.m};
          right: ${u2.size.m};
          height: ${u2.border.width.thin};
          background-color: ${u2.colors.borderBaseSubdued};
        }
      `, ";}", ""), x2 = (0, a2.css)("font-size:", u2.size.m, ";color:", u2.colors.textSubdued, ";padding:", u2.size.xs, " ", u2.size.s, ";display:block;", ""), y2 = (0, a2.css)("padding-inline:", u2.size.s, ";", ""), w2 = (0, a2.css)("display:flex;flex-direction:column;gap:", u2.size.xs, ";width:100%;", "");
          return (0, a2.jsx)("div", { css: v2, role: "group", "aria-labelledby": f2 || void 0 }, n3 && (0, a2.jsx)(l.EuiText, { id: f2, css: x2, component: "span" }, n3), (0, a2.jsx)("ul", { css: w2, ref: g2, role: "none" }, b2, h2 && (0, a2.jsx)("li", { role: "none" }, (0, a2.jsx)(l.EuiButtonEmpty, { color: "text", css: y2, "data-test-subj": `${d}-section-${null !== (r2 = null != i2 ? i2 : f2) && void 0 !== r2 ? r2 : "untitled"}-showMore`, iconType: "chevronSingleDown", onClick: m2, size: "xs" }, s("kbnUI.sideNavigation.section.showMore", { defaultMessage: "Show more" })))));
        } }), R = ({ children: t3, initialPanel: i2 = h }) => {
          const [o2, n3] = (0, e2.useState)(i2), [r2, s2] = (0, e2.useState)([]), [l2, d2] = (0, e2.useState)(), c2 = (0, e2.useCallback)((e3, t4) => {
            s2((e4) => [...e4, { id: o2, returnFocusId: t4 || l2 }]), n3(e3), d2(void 0);
          }, [o2, l2]), u2 = (0, e2.useCallback)(() => {
            s2((e3) => {
              const t4 = e3[e3.length - 1];
              return t4 ? (n3(t4.id), d2(t4.returnFocusId), e3.slice(0, -1)) : e3;
            });
          }, []), p2 = (0, e2.useMemo)(() => ({ canGoBack: r2.length > 0, currentPanel: o2, goBack: u2, goToPanel: c2, panelStackDepth: r2.length, returnFocusId: l2 }), [o2, u2, c2, r2.length, l2]);
          return (0, a2.jsx)(B.Provider, { value: p2 }, t3);
        };
        R.Header = ({ title: e3, "aria-describedby": t3 }) => {
          const { goBack: i2 } = E(), { euiTheme: o2 } = (0, l.useEuiTheme)(), n3 = M(), r2 = (0, a2.css)("align-items:center;display:flex;gap:", o2.size.xs, ";", n3, ";", "");
          return (0, a2.jsx)("div", { css: r2 }, (0, a2.jsx)(l.EuiToolTip, { content: s("kbnUI.sideNavigation.goBackButtonIconAriaLabel", { defaultMessage: "Go back" }), disableScreenReaderOutput: true }, (0, a2.jsx)(l.EuiButtonIcon, { "aria-describedby": t3, "aria-label": s("kbnUI.sideNavigation.goBackButtonIconAriaLabel", { defaultMessage: "Go back" }), color: "text", iconType: "chevronSingleLeft", onClick: i2 })), e3 && (0, a2.jsx)(l.EuiTitle, { size: "xs" }, (0, a2.jsx)("h4", null, e3)));
        }, R.Item = ({ children: e3, href: t3, id: i2, isHighlighted: o2 = false, isCurrent: r2, ...s2 }) => {
          const l2 = `${d}-nestedMenuItem`;
          return (0, a2.jsx)(H.Item, n2({ id: i2, href: t3 || "", isHighlighted: o2, isCurrent: r2 }, s2, { key: `nested-item-${i2}`, testSubjPrefix: l2 }), e3);
        }, R.Panel = ({ children: t3, footer: i2, header: o2, id: n3, title: r2 }) => {
          const { currentPanel: c2, panelStackDepth: u2, returnFocusId: p2 } = E(), { euiTheme: h2 } = (0, l.useEuiTheme)(), g2 = z(true), m2 = `${d}-nestedPanel-${n3}`, b2 = (0, l.useGeneratedHtmlId)({ prefix: `panel-navigation-instructions-${n3}` }), f2 = (0, l.useGeneratedHtmlId)({ prefix: `panel-enter-submenu-instructions-${n3}` }), v2 = 0 === u2, x2 = v2 ? s("kbnUI.sideNavigation.morePanelInstructions", { defaultMessage: "You are in the More primary menu dialog. Use Up and Down arrow keys to navigate. Press Escape to exit to the menu trigger." }) : s("kbnUI.sideNavigation.nestedPanelInstructions", { defaultMessage: "You are in a submenu. Use Up and Down arrow keys to navigate. Press Go back or Escape to exit to the parent menu." }), y2 = s("kbnUI.sideNavigation.panelEnterSubmenuInstruction", { defaultMessage: "Press Enter to go to the submenu." }), w2 = (0, e2.useCallback)((e3) => {
            if (c2 === n3) {
              if (p2 && e3) {
                const t5 = e3.querySelector(`#${CSS.escape(p2)}`);
                if (t5) return t5.focus();
              }
              var t4;
              if (!v2 && e3) null === (t4 = k(e3)[0]) || void 0 === t4 || t4.focus();
            }
          }, [c2, n3, p2, v2]), j2 = (e3) => "function" == typeof e3 ? e3({ panelNavigationInstructionsId: b2, panelEnterSubmenuInstructionsId: f2 }) : e3;
          if (c2 !== n3) return null;
          const S2 = (0, a2.css)("flex-shrink:0;padding:", h2.size.xxs, " ", h2.size.m, " ", h2.size.m, ";", ""), I2 = i2 ? (0, a2.jsx)("div", { css: S2, "data-test-subj": `${m2}-footer` }, i2) : null;
          return r2 ? (0, a2.jsx)(H, { "data-test-subj": m2, footer: I2, ref: w2, title: r2, isPanel: false }, (0, a2.jsx)(l.EuiScreenReaderOnly, null, (0, a2.jsx)("p", { id: b2 }, x2)), (0, a2.jsx)(l.EuiScreenReaderOnly, null, (0, a2.jsx)("p", { id: f2 }, y2)), j2(t3)) : (0, a2.jsx)("div", { css: $, "data-test-subj": m2, ref: w2 }, j2(o2), (0, a2.jsx)("div", { css: g2 }, (0, a2.jsx)(l.EuiScreenReaderOnly, null, (0, a2.jsx)("p", { id: b2 }, x2)), j2(t3)), I2);
        }, R.PrimaryMenuItem = ({ children: t3, hasSubmenu: i2 = false, id: o2, isCurrent: r2, isHighlighted: s2 = false, onClick: l2, ...d2 }) => {
          const { goToPanel: c2 } = E(), u2 = (0, e2.useCallback)(() => {
            i2 ? c2(o2, o2) : null == l2 || l2();
          }, [i2, o2, c2, l2]);
          return (0, a2.jsx)(H.Item, n2({ id: o2, isHighlighted: s2, isCurrent: r2, onClick: u2, hasSubmenu: i2 }, d2), t3);
        }, R.Section = H.Section;
        var A = { name: "1d3w5wq", styles: "width:100%" }, F = { name: "rpzwy", styles: "display:-webkit-box;-webkit-box-orient:vertical;line-clamp:2;-webkit-line-clamp:2" }, U = { name: "oragi2", styles: "white-space:nowrap;text-overflow:ellipsis" };
        const _ = (0, e2.forwardRef)(({ children: i2, iconType: o2, id: r2, isCurrent: s2 = false, isHighlighted: c2, isLabelVisible: u2 = true, isNew: p2 = false, isTruncated: h2 = true, ...g2 }, m2) => {
          const b2 = (0, l.useEuiTheme)(), { euiTheme: f2 } = b2, y2 = "string" == typeof i2 && !i2.includes(" "), w2 = `${d}-iconWrapper`, j2 = (0, a2.css)("--menu-item-text-color:", f2.components.buttons.textColorText, ";--high-contrast-hover-indicator-color:var(--menu-item-text-color);", v(`.${w2}`), ";width:100%;position:relative;overflow:hidden;align-items:center;justify-content:center;display:flex;flex-direction:column;gap:3px;/* eslint-disable-next-line @elastic/eui/no-css-color */color:var(--menu-item-text-color);outline:none!important;.", w2, "{position:relative;display:flex;justify-content:center;align-items:center;height:", f2.size.xl, ";width:", f2.size.xl, ";box-sizing:border-box;border-radius:", f2.border.radius.control, ";border:", f2.border.width.thin, " solid ", c2 ? f2.colors.borderBasePlain : "transparent", ";background-color:", c2 ? f2.components.buttons.backgroundText : f2.colors.backgroundTransparent, ";z-index:1;}.", w2, "::before{content:'';position:absolute;inset:0;border-radius:", f2.border.radius.control, ";background-color:transparent;z-index:0;}&:focus-visible .", w2, "{border:", f2.border.width.thick, " solid ", f2.colors.textParagraph, ";}&:hover .", w2, "::before{background-color:", f2.components.buttons.backgroundTextHover, ";}&:active .", w2, "::before{background-color:", f2.components.buttons.backgroundTextActive, ";}", ""), k2 = h2 && (y2 ? U : F), S2 = (0, a2.css)((0, l.euiFontSize)(b2, "xxs", { unit: "px" }), ";font-weight:", f2.font.weight.semiBold, ";", ""), I2 = (0, a2.css)(k2, " ", S2, " overflow:hidden;max-width:100%;padding:0 ", f2.size.s, ";", ""), T2 = (0, a2.jsx)(t2().Fragment, null, (0, a2.jsx)("div", { className: w2 }, (0, a2.jsx)(e2.Suspense, { fallback: (0, a2.jsx)(l.EuiIcon, { "aria-hidden": true, color: "currentColor", type: "empty" }) }, (0, a2.jsx)(l.EuiIcon, { "aria-hidden": true, color: "currentColor", type: o2 || "empty" })), p2 && (0, a2.jsx)(x, { isHighlighted: c2 })), u2 ? (0, a2.jsx)(l.EuiText, { textAlign: "center", css: I2 }, i2) : (0, a2.jsx)(l.EuiScreenReaderOnly, null, (0, a2.jsx)(l.EuiText, null, i2))), C2 = { css: j2, "data-menu-item": true, "data-highlighted": c2 ? "true" : "false" };
          if (void 0 === g2.href) {
            const e3 = g2;
            return (0, a2.jsx)("button", n2({ id: r2, ref: m2 }, C2, e3), T2);
          }
          {
            const e3 = g2;
            return (0, a2.jsx)("a", n2({ "aria-current": s2 ? "page" : void 0, id: r2, ref: m2 }, C2, e3), T2);
          }
        });
        var D = { name: "e3viwr", styles: "display:flex;justify-content:center;width:100%" };
        const W = (0, e2.forwardRef)(({ badgeType: e3, children: t3, hasContent: i2, href: o2, iconType: r2, id: s2, isCollapsed: c2, isCurrent: u2, isHighlighted: p2, isHorizontal: h2, isNew: g2, ...b2 }, f2) => {
          const { euiTheme: v2 } = (0, l.useEuiTheme)(), x2 = D, y2 = (0, a2.css)("display:flex;align-items:center;gap:", v2.size.xs, ";", ""), w2 = "new" !== e3 || g2 ? e3 : void 0, j2 = (e4) => (0, a2.jsx)("div", { css: y2 }, e4 && (0, a2.jsx)("span", null, e4), w2 && (0, a2.jsx)(m, { type: w2, isInverted: true })), k2 = `${d}-primaryItem-${s2}`, S2 = (0, a2.jsx)(_, n2({ "data-test-subj": k2, href: o2, iconType: r2, id: s2, isCurrent: u2, isHighlighted: p2, isLabelVisible: !c2, isNew: g2, ref: f2 }, b2), t3), I2 = i2 ? null : c2 ? w2 ? j2(t3) : t3 : !c2 && w2 ? j2() : null;
          return I2 ? (0, a2.jsx)(l.EuiToolTip, { anchorProps: { css: x2 }, content: I2, disableScreenReaderOutput: true, position: "right", repositionOnScroll: true, offset: 4 }, S2) : S2;
        }), G = (0, e2.forwardRef)(({ children: i2, isCollapsed: o2, isOverflowMeasured: n3 }, r2) => {
          const { euiTheme: d2 } = (0, l.useEuiTheme)(), c2 = (0, l.useGeneratedHtmlId)({ prefix: "main-navigation-instructions" }), p2 = (0, e2.useMemo)(() => ((e3, t3) => (0, a2.css)("align-items:center;display:flex;flex-direction:column;flex:1;gap:", t3 ? e3.size.xs : e3.size.base, ";min-height:0;", ""))(d2, o2), [d2, o2]);
          return (0, a2.jsx)(t2().Fragment, null, (0, a2.jsx)(l.EuiScreenReaderOnly, null, (0, a2.jsx)("p", { id: c2 }, s("kbnUI.sideNavigation.primaryMenuInstructions", { defaultMessage: "You are in the main navigation primary menu. Use Up and Down arrow keys to navigate the menu." }))), (0, a2.jsx)("nav", { "aria-label": s("kbnUI.sideNavigation.primaryMenuAriaLabel", { defaultMessage: "Main" }), css: p2, id: u, "data-test-subj": u, "data-overflow-measured": n3 ? "true" : "false", onKeyDown: S, ref: (e3) => {
            if (e3) {
              const t3 = k(e3);
              I(t3);
            }
            "function" == typeof r2 ? r2(e3) : r2 && "current" in r2 && (r2.current = e3);
          } }, "function" == typeof i2 ? i2({ mainNavigationInstructionsId: c2 }) : i2));
        }), q = Object.assign(G, { Item: W }), V = ({ children: t3, isCollapsed: i2 }) => {
          const { euiTheme: o2 } = (0, l.useEuiTheme)(), n3 = (0, e2.useMemo)(() => ((e3, t4) => (0, a2.css)("box-sizing:border-box;background-color:", e3.colors.backgroundTransparent, ";display:flex;flex-direction:column;gap:", t4 ? e3.size.s : e3.size.m, ";height:100%;padding-bottom:", e3.size.s, ";width:", t4 ? 48 : 100, "px;", ""))(o2, i2), [o2, i2]);
          return (0, a2.jsx)("div", { className: c, css: n3 }, t3);
        };
        V.PrimaryMenu = q, V.Popover = ({ children: t3, container: i2, hasContent: o2, isSidePanelOpen: n3, isAnyPopoverLocked: r2 = false, setIsLocked: d2 = () => {
        }, label: u2, secondaryMenuTitle: p2, persistent: h2 = false, trigger: g2 }) => {
          const m2 = null != p2 ? p2 : u2, { euiTheme: f2 } = (0, l.useEuiTheme)(), { setHoverTimeout: v2, clearHoverTimeout: x2 } = (() => {
            const t4 = (0, e2.useRef)(null), i3 = (0, e2.useCallback)(() => {
              "undefined" != typeof window && null !== t4.current && (window.clearTimeout(t4.current), t4.current = null);
            }, []), o3 = (0, e2.useCallback)((e3, o4) => {
              i3(), "undefined" != typeof window && (t4.current = window.setTimeout(e3, o4));
            }, [i3]);
            return (0, e2.useEffect)(() => i3, [i3]), { setHoverTimeout: o3, clearHoverTimeout: i3 };
          })(), y2 = (0, l.useGeneratedHtmlId)({ prefix: "popover-enter-exit-instructions" }), w2 = (0, l.useGeneratedHtmlId)({ prefix: "popover-navigation-instructions" }), j2 = (0, e2.useRef)(null), T2 = (0, e2.useRef)(null), C2 = (0, e2.useRef)(false), [M2, B2] = (0, e2.useState)(false), [E2, P2] = (0, e2.useState)(false), [N2, O2] = (0, e2.useState)(false);
          (0, e2.useEffect)(() => {
            h2 && d2(M2 && E2);
          }, [h2, M2, E2, d2]);
          const z2 = (0, e2.useCallback)(() => B2(true), []), L2 = (0, e2.useCallback)(() => B2(false), []), H2 = (0, e2.useCallback)(() => {
            P2(true);
          }, []), R2 = (0, e2.useCallback)(() => {
            P2(false), L2(), x2(), O2(false);
          }, [L2, x2]), F2 = (0, e2.useCallback)(() => {
            x2(), R2();
          }, [x2, R2]), U2 = (0, e2.useCallback)(() => {
            C2.current || h2 && M2 || r2 && !E2 || (x2(), n3 || v2(H2, 300));
          }, [h2, M2, r2, E2, n3, x2, H2, v2]), _2 = (0, e2.useCallback)(() => {
            C2.current = false, h2 && M2 || v2(F2, 300);
          }, [h2, M2, v2, F2]), D2 = (0, e2.useCallback)(() => {
            h2 || (C2.current = true, x2(), R2());
          }, [h2, x2, R2]), W2 = (0, e2.useCallback)(() => {
            h2 && (E2 && M2 ? F2() : (x2(), H2(), z2()));
          }, [h2, E2, M2, F2, x2, H2, z2]), G2 = (0, e2.useCallback)((e3) => {
            var t4, i3, n4, a3;
            "Enter" === e3.key || " " === e3.key ? (null === (t4 = (i3 = g2.props).onKeyDown) || void 0 === t4 || t4.call(i3, e3), o2 && (e3.preventDefault(), O2(true), H2())) : null === (n4 = (a3 = g2.props).onKeyDown) || void 0 === n4 || n4.call(a3, e3);
          }, [g2, o2, H2]), q2 = (0, e2.useCallback)(() => {
            h2 && z2();
          }, [h2, z2]), V2 = (0, e2.useCallback)((e3) => {
            var t4;
            return "Escape" === e3.key ? (F2(), void (null === (t4 = T2.current) || void 0 === t4 || t4.focus())) : "Tab" === e3.key ? (e3.preventDefault(), F2(), void ((e4, t5) => {
              var i3;
              if ("undefined" == typeof window || !e4.current) return;
              const o3 = document.querySelector(`#${c}`), n4 = o3 ? Array.from(o3.querySelectorAll("[data-menu-item]")).filter((e5) => {
                var t6, i4;
                if (e5.hasAttribute("disabled")) return false;
                if ("true" === e5.getAttribute("aria-hidden")) return false;
                const o4 = null === (t6 = (i4 = window).getComputedStyle) || void 0 === t6 ? void 0 : t6.call(i4, e5);
                return !o4 || "none" !== o4.display && "hidden" !== o4.visibility;
              }) : [], a3 = n4.indexOf(e4.current);
              -1 !== a3 && (null === (i3 = n4[Math.max(0, Math.min(n4.length - 1, a3 + t5))]) || void 0 === i3 || i3.focus());
            })(T2, e3.shiftKey ? -1 : 1)) : void S(e3);
          }, [F2]), K2 = (0, e2.useCallback)((e3) => {
            var t4, i3;
            x2();
            const o3 = e3.relatedTarget;
            false === (o3 && Boolean((null === (t4 = T2.current) || void 0 === t4 ? void 0 : t4.contains(o3)) || (null === (i3 = j2.current) || void 0 === i3 ? void 0 : i3.contains(o3)))) && F2();
          }, [x2, F2]);
          (0, e2.useEffect)(() => () => {
            x2(), F2();
          }, [x2, F2]);
          const Y2 = (0, e2.useMemo)(() => {
            const t4 = [g2.props["aria-describedby"], o2 && !n3 ? y2 : void 0].filter(Boolean).join(" ");
            return (0, e2.cloneElement)(g2, { ref: T2, "aria-haspopup": o2, "aria-expanded": o2 ? E2 : void 0, "aria-describedby": t4 || void 0, onClick: (e3) => {
              var t5, i3;
              null === (t5 = (i3 = g2.props).onClick) || void 0 === t5 || t5.call(i3, e3), W2();
            }, onMouseDown: (e3) => {
              var t5, i3;
              null === (t5 = (i3 = g2.props).onMouseDown) || void 0 === t5 || t5.call(i3, e3), D2();
            }, onKeyDown: G2 });
          }, [g2, o2, E2, G2, W2, D2, n3, y2]), J2 = A, X2 = (0, a2.css)("--popover-max-height:37.5rem;width:", 248, "px;max-height:min(\n      var(--popover-max-height),\n      calc(100dvh - ", 73, "px)\n    );", $, ";", ""), Z2 = (0, a2.css)("position:fixed;inset:0;z-index:calc(", f2.levels.menu, " - 1);", "");
          return (0, a2.jsx)("div", { css: J2, onMouseEnter: U2, onMouseLeave: _2, onFocus: U2, onBlur: K2 }, o2 && !n3 && (0, a2.jsx)(l.EuiScreenReaderOnly, null, (0, a2.jsx)("p", { id: y2 }, s("kbnUI.sideNavigation.popoverInstruction", { defaultMessage: "Press Enter to go to the submenu." }))), (0, a2.jsx)(l.EuiPopover, { "aria-label": m2, anchorPosition: "rightUp", buffer: [56, 0, 17, 5], button: Y2, closePopover: F2, container: i2, display: "block", hasArrow: false, isOpen: o2 && !n3 && E2, offset: 5, ownFocus: false, panelPaddingSize: "none", repositionOnScroll: true, panelProps: { ...b.euiIncludeSelectorInFocusTrap.prop, "data-test-subj": `side-nav-popover-${u2}` } }, (0, a2.jsx)("div", { ref: (e3) => {
            if (j2.current = e3, e3) {
              const t4 = k(e3);
              I(t4), N2 && (((e4) => {
                const t5 = null == e4 ? void 0 : e4.current;
                if (!t5) return;
                const i3 = k(t5);
                i3.length > 0 && i3[0].focus();
              })(j2), O2(false));
            }
          }, onClickCapture: q2, onKeyDown: V2, css: X2 }, (0, a2.jsx)(l.EuiScreenReaderOnly, null, (0, a2.jsx)("p", { id: w2 }, s("kbnUI.sideNavigation.popoverNavigationInstructions", { defaultMessage: "You are in the {label} secondary menu dialog. Use Up and Down arrow keys to navigate the menu. Press Escape to exit to the menu trigger.", values: { label: m2 } }))), "function" == typeof t3 ? t3(F2, { popoverNavigationInstructionsId: w2 }) : t3)), h2 && M2 && E2 && (0, a2.jsx)("div", { onClick: F2, css: Z2 }));
        }, V.SecondaryMenu = H, V.NestedSecondaryMenu = R, V.Footer = C, V.SidePanel = ({ children: i2, footer: o2, openerNode: n3 }) => {
          var r2, c2;
          const u2 = (0, l.useEuiTheme)(), p2 = (0, e2.useMemo)(() => ((e3) => (0, a2.css)("box-sizing:border-box;position:relative;display:flex;flex-direction:column;width:", 248 - b.SIDE_PANEL_CONTENT_GAP, "px;margin-top:", (0, b.layoutVar)("application.marginTop", "0px"), ";margin-bottom:", (0, b.layoutVar)("application.marginBottom", "0px"), ";background-color:", e3.euiTheme.colors.backgroundBasePlain, ";border-radius:", e3.euiTheme.border.radius.frame, ";outline:", (0, b.getHighContrastBorder)(e3), ";", (0, l.euiShadow)(e3, "xs", { border: "none" }), ";", ""))(u2), [u2]), h2 = (0, l.useGeneratedHtmlId)({ prefix: "secondary-navigation-instructions" }), g2 = `${d}-sidePanel`;
          return (0, a2.jsx)(t2().Fragment, null, (0, a2.jsx)(l.EuiScreenReaderOnly, null, (0, a2.jsx)("p", { id: h2 }, s("kbnUI.sideNavigation.sidePanelInstructions", { defaultMessage: "You are in the {label} secondary menu side panel. Use Up and Down arrow keys to navigate the menu.", values: { label: null !== (r2 = n3.secondaryMenuTitle) && void 0 !== r2 ? r2 : n3.label } }))), (0, a2.jsx)(l.EuiSplitPanel.Outer, { "aria-label": s("kbnUI.sideNavigation.sidePanelAriaLabel", { defaultMessage: "Side panel for {label}", values: { label: null !== (c2 = n3.secondaryMenuTitle) && void 0 !== c2 ? c2 : n3.label } }), "aria-describedby": h2, borderRadius: "none", className: g2, css: p2, "data-test-subj": `${g2} ${g2}_${n3.id}`, hasShadow: false, hasBorder: false, role: "region", color: "transparent" }, (0, a2.jsx)(l.EuiSplitPanel.Inner, { color: "transparent", css: $, "data-test-subj": `${d}-panelContent`, onKeyDown: S, panelRef: (e3) => {
            if (e3) {
              const t3 = k(e3);
              I(t3);
            }
          }, paddingSize: "none" }, "function" == typeof i2 ? i2({ secondaryNavigationInstructionsId: h2 }) : i2), (0, a2.jsx)(l.EuiSplitPanel.Inner, { color: "transparent", "data-test-subj": `${d}-panelFooter`, paddingSize: "none", grow: false }, o2)));
        };
        var K = { name: "197ft1x", styles: "&.euiButtonIcon:hover{transform:none;}" };
        const Y = ({ isCollapsed: t3, toggle: i2 }) => {
          const o2 = t3 ? "transitionLeftIn" : "transitionLeftOut", { euiTheme: n3 } = (0, l.useEuiTheme)(), r2 = (0, e2.useMemo)(() => ((e3) => ({ sideNavCollapseButtonWrapper: (0, a2.css)("display:flex;align-items:center;justify-content:center;min-width:", e3.size.xxl, ";", ""), sideNavCollapseButton: K }))(n3), [n3]);
          return (0, a2.jsx)("div", { className: "sideNavCollapseButtonWrapper", css: r2.sideNavCollapseButtonWrapper }, (0, a2.jsx)(l.EuiToolTip, { content: t3 ? s("kbnUI.sideNavigation.expandButtonLabel", { defaultMessage: "Expand navigation menu" }) : s("kbnUI.sideNavigation.collapseButtonLabel", { defaultMessage: "Collapse navigation menu" }), disableScreenReaderOutput: true }, (0, a2.jsx)(l.EuiButtonIcon, { "data-test-subj": "sideNavCollapseButton", css: r2.sideNavCollapseButton, size: "s", color: "text", iconType: o2, "aria-label": t3 ? s("kbnUI.sideNavigation.expandButtonLabel", { defaultMessage: "Expand navigation menu" }) : s("kbnUI.sideNavigation.collapseButtonLabel", { defaultMessage: "Collapse navigation menu" }), "aria-pressed": !t3, "aria-expanded": !t3, "aria-controls": u, onClick: () => i2(!t3) })));
        }, J = (e3) => {
          var t3, i2;
          return (null !== (t3 = null === (i2 = ((e4) => {
            var t4;
            return null !== (t4 = e4.popoverSections) && void 0 !== t4 ? t4 : e4.sections;
          })(e3)) || void 0 === i2 ? void 0 : i2.length) && void 0 !== t3 ? t3 : 0) > 0;
        }, X = (e3) => {
          var t3, i2;
          return (null !== (t3 = null === (i2 = e3.sections) || void 0 === i2 ? void 0 : i2.length) && void 0 !== t3 ? t3 : 0) > 0;
        }, Z = "core.chrome.sidenav.newItems", Q = (e3) => "new" === e3.badgeType, ee = (e3, t3) => e3.find((e4) => e4.id === t3), te = (e3) => {
          var t3;
          if (Q(e3)) return [e3.id];
          const i2 = [];
          return null === (t3 = e3.sections) || void 0 === t3 || t3.forEach((e4) => {
            e4.items.forEach((e5) => {
              Q(e5) && i2.push(e5.id);
            });
          }), i2;
        }, ie = (e3, t3) => {
          if (e3 === t3) return true;
          if (e3.length !== t3.length) return false;
          for (let i2 = 0; i2 < e3.length; i2++) if (e3[i2].label !== t3[i2].label) return false;
          return true;
        };
        const oe = { name: "zjik7", styles: "display:flex" }, ne = ({ activeItemId: i2, isCollapsed: o2, items: u2, onCustomizeNavigation: g2, onItemClick: m2, onToggleCollapsed: f2, setWidth: v2, showTopSeparator: x2 = true, sidePanelFooter: y2, ...w2 }) => {
          var j2, k2, S2, I2, T2;
          const C2 = (0, l.useIsWithinBreakpoints)(["xs", "s"]), M2 = C2 || o2, B2 = (0, l.useEuiTheme)(), E2 = (0, a2.css)("position:relative;flex-shrink:0;", (0, b.getHighContrastSeparator)(B2, { side: "bottom" }), ";", ""), P2 = `${d}-popoverItem`, N2 = `${d}-popoverFooterItem`, O2 = `${d}-sidePanelItem`, z2 = `${d}-moreMenuTrigger`, { actualActiveItemId: $2, visuallyActivePageId: L2, visuallyActiveSubpageId: H2, isSidePanelOpen: R2, openerNode: A2 } = ((t3, i3, o3) => {
            const { primaryItem: n3, secondaryItem: a3 } = (0, e2.useMemo)(() => ((e3, t4) => {
              var i4;
              if (!t4) return { primaryItem: null, secondaryItem: null };
              for (const i5 of [...e3.primaryItems, ...null !== (o4 = e3.overflowItems) && void 0 !== o4 ? o4 : []]) {
                var o4;
                if (i5.sections) for (const e4 of i5.sections) {
                  const o5 = e4.items.find((e5) => e5.id === t4);
                  if (o5) return { primaryItem: i5, secondaryItem: o5 };
                }
              }
              for (const i5 of e3.footerItems) if (i5.sections) for (const e4 of i5.sections) {
                const o5 = e4.items.find((e5) => e5.id === t4);
                if (o5) return { primaryItem: i5, secondaryItem: o5 };
              }
              const n4 = [...e3.primaryItems, ...null !== (i4 = e3.overflowItems) && void 0 !== i4 ? i4 : []].find((e4) => e4.id === t4);
              if (n4) return { primaryItem: n4, secondaryItem: null };
              const a4 = e3.footerItems.find((e4) => e4.id === t4);
              return a4 ? { primaryItem: a4, secondaryItem: null } : { primaryItem: null, secondaryItem: null };
            })(i3, o3), [i3, o3]), r2 = n3;
            return { actualActiveItemId: o3, visuallyActivePageId: null == n3 ? void 0 : n3.id, visuallyActiveSubpageId: null == a3 ? void 0 : a3.id, openerNode: r2, isCollapsed: t3, isSidePanelOpen: !t3 && !(null == r2 || !r2.sections) };
          })(M2, u2, i2), [F2, U2] = (0, e2.useState)(false), { isOverflowMeasured: _2, overflowMenuItems: D2, primaryMenuRef: W2, visibleMenuItems: G2 } = (function(t3, i3, o3 = false) {
            const n3 = (0, e2.useRef)(null), a3 = (0, e2.useRef)([]), [r2, s2] = (0, e2.useState)(i3.length), [l2, d2] = (0, e2.useState)(false), c2 = (0, e2.useMemo)(() => i3.slice(0, r2), [i3, r2]), u3 = (0, e2.useMemo)(() => i3.slice(r2), [i3, r2]), p2 = ((t4) => {
              const i4 = (0, e2.useRef)(t4), o4 = ie(i4.current, t4) ? i4.current : t4;
              return (0, e2.useLayoutEffect)(() => {
                ie(i4.current, t4) || (i4.current = t4);
              }, [t4]), o4;
            })(i3), h2 = (0, e2.useCallback)(() => {
              if (!n3.current) return;
              const e3 = n3.current, t4 = e3.clientHeight;
              if (((e4, t5, i5) => {
                var o4;
                if ((null === (o4 = e4.current) || void 0 === o4 ? void 0 : o4.length) !== i5.length) {
                  const o5 = Array.from(t5.children);
                  o5.length >= i5.length && o5.length <= i5.length + 1 && (e4.current = o5.slice(0, i5.length).map((e5) => e5.clientHeight));
                }
              })(a3, e3, p2), 0 === a3.current.length) return;
              const i4 = ((e4, t5, i5, o4 = false) => {
                const n4 = o4 && e4.length > 0 ? [...e4, e4[0]] : e4, a4 = (e5, i6) => {
                  let o5 = 0, a5 = 0;
                  for (let r4 = 0; r4 < n4.length && o5 < i6; r4++) {
                    const i7 = a5 + n4[r4] + (o5 > 0 ? t5 : 0);
                    if (!(i7 <= e5)) break;
                    a5 = i7, o5++;
                  }
                  return o5;
                }, r3 = a4(i5, 12);
                return n4.length > r3 ? a4(i5 - n4[0] - t5, 11) : Math.min(r3, e4.length);
              })(a3.current, ((e4) => {
                if ("undefined" == typeof window) return 0;
                const t5 = window.getComputedStyle(e4).getPropertyValue("gap");
                return parseFloat(t5);
              })(e3), t4, o3);
              s2(i4), d2(true);
            }, [p2, o3]), [g3, m3] = (function(t4) {
              const i4 = (0, e2.useRef)(null), o4 = (0, e2.useRef)(t4);
              (0, e2.useLayoutEffect)(() => {
                o4.current = t4;
              }, [t4]);
              const n4 = (0, e2.useCallback)(() => {
                null != i4.current && cancelAnimationFrame(i4.current), i4.current = requestAnimationFrame(() => {
                  i4.current = null, o4.current();
                });
              }, []), a4 = (0, e2.useCallback)(() => {
                null != i4.current && (cancelAnimationFrame(i4.current), i4.current = null);
              }, []);
              return (0, e2.useLayoutEffect)(() => () => a4(), [a4]), [n4, a4];
            })(h2);
            return (0, e2.useLayoutEffect)(() => {
              s2(p2.length), d2(false), a3.current = [];
              const e3 = new ResizeObserver(() => {
                g3();
              });
              return n3.current && e3.observe(n3.current), g3(), () => {
                e3.disconnect(), m3();
              };
            }, [t3, p2, o3, g3, m3]), { primaryMenuRef: n3, isOverflowMeasured: l2, visibleMenuItems: c2, overflowMenuItems: u3 };
          })(M2, u2.primaryItems, (null !== (j2 = null === (k2 = u2.overflowItems) || void 0 === k2 ? void 0 : k2.length) && void 0 !== j2 ? j2 : 0) > 0), q2 = [...D2, ...null !== (S2 = u2.overflowItems) && void 0 !== S2 ? S2 : []], K2 = q2.length > 0, ne2 = G2.length + (K2 ? 1 : 0), { getIsNewPrimary: ae2, getIsNewSecondary: re } = ((t3, i3) => {
            const [o3, n3] = (0, e2.useState)(() => {
              const e3 = localStorage.getItem(Z);
              return e3 ? JSON.parse(e3) : [];
            }), a3 = (0, e2.useMemo)(() => {
              const e3 = [];
              let i4 = 0;
              return t3.forEach((t4) => {
                const o4 = te(t4);
                if (0 === o4.length) return;
                if (i4 >= 3) return;
                const n4 = Q(t4) ? [t4.id] : o4.slice(0, 2);
                e3.push(...n4), i4++;
              }), e3;
            }, [t3]), r2 = (0, e2.useCallback)((e3, t4) => {
              n3((i4) => {
                const o4 = (e4) => i4.includes(e4), n4 = !o4(e3), a4 = t4 && !o4(t4);
                if (!n4 && !a4) return i4;
                const r3 = [...i4];
                n4 && r3.push(e3), a4 && r3.push(t4);
                try {
                  localStorage.setItem(Z, JSON.stringify(r3));
                } catch {
                }
                return r3;
              });
            }, []), s2 = (0, e2.useRef)();
            return (0, e2.useEffect)(() => {
              const e3 = s2.current;
              if (e3 && e3 !== i3) {
                const o4 = ee(t3, e3);
                if (o4) return Q(o4) && r2(e3), void (s2.current = i3);
                const n4 = ((e4, t4) => {
                  for (const o5 of e4) for (const e5 of null !== (i4 = o5.sections) && void 0 !== i4 ? i4 : []) {
                    var i4;
                    const n5 = e5.items.find((e6) => e6.id === t4);
                    if (n5) return { secondaryItem: n5, parentItem: o5 };
                  }
                  return null;
                })(t3, e3);
                if (n4) {
                  const { secondaryItem: t4, parentItem: i4 } = n4, o5 = Q(i4), a4 = Q(t4);
                  (o5 || a4) && r2(e3, o5 ? i4.id : void 0);
                }
              }
              s2.current = i3;
            }, [t3, r2, i3]), { getIsNewPrimary: (0, e2.useCallback)((e3) => {
              const i4 = ee(t3, e3);
              return !!i4 && te(i4).filter((e4) => a3.includes(e4)).some((e4) => !o3.includes(e4));
            }, [t3, a3, o3]), getIsNewSecondary: (0, e2.useCallback)((e3) => a3.includes(e3) && !o3.includes(e3), [a3, o3]) };
          })([...u2.primaryItems, ...null !== (I2 = u2.overflowItems) && void 0 !== I2 ? I2 : [], ...u2.footerItems], i2);
          (({ isCollapsed: t3, isSidePanelOpen: i3, setWidth: o3 }) => {
            (0, e2.useEffect)(() => {
              const e3 = t3 ? 48 : 100;
              o3(i3 ? e3 + 248 : e3);
            }, [t3, i3, o3]);
          })({ isCollapsed: M2, isSidePanelOpen: R2, setWidth: v2 });
          const se = f2 && !C2 ? (0, a2.jsx)(Y, { isCollapsed: M2, toggle: f2 }) : null, le = (e3, t3) => {
            null == m2 || m2(e3), "isExternal" in e3 && e3.isExternal || (null == t3 || t3(), (() => {
              const e4 = document.querySelector(b.MAIN_CONTENT_SELECTORS.join(","));
              e4 instanceof HTMLElement && e4.focus();
            })());
          };
          return (0, a2.jsx)("div", { css: oe, "data-test-subj": null !== (T2 = w2["data-test-subj"]) && void 0 !== T2 ? T2 : c, id: c }, (0, a2.jsx)(V, { isCollapsed: M2 }, x2 && (0, a2.jsx)("div", { css: E2, "aria-hidden": true }), (0, a2.jsx)(V.PrimaryMenu, { ref: W2, isCollapsed: M2, isOverflowMeasured: _2 }, ({ mainNavigationInstructionsId: e3 }) => (0, a2.jsx)(t2().Fragment, null, G2.map((t3, i3) => {
            const { sections: o3, popoverSections: r2, secondaryMenuTitle: s2, ...l2 } = t3, d2 = null != r2 ? r2 : o3, c2 = 0 === i3 ? e3 : void 0;
            return (0, a2.jsx)(V.Popover, { key: t3.id, hasContent: J(t3), isSidePanelOpen: R2 && t3.id === (null == A2 ? void 0 : A2.id), isAnyPopoverLocked: F2, label: t3.label, secondaryMenuTitle: s2, trigger: (0, a2.jsx)(V.PrimaryMenu.Item, n2({ "aria-describedby": c2, "aria-posinset": i3 + 1, "aria-setsize": ne2, hasContent: J(t3), isCollapsed: M2, isCurrent: $2 === t3.id, isHighlighted: t3.id === L2, isNew: ae2(t3.id), onClick: () => le(t3) }, l2), t3.label) }, (e4, i4) => (0, a2.jsx)(V.SecondaryMenu, { title: null != s2 ? s2 : t3.label, badgeType: t3.badgeType, isNew: re(t3.id) }, null == d2 ? void 0 : d2.map((t4, o4) => {
              const r3 = d2.findIndex((e5) => e5.items.length > 0);
              return (0, a2.jsx)(V.SecondaryMenu.Section, { key: t4.id, id: t4.id, isPaginated: t4.isPaginated, label: t4.label }, t4.items.map((t5, s3) => {
                const l3 = o4 === r3 && 0 === s3 ? null == i4 ? void 0 : i4.popoverNavigationInstructionsId : void 0;
                return (0, a2.jsx)(V.SecondaryMenu.Item, n2({ "aria-describedby": l3, key: t5.id, isHighlighted: t5.id === H2, isCurrent: $2 === t5.id, isNew: re(t5.id), onClick: () => le(t5, e4), testSubjPrefix: P2 }, t5), t5.label);
              }));
            })));
          }), K2 && (0, a2.jsx)(V.Popover, { hasContent: true, isSidePanelOpen: false, isAnyPopoverLocked: F2, setIsLocked: U2, label: s("kbnUI.sideNavigation.moreMenuLabel", { defaultMessage: "More" }), persistent: true, trigger: (0, a2.jsx)(V.PrimaryMenu.Item, { "aria-posinset": G2.length + 1, "aria-setsize": ne2, "data-test-subj": z2, hasContent: true, iconType: "boxesVertical", id: p, isCollapsed: M2, isHighlighted: q2.some((e4) => e4.id === L2), isNew: q2.some((e4) => ae2(e4.id)), label: s("kbnUI.sideNavigation.moreMenuItemLabel", { defaultMessage: "More" }) }, (0, a2.jsx)(r, { id: "kbnUI.sideNavigation.moreMenuItemText", defaultMessage: "More" })) }, (e4) => (0, a2.jsx)(V.NestedSecondaryMenu, null, (0, a2.jsx)(V.NestedSecondaryMenu.Panel, { id: h, title: s("kbnUI.sideNavigation.nestedSecondaryMenuMoreTitle", { defaultMessage: "More" }), footer: g2 && (0, a2.jsx)(l.EuiButton, { iconType: "controls", color: "text", size: "s", fullWidth: true, onClick: () => {
            e4(), g2();
          }, "data-test-subj": "customizeNavigationMoreMenuButton" }, (0, a2.jsx)(r, { id: "kbnUI.sideNavigation.customizeNavigationButton", defaultMessage: "Customize navigation" })) }, ({ panelNavigationInstructionsId: i3, panelEnterSubmenuInstructionsId: o3 }) => (0, a2.jsx)(t2().Fragment, null, (0, a2.jsx)(V.NestedSecondaryMenu.Section, null, q2.map((t3, r2) => {
            const s2 = X(t3), { sections: l2, popoverSections: d2, secondaryMenuTitle: c2, ...u3 } = t3, p2 = [0 === r2 && i3, s2 && o3].filter(Boolean).join(" ") || void 0;
            return (0, a2.jsx)(V.NestedSecondaryMenu.PrimaryMenuItem, n2({ key: t3.id, "aria-describedby": p2, isHighlighted: t3.id === L2, isNew: ae2(t3.id), hasSubmenu: s2, onClick: () => le(t3, e4) }, u3), t3.label);
          })))), q2.filter(X).map((t3) => {
            var i3;
            return (0, a2.jsx)(V.NestedSecondaryMenu.Panel, { key: `submenu-${t3.id}`, id: t3.id, header: ({ panelNavigationInstructionsId: e5 }) => {
              var i4;
              return (0, a2.jsx)(V.NestedSecondaryMenu.Header, { title: null !== (i4 = t3.secondaryMenuTitle) && void 0 !== i4 ? i4 : t3.label, "aria-describedby": e5 });
            } }, null === (i3 = t3.sections) || void 0 === i3 ? void 0 : i3.map((t4) => (0, a2.jsx)(V.NestedSecondaryMenu.Section, { key: t4.id, label: t4.label }, t4.items.map((t5) => (0, a2.jsx)(V.NestedSecondaryMenu.Item, n2({ key: t5.id, isHighlighted: t5.id === H2, isCurrent: $2 === t5.id, isNew: re(t5.id), onClick: () => le(t5, e4) }, t5), t5.label)))));
          }))))), (0, a2.jsx)(V.Footer, { isCollapsed: M2, collapseButton: se }, ({ footerNavigationInstructionsId: e3 }) => (0, a2.jsx)(t2().Fragment, null, u2.footerItems.slice(0, 5).map((t3, i3) => {
            const { sections: o3, popoverSections: r2, secondaryMenuTitle: s2, ...l2 } = t3, d2 = null != r2 ? r2 : o3, c2 = 0 === i3 ? e3 : void 0;
            return (0, a2.jsx)(V.Popover, { key: t3.id, hasContent: J(t3), isSidePanelOpen: R2 && t3.id === (null == A2 ? void 0 : A2.id), isAnyPopoverLocked: F2, label: t3.label, secondaryMenuTitle: s2, persistent: false, trigger: (0, a2.jsx)(V.Footer.Item, n2({ "aria-describedby": c2, isHighlighted: t3.id === L2, isCurrent: $2 === t3.id, isNew: ae2(t3.id), hasContent: J(t3), onClick: () => le(t3) }, l2)) }, (e4, i4) => (0, a2.jsx)(V.SecondaryMenu, { title: null != s2 ? s2 : t3.label, badgeType: t3.badgeType, isNew: re(t3.id) }, null == d2 ? void 0 : d2.map((t4, o4) => {
              const r3 = d2.findIndex((e5) => e5.items.length > 0);
              return (0, a2.jsx)(V.SecondaryMenu.Section, { key: t4.id, id: t4.id, isPaginated: t4.isPaginated, label: t4.label }, t4.items.map((t5, s3) => {
                const l3 = o4 === r3 && 0 === s3 ? null == i4 ? void 0 : i4.popoverNavigationInstructionsId : void 0;
                return (0, a2.jsx)(V.SecondaryMenu.Item, n2({ "aria-describedby": l3, key: t5.id, isHighlighted: t5.id === H2, isCurrent: $2 === t5.id, isNew: re(t5.id), onClick: () => le(t5, e4) }, t5, { testSubjPrefix: N2 }), t5.label);
              }));
            })));
          })))), R2 && A2 && (0, a2.jsx)(V.SidePanel, { footer: y2, openerNode: A2 }, ({ secondaryNavigationInstructionsId: e3 }) => {
            var t3, i3, o3;
            const r2 = null === (t3 = A2.sections) || void 0 === t3 ? void 0 : t3.findIndex((e4) => e4.items.length > 0);
            return (0, a2.jsx)(V.SecondaryMenu, { badgeType: A2.badgeType, isPanel: true, title: null !== (i3 = A2.secondaryMenuTitle) && void 0 !== i3 ? i3 : A2.label, isNew: re(A2.id) }, null === (o3 = A2.sections) || void 0 === o3 ? void 0 : o3.map((t4, i4) => (0, a2.jsx)(V.SecondaryMenu.Section, { key: t4.id, id: t4.id, isPaginated: t4.isPaginated, label: t4.label }, t4.items.map((t5, o4) => {
              const s2 = i4 === r2 && 0 === o4 ? e3 : void 0;
              return (0, a2.jsx)(V.SecondaryMenu.Item, n2({ "aria-describedby": s2, key: t5.id, isCurrent: $2 === t5.id, isHighlighted: t5.id === H2, isNew: re(t5.id), onClick: () => le(t5), testSubjPrefix: O2 }, t5), t5.label);
            }))));
          }));
        };
        t2();
        const ae = (e3) => (0, a2.jsx)(ne, e3);
      })();
      var n = exports;
      for (var a in o) n[a] = o[a];
      o.__esModule && Object.defineProperty(n, "__esModule", { value: true });
    })();
  }
});

// src/wrappers/KibanaSideNav.tsx
var import_ui_side_navigation = __toESM(require_ui_side_navigation(), 1);
import { useMemo, useRef, useState } from "react";
import { jsx } from "@emotion/react/jsx-runtime";
function KibanaSideNav({
  solution = "observability",
  activeNavItem,
  onNavigate,
  getHref,
  navItems,
  collapsed,
  defaultCollapsed = false,
  onCollapsedChange,
  onWidthChange
}) {
  const [internalCollapsed, setCollapsed] = useState(defaultCollapsed);
  const nativeClick = useRef(false);
  const items = useMemo(() => getSolutionNav(solution, navItems, getHref), [solution, navItems, getHref]);
  return /* @__PURE__ */ jsx("div", { css: { display: "flex", height: "100%", minHeight: 0 }, onClickCapture: (event) => {
    const anchor = event.target instanceof Element ? event.target.closest("a[href]") : null;
    nativeClick.current = event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || anchor?.getAttribute("target") === "_blank";
    if (onNavigate && anchor && !nativeClick.current) {
      event.preventDefault();
    }
  }, children: /* @__PURE__ */ jsx(
    import_ui_side_navigation.SideNavigation,
    {
      items,
      activeItemId: activeNavItem,
      isCollapsed: collapsed ?? internalCollapsed,
      onToggleCollapsed: (next) => {
        if (collapsed === void 0) setCollapsed(next);
        onCollapsedChange?.(next);
      },
      onItemClick: onNavigate ? (item) => {
        if (!nativeClick.current && !("isExternal" in item && item.isExternal)) onNavigate(item.id, item);
      } : void 0,
      setWidth: onWidthChange ?? ignoreWidth
    }
  ) });
}
var ignoreWidth = () => {
};

export {
  KibanaSideNav
};
//# sourceMappingURL=chunk-YCIE2MCI.js.map
