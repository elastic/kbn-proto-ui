import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { render } from '@testing-library/react';
import { EuiProvider } from '@elastic/eui';
import { describe, expect, it } from 'vitest';
import { reservedInlineEndVariables } from '../src/wrappers/reservedInlineEnd';
import { KibanaChromeLayout } from '../src/wrappers/KibanaChromeLayout';

/** Every rule currently on the page, whether Emotion wrote it as text or inserted it as a rule. */
const injectedCss = () => [...document.styleSheets].flatMap((sheet) => [...sheet.cssRules].map((rule) => rule.cssText))
  .concat([...document.head.querySelectorAll('style')].map((style) => style.textContent ?? ''))
  .join('\n');
const input = { reserved: 400, navigationWidth: 100, sidebarWidth: 320, applicationMarginRight: 8 };

describe('reservedInlineEnd', () => {
  it('moves every right edge in by the reserved width', () => {
    const vars = reservedInlineEndVariables(input);
    expect(vars['header.width']).toBe('calc(100vw - 400px)');
    expect(vars['header.right']).toBe('400px');
    expect(vars['navigation.right']).toBe('calc(100vw - 500px)');
    expect(vars['sidebar.right']).toBe('400px');
    expect(vars['sidebar.left']).toBe('calc(100vw - 720px)');
    expect(vars['application.right']).toBe('728px');
    expect(vars['application.width']).toBe('calc(100vw - 828px)');
    expect(vars['application.content.width']).toBe('calc(100vw - 828px)');
  });

  it("covers every variable the published layout measures from the window's right edge", () => {
    // The published layout writes each variable as u("<name>"),":<value>". Read them from its source,
    // so a Kibana update that adds or renames a right-edge variable fails here.
    const source = readFileSync(createRequire(import.meta.url).resolve('@kbn/ui-chrome-layout'), 'utf8');
    const definitions = [...source.matchAll(/u\("([\w.]+)"\),":([^"]*)"/g)].map(([, name, value]) => ({ name, value }));
    expect(definitions.length).toBeGreaterThan(20);
    const rightEdge = definitions
      .filter(({ name, value }) => value.startsWith('100vw') || value.startsWith('calc(100vw') || name.endsWith('.right'))
      .map(({ name }) => name);
    const covered = Object.keys(reservedInlineEndVariables(input));
    expect([...new Set(rightEdge)].filter((name) => !covered.includes(name))).toEqual([]);
  });

  it('adds nothing to the page unless a width is reserved', () => {
    const view = render(<EuiProvider><KibanaChromeLayout /></EuiProvider>);
    expect(injectedCss()).not.toContain('kbnChromeLayoutHeader)');
    view.rerender(<EuiProvider><KibanaChromeLayout reservedInlineEnd={400} /></EuiProvider>);
    expect(injectedCss()).toContain('calc(100vw - 400px)');
    view.rerender(<EuiProvider><KibanaChromeLayout reservedInlineEnd={0} /></EuiProvider>);
    expect(injectedCss()).not.toContain('calc(100vw - 400px)');
  });
});
