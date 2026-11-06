import type { ReactNode } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { EuiProvider } from '@elastic/eui';
import { describe, expect, it, vi } from 'vitest';
vi.mock('@kbn/ui-chrome-layout', async importOriginal => ({
  ...await importOriginal<typeof import('@kbn/ui-chrome-layout')>(),
  GridLayoutGlobalStyles: () => null,
  ChromeLayoutConfigProvider: ({ children }: { children: ReactNode }) => children,
  ChromeLayout: ({ header, applicationTopBar, sidebar, children }: Record<string, ReactNode>) => <main>{header}{applicationTopBar}{sidebar}{children}</main>,
}));
vi.mock('../src/wrappers/KibanaSideNav', () => ({ KibanaSideNav: () => null }));
import { KibanaChromeLayout, KibanaChrome } from '../src/wrappers/KibanaChromeLayout';
import { ChromeHeader, KibanaHeader } from '../src/replicas/ChromeHeader';
import { ChromeAppHeader, KibanaPageHeader } from '../src/replicas/app-header/ChromeAppHeader';
import { Sidebar, KibanaSidebar } from '../src/replicas/Sidebar';

describe('chrome migration', () => {
  it('keeps deprecated component aliases identical to the new exports', () => {
    expect(KibanaChrome).toBe(KibanaChromeLayout);
    expect(KibanaHeader).toBe(ChromeHeader);
    expect(KibanaPageHeader).toBe(ChromeAppHeader);
    expect(KibanaSidebar).toBe(Sidebar);
  });
  it('supports pageHeader and gives appHeader precedence', () => {
    const view = render(<EuiProvider><KibanaChrome pageHeader={{ title: 'Legacy title' }} /></EuiProvider>);
    expect(screen.getByRole('heading', { name: 'Legacy title' })).toBeTruthy();
    view.rerender(<EuiProvider><KibanaChromeLayout appHeader={{ title: 'New title' }} pageHeader={{ title: 'Legacy title' }} /></EuiProvider>);
    expect(screen.getByRole('heading', { name: 'New title' })).toBeTruthy();
    expect(screen.queryByRole('heading', { name: 'Legacy title' })).toBeNull();
  });
});
