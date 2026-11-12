import { build } from 'esbuild';
import { execFileSync } from 'node:child_process';
import { readFileSync, rmSync, writeFileSync } from 'node:fs';

const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
rmSync('dist', { recursive: true, force: true });
const peers = Object.keys(pkg.peerDependencies);
const result = await build({
  // Separate entry modules keep CJS package initialization out of unrelated
  // exports. Importing just AiButton must not initialize chrome/navigation.
  entryPoints: [
    'src/index.ts', 'src/solution-menus/index.ts', 'src/utilities/aiStyles.ts', 'src/wrappers/layout.ts',
    'src/wrappers/KibanaChromeLayout.tsx', 'src/rebuilt/ChromeHeader.tsx',
    'src/rebuilt/KibanaProjectPicker.tsx',
    'src/wrappers/KibanaSideNav.tsx', 'src/rebuilt/Sidebar.tsx',
    'src/rebuilt/agent-builder/AgentSidebar.tsx',
    'src/rebuilt/agent-builder/agentConnectorLogo.ts',
    'src/rebuilt/app-header/ChromeAppHeader.tsx',
    'src/rebuilt/unified-tabs/KibanaTabs.tsx',
    'src/wrappers/ai-components.ts',
  ],
  outdir: 'dist', outbase: 'src', bundle: true, format: 'esm', splitting: true,
  platform: 'browser', target: 'es2022', jsx: 'automatic', jsxImportSource: '@emotion/react',
  external: peers, sourcemap: true, metafile: true, treeShaking: true,
  plugins: [{
    name: 'commonjs-peer-bridge',
    setup(build) {
      // Kibana's published webpack bundles are CJS. A CJS require of an
      // external otherwise becomes a dynamic require, which browsers cannot run.
      // Bridge through ESM namespaces while leaving each host peer external.
      build.onResolve({ filter: /^(react(?:-dom)?|@elastic\/eui|@emotion\/(?:react|css))(?:\/.*)?$/ }, (args) => {
        if (args.kind === 'require-call') return { path: args.path, namespace: 'peer-bridge' };
      });
      build.onLoad({ filter: /.*/, namespace: 'peer-bridge' }, ({ path }) => ({
        contents: `import * as peer from ${JSON.stringify(path)}; export * from ${JSON.stringify(path)}; export default peer;`,
        loader: 'js',
      }));
    },
  }],
  legalComments: 'eof', logLevel: 'info',
});
// Bundled implementation + external EUI/Emotion/React. This audit is a release gate.
for (const [path, output] of Object.entries(result.metafile.outputs)) {
  for (const imp of output.imports) {
    if (imp.external && !peers.some((name) => imp.path === name || imp.path.startsWith(`${name}/`))) {
      throw new Error(`Unexpected runtime dependency in ${path}: ${imp.path}`);
    }
  }
}
execFileSync(process.execPath, ['node_modules/typescript/bin/tsc'], { stdio: 'inherit' });
// Only our standalone types are public; the private registry is never needed for declarations.
writeFileSync('dist/build-metadata.json', JSON.stringify({ bundled: Object.fromEntries(
  Object.entries(pkg.devDependencies).filter(([name]) => name.startsWith('@kbn/ui-')),
), external: peers }, null, 2) + '\n');
writeFileSync('dist/metafile.json', JSON.stringify(result.metafile, null, 2) + '\n');
