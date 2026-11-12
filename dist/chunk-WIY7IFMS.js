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

// node_modules/@kbn/ui-ai-components/index.js
var require_ui_ai_components = __commonJS({
  "node_modules/@kbn/ui-ai-components/index.js"(exports) {
    (() => {
      "use strict";
      var e = { n: (t2) => {
        var o2 = t2 && t2.__esModule ? () => t2.default : () => t2;
        return e.d(o2, { a: o2 }), o2;
      }, d: (t2, o2) => {
        for (var n2 in o2) e.o(o2, n2) && !e.o(t2, n2) && Object.defineProperty(t2, n2, { enumerable: true, get: o2[n2] });
      }, o: (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), r: (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      } }, t = {};
      e.r(t), e.d(t, { AiButton: () => P, AiButtonDefault: () => B, AiButtonEmpty: () => O, AiButtonIcon: () => I, AiIcon: () => S, SvgAiGradientDefs: () => p, useAiButtonGradientStyles: () => u, useSvgAiGradient: () => b });
      const o = (init_react(), __toCommonJS(react_exports));
      var n = e.n(o);
      const r = (init_eui(), __toCommonJS(eui_exports)), i = (init_react2(), __toCommonJS(react_exports2)), a = ({ angle: e2, startColor: t2, startPercent: o2, endColor: n2, endPercent: r2 }) => `linear-gradient(${e2}deg, ${t2} ${o2}%, ${n2} ${r2}%)`, s = (e2, { angle: t2 = 135, startPercent: o2 = 2.98, endPercent: n2 = 66.24 } = {}) => a({ angle: t2, startColor: e2.startColor, startPercent: o2, endColor: e2.endColor, endPercent: n2 }), l = (e2) => ({ startColor: e2.textPrimary, endColor: e2.textAssistance }), c = (e2, t2, o2) => (0, i.css)("padding:0 ", e2.size.xs, ";display:inline-block;background:", t2, "!important;background-clip:text!important;-webkit-background-clip:text!important;color:transparent!important;-webkit-text-fill-color:transparent!important;", o2 ? `button:hover:not(:disabled) &,
      button:focus-visible:not(:disabled) & {
        background: ${o2} !important;
        background-clip: text !important;
        -webkit-background-clip: text !important;
      }` : "", " button:disabled &{color:", e2.colors.textDisabled, "!important;background:none!important;-webkit-text-fill-color:", e2.colors.textDisabled, "!important;}", ""), d = (e2, t2) => (0, i.css)("padding:0 ", e2.size.xs, ";background:none!important;background-clip:initial!important;-webkit-background-clip:initial!important;color:", t2, "!important;-webkit-text-fill-color:currentColor!important;button:disabled &{color:", e2.colors.textDisabled, "!important;-webkit-text-fill-color:", e2.colors.textDisabled, "!important;}", ""), u = ({ variant: e2 = "base", iconOnly: t2 } = {}) => {
        const { euiTheme: n2 } = (0, r.useEuiTheme)();
        return (0, o.useMemo)(() => {
          const o2 = (({ iconOnly: e3, variant: t3 }) => e3 ? 135 : "base" === t3 ? 90 : 165)({ iconOnly: t2, variant: e2 }), { buttonBackground: r2, hoverBackground: u2, borderGradient: b2, labelColor: p2, labelCss: g2 } = ((e3, t3, o3) => {
            const { colors: n3, components: { buttons: { backgroundPrimaryHover: r3, backgroundAssistanceHover: i2 } } } = t3, u3 = s(l(n3)), b3 = a({ angle: 180, startColor: r3, startPercent: 18, endColor: i2, endPercent: 83 }), p3 = n3.textPrimary;
            switch (e3) {
              case "empty":
                return { buttonBackground: "transparent", hoverBackground: b3, labelColor: p3, labelCss: d(t3, p3) };
              case "outlined":
                return { buttonBackground: "transparent", hoverBackground: b3, borderGradient: s({ startColor: n3.backgroundFilledPrimary, endColor: n3.backgroundFilledAssistance }, { angle: o3 }), labelColor: p3, labelCss: c(t3, u3) };
              case "accent": {
                const e4 = s({ startColor: n3.backgroundFilledPrimary, endColor: n3.backgroundFilledAssistance }, { angle: o3 });
                return { buttonBackground: e4, hoverBackground: `${b3}, ${e4}`, labelColor: n3.textInverse, labelCss: d(t3, n3.textInverse) };
              }
              case "base": {
                const e4 = s({ startColor: n3.backgroundLightPrimary, endColor: n3.backgroundLightAssistance }, { angle: o3 });
                return { buttonBackground: e4, hoverBackground: `${b3}, ${e4}`, labelColor: p3, labelCss: c(t3, u3, `${b3}, ${u3}`) };
              }
            }
          })(e2, n2, o2), m2 = (0, i.css)("background:", r2, "!important;color:", p2, "!important;", b2 ? ((e3, t3) => (0, i.css)("position:relative;border:none;isolation:isolate;&::after{content:'';position:absolute;inset:0;border-radius:inherit;padding:1px;background:", e3, ";pointer-events:none;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask-composite:exclude;}&:disabled::after{background:", t3.colors.backgroundBaseDisabled, "!important;}", ""))(b2, n2) : "", " &:hover:not(:disabled),&:focus-visible:not(:disabled){background:", u2, "!important;&::before{background-color:transparent!important;}}&:disabled{background:", "empty" === e2 || "outlined" === e2 ? "transparent" : n2.colors.backgroundBaseDisabled, "!important;color:", n2.colors.textDisabled, "!important;-webkit-text-fill-color:", n2.colors.textDisabled, "!important;&::before{background-color:transparent!important;}}", "");
          return { buttonCss: m2, labelCss: g2 };
        }, [e2, t2, n2]);
      }, b = ({ variant: e2 } = {}) => {
        const { euiTheme: t2 } = (0, r.useEuiTheme)(), n2 = (0, r.useGeneratedHtmlId)({ prefix: "kbnAiButtonIconGradient" });
        return (0, o.useMemo)(() => {
          const o2 = "accent" !== e2 ? (({ gradientUrl: e3, disabledColor: t3 }) => (0, i.css)("& .euiIcon,& .euiIcon [fill]:not([fill='none']){fill:", e3, "!important;}&&:disabled .euiIcon,&&:disabled .euiIcon [fill]:not([fill='none']){fill:", t3, "!important;color:", t3, "!important;}", ""))({ gradientUrl: `url(#${n2})`, disabledColor: t2.colors.textDisabled }) : void 0, r2 = l(t2.colors);
          return { iconGradientCss: o2, gradientId: n2, colors: r2 };
        }, [n2, e2, t2]);
      }, p = ({ gradientId: e2, colors: t2 }) => (0, i.jsx)("svg", { width: "0", height: "0", "aria-hidden": "true", focusable: "false", style: { position: "absolute" } }, (0, i.jsx)("defs", null, (0, i.jsx)("linearGradient", { id: e2, x1: "-0.5", y1: "-2.5", x2: "15.5", y2: "9.5", gradientUnits: "userSpaceOnUse" }, (0, i.jsx)("stop", { offset: "16%", stopColor: t2.startColor }), (0, i.jsx)("stop", { offset: "83%", stopColor: t2.endColor }))));
      function g() {
        return g = Object.assign ? Object.assign.bind() : function(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var o2 = arguments[t2];
            for (var n2 in o2) ({}).hasOwnProperty.call(o2, n2) && (e2[n2] = o2[n2]);
          }
          return e2;
        }, g.apply(null, arguments);
      }
      const m = ({ title: e2, titleId: t2, ...o2 }) => (0, i.jsx)("svg", g({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", "aria-labelledby": t2 }, o2), e2 ? (0, i.jsx)("title", { id: t2 }, e2) : null, (0, i.jsx)("path", { d: "M9 7H15V16H9V7Z", fill: "currentColor" }), (0, i.jsx)("path", { d: "M1 11.5C1 9.01472 3.01472 7 5.5 7H7V16H5.5C3.01472 16 1 13.9853 1 11.5Z", fill: "currentColor" }), (0, i.jsx)("path", { d: "M15 3C15 4.65685 13.6569 6 12 6C10.3431 6 9 4.65685 9 3C9 1.34315 10.3431 0 12 0C13.6569 0 15 1.34315 15 3Z", fill: "currentColor" }), (0, i.jsx)("path", { d: "M1.5 5.75C1.5 2.71243 3.96243 0.25 7 0.25V5.75H1.5Z", fill: "currentColor" })), f = ((e2, t2) => {
        var o2;
        const n2 = null !== (o2 = null == t2 ? void 0 : t2.defaultMessage) && void 0 !== o2 ? o2 : "kbnUI.aiComponents.addToChatLabel";
        return null != t2 && t2.values ? Object.entries(t2.values).reduce((e3, [t3, o3]) => e3.replace(new RegExp(`\\{${t3}\\}`, "g"), String(o3)), n2) : n2;
      })(0, { defaultMessage: "Add to chat" }), x = (e2) => "aiAssistantLogo" === e2 ? m : e2, v = (e2) => "addToChat" === e2, C = (e2, t2) => v(e2) ? f : t2, y = ({ iconType: e2, ariaLabel: t2, toolTipContent: o2 }) => v(e2) ? f : null != o2 ? o2 : t2, k = (e2) => "xs" === e2 ? "s" : "m", h = ["form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "name", "type", "value"], j = ["href", "target", "rel", "download", "referrerPolicy", "ping"];
      function T(e2, t2) {
        const o2 = { ...e2 };
        for (const e3 of t2 ? h : j) delete o2[e3];
        return o2;
      }
      const w = (e2) => {
        var t2, a2;
        const s2 = null !== (t2 = e2.variant) && void 0 !== t2 ? t2 : "base", l2 = (() => {
          const { euiTheme: e3 } = (0, r.useEuiTheme)(), { fontSize: t3, lineHeight: n2 } = (0, r.useEuiFontSize)("xs");
          return (0, o.useMemo)(() => (0, i.css)("height:", e3.size.l, ";min-width:", 6 * e3.base, "px;padding:0 ", e3.size.s, ";border-radius:", e3.border.radius.small, ";font-size:", t3, ";line-height:", n2, ";", ""), [e3, t3, n2]);
        })(), { buttonCss: c2, labelCss: d2 } = u({ variant: s2, iconOnly: e2.iconOnly }), { gradientId: g2, iconGradientCss: m2, colors: f2 } = b({ variant: s2 }), v2 = m2 ? (0, i.jsx)(p, { gradientId: g2, colors: f2 }) : null;
        if (true === e2.iconOnly) {
          var h2;
          const { iconType: t3, css: o2, display: a3, iconOnly: s3, variant: l3, withToolTip: d3, toolTipContent: u2, "aria-label": b2, ...p2 } = e2, g3 = { ...T(p2, !!p2.href), "aria-label": b2, iconType: x(t3), iconSize: null !== (h2 = p2.iconSize) && void 0 !== h2 ? h2 : k(p2.size), css: [c2, m2, o2] }, f3 = (0, i.jsx)(r.EuiButtonIcon, g3);
          return (0, i.jsx)(n().Fragment, null, v2, true === d3 ? (0, i.jsx)(r.EuiToolTip, { content: y({ iconType: t3, ariaLabel: b2, toolTipContent: u2 }) }, f3) : f3);
        }
        if ("empty" === e2.variant || "outlined" === e2.variant) {
          var j2;
          const { variant: t3, iconOnly: o2, children: a3, css: s3, iconType: l3, textProps: u2, ...b2 } = e2, p2 = { ...T(b2, !!b2.href), iconSize: null !== (j2 = b2.iconSize) && void 0 !== j2 ? j2 : k(b2.size), iconType: l3 ? x(l3) : void 0, css: [c2, m2, s3], textProps: { ...u2, css: [d2, false !== u2 ? null == u2 ? void 0 : u2.css : void 0] }, children: C(l3, a3) };
          return (0, i.jsx)(n().Fragment, null, v2, (0, i.jsx)(r.EuiButtonEmpty, p2));
        }
        const { variant: w2, iconOnly: P2, children: B2, css: O2, iconType: I2, size: z2, ...A2 } = e2, S2 = "xs" === z2 ? "s" : z2, M2 = { ...T(A2, !!A2.href), size: S2, iconSize: null !== (a2 = A2.iconSize) && void 0 !== a2 ? a2 : k(z2), iconType: I2 ? x(I2) : void 0, css: [c2, m2, "xs" === z2 && l2, O2], fill: "accent" === s2, children: (0, i.jsx)("span", { css: d2 }, C(I2, B2)) };
        return (0, i.jsx)(n().Fragment, null, v2, (0, i.jsx)(r.EuiButton, M2));
      }, P = (e2) => (0, i.jsx)(w, e2), B = (e2) => (0, i.jsx)(w, e2), O = (e2) => (0, i.jsx)(w, g({}, e2, { variant: "empty" })), I = (e2) => (0, i.jsx)(w, g({}, e2, { iconOnly: true })), z = { name: "8xii8b", styles: "display:inline-flex;align-items:center;line-height:0;position:relative" }, A = (e2) => "aiAssistantLogo" === e2 ? m : e2, S = ({ iconType: e2, size: t2, css: o2, ...n2 }) => {
        const { gradientId: a2, iconGradientCss: s2, colors: l2 } = b({ variant: "base" });
        return (0, i.jsx)("span", { css: [z, s2, "", ""] }, (0, i.jsx)(p, { gradientId: a2, colors: l2 }), (0, i.jsx)(r.EuiIcon, g({}, n2, { type: A(e2), size: t2, css: o2 })));
      };
      var M = exports;
      for (var $ in t) M[$] = t[$];
      t.__esModule && Object.defineProperty(M, "__esModule", { value: true });
    })();
  }
});

// src/wrappers/ai-components.ts
var import_ui_ai_components = __toESM(require_ui_ai_components(), 1);
var AiButton = import_ui_ai_components.AiButton;
var AiButtonDefault = import_ui_ai_components.AiButtonDefault;
var AiButtonEmpty = import_ui_ai_components.AiButtonEmpty;
var AiButtonIcon = import_ui_ai_components.AiButtonIcon;
var SvgAiGradientDefs = import_ui_ai_components.SvgAiGradientDefs;
var useAiButtonGradientStyles = import_ui_ai_components.useAiButtonGradientStyles;
var useSvgAiGradient = import_ui_ai_components.useSvgAiGradient;

export {
  AiButton,
  AiButtonDefault,
  AiButtonEmpty,
  AiButtonIcon,
  SvgAiGradientDefs,
  useAiButtonGradientStyles,
  useSvgAiGradient
};
//# sourceMappingURL=chunk-WIY7IFMS.js.map
