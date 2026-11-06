import { useState } from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { EuiProvider } from '@elastic/eui';
import { describe, expect, it, vi } from 'vitest';
import { KibanaPageHeader } from '../src/replicas/page-header/KibanaPageHeader';
import type { KibanaPageHeaderProps } from '../src/replicas/page-header/types';

const show = (props: KibanaPageHeaderProps) => render(<EuiProvider><KibanaPageHeader {...props} /></EuiProvider>);

describe('Kibana page header', () => {
  it('renders a title, explicit back target, data badges and host titleAppend', () => {
    const back = vi.fn(event => event.preventDefault());
    const badge = vi.fn();
    show({ title: 'Web traffic', back: { href: '/dashboards', label: 'Dashboards', onClick: back },
      badges: [{ label: 'Beta', color: 'hollow', onClick: badge }], titleAppend: <button>Host tab bar</button> });
    expect(screen.getByRole('heading', { name: 'Web traffic' })).toBeTruthy();
    const link = screen.getByRole('link', { name: 'Back to Dashboards' });
    expect(link.getAttribute('href')).toBe('/dashboards');
    fireEvent.click(link); expect(back).toHaveBeenCalledOnce();
    fireEvent.click(screen.getByRole('button', { name: 'Click Beta badge' })); expect(badge).toHaveBeenCalledOnce();
    expect(screen.getByRole('button', { name: 'Host tab bar' })).toBeTruthy();
  });

  it('saves a trimmed inline rename once, including the blur after Enter', async () => {
    const save = vi.fn();
    function Editable() {
      const [text, setText] = useState('Traffic');
      return <KibanaPageHeader title={{ text, ariaLabel: 'Edit dashboard name', onSave: value => { save(value); setText(value); } }} />;
    }
    render(<EuiProvider><Editable /></EuiProvider>);
    fireEvent.click(screen.getByRole('button', { name: 'Edit dashboard name' }));
    const input = screen.getByRole('textbox', { name: 'Edit dashboard name' });
    fireEvent.change(input, { target: { value: '  New traffic  ' } });
    fireEvent.keyDown(input, { key: 'Enter' }); fireEvent.blur(input);
    await waitFor(() => expect(screen.queryByRole('textbox')).toBeNull());
    expect(save).toHaveBeenCalledExactlyOnceWith('New traffic');
    expect(screen.getByRole('heading', { name: 'New traffic' })).toBeTruthy();
  });

  it('keeps rename errors inline and supports Escape without saving', async () => {
    const save = vi.fn().mockResolvedValue('That name exists');
    show({ title: { text: 'Traffic', onSave: save } });
    fireEvent.click(screen.getByRole('button', { name: 'Edit title' }));
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '   ' } });
    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Enter' });
    expect(screen.getByRole('alert').textContent).toBe('Title cannot be empty.');
    expect(save).not.toHaveBeenCalled();
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Taken' } });
    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Enter' });
    await waitFor(() => expect(screen.getByRole('alert').textContent).toBe('That name exists'));
    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Escape' });
    expect(screen.queryByRole('textbox')).toBeNull();
    expect(screen.getByRole('heading', { name: 'Traffic' })).toBeTruthy();
  });

  it('catches a rejected rename and disables the editor during save', async () => {
    let reject!: (reason: Error) => void;
    show({ title: { text: 'Traffic', onSave: () => new Promise((_resolve, rejectSave) => { reject = rejectSave; }) } });
    fireEvent.click(screen.getByRole('button', { name: 'Edit title' }));
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Changed' } });
    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Enter' });
    expect((screen.getByRole('textbox') as HTMLInputElement).disabled).toBe(true);
    await act(async () => reject(new Error('Network failure')));
    expect(screen.getByRole('alert').textContent).toBe('Enter a valid title.');
    expect((screen.getByRole('textbox') as HTMLInputElement).disabled).toBe(false);
  });

  it('passes focus-return context to share and honors favorite status', () => {
    const share = vi.fn(); const favorite = vi.fn();
    show({ title: 'Traffic', share: { onClick: share }, favorite: { status: 'favorited', onToggle: favorite } });
    const button = screen.getByRole('button', { name: 'Share' }); fireEvent.click(button);
    expect(share.mock.calls[0][0].returnFocus).toBeTypeOf('function');
    share.mock.calls[0][0].returnFocus(); expect(document.activeElement).toBe(button);
    fireEvent.click(screen.getByRole('button', { name: 'Remove from Starred' }));
    expect(favorite).toHaveBeenCalledOnce();
  });

  it('renders description and learn-more link, or typed metadata', () => {
    const view = show({ title: 'Traffic', description: { text: 'Requests over time', learnMoreUrl: 'https://example.com/docs' } });
    expect(screen.getByRole('link', { name: /Learn more/ }).getAttribute('href')).toBe('https://example.com/docs');
    const details = vi.fn();
    view.rerender(<EuiProvider><KibanaPageHeader title="Traffic" metadata={[
      { type: 'text', label: 'Created by', value: 'Andrea' },
      { type: 'button', label: 'Details', onClick: details }, { type: 'health', label: 'Healthy', color: 'success' },
    ]} /></EuiProvider>);
    expect(screen.queryByText('Requests over time')).toBeNull();
    expect(screen.getByText('Andrea')).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: 'Details' })); expect(details).toHaveBeenCalledOnce();
    expect(screen.getByText('Healthy')).toBeTruthy();
  });

  it('sorts menu items, forces overflow, invokes actions and restores focus to More', async () => {
    const run = vi.fn();
    show({ title: 'Traffic', menu: { items: [
      { id: 'later', label: 'Later', iconType: 'clock', order: 2, run },
      { id: 'first', label: 'First', iconType: 'copy', order: 1, run },
      { id: 'archive', label: 'Archive', iconType: 'folderClosed', overflow: true, order: 0, run },
    ] } });
    const buttons = screen.getAllByRole('button').map(button => button.textContent);
    expect(buttons.indexOf('First')).toBeLessThan(buttons.indexOf('Later'));
    expect(screen.queryByRole('button', { name: 'Archive' })).toBeNull();
    const more = screen.getByRole('button', { name: 'More' }); fireEvent.click(more);
    fireEvent.click(await screen.findByRole('button', { name: 'Archive' }));
    expect(run).toHaveBeenCalledOnce();
    await waitFor(() => expect(screen.queryByRole('button', { name: 'Archive' })).toBeNull());
    run.mock.calls[0][0].returnFocus(); expect(document.activeElement).toBe(more);
  });

  it('uses the three-slot limit and preserves nested popovers and disabled callbacks', async () => {
    const run = vi.fn();
    show({ title: 'Traffic', menu: { items: [
      { id: 'disabled', label: 'Unavailable', iconType: 'lock', disableButton: () => true, run },
      { id: 'nested', label: 'Export', iconType: 'exportAction', items: [{ id: 'csv', label: 'CSV', run }] },
      { id: 'third', label: 'Third', iconType: 'copy', run }, { id: 'fourth', label: 'Fourth', iconType: 'copy', run },
    ] } });
    expect((screen.getByRole('button', { name: 'Unavailable' }) as HTMLButtonElement).disabled).toBe(true);
    fireEvent.click(screen.getByRole('button', { name: 'Export' }));
    fireEvent.click(await screen.findByRole('button', { name: 'CSV' })); expect(run).toHaveBeenCalledOnce();
    fireEvent.click(screen.getByRole('button', { name: 'More' }));
    expect(await screen.findByRole('button', { name: 'Third' })).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Fourth' })).toBeTruthy();
  });

  it('supports the primary action and one checked switch', () => {
    const run = vi.fn(); const change = vi.fn();
    show({ menu: { primaryActionItem: { id: 'edit', label: 'Edit', iconType: 'pencil', run },
      switch: { id: 'live', label: 'Live', checked: false, onChange: change } } });
    fireEvent.click(screen.getByRole('button', { name: 'Edit' }));
    expect(run.mock.calls[0][0].triggerElement).toBeInstanceOf(HTMLElement);
    fireEvent.click(screen.getByRole('switch', { name: 'Live' })); expect(change).toHaveBeenCalledWith(true);
  });

  it('keeps split-button primary and secondary actions independent', async () => {
    const save = vi.fn(); const saveAs = vi.fn();
    show({ menu: { primaryActionItem: { id: 'save', label: 'Save', iconType: 'save', run: save,
      splitButtonProps: { secondaryButtonAriaLabel: 'Save options', items: [{ id: 'save-as', label: 'Save as', run: saveAs }] } } } });
    fireEvent.click(screen.getByRole('button', { name: 'Save' })); expect(save).toHaveBeenCalledOnce();
    fireEvent.click(screen.getByRole('button', { name: 'Save options' })); expect(save).toHaveBeenCalledOnce();
    fireEvent.click(await screen.findByRole('button', { name: 'Save as' })); expect(saveAs).toHaveBeenCalledOnce();
    await waitFor(() => expect(screen.queryByRole('button', { name: 'Save as' })).toBeNull());
    saveAs.mock.calls[0][0].returnFocus();
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'Save options' }));
  });

  it('supports split-button secondary run and independent disabled states', () => {
    const primary = vi.fn(); const secondary = vi.fn();
    show({ menu: { primaryActionItem: { id: 'save', label: 'Save', iconType: 'save', run: primary,
      splitButtonProps: { secondaryButtonAriaLabel: 'Save options', run: secondary, isMainButtonDisabled: true } } } });
    expect((screen.getByRole('button', { name: 'Save' }) as HTMLButtonElement).disabled).toBe(true);
    fireEvent.click(screen.getByRole('button', { name: 'Save options' })); expect(secondary).toHaveBeenCalledOnce(); expect(primary).not.toHaveBeenCalled();
  });

  it('renders data tabs with count/icon badges, disabled states and selection callbacks', () => {
    const select = vi.fn();
    show({ tabs: [
      { id: 'overview', label: 'Overview', isSelected: true, badge: 3, onClick: select },
      { id: 'details', label: 'Details', href: '/details', badge: { iconType: 'dot', color: 'primary' } },
      { id: 'blocked', label: 'Blocked', disabled: true, onClick: select },
    ] });
    expect(screen.getByRole('tab', { name: /Overview/ }).getAttribute('aria-selected')).toBe('true');
    expect(screen.getByRole('tab', { name: 'Details' }).getAttribute('href')).toBe('/details');
    fireEvent.click(screen.getByRole('tab', { name: /Overview/ })); expect(select).toHaveBeenCalledOnce();
    expect((screen.getByRole('tab', { name: 'Blocked' }) as HTMLButtonElement).disabled).toBe(true);
  });

  it('supports primary popover actions, including a split-button primary popover', async () => {
    const choose = vi.fn(); const secondary = vi.fn();
    show({ menu: { primaryActionItem: { id: 'create', label: 'Create', iconType: 'plusInCircle',
      items: [{ id: 'dashboard', label: 'Dashboard', run: choose }],
      splitButtonProps: { secondaryButtonAriaLabel: 'Other create options', run: secondary } } } });
    fireEvent.click(screen.getByRole('button', { name: 'Other create options' })); expect(secondary).toHaveBeenCalledOnce();
    fireEvent.click(screen.getByRole('button', { name: 'Create' }));
    fireEvent.click(await screen.findByRole('button', { name: 'Dashboard' })); expect(choose).toHaveBeenCalledOnce();
  });

  it('preserves native modified links and only intercepts ordinary links with a run handler', () => {
    const run = vi.fn();
    show({ menu: { items: [{ id: 'open', label: 'Open', iconType: 'folderOpen', href: '/other', run }] } });
    const link = screen.getByRole('link', { name: 'Open' });
    const preventNavigation = (event: Event) => event.preventDefault();
    document.addEventListener('click', preventNavigation);
    fireEvent.click(link, { ctrlKey: true }); expect(run).not.toHaveBeenCalled();
    fireEvent.click(link); expect(run).toHaveBeenCalledOnce();
    document.removeEventListener('click', preventNavigation);
  });

  it('supports badge overflow and nested badge menu actions', async () => {
    const run = vi.fn();
    show({ title: 'Traffic', badges: [
      { label: 'Space', items: [{ name: 'Manage', items: [{ name: 'Settings', onClick: run }] }] },
      { label: 'Saved' }, { label: 'Beta' }, { label: 'Managed' },
    ] });
    fireEvent.click(screen.getByRole('button', { name: 'Show 2 more badges' }));
    expect(await screen.findByText('Managed')).toBeTruthy();
    fireEvent.keyDown(document, { key: 'Escape' });
    fireEvent.click(screen.getByRole('button', { name: 'Click Space badge' }));
    fireEvent.click(await screen.findByRole('button', { name: 'Manage' }));
    fireEvent.click(await screen.findByRole('button', { name: 'Settings' })); expect(run).toHaveBeenCalledOnce();
  });

  it('disables a pending favorite and an explicitly disabled share', () => {
    const toggle = vi.fn(); const share = vi.fn();
    show({ title: 'Traffic', favorite: { status: 'adding', onToggle: toggle }, share: { onClick: share, isDisabled: true } });
    fireEvent.click(screen.getByRole('button', { name: 'Add to Starred' }));
    fireEvent.click(screen.getByRole('button', { name: 'Share' }));
    expect(toggle).not.toHaveBeenCalled(); expect(share).not.toHaveBeenCalled();
  });

  it('drops undeclared JSX fields instead of spreading them into EUI', () => {
    const props = { title: 'Traffic', children: <span>Injected child</span>, badges: [{ label: <b>Injected badge</b>, renderCustomBadge: () => <b>Injected custom</b> }] } as unknown as KibanaPageHeaderProps;
    show(props);
    expect(screen.queryByText('Injected child')).toBeNull();
    expect(screen.queryByText('Injected badge')).toBeNull();
    expect(screen.queryByText('Injected custom')).toBeNull();
  });
});
