# kbn-proto-ui

Kibana's shared shell for React prototypes: the published chrome layout and side navigation, solution menus, header, and AI Agent UI. No router, app setup, or data fetching.

How the chrome is organized:

```text
KibanaChromeLayout (wraps published ChromeLayout)
├─ ChromeHeader             Kibana's top bar
├─ KibanaSideNav            wraps published SideNavigation
├─ ChromeAppHeader          Kibana's app title bar (appHeader)
├─ Page content             supplied by the host
└─ Sidebar                  Kibana's panel, containing the open sidebar app
```

The library is independent of consuming apps. App-specific styles, palettes and helpers belong in the host; shared AI buttons use the host's EUI theme.

```text
src/
  wrappers/          # Type 1: setup around published @kbn/ui-* packages
    KibanaChromeLayout.tsx
    KibanaSideNav.tsx
    layout.ts
  kibana-copies/     # Type 2: copied Kibana code; replace when published
    ai-components/
  replicas/          # Type 3: rebuilt to look like Kibana; maintained here
    ChromeHeader.tsx
    chrome-header/   # Internal HeaderActionButton and SearchButton
    KibanaProjectPicker.tsx
    Sidebar.tsx
    sidebarWidth.ts
    app-header/     # Rebuilt to match Kibana
      ChromeAppHeader.tsx
    unified-tabs/    # Simplified @kbn/unified-tabs replica
      KibanaTabs.tsx
    agent-builder/
      AgentSidebar.tsx
      agentConnectorLogo.ts
  solution-menus/    # Kibana's solution menus, represented as data
  utilities/         # Reusable styling APIs and standalone adapters
    aiStyles.ts
    kibanaI18n.ts
  index.ts           # Public package exports
```

Wrappers configure and connect published Kibana packages to host-supplied props. Copies preserve upstream implementations until Kibana publishes them; the only local source changes are the deprecated AI Assistant logo removal documented in [SOURCES.md](SOURCES.md). Replicas recreate Kibana UI that is not available as a suitable published component and are maintained in this library. `utilities/aiStyles.ts` exposes the shared AI gradient implementation; `utilities/kibanaI18n.ts` is the internal English-label adapter used by build and test aliases.

This source prepares v0.4.0. After the maintainer releases it, install the prebuilt tag below. The current v0.3.0 tag has the previous names and APIs.

```sh
npm install github:elastic/kbn-proto-ui#v0.4.0
```

Keep your app's existing `EuiProvider` and theme. React 18.2+, EUI 123.x, `@emotion/react` 11.14+, and `@emotion/css` 11.13.5+ are peers, shared with your app. No Artifactory access or build step is needed when installing a release tag.

```tsx
import { useState } from 'react';
import { KibanaChromeLayout } from '@elastic/kbn-proto-ui';

export function Prototype() {
  const [open, setOpen] = useState(false);
  return (
    <KibanaChromeLayout
      solution="observability"
      activeNavItem="discover"
      onNavigate={(id) => navigateToPrototypePage(id)}
      breadcrumbs={[{ text: 'Discover' }]}
      agent={{ open, onOpenChange: setOpen, attachment: { title: 'Discover' } }}
    >
      <MyPrototypePage />
    </KibanaChromeLayout>
  );
}
```

`solution` accepts `observability` (default), `security`, `search` (Elasticsearch), or `classic`. Navigation IDs follow Kibana, for example `discover`, `dashboards`, and `apm:services`. `onNavigate` receives the ID and item. Use `getHref={(id) => ...}` for real URLs and modified-click behavior, or omit `onNavigate` to use native links.

Extend a solution's menu without copying the shell:

```tsx
navItems={(nav) => ({
  ...nav,
  primaryItems: [
    ...nav.primaryItems,
    { id: 'my-page', label: 'My page', iconType: 'beaker', href: '/my-page' },
  ],
})}
```

Pass a partial `navItems` object to replace whole lists. Lower-level exports include `ChromeHeader`, `KibanaSideNav`, `Sidebar`, `AgentSidebar`, `AiButton`, `AiButtonDefault`, `AiButtonEmpty`, `AiButtonIcon`, `layoutVar`, and the four nav trees. Nav-only data is also available from `@elastic/kbn-proto-ui/solution-menus`.

```tsx
import { getSolutionNav, solutionNavTrees } from '@elastic/kbn-proto-ui/solution-menus';
```

Reuse Kibana's AI gradients on custom controls through the same implementation used by the AI buttons:

```tsx
import { EuiButtonEmpty } from '@elastic/eui';
import { useAiButtonGradientStyles } from '@elastic/kbn-proto-ui';

export function CustomAiAction() {
  const { buttonCss, labelCss } = useAiButtonGradientStyles({ variant: 'outlined' });
  return (
    <EuiButtonEmpty css={buttonCss}>
      <span css={labelCss}>Ask AI</span>
    </EuiButtonEmpty>
  );
}
```

Use your host's Emotion JSX configuration and existing `EuiProvider`. The hook supports `base`, `outlined`, `empty`, and `accent` variants plus `iconOnly`; its styles include hover, focus and disabled states. `useSvgAiGradient({ variant })` also exposes the resolved `colors.startColor` / `colors.endColor`, `gradientId` and `iconGradientCss`. For gradient icons, render `<SvgAiGradientDefs gradientId={gradientId} colors={colors} />` alongside the icon and apply `iconGradientCss` to its wrapper. Each hook call creates a unique SVG gradient ID. These utilities follow the host's theme and reuse the unchanged Kibana implementation; no separate fixed palette is maintained.

The agent is UI only: pass `messages`, `onSubmit`, and `isResponding` through `agent` to connect your prototype's behavior, or supply `agent.children` for custom conversation content. Header actions and user/space labels are configured through `header`. Unconfigured header actions remain enabled and do nothing until the host supplies a callback. The page fills a fixed-height panel; give your page's scrollable region `min-height: 0; overflow: auto`.

The global `ChromeHeader` has Kibana's named `switcher`, `projectPicker` and `subscriptionBadge` slots. Omit `switcher` to keep the existing solution-logo/space button; pass `null` to hide it. The order is switcher → project picker → subscription badge → breadcrumbs/spacer → search → help → custom actions → AI Agent → existing theme control (if configured) → `trailing` → avatar → `afterUserMenu`. Kibana's fixed left-group divider and conditional switcher/picker-badge dividers follow `header_shell.tsx`.

Pass these props directly to `ChromeHeader`, or through `KibanaChromeLayout.header`:

```tsx
import { EuiButtonEmpty } from '@elastic/eui';
import { KibanaChromeLayout, KibanaProjectPicker } from '@elastic/kbn-proto-ui';

<KibanaChromeLayout
  header={{
    switcher: <EuiButtonEmpty color="text" size="s" iconType="arrowDown" iconSide="right">ACME Corp</EuiButtonEmpty>,
    projectPicker: <KibanaProjectPicker selected={31} total={435} />,
    afterUserMenu: <button type="button" onClick={openPrototypeTools}>Prototype tools</button>,
  }}
>
  <MyPrototypePage />
</KibanaChromeLayout>
```

`KibanaProjectPicker` is the cross-project scope button only: pass numeric `selected`/`total`, optional `onClick`, and an optional tooltip override. It shows compact counts with tabular numbers, “All” when every project is selected, and a warning button for zero selected (including 0/0). Its default tooltip is “Cross-project search scope selector”. The host implements the picker popover and selection state. Counts use English compact notation without introducing Kibana's numeral dependency.

**`afterUserMenu` is a prototype-only extension, not part of Kibana.** It leaves space after the avatar for host-owned tools; this library provides no tweaks, variants or versioning UI. The existing `trailing` slot remains before the avatar.

Classic uses Kibana's app categories in the published side navigation. Kibana's legacy collapsible Classic drawer itself is not published. The default solution snapshots represent self-managed Kibana with Agent chat, Streams and Workflows enabled; feature/privilege differences can be overridden with `navItems`.

Use `ChromeAppHeader` for the application title bar. Its supported prop names and shapes follow Kibana's `@kbn/ui-app-header` and `AppMenuConfig`:

```tsx
import { ChromeAppHeader } from '@elastic/kbn-proto-ui';

<ChromeAppHeader
  title="Web traffic"
  back={{ href: '/dashboards', label: 'Dashboards' }}
  menu={{
    items: [{ id: 'export', label: 'Export', iconType: 'export', run: onExport }],
    primaryActionItem: { id: 'edit', label: 'Edit', iconType: 'pencil', run: onEdit },
  }}
/>
```

Pass the same header props to `KibanaChromeLayout` as `appHeader={...}` to render it in the measured `applicationTopBar` slot, matching Kibana's registered header placement. For Discover-style inline placement, render `ChromeAppHeader` as the first child inside the app and use `KibanaTabs.wrapTabsBar` to pass the bar through `titleAppend`; leave `appHeader` unset so there is only one header. The host owns the controlled tab state and persistence. `titleAppend` is the only arbitrary-content slot; use data-driven `tabs` for ordinary page tabs and `menu` for actions.

Inline rename uses `title={{ text, onSave, placeholder?, ariaLabel? }}`; the host updates `text` on success, and `onSave` may return an error string or a promise. Share receives `{ returnFocus }`; menu `run` receives `{ triggerElement, returnFocus }`. Menu items use Kibana's `disableButton` (boolean or function), while tabs and the menu switch use `disabled`. Menu items are ordered by `order`; `overflow: true` forces the ⋮ menu, and nested `items` create submenus. The primary action supports `splitButtonProps`. Provide either `description` or up to three typed `metadata` entries. Favorite statuses are `unfavorited`, `favorited`, `adding` and `removing`.

Spacing defaults to 16px (`standard`), or 8px for a sparse header (`compact`). `flush`, `bleed`, `largeBleed`, `sticky` and `borderless` follow Kibana's layout meanings. See [SOURCES.md](SOURCES.md) for the intentionally unsupported header features.

`KibanaTabs` is a simplified replica of `@kbn/unified-tabs`. Its supported props keep Kibana's names and shapes: `items` contain `{ id, label }`, `selectedItemId` selects the active tab (or the first item by default), and `onChanged` receives `{ items, selectedItem }`. `createItem` supplies the new item for +; `renderContent` receives only the active item. Use it inside `KibanaChromeLayout`'s children, without setting `appHeader`:

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

Tabs support closing (except the last tab), inline rename by double-click or Actions → Rename, and keyboard selection. Enter or blur saves a trimmed name (1–120 characters); Escape cancels. Additional supported props are `hideTabsBar`, `unsavedItemIds`, `disableCloseButton`, `disableInlineLabelEditing`, `disableTabsBarMenu`, `customNewTabButton`, `tabContentIdOverride`, `appendRight`, and `data-test-subj`. The wrapper receives `null` when the bar is hidden, so it can keep rendering the header. Exported types are `KibanaTabsProps`, `TabItem` and `TabbedContentState`.

This is a supported subset, not the complete package: drag reordering, recently closed tabs, previews, limits and Kibana services are not supported yet. See [SOURCES.md](SOURCES.md) for the full omissions. Switching to the real package keeps these supported prop shapes; the host must supply the real package's required services, recently closed state and telemetry callback.

For maintenance, compatibility results, exact upstream paths, license findings, and release instructions, see [SOURCES.md](SOURCES.md).

Maintainers: use Node 22.12+ (`nvm use`), run `npm ci` with your existing Artifactory access, then `npm run typecheck`, `npm test`, `npm run build:library`, and `npm run check:package`. Source branches exclude `dist/`; the release workflow adds it to the version tag. CI/release checks use the existing `KIBANA_UI_NPM_TOKEN` Actions secret. `"private": true` prevents npm publication and does not control GitHub repository visibility.

## Naming and migration for v0.4.0

Replicas use Kibana's exact component names. Wrappers retain the `Kibana` prefix to distinguish them from the published component they import. `KibanaChromeLayout` wraps `ChromeLayout`; `ChromeHeader`, `ChromeAppHeader` and `Sidebar` are maintained replicas. `KibanaSideNav`, `AgentSidebar`, `KibanaTabs` and `KibanaProjectPicker` keep their names.

| Deprecated for one release | Use instead |
| --- | --- |
| `KibanaChrome` / `KibanaChromeProps` | `KibanaChromeLayout` / `KibanaChromeLayoutProps` |
| `KibanaHeader` / `KibanaHeaderProps` | `ChromeHeader` / `ChromeHeaderProps` |
| `KibanaPageHeader` / `KibanaPageHeaderProps` | `ChromeAppHeader` / `ChromeAppHeaderProps` |
| `KibanaSidebar` / `KibanaSidebarProps` | `Sidebar` / `SidebarProps` |
| `pageHeader` | `appHeader` |

Old root exports and the old prop remain functional and carry `@deprecated` annotations. Prefer `appHeader` when both props are supplied. Internal files move to the new names and `replicas/app-header/`; consumers should use the package root exports. The release workflow sets v0.4.0; this source change does not create a release or bump the source manifest.

## Global search and header actions

`ChromeHeader` renders Kibana's bordered `SearchButton`, with a magnify icon, “Find content...” placeholder and a themed `⌘ /` badge (`Ctrl /` on non-Mac). On xs/s screens it becomes a square icon button. Pass `onSearchClick` to open the host's search UI; clicking or using the shortcut calls the same callback. As in Kibana, the shortcut ignores inputs, textareas, editable content and extra modifiers. Help uses Kibana's bordered `HeaderActionButton`, with a transparent background and theme-based hover/focus styles. Neither action is disabled when unconfigured.

`searchValue`, `onSearchChange` and `onSearchSubmit` are deprecated for one release. Supplying any of them without `onSearchClick` retains the old editable search field and callbacks. `onSearchClick` takes precedence and selects the new button. Migrate by moving search/query UI to the host and supplying that callback.

Use `header.actions` for custom icon actions (`id`, `label`, `iconType`, optional `variant: 'bordered' | 'plain'`, and `onClick`). They appear after Help and before AI Agent; existing theme control, `trailing`, avatar and `afterUserMenu` keep their order. The AI Agent now uses Kibana's `base` variant when closed and `accent` when open, without a text-color override.

## Sidebar apps

Register UI with `sidebarApps: [{ id, label?, render: () => ReactNode }]`, and control the single active ID with `activeSidebarApp` and `onActiveSidebarAppChange`. IDs must be unique. Unknown IDs render no sidebar. Content mounts only for the open app, inside the same resizable `Sidebar`; the width is shared across apps. The host owns content state and close controls. No Kibana registry, global store or persistence is added.

```tsx
import { useState } from 'react';
import { KibanaChromeLayout } from '@elastic/kbn-proto-ui';

export function Prototype() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <KibanaChromeLayout
      activeSidebarApp={active}
      onActiveSidebarAppChange={setActive}
      sidebarApps={[{
        id: 'inspector', label: 'Inspector',
        render: () => <section><h2>Inspector</h2><button onClick={() => setActive(null)}>Close inspector</button></section>,
      }]}
      header={{ actions: [{
        id: 'inspect', label: 'Inspector', iconType: 'inspect', sidebarAppId: 'inspector',
      }] }}
    >
      <MyPrototypePage />
    </KibanaChromeLayout>
  );
}
```

An action with `sidebarAppId` toggles that app instead of accepting `onClick`. Its selected state, `aria-expanded` and `aria-controls` follow the active app. Standalone `ChromeHeader` supports the corresponding controlled props and `sidebarControlsId`; the layout wires these automatically.

The existing `agent={{ open, onOpenChange, ... }}` API remains supported, including `agent.children`; it registers the built-in `agent` app. Reserve that ID when using the adapter. You can also register your own `agent` render function in `sidebarApps` without the legacy prop. AI Agent accents only while `agent` is active; another app leaves it at `base`. When combining APIs, an explicitly supplied `activeSidebarApp` (including `null`) takes precedence over `agent.open`, and toggles notify both the main callback and the agent callback when its open flag changes. Supply controlled updates for the new API; there is no internal active-app state.
