# Sources and maintenance

Checked 2026-11-05. Local Kibana reference: `79572ebdc782e0ea759b4630a0545f394de254e4`. Temporary vibe-kibana reference: branch `kbn-ui-cleanup` (`9bf51a4dccf974d4bc989f47cc9659779f53df93`). Source paths below are relative to `elastic/kibana` unless marked otherwise.

Type describes the implementation's origin. Published package includes its setup code in `wrappers/`; public re-exports use the type of their underlying implementation. The modified AI button files are classified as Rebuilt to match, with their limited changes documented below; gradient implementations remain Copied unchanged. Solution menu snapshots live at `src/solution-menus/` and are also exported through `@elastic/kbn-proto-ui/solution-menus`.

| Component | Type | Published package | Version | Source / update action |
| --- | --- | --- | --- | --- |
| Framed layout, global grid styles, configuration, layout variables | Published package | `@kbn/ui-chrome-layout` | `0.0.0-56a57242d882` | `src/platform/kbn-ui/chrome-layout/`; bundled implementation; update with `npm run update:kbn` |
| Side navigation, collapse, overflow, secondary panels | Published package | `@kbn/ui-side-navigation` | `0.0.0-875bc2cf4783` | `src/platform/kbn-ui/side-navigation/`; bundled implementation; update with `npm run update:kbn` |
| `KibanaChrome` | Published package | Thin wrapper | — | `vibe-kibana/src/public/components/shared/KibanaChrome.tsx`; replaces app store with props; project layout: framed, header 48, right/bottom margins 8 |
| `KibanaHeader` | Rebuilt to match | Temporary port | — | `vibe-kibana/src/public/components/shared/KibanaHeader.tsx`; mirrors `src/core/packages/chrome/browser-components/src/project/header.tsx` and `shared/ai_button_slot.tsx`; host callbacks replace local state and identity. `@kbn/ui-app-header` is an application page header, not a drop-in global header; check its actual API before swapping |
| `KibanaPageHeader` | Rebuilt to match | Standalone replica | — | `src/platform/kbn-ui/app-header/src/types.ts`, `src/platform/kbn-ui/app-header/src/{app_header,app_header_shell,title_actions,app_tabs,app_badges,app_badge,back_button,app_header_description,app_header_metadata}.tsx`, `title_area/`; menu contract and components: `src/platform/kbn-ui/app-menu/src/{types.ts,components/,utils.tsx,constants.ts}`. Reuses matching EUI layout, title sizes, small text buttons and split-button construction from `vibe-kibana/src/public/components/shared/PageHeader.tsx`; replaces its presets with the strict Kibana data contract |
| `KibanaTabs` | Rebuilt to match | Standalone replica | — | `src/platform/packages/shared/kbn-unified-tabs/{index.ts,src/types.ts,src/components/{tabbed_content,tabs_bar,tab,tab_menu,tabs_visual_glue_to_app_container}/,src/utils/manage_tabs.ts,src/constants.ts}`; usage: `src/platform/plugins/shared/discover/public/application/main/components/tabs_view/tabs_view.tsx`, `examples/unified_tabs_examples/public/example_app.tsx`. Reuses matching EUI tab chrome and corner SVG from `vibe-kibana/src/public/components/shared/TabBar.tsx`, with upstream props and controlled state |
| `AgentSidebar` | Rebuilt to match | Temporary port | — | `vibe-kibana/src/public/components/shared/AgentSidebar.tsx`; original conversation UI: `x-pack/platform/plugins/shared/agent_builder/public/application/components/`; UI-only port, no mock replies or network client |
| `KibanaSidebar` | Rebuilt to match | Temporary port | — | `src/core/packages/chrome/sidebar/sidebar-components/src/components/{sidebar_panel,panel_resize_handle}.tsx` and `src/core/packages/chrome/sidebar/sidebar-internal/src/services/sidebar_state_service.ts`; 30% initial width, min 320, max 50% (min takes precedence on small viewports); temporary `CSSVarName` cast for `sidebar.borderRadius` |
| `AiButton`, `AiButtonDefault`, `AiButtonEmpty`, `AiButtonIcon` and gradients | Rebuilt to match | Temporary copies with a documented removal | — | `src/platform/kbn-ui/ai-components/src/{ai_button,gradient_styles}/`; retained in `src/kibana-copies/ai-components/` with original notices. The deprecated AI Assistant logo file, mapping in `ai_button_base.tsx`, and supported value in `types.ts` were removed at the maintainer's request. The other eight files remain byte-for-byte copies. Replace with published `@kbn/ui-ai-components` when available; [publishing PR](https://github.com/elastic/kibana/pull/302964) |
| AI styling utilities | Copied unchanged | Public re-exports | — | `src/utilities/aiStyles.ts` exposes `useAiButtonGradientStyles`, `useSvgAiGradient`, `SvgAiGradientDefs` and their supporting types from the unchanged gradient copies above. Consumers share the button implementation, including gradient geometry, theme colors and interaction styles; there is no consumer-specific palette |
| `ANTHROPIC_LOGO` | Copied unchanged | Temporary port | — | `vibe-kibana/src/public/components/shared/agentConnectorLogo.ts`; decoded SVG matches public `x-pack/platform/packages/shared/kbn-inference-endpoint-ui-common/src/components/providers/assets/images/anthropic.svg` exactly |
| Observability menu | Snapshot of Kibana's menus | Static source snapshot | — | `x-pack/solutions/observability/plugins/observability/public/navigation_tree.ts`, `public/nav/get_alerts_nav_panel.ts` |
| Security menu | Snapshot of Kibana's menus | Static source snapshot | — | `x-pack/solutions/security/plugins/security_solution_ess/public/navigation/navigation_tree.ts` and `x-pack/solutions/security/packages/navigation/src/navigation_tree/` |
| Search / Elasticsearch menu | Snapshot of Kibana's menus | Static source snapshot | — | `x-pack/solutions/search/plugins/enterprise_search/public/navigation_tree.ts` |
| Classic menu | Snapshot of Kibana's menus | Adapted registered categories | — | `src/core/packages/application/common/src/default_app_categories.ts`, `src/core/packages/chrome/browser-components/src/classic/collapsible_nav.tsx`; Classic has no single fixed tree. Category data adapted to published `SideNavigation`; no copied legacy drawer |
| Workflows panel | Snapshot of Kibana's menus | Static source snapshot | — | `src/platform/packages/shared/deeplinks/workflows/get_workflows_nav_panel.ts` |

Published-package setup lives in `src/wrappers/` (`KibanaChrome`, `KibanaSideNav`, layout variables). Rebuilt UI lives in `src/replicas/` (header, sidebar, sizing helpers and `agent-builder/`). Solution menu data lives in `src/solution-menus/`; reusable AI styling APIs and the standalone translation adapter live in `src/utilities/`. The AI gradient files are unchanged from the reference commit above; the button implementation and types have only the deprecated-logo removal documented in the table. Their `@kbn/i18n` import resolves to `src/utilities/kibanaI18n.ts` through TypeScript paths (also used by esbuild) and a matching Vitest alias. This adapter returns the English default message for the copied add-to-chat label without adding a runtime dependency or modifying upstream files. Delete the copies and this adapter/aliases when adopting the published AI components package.

The three solution trees were evaluated from local Kibana source, then converted using the same visible-node and panel-section rules as `src/core/packages/chrome/browser-components/src/project/sidenav/navigation/to_navigation_items.tsx`. Source IDs, order, sections, and badges are preserved. Registered app/deep-link labels supply the labels omitted by the tree. Hidden children remain hidden. Snapshot settings: self-managed, Agent chat, Streams enabled, Workflows library/executions enabled, Alerting V2 and AlertZero off. Permissions and feature flags vary in running Kibana; consumers can override this static data.

Cloud UI was inspected as a wiring reference, not copied: `cloud-ui/public/apps/userconsole/components/ChromeLayout/ChromeLayout.tsx` uses `GridLayoutGlobalStyles` + `ChromeLayoutConfigProvider` + published `ChromeLayout`. `cloud-ui/modules/side-navigation/withModifierKeyNavigation.ts` addresses modified-click routing. Its manifest pins layout `0.0.0-56a57242d882` and navigation `0.0.0-bc96a8c08e2e`; this library resolves the requested `main` tag instead of copying Cloud UI's older nav pin.

## Page header contract and placement

`src/replicas/page-header/` is a maintained replica, not an unchanged Kibana copy. Header and menu types are adapted from the real `app-header/src/types.ts` and `app-menu/src/types.ts` with the unsupported fields removed; public declarations never import private `@kbn/*` types. Share uses `onClick({ returnFocus })`; menu items use `run({ triggerElement, returnFocus })` and `disableButton`, not a renamed `disabled` field. Description and metadata remain an exclusive union, and `titleAppend` is the only content slot.

Reused from vibe-kibana's `PageHeader.tsx`: flex-row structure and shrinking title cluster, EUI title sizes (`s`/`xs`), small text action buttons, share icon, and `EuiSplitButton.ActionPrimary` / `ActionSecondary` construction. Changed to follow Kibana: declarative props instead of Discover/dashboard presets, actual header insets/heights and title-append sizing, overflow ordering/three-slot limit, nested context menus, editable-title validation, typed secondary content, focus-return callbacks and controlled favorite statuses. The old vibe overflow control was only a button; the replica implements Kibana's working ⋮ popover. The header itself has no built-in Discover tabs. The separate `KibanaTabs` replica below reuses matching visual details from `TabBar.tsx`.

Placement is explicit in `src/core/packages/chrome/layout/core-chrome-layout/layouts/grid/grid_layout.tsx`: registered app headers render as `applicationTopBar={<ChromeAppHeaderRenderer />}` only when no inline app header is registered. `project/chrome_app_header.tsx` measures the header and updates `applicationTopBarHeight`. `KibanaChrome.pageHeader` follows this measured-slot path. Discover instead renders inline: `src/platform/plugins/shared/discover/public/application/main/components/{chrome_app_header/chrome_app_header.tsx,tabs_view/tabs_view.tsx}` passes its tab bar to `DiscoverAppHeader`, and `src/core/packages/chrome/app-header/src/app_header/app_header.tsx` maps it to `titleAppend` while suppressing the global slot. The standalone replica supports that inline path; do not also set `KibanaChrome.pageHeader`.

**Not supported yet:**

- Menu undo/redo (`historyConfig`).
- Experimental dashboard AI action (`experimentalDashboardAiAction`).
- Deprecated arbitrary badge renderer (`renderCustomBadge`).
- Kibana's automatic/static menu registration, documentation links and Add integrations injection.
- Discover's saved-session services and tab persistence; the host supplies controlled state to `KibanaTabs`.
- Kibana's application-breakpoint-driven collapsed menu layouts; this simplified menu uses the real three-slot overflow rule and wraps when necessary.

The favorite is a controlled EUI star button; no favorite-button implementation or service is copied. Kibana was not running on port 5601 during local checks, so the visual reference is vibe-kibana's Discover and Dashboards templates, with the real Kibana source deciding differences. The packed library was installed in an isolated prefix and used by a temporary copy of the actual vibe-kibana app on port 5192 (stopped after checks). The original page-header check passed the host TabBar through `titleAppend`; the subsequent tabs check replaces it with `KibanaTabs.wrapTabsBar` → `titleAppend` (see below). Discover, Dashboards, dark mode, menu interactions and the measured top-bar slot (including resize updates) passed in Chrome without runtime or hydration/Emotion warnings. Original vibe-kibana source, manifests, lockfile and dependencies were left untouched. Screenshots are in `docs/screenshots/`.

## Discover tabs replica

`src/replicas/tabs/` is maintained code, not an unchanged copy. `types.ts` adapts the supported subset of `TabbedContentProps` (exported upstream as `UnifiedTabsProps`), `TabItem` and `TabbedContentState`, without private imports. Required UI props remain `items`, `createItem` and `onChanged`; optional props retain their upstream types. The real package additionally requires services, recently closed items and telemetry; those are intentionally absent here rather than accepted and ignored.

Reused from vibe-kibana's `TabBar.tsx`: EUI icon buttons/context menus/popovers, theme-based chrome, 112–280px tab width bounds, the simple 96px label width, selected-tab curved SVG corners, horizontal scrolling and separators. Where it differs, Kibana wins: items use `label`, selection uses `selectedItemId`, changes return the full state object, active/inactive font weights and colors follow upstream, + calls `createItem`, closing selects the right neighbor (left at the end) and cannot close the last tab. Rename is available by double-click or the Actions popover, trims and validates 1–120 characters, saves on Enter/blur and cancels on Escape. Keyboard focus follows controlled selection. `customNewTabButton` replaces the default + and owns its click handler, just as upstream.

Discover's `wrapTabsBar` receives the bar (or `null` when hidden), returns the inline page header, and passes the bar into `titleAppend`; `renderContent` stays outside the header in the active tabpanel. The normal unwrapped form renders the bar above content. A simple open-tabs menu supports selection, with no closed-tab history. The host owns state/persistence and may supply `appendRight`, unsaved markers and custom item menu buttons.

**Not supported yet:** drag-to-reorder (`disableDragAndDrop` is unnecessary), recently closed tabs (`recentlyClosedItems`, `onClearRecentlyClosed`), tab previews (`getPreviewData`, query/status services), tab limits (`maxItemsCount`, `onTabLimitReached`), Kibana services (`services`, `@kbn/core`, `@kbn/es-query`), telemetry (`onEBTEvent`), duplicate/bulk-close menu actions, custom menu generators (`getTopTabMenuItems`, `getAdditionalTabMenuItems`), upstream resize-based label measurement/middle truncation/scroll buttons, preview loading indicators, and advanced global keyboard shortcuts. These unsupported props/helpers are not exported as pretend implementations. Basic arrow/Home/End selection is supported.

The packed tabs replica was checked in a temporary copy of the current vibe-kibana Discover template on port 5192, replacing its `TabBar` with `KibanaTabs` and routing the bar through `wrapTabsBar` → `titleAppend`. The full app typecheck and Webpack compilation passed. Chrome checks passed creation, selection, double-click and inactive-tab menu renaming, Enter/blur saves, keyboard navigation, closing and the last-tab guard, page-header split menu and dark mode, without runtime or hydration/Emotion warnings. The original vibe-kibana checkout had pre-existing edits; its source/manifests/lockfiles were hash-checked before and after and preserved. Temporary integration edits were removed and the server stopped. See `docs/screenshots/discover-tabs.png`. The library suite now has 40 passing tests, plus compiled consumer contracts, typecheck, library build, package audit and a rebuilt local archive.

## Peer compatibility

GitHub manifests checked on 2026-11-05. These are declared-range checks, not a claim that every app was migrated or visually tested. React/react-dom: `^18.2.0`; EUI: `>=123.0.0 <124`; Emotion React: `^11.14.0`; Emotion CSS: `^11.13.5`. The EUI floor includes the current AI glyphs (`addToChat` is absent in EUI 116). React 19 and future EUI majors are outside the tested range. Upstream packages require EUI >=112 and Emotion React >=11.14.

| Repository | EUI | React / react-dom | Emotion React / CSS | Result |
| --- | --- | --- | --- | --- |
| vibe-kibana | ^123.1.0 | ^18.2.0 | ^11.11.0 / ^11.13.5 | Ranges intersect; installed Emotion React must be >=11.14.0 |
| nightshift-prototype | 123.1.0 | ^18.3.1 | ^11.14.0 / ^11.13.5 | Fits |
| prototype-explorer (`ui/package.json`) | ^122.1.0 | ^18.3.1 | ^11.14.0 / ^11.13.5 | Upgrade EUI to 123.x |
| notdaybreak_prototype | ^116.3.1 | ^18.3.1 | ^11.14.0 / ^11.13.5 | Upgrade EUI to 123.x |
| notdaybreak_mvp | 118.0.0 | ^18.3.1 | ^11.14.0 / ^11.13.5 | Upgrade EUI to 123.x |
| chat-ux-prototype | ^123.3.0 | ^18 | ^11.14.0 / ^11.13.5 | Fits when React resolves >=18.2.0 |
| integrations-merged-prototype | No package.json | Static HTML | No npm manifest | Requires a React/npm host before this React library can be installed |
| ux-streams | 123.0.0 | 18.2.0 | ^11.14.0 / ^11.13.5 | Fits |
| aws-onboarding-design-preview | ^117.1.0 | ^18.2.0 | ^11.14.0 / not declared | Upgrade EUI to 123.x and add/resolve Emotion CSS ^11.13.5 |

## License findings

Both downloaded packages declare `Elastic License 2.0 OR AGPL-3.0-only OR SSPL-1.0`. We select **Elastic License 2.0** for this library and the copied Kibana code. Its copyright grant permits use, copies, distribution and derivative works, including public redistribution, provided the license terms and copyright notices are included and modification notices are retained. The license also prohibits certain third-party hosted/managed services, license-key circumvention, and removing notices; trademark rights remain separate. See the [upstream license text](https://github.com/elastic/kibana/blob/main/licenses/ELASTIC-LICENSE-2.0.txt), bundled LICENSE, and NOTICE. EUI, React and Emotion remain peers, not redistributed copies in this bundle. The published packages do not include a license file, so the complete upstream ELv2 terms are supplied here.

## Build and release

```sh
nvm use
npm ci
npm run typecheck
npm test
npm run build:library
npm run check:package
npm pack
```

Only maintainers/CI fetch Artifactory dependencies. The scoped registry in `.npmrc` contains no token. Use existing user npm credentials locally. CI reads `KIBANA_UI_NPM_TOKEN`; no literal secret is written to this repo. `@kbn/ui-*` are build-only dev dependencies, bundled into ESM. React, EUI and Emotion stay external; public types contain no private-registry imports. The build command is named `build:library` deliberately: npm treats even a script named `build` as a reason to prepare Git dependencies and install their dev dependencies. There is no `build`, `prepare`, `prepack` or install lifecycle hook in the release manifest.

`npm run update:kbn` resolves exact versions from `main`, updates the lockfile and this table, builds, tests and audits the package. Review the diff and repeat vibe-kibana checks. New unpublished components are never added automatically.

Development tooling requires Node 22.12+; the library's consumer engine range remains Node >=20. The development-only PrismJS override fixes an upstream EUI/Refractor advisory in this checkout. It does not override dependencies in consuming apps; those apps maintain their own EUI dependency trees.

After approval to publish, create `elastic/kbn-proto-ui` with the chosen GitHub visibility, add the npm secret, and enable Actions contents-write permission. Public repositories allow unauthenticated installs; private repositories require GitHub read access for designers and their CI. This is separate from Artifactory access. The package's `private: true` blocks registry publication, not GitHub installation.

CI runs on pushes to `main`, same-repository pull requests, and manual dispatch. Fork and Dependabot pull requests cannot access the Artifactory secret: they receive an explanatory check; a maintainer must review and test the changes on a trusted branch. The workflow never uses `pull_request_target` to run untrusted code with credentials.

Manually run **Release prebuilt GitHub tag** with the approved package name and version. The workflow builds and verifies first, then creates a release-only commit containing `dist/` and pushes its version tag. It does not push a branch or publish to npm. The tag points at the prebuilt commit, so `npm install github:...#v0.1.0` needs no build or private-registry access. Do not manually tag a source-only commit. Nothing has been published by this implementation task.
