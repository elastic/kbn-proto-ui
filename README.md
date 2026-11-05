# kbn-proto-ui

Kibana's shared shell for React prototypes: the published chrome layout and side navigation, solution menus, header, and AI Agent UI. No router, app setup, or data fetching.

The library is independent of consuming apps. App-specific styles, palettes and helpers belong in the host; shared AI buttons use the host's EUI theme.

```text
src/
  wrappers/          # Type 1: setup around published @kbn/ui-* packages
    KibanaChrome.tsx
    KibanaSideNav.tsx
    layout.ts
  kibana-copies/     # Type 2: copied Kibana code; replace when published
    ai-components/
  replicas/          # Type 3: rebuilt to look like Kibana; maintained here
    KibanaHeader.tsx
    KibanaSidebar.tsx
    sidebarWidth.ts
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

Install a prebuilt release tag once the first release has been created:

```sh
npm install github:elastic/kbn-proto-ui#v0.1.0
```

Keep your app's existing `EuiProvider` and theme. React 18.2+, EUI 123.x, `@emotion/react` 11.14+, and `@emotion/css` 11.13.5+ are peers, shared with your app. No Artifactory access or build step is needed when installing a release tag.

```tsx
import { useState } from 'react';
import { KibanaChrome } from '@elastic/kbn-proto-ui';

export function Prototype() {
  const [open, setOpen] = useState(false);
  return (
    <KibanaChrome
      solution="observability"
      activeNavItem="discover"
      onNavigate={(id) => navigateToPrototypePage(id)}
      breadcrumbs={[{ text: 'Discover' }]}
      agent={{ open, onOpenChange: setOpen, attachment: { title: 'Discover' } }}
    >
      <MyPrototypePage />
    </KibanaChrome>
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

Pass a partial `navItems` object to replace whole lists. Lower-level exports include `KibanaHeader`, `KibanaSideNav`, `KibanaSidebar`, `AgentSidebar`, `AiButton`, `AiButtonDefault`, `AiButtonEmpty`, `AiButtonIcon`, `layoutVar`, and the four nav trees. Nav-only data is also available from `@elastic/kbn-proto-ui/solution-menus`.

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

The agent is UI only: pass `messages`, `onSubmit`, and `isResponding` through `agent` to connect your prototype's behavior, or supply `agent.children` for custom conversation content. Header actions and user/space labels are configured through `header`. Unconfigured actions are disabled. The page fills a fixed-height panel; give your page's scrollable region `min-height: 0; overflow: auto`.

Classic uses Kibana's app categories in the published side navigation. Kibana's legacy collapsible Classic drawer itself is not published. The default solution snapshots represent self-managed Kibana with Agent chat, Streams and Workflows enabled; feature/privilege differences can be overridden with `navItems`.

For maintenance, compatibility results, exact upstream paths, license findings, and release instructions, see [SOURCES.md](SOURCES.md).

Maintainers: use Node 22.12+ (`nvm use`), run `npm ci` with your existing Artifactory access, then `npm run typecheck`, `npm test`, `npm run build:library`, and `npm run check:package`. The initial source commit excludes `dist/`; the release workflow adds it to the version tag. Add the `KIBANA_UI_NPM_TOKEN` Actions secret before running CI or creating the first release. `"private": true` prevents npm publication and does not control GitHub repository visibility.
