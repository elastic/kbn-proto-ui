# Using kbn-proto-ui

This repo is only a component dependency. Do not add playgrounds, starter apps, routing, data fetching, comments, version management, or tweak panels.

Keep the public API independent of consuming prototypes. Include UI and supporting code needed for the shared Kibana shell; consumer-specific palettes, helpers and compatibility requirements belong in the consuming app. Reference repos provide provenance and validation examples, not requirements for extra exports.

## In a consuming prototype

- Install the latest release tag, for example `npm install github:elastic/kbn-proto-ui#v0.5.0`. Never install from `main`: it contains source, while release tags include prebuilt `dist/`.
- Keep the host's `EuiProvider`, theme, React and Emotion instances. Do not add nested providers or import private `@kbn/ui-*` packages in the prototype.
- Import `KibanaChromeLayout` from `@elastic/kbn-proto-ui`. Pass `solution`, `activeNavItem`, `onNavigate`, `breadcrumbs`, and children. The host owns its router.
- Valid solutions: `observability`, `security`, `search`, `classic`. Use `dashboards` (plural), matching Kibana. See exported `solutionNavTrees` for all IDs.
- Supply `getHref` when links need host router URLs. Ordinary clicks call `onNavigate`; modified clicks should keep native browser behavior.
- Override the menu with `navItems={{ primaryItems: [...] }}`, or extend defaults with `navItems={(nav) => ({ ...nav, primaryItems: [...nav.primaryItems, { id: 'my-page', label: 'My page', iconType: 'beaker', href: '/my-page' }] })}`. Preserve stable IDs. Sections have `{ id, label?, items: [{ id, label, href }] }`.
- The library does not persist collapse state. Use `collapsed` and `onCollapsedChange` if the app needs persistence.
- The legacy agent adapter uses `{ open, onOpenChange, attachment?, messages?, onSubmit?, isResponding? }`. Supply responses from the host; this library never fabricates responses or fetches data.
- The application panel is fixed to `layoutVar('application.content.height')`. Keep page regions at `minHeight: 0` and put scrolling inside the page.
- Prefer lower-level exported components when only one part is needed. Never copy the library's chrome into a prototype.
- Use `ChromeAppHeader` for application headers. Use `menu` with Kibana's declarative `AppMenuConfig` for actions; do not add page presets. Use `KibanaTabs.wrapTabsBar` → `ChromeAppHeader.titleAppend` for Discover-style tabs; use the header's data-driven `tabs` for normal page tabs. Do not port vibe-kibana's legacy TabBar props or presets.
- Make the Elastic logo a link with `KibanaChromeLayout.logo` (`{ href?, onClick?, label? }`); it follows the same ordinary/modified-click rule as navigation. Without either it stays a plain mark.
- Global header slots are `switcher`, `projectPicker` and `subscriptionBadge`; pass them through `KibanaChromeLayout.header` or directly to `ChromeHeader`. Omitted `switcher` preserves the space button; `null` hides it. `KibanaProjectPicker` is a count/button replica only; the host owns its popover. `trailing` stays before the avatar. `afterUserMenu` is a host-only extension after the avatar, not Kibana API; never ship prototype tools in this library.
- For registered placement, pass header props through `KibanaChromeLayout.appHeader` (measured `applicationTopBar` slot). For Discover-style inline placement, render the header inside the app children and leave `appHeader` unset. Preserve upstream prop names and shapes, including `disableButton`, focus-return contexts and the description/metadata union.

## Maintaining this library

- Use `src/wrappers/` for setup around published `@kbn/ui-*` packages, `src/rebuilt/` for library-maintained UI rebuilt to match Kibana, and `src/solution-menus/` for solution menu data. AI buttons and gradients use published `@kbn/ui-ai-components`; do not restore the removed source copies, local i18n adapter or aliases.
- Maintain `src/rebuilt/` implementations here and validate their appearance and supported behavior against Kibana. Record implementation origin separately from local adaptations in SOURCES.md. `src/wrappers/ai-components.types.ts` contains the standalone type snapshot needed to keep declarations independent of `@kbn/*`; `tests/ai-components.drift.ts` (run by `npm run check:package`) fails if it drifts from the published declarations; update the snapshot to match, keeping only the logo exclusion. The deprecated `aiAssistantLogo` remains excluded from public types; never patch the bundled upstream implementation.
- Keep `KibanaChromeLayout`, `KibanaSideNav` and `layout.ts` in `src/wrappers/`. Keep `ChromeHeader`, `Sidebar` and `sidebarWidth.ts` in `src/rebuilt/`; its `agent-builder/` folder holds the agent conversation UI and connector logo.
- Keep reusable styling APIs and standalone adapters in `src/utilities/`. `aiStyles.ts` re-exports the same Kibana gradient hooks and SVG definitions used by AI buttons; do not maintain a second palette or gradient implementation.
- Use Node 22.12+ (`nvm use` selects Node 22) for the build and test tooling.
- Use the published `ChromeLayout` and `SideNavigation`; do not recreate them.
- Resolve `@kbn/ui-*` from Artifactory using dist-tag `main`, never `latest`. Run `npm run update:kbn` to update exact pins and SOURCES.md, then verify vibe-kibana.
- Never request, print, or store an Artifactory token. Use the maintainer's existing npm setup; CI uses the `KIBANA_UI_NPM_TOKEN` secret through an environment variable placeholder.
- Keep React, react-dom, EUI, Emotion React and Emotion CSS external. Do not add install/prepare hooks: GitHub installs must not compile or fetch private packages.
- All public TypeScript declarations must resolve without `@kbn/*`. `npm run check:package` enforces the package contract.
- Run `npm run typecheck`, `npm test`, `npm run build:library`, and `npm run check:package`. Inspect theme and solution changes in vibe-kibana.
- Track temporary ports and original paths in SOURCES.md. Preserve upstream license headers and modification notices.
- Ask the maintainer before publishing, creating a remote repo, committing or pushing existing repos. The approved names are `elastic/kbn-proto-ui` and `@elastic/kbn-proto-ui`; publishing still requires maintainer approval.

## Discover tabs pattern

Keep controlled state, ID creation and page content in the host. Use the following inside `KibanaChromeLayout`'s children and leave `KibanaChromeLayout.appHeader` unset. `wrapTabsBar` renders the inline header, and `renderContent` renders the selected tab's content below it:

```tsx
import { useState } from 'react';
import {
  ChromeAppHeader, KibanaTabs, type TabbedContentState,
} from '@elastic/kbn-proto-ui';

export function DiscoverPage() {
  const [state, setState] = useState<TabbedContentState>({
    items: [{ id: 'initial', label: 'Untitled' }], selectedItem: null,
  });
  return (
    <KibanaTabs
      items={state.items}
      selectedItemId={state.selectedItem?.id}
      onChanged={setState}
      createItem={() => ({ id: crypto.randomUUID(), label: 'Untitled' })}
      wrapTabsBar={(tabsBar) => (
        <ChromeAppHeader
          title="New session"
          spacing="compact"
          sticky={false}
          borderless={tabsBar != null}
          titleAppend={tabsBar}
          menu={{
            primaryActionItem: { id: 'save', label: 'Save', run: () => {} },
          }}
        />
      )}
      renderContent={(selectedItem) => <div>Content for {selectedItem.label}</div>}
    />
  );
}
```

Maintain `src/rebuilt/unified-tabs/` as a simplified replica of `@kbn/unified-tabs`. Preserve supported upstream prop names and callback/item shapes; no `tabs`, `activeTabId`, `title` item field or per-tab selection callbacks. The last tab cannot close. Rename uses Kibana's trimmed, nonempty, 120-character limit. Do not silently add service props as ignored no-ops. Drag reordering, recently closed tabs, previews, limits, duplication/bulk-close menus, custom menu generators, telemetry, service-dependent helpers and advanced responsive/shortcut behavior are not supported yet; consult SOURCES.md before expanding the subset.

## Header actions and sidebar apps

- Rebuilt components use Kibana's names (`ChromeHeader`, `ChromeAppHeader`, `Sidebar`); published-package wrappers retain the prefix (`KibanaChromeLayout`, `KibanaSideNav`). Keep deprecated old exports/types and `pageHeader` for one release; `appHeader` wins.
- Header order is search, Help, custom `actions`, AI Agent, existing theme action, `trailing`, avatar, `afterUserMenu`. Use internal HeaderActionButton bordered/plain styles for icons. Unconfigured actions stay enabled.
- Prefer `onSearchClick` and the responsive SearchButton with platform shortcut badge. Deprecated search props opt into the old input only if onSearchClick is absent. Do not add a second search modal/provider in this library.
- Use controlled `sidebarApps`, `activeSidebarApp`, `onActiveSidebarAppChange`; app IDs are unique and only the active app renders. Link header actions with `sidebarAppId` so state/ARIA come from the layout. Host content supplies its own close controls. The legacy agent prop maps to reserved ID `agent`; new controlled state takes precedence, and `agent.children` remains supported. Keep shared resize behavior and AI `base`/`accent` tied to the active app, not overall sidebar visibility.
