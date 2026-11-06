# Using kbn-proto-ui

This repo is only a component dependency. Do not add playgrounds, starter apps, routing, data fetching, comments, version management, or tweak panels.

Keep the public API independent of consuming prototypes. Include UI and supporting code needed for the shared Kibana shell; consumer-specific palettes, helpers and compatibility requirements belong in the consuming app. Reference repos provide provenance and validation examples, not requirements for extra exports.

## In a consuming prototype

- Install a maintainer-created release tag: `npm install github:elastic/kbn-proto-ui#v0.1.0`. Never install from `main`: it contains source, while release tags include prebuilt `dist/`.
- Keep the host's `EuiProvider`, theme, React and Emotion instances. Do not add nested providers or import private `@kbn/ui-*` packages in the prototype.
- Import `KibanaChrome` from `@elastic/kbn-proto-ui`. Pass `solution`, `activeNavItem`, `onNavigate`, `breadcrumbs`, and children. The host owns its router.
- Valid solutions: `observability`, `security`, `search`, `classic`. Use `dashboards` (plural), matching Kibana. See exported `solutionNavTrees` for all IDs.
- Supply `getHref` when links need host router URLs. Ordinary clicks call `onNavigate`; modified clicks should keep native browser behavior.
- Override the menu with `navItems={{ primaryItems: [...] }}`, or extend defaults with `navItems={(nav) => ({ ...nav, primaryItems: [...nav.primaryItems, { id: 'my-page', label: 'My page', iconType: 'beaker', href: '/my-page' }] })}`. Preserve stable IDs. Sections have `{ id, label?, items: [{ id, label, href }] }`.
- The library does not persist collapse state. Use `collapsed` and `onCollapsedChange` if the app needs persistence.
- The agent uses `{ open, onOpenChange, attachment?, messages?, onSubmit?, isResponding? }`. Supply responses from the host; this library never fabricates responses or fetches data.
- The application panel is fixed to `layoutVar('application.content.height')`. Keep page regions at `minHeight: 0` and put scrolling inside the page.
- Prefer lower-level exported components when only one part is needed. Never copy the library's chrome into a prototype.
- Use `KibanaPageHeader` for application headers. Use `menu` with Kibana's declarative `AppMenuConfig` for actions; do not add page presets. Only use `titleAppend` for host-owned content such as Discover's complete tab bar; use data-driven `tabs` for normal page tabs. Never move the host's TabBar into this library.
- For registered placement, pass header props through `KibanaChrome.pageHeader` (measured `applicationTopBar` slot). For Discover-style inline placement, render the header inside the app children and leave `pageHeader` unset. Preserve upstream prop names and shapes, including `disableButton`, focus-return contexts and the description/metadata union.

## Maintaining this library

- Use `src/wrappers/` for setup around published `@kbn/ui-*` packages, `src/replicas/` for library-maintained UI rebuilt to match Kibana, `src/solution-menus/` for solution menu data, and `src/kibana-copies/ai-components/` for upstream copies. Preserve copies unchanged except for the documented removal of the deprecated AI Assistant logo from the button implementation and types. Record authorized local changes in SOURCES.md and retain modification notices. Replace copies with the published AI components package when available. The standalone English-label adapter lives in `src/utilities/kibanaI18n.ts` and resolves through TypeScript/build and test aliases.
- Keep `KibanaChrome`, `KibanaSideNav` and `layout.ts` in `src/wrappers/`. Keep `KibanaHeader`, `KibanaSidebar` and `sidebarWidth.ts` in `src/replicas/`; its `agent-builder/` folder holds the agent conversation UI and connector logo.
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
