import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { EuiBadge, EuiProvider } from '@elastic/eui';
import { describe, expect, it, vi } from 'vitest';
import { KibanaHeader } from '../src/replicas/KibanaHeader';
import { KibanaProjectPicker } from '../src/replicas/KibanaProjectPicker';
import type { KibanaHeaderProps } from '../src/replicas/KibanaHeader';

const show = (props: KibanaHeaderProps = {}) => render(<EuiProvider><KibanaHeader {...props} /></EuiProvider>);

describe('global header slots', () => {
  it('keeps the default space button, solution logo, callback and disabled behavior', async () => {
    const click = vi.fn();
    const { container, unmount } = show({ spaceName: 'Production', solution: 'security', onSpaceClick: click });
    fireEvent.click(screen.getByRole('button', { name: 'Production' }));
    expect(click).toHaveBeenCalledOnce();
    await waitFor(() => expect(container.querySelector('[data-icon-type="logoSecurity"]')).toBeTruthy());
    unmount(); show();
    expect((screen.getByRole('button', { name: 'Default' }) as HTMLButtonElement).disabled).toBe(true);
  });

  it('replaces only the switcher and preserves slot/breadcrumb/right-group order', () => {
    const { container } = show({ switcher: <button>ACME Corp</button>,
      projectPicker: <KibanaProjectPicker selected={31} total={435} />,
      subscriptionBadge: <EuiBadge>Trial</EuiBadge>, breadcrumbs: [{ text: 'Discover' }],
      onAgentClick: () => {}, trailing: <button>Trailing</button>, afterUserMenu: <button>Prototype tools</button> });
    expect(screen.queryByRole('button', { name: 'Default' })).toBeNull();
    const ordered = ['ACME Corp', 'Cross-project search scope selector: 31/435', 'Help', 'AI Agent', 'Trailing', 'User menu: Elastic User', 'Prototype tools'];
    const buttons = screen.getAllByRole('button');
    expect(ordered.map(name => buttons.indexOf(screen.getByRole('button', { name })))).toEqual([...ordered.keys()]);
    const switcher = container.querySelector('[data-test-subj="kibanaHeaderSwitcher"]')!;
    const picker = container.querySelector('[data-test-subj="kibanaHeaderProjectPicker"]')!;
    const badge = container.querySelector('[data-test-subj="kibanaHeaderSubscriptionBadge"]')!;
    expect(switcher.compareDocumentPosition(picker) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(picker.compareDocumentPosition(badge) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(badge.compareDocumentPosition(screen.getByText('Discover')) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  it.each([
    [undefined, undefined, 2], [<span>Picker</span>, undefined, 2],
    [undefined, <span>Badge</span>, 2], [<span>Picker</span>, <span>Badge</span>, 3],
  ])('only adds the picker/badge divider when both slots exist', (projectPicker, subscriptionBadge, count) => {
    const { container } = show({ projectPicker, subscriptionBadge });
    expect(container.querySelectorAll('[data-test-subj="kibanaHeaderSeparator"]')).toHaveLength(count as number);
    for (const divider of container.querySelectorAll('[data-test-subj="kibanaHeaderSeparator"]')) expect(divider.getAttribute('aria-hidden')).toBe('true');
  });

  it('allows an explicitly empty switcher without restoring the fallback or its divider', () => {
    const { container } = show({ switcher: null, projectPicker: null, subscriptionBadge: null });
    expect(screen.queryByRole('button', { name: 'Default' })).toBeNull();
    expect(container.querySelector('[data-test-subj="kibanaHeaderSwitcher"]')).toBeNull();
    expect(container.querySelectorAll('[data-test-subj="kibanaHeaderSeparator"]')).toHaveLength(1);
  });

  it('keeps search, help, agent, theme, trailing and user callbacks in their existing positions', () => {
    const search = vi.fn(), submit = vi.fn(), help = vi.fn(), agent = vi.fn(), theme = vi.fn(), user = vi.fn();
    show({ onSearchChange: search, onSearchSubmit: submit, onHelpClick: help, onAgentClick: agent,
      onToggleColorMode: theme, onUserClick: user, trailing: <button>Host trailing</button>, afterUserMenu: <button>Host after</button> });
    fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'logs' } });
    fireEvent.submit(screen.getByRole('search'));
    expect(search).toHaveBeenCalledWith('logs'); expect(submit).toHaveBeenCalledWith('logs');
    fireEvent.click(screen.getByRole('button', { name: 'Help' })); expect(help).toHaveBeenCalledOnce();
    fireEvent.click(screen.getByRole('button', { name: 'AI Agent' })); expect(agent).toHaveBeenCalledOnce();
    fireEvent.click(screen.getByRole('button', { name: 'Switch to dark mode' })); expect(theme).toHaveBeenCalledOnce();
    fireEvent.click(screen.getByRole('button', { name: 'User menu: Elastic User' })); expect(user).toHaveBeenCalledOnce();
    const names = screen.getAllByRole('button').map(button => button.getAttribute('aria-label') || button.textContent);
    expect(names.slice(-4)).toEqual(['Switch to dark mode', 'Host trailing', 'User menu: Elastic User', 'Host after']);
  });
});

describe('KibanaProjectPicker', () => {
  it.each([[31, 435, '31/435'], [1500, 2500000, '2k/3m'], [435, 435, 'All'], [0, 435, '0/435'], [0, 0, '0/0']])(
    'formats selected=%s total=%s as %s, with the appropriate button state', async (selected, total, label) => {
      const { container } = render(<EuiProvider><KibanaProjectPicker selected={selected} total={total} /></EuiProvider>);
      expect(screen.getByRole('button', { name: `Cross-project search scope selector: ${label}` }).textContent).toBe(label);
      const button = screen.getByRole('button');
      expect(button.classList.contains('euiButtonEmpty')).toBe(selected !== 0);
      await waitFor(() => expect(container.querySelector('svg path')).toBeTruthy());
    });

  it('uses the custom tooltip for the accessible label and calls the host action', () => {
    const click = vi.fn();
    render(<EuiProvider><KibanaProjectPicker selected={1} total={3} onClick={click} tooltip="Choose projects" /></EuiProvider>);
    fireEvent.click(screen.getByRole('button', { name: 'Choose projects: 1/3' }));
    expect(click).toHaveBeenCalledOnce();
  });
});
