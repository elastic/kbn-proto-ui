import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
const registry = 'https://artifactory.elastic.dev/artifactory/api/npm/kibana-ui/';
const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
const versions = {};
for (const name of Object.keys(pkg.devDependencies).filter((name) => name.startsWith('@kbn/ui-'))) {
  const version = JSON.parse(execFileSync('npm', ['view', `${name}@main`, 'version', '--json', `--registry=${registry}`], { encoding: 'utf8' }));
  versions[name] = version;
}
// Resolve everything before changing files; never use the `latest` tag.
execFileSync('npm', ['install', '--save-dev', '--save-exact', ...Object.entries(versions).map(([name, version]) => `${name}@${version}`)], { stdio: 'inherit' });
let sources = readFileSync('SOURCES.md', 'utf8');
for (const [name, version] of Object.entries(versions)) {
  sources = sources.replace(new RegExp(`(\\| \\x60${name}\\x60 \\| \\x60)[^\\x60]+(\\x60)`, 'g'), `$1${version}$2`);
}
writeFileSync('SOURCES.md', sources);
execFileSync('npm', ['run', 'build:library'], { stdio: 'inherit' });
execFileSync('npm', ['test'], { stdio: 'inherit' });
execFileSync('npm', ['run', 'check:package'], { stdio: 'inherit' });
console.log('Updated to main builds. Review SOURCES.md and verify Discover/Dashboards in vibe-kibana before release.');
