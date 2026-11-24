// src/wrappers/AppMenu.tsx
import { lazy, Suspense } from "react";
import { jsx } from "@emotion/react/jsx-runtime";
var pickAppMenuComponent = (module) => {
  const Component = module.AppMenuComponent ?? module.default?.AppMenuComponent;
  if (!Component) throw new Error("@kbn/ui-app-menu did not export AppMenuComponent");
  return Component;
};
var AppMenuComponent = lazy(async () => ({ default: pickAppMenuComponent(await import("./ui-app-menu-3SSYTDOL.js")) }));
function KibanaAppMenu(props) {
  return /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(AppMenuComponent, { ...props }) });
}

export {
  pickAppMenuComponent,
  KibanaAppMenu
};
//# sourceMappingURL=chunk-Q5BIXOPA.js.map
