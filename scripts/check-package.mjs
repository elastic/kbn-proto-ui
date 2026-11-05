import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { build } from 'esbuild';
const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
assert.equal(pkg.type, 'module');
assert.equal(pkg.sideEffects, false);
assert.equal(pkg.private, true, 'This package is distributed through GitHub, never npm publish');
assert(!Object.hasOwn(pkg.exports, './navigation'), 'The old navigation entry point must not remain as an alias');
assert.equal(pkg.exports['./solution-menus'].types, './dist/solution-menus/index.d.ts');
assert.equal(pkg.exports['./solution-menus'].import, './dist/solution-menus/index.js');
assert.equal(pkg.exports['./solution-menus'].default, './dist/solution-menus/index.js');
assert(!pkg.dependencies, 'Runtime dependencies must be peers or bundled');
for (const key of ['build', 'prepare', 'prepack', 'install', 'postinstall', 'preinstall']) {
  assert(!pkg.scripts[key], `${key} would run code on GitHub install`);
}
const walk = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((entry) => entry.isDirectory() ? walk(join(dir, entry.name)) : [join(dir, entry.name)]);
for (const file of walk('dist').filter((file) => file.endsWith('.d.ts'))) {
  assert(!/(?:from\s*|import\s*\()\s*['"]@kbn\//.test(readFileSync(file, 'utf8')), `Private registry types leaked in ${file}`);
}
for (const file of walk('dist').filter((file) => file.endsWith('.js'))) {
  assert(!/\b(?:__require|require)\(["'](?:react|@elastic|@emotion)/.test(readFileSync(file, 'utf8')), `Browser-incompatible peer require: ${file}`);
}
const meta = JSON.parse(readFileSync('dist/metafile.json', 'utf8'));
for (const [file, input] of Object.entries(meta.inputs)) {
  assert(!/node_modules\/(?:react|react-dom|@elastic\/eui|@emotion\/)/.test(file), `Peer was bundled: ${file}`);
}
const [pack] = JSON.parse(execFileSync('npm', ['pack', '--dry-run', '--json'], { encoding: 'utf8' }));
const files = new Set(pack.files.map(({ path }) => path));
for (const file of ['dist/index.js', 'dist/index.d.ts', 'dist/solution-menus/index.js', 'dist/solution-menus/index.d.ts', 'README.md', 'AGENTS.md', 'SOURCES.md', 'LICENSE', 'NOTICE']) assert(files.has(file), `Missing release file: ${file}`);
assert(![...files].some((file) => file.startsWith('dist/navigation/')), 'Old navigation output must not be packaged');
assert(!files.has('.npmrc'));
assert(![...files].some((file) => file.startsWith('node_modules/')));
for (const [symbol, path] of [['AiButton', './dist/index.js'], ['useAiButtonGradientStyles', './dist/index.js'], ['useSvgAiGradient', './dist/index.js'], ['SvgAiGradientDefs', './dist/index.js'], ['observabilityNav', './dist/solution-menus/index.js']]) {
  const result = await build({
    stdin: { contents: `import { ${symbol} } from '${path}'; console.log(${symbol});`, resolveDir: process.cwd() },
    bundle: true, write: false, format: 'esm', minify: true, treeShaking: true,
    external: Object.keys(pkg.peerDependencies),
    logOverride: { 'ignored-bare-import': 'silent' },
  });
  assert(!result.outputFiles[0].text.includes('app-main-scroll'), `${symbol} pulled in unused chrome code`);
}
console.log(`Package verified: ${pack.entryCount} files; peers external; no Artifactory runtime or type dependencies.`);
