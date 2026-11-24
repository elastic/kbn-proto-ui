import { describe, expect, it } from 'vitest';
import { pickAppMenuComponent } from '../src/wrappers/AppMenu';

// The published package is CommonJS. Node (these tests) exposes its named exports, but the
// library's browser build only gets a default export holding them; the loader must handle both.
describe('KibanaAppMenu loader', () => {
  const AppMenuComponent = () => null;

  it('reads the component from named exports (Node)', () => {
    expect(pickAppMenuComponent({ AppMenuComponent })).toBe(AppMenuComponent);
  });

  it('reads the component from the default export (browser bundle of the CommonJS package)', () => {
    expect(pickAppMenuComponent({ default: { AppMenuComponent } })).toBe(AppMenuComponent);
  });

  it('fails clearly when the package does not export the component', () => {
    expect(() => pickAppMenuComponent({ default: {} })).toThrow('did not export AppMenuComponent');
  });
});
