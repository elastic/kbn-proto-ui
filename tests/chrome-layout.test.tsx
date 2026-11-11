import { useState, type ReactNode } from 'react';
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
vi.mock('../src/upstream/ai-components/ai_button/ai_button', async importOriginal => {
  const actual = await importOriginal<typeof import('../src/upstream/ai-components/ai_button/ai_button')>();
  return { ...actual, AiButton: vi.fn(actual.AiButton) };
});
import { AiButton } from '../src/upstream/ai-components/ai_button/ai_button';
import { KibanaChromeLayout, KibanaChrome } from '../src/wrappers/KibanaChromeLayout';
import { ChromeHeader, KibanaHeader } from '../src/rebuilt/ChromeHeader';
import { ChromeAppHeader, KibanaPageHeader } from '../src/rebuilt/app-header/ChromeAppHeader';
import { Sidebar, KibanaSidebar } from '../src/rebuilt/Sidebar';

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

const agentVariant = () => vi.mocked(AiButton).mock.calls.at(-1)?.[0].variant;
function Apps() {
  const [active, setActive] = useState<string | null>(null);
  return <KibanaChromeLayout activeSidebarApp={active} onActiveSidebarAppChange={setActive}
    sidebarApps={[
      { id: 'agent', label: 'AI Agent', render: () => <p>Agent app content</p> },
      { id: 'inspector', label: 'Inspector panel', render: () => <button onClick={() => setActive(null)}>Close inspector</button> },
    ]}
    header={{ actions: [{ id: 'inspect', label: 'Inspector', iconType: 'inspect', sidebarAppId: 'inspector' }] }} />;
}

describe('controlled sidebar apps', () => {
  it('shows one app, derives linked button state/ARIA and only accents the open agent app', () => {
    render(<EuiProvider><Apps /></EuiProvider>);
    const agent = screen.getByRole('button', { name: 'AI Agent' });
    const inspector = screen.getByRole('button', { name: 'Inspector' });
    expect(agentVariant()).toBe('base');
    expect(vi.mocked(AiButton).mock.calls.at(-1)?.[0].color).toBeUndefined();
    expect(screen.queryByRole('complementary')).toBeNull();
    expect(inspector.getAttribute('aria-expanded')).toBe('false');
    fireEvent.click(agent);
    expect(agentVariant()).toBe('accent');
    expect(screen.getAllByRole('complementary')).toHaveLength(1);
    expect(agent.getAttribute('aria-controls')).toBe(screen.getByRole('complementary').id);
    fireEvent.click(inspector);
    expect(agentVariant()).toBe('base');
    expect(agent.getAttribute('aria-expanded')).toBe('false');
    expect(agent.hasAttribute('aria-controls')).toBe(false);
    expect(inspector.getAttribute('aria-expanded')).toBe('true');
    expect(inspector.getAttribute('aria-pressed')).toBe('true');
    expect(inspector.getAttribute('aria-controls')).toBe(screen.getByRole('complementary').id);
    expect(screen.getAllByRole('complementary')).toHaveLength(1);
    expect(screen.queryByText('Agent app content')).toBeNull();
    fireEvent.click(inspector);
    expect(screen.queryByRole('complementary')).toBeNull();
    expect(inspector.getAttribute('aria-pressed')).toBe('false');
  });
  it('keeps resize behavior for non-agent apps and host close controls', () => {
    render(<EuiProvider><Apps /></EuiProvider>);
    fireEvent.click(screen.getByRole('button', { name: 'Inspector' }));
    const resize = screen.getByLabelText('Resize side panel. Use left and right arrow keys to adjust width.');
    const initial = Number(resize.getAttribute('aria-valuenow'));
    fireEvent.keyDown(resize, { key: 'ArrowLeft' });
    expect(Number(resize.getAttribute('aria-valuenow'))).toBe(initial + 10);
    fireEvent.click(screen.getByRole('button', { name: 'AI Agent' }));
    expect(Number(screen.getByLabelText('Resize side panel. Use left and right arrow keys to adjust width.').getAttribute('aria-valuenow'))).toBe(initial + 10);
    fireEvent.click(screen.getByRole('button', { name: 'Inspector' }));
    fireEvent.click(screen.getByRole('button', { name: 'Close inspector' }));
    expect(screen.queryByRole('complementary')).toBeNull();
  });
  it('keeps the legacy agent prop and children working with its callback', () => {
    const change = vi.fn();
    function Legacy() {
      const [open, setOpen] = useState(false);
      return <KibanaChrome agent={{ open, onOpenChange: next => { change(next); setOpen(next); }, children: <p>Legacy chat content</p> }} />;
    }
    render(<EuiProvider><Legacy /></EuiProvider>);
    fireEvent.click(screen.getByRole('button', { name: 'AI Agent' }));
    expect(change).toHaveBeenLastCalledWith(true);
    expect(screen.getByText('Legacy chat content')).toBeTruthy();
    expect(agentVariant()).toBe('accent');
    fireEvent.click(screen.getByRole('button', { name: 'Close AI Agent' }));
    expect(change).toHaveBeenLastCalledWith(false);
    expect(screen.queryByRole('complementary')).toBeNull();
    expect(agentVariant()).toBe('base');
  });
  it('notifies the legacy agent when a controlled custom app replaces it', () => {
    const change = vi.fn();
    function Mixed() {
      const [active, setActive] = useState<string | null>('agent');
      const [open, setOpen] = useState(true);
      return <KibanaChromeLayout activeSidebarApp={active} onActiveSidebarAppChange={setActive}
        agent={{ open, onOpenChange: next => { change(next); setOpen(next); } }}
        sidebarApps={[{ id: 'inspect', render: () => <p>Mixed inspector</p> }]}
        header={{ actions: [{ id: 'inspect', label: 'Inspector', iconType: 'inspect', sidebarAppId: 'inspect' }] }} />;
    }
    render(<EuiProvider><Mixed /></EuiProvider>);
    fireEvent.click(screen.getByRole('button', { name: 'Inspector' }));
    expect(change).toHaveBeenLastCalledWith(false);
    expect(screen.getByText('Mixed inspector')).toBeTruthy();
    expect(agentVariant()).toBe('base');
    fireEvent.click(screen.getByRole('button', { name: 'AI Agent' }));
    expect(change).toHaveBeenLastCalledWith(true);
    expect(screen.queryByText('Mixed inspector')).toBeNull();
    expect(agentVariant()).toBe('accent');
  });
  it('requires host updates and does not open unknown IDs or render inactive apps', () => {
    const change = vi.fn(), renderApp = vi.fn(() => <p>Inactive</p>);
    render(<EuiProvider><KibanaChromeLayout sidebarApps={[{ id: 'inspect', render: renderApp }]} activeSidebarApp="unknown"
      onActiveSidebarAppChange={change} header={{ actions: [{ id: 'inspect', label: 'Inspector', iconType: 'inspect', sidebarAppId: 'inspect' }] }} /></EuiProvider>);
    expect(renderApp).not.toHaveBeenCalled();
    expect(screen.queryByRole('complementary')).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: 'Inspector' }));
    expect(change).toHaveBeenCalledWith('inspect');
    expect(screen.queryByRole('complementary')).toBeNull();
  });
});

describe('header logo', () => {
  it('stays a plain mark when no href or onClick is supplied', () => {
    render(<EuiProvider><KibanaChromeLayout /></EuiProvider>);
    expect(screen.queryByRole('link', { name: 'Elastic home' })).toBeNull();
    expect(screen.queryByRole('button', { name: 'Elastic home' })).toBeNull();
    expect(screen.getByRole('img', { name: 'Elastic' })).toBeTruthy();
  });
  it('links home and hands ordinary clicks to the host router', () => {
    const onClick = vi.fn();
    render(<EuiProvider><KibanaChromeLayout logo={{ href: '/', onClick }} /></EuiProvider>);
    const link = screen.getByRole('link', { name: 'Elastic home' });
    expect(link.getAttribute('href')).toBe('/');
    expect(fireEvent.click(link)).toBe(false);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(fireEvent.click(link, { metaKey: true })).toBe(true);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it('renders a labelled button when only onClick is supplied', () => {
    const onClick = vi.fn();
    render(<EuiProvider><KibanaChromeLayout logo={{ onClick, label: 'Back to prototype hub' }} /></EuiProvider>);
    fireEvent.click(screen.getByRole('button', { name: 'Back to prototype hub' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
