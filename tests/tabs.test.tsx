import { useState } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { EuiProvider } from '@elastic/eui';
import { describe, expect, it, vi } from 'vitest';
import { KibanaTabs } from '../src/rebuilt/unified-tabs/KibanaTabs';
import { ChromeAppHeader } from '../src/rebuilt/app-header/ChromeAppHeader';
import type { KibanaTabsProps, TabbedContentState } from '../src/rebuilt/unified-tabs/types';

const items = [{ id: 'a', label: 'First' }, { id: 'b', label: 'Second' }, { id: 'c', label: 'Third' }];
const show = (props: Partial<KibanaTabsProps> = {}) => {
  const onChanged = vi.fn(); const createItem = vi.fn(() => ({ id: 'new', label: 'New tab' }));
  const view = render(<EuiProvider><KibanaTabs items={items} onChanged={onChanged} createItem={createItem} {...props} /></EuiProvider>);
  return { ...view, onChanged, createItem };
};

function Controlled({ onChanged = () => {}, ...props }: Partial<KibanaTabsProps>) {
  const [state, setState] = useState<TabbedContentState>({ items, selectedItem: items[0] });
  return <KibanaTabs {...props} items={state.items} selectedItemId={state.selectedItem?.id}
    createItem={() => ({ id: 'new', label: 'New tab' })}
    onChanged={next => { onChanged(next); setState(next); }} />;
}

describe('KibanaTabs', () => {
  it('falls back to the first item and connects the active panel to its tab', () => {
    show({ selectedItemId: 'missing', tabContentIdOverride: 'content', renderContent: item => <p>Content: {item.label}</p> });
    const tab = screen.getByRole('tab', { name: 'First' }); const panel = screen.getByRole('tabpanel');
    expect(tab.getAttribute('aria-selected')).toBe('true');
    expect(panel.id).toBe(tab.getAttribute('aria-controls'));
    expect(panel.getAttribute('aria-labelledby')).toBe(tab.id);
    expect(panel.textContent).toBe('Content: First');
  });

  it('reports the upstream state shape without changing controlled props', () => {
    const { onChanged } = show({ selectedItemId: 'a' });
    fireEvent.click(screen.getByRole('tab', { name: 'Second' }));
    expect(onChanged).toHaveBeenCalledExactlyOnceWith({ items, selectedItem: items[1] });
    expect(screen.getByRole('tab', { name: 'First' }).getAttribute('aria-selected')).toBe('true');
  });

  it('uses createItem for + and selects the new item', () => {
    const { onChanged, createItem } = show();
    fireEvent.click(screen.getByRole('button', { name: 'New tab' }));
    expect(createItem).toHaveBeenCalledOnce();
    expect(onChanged).toHaveBeenCalledExactlyOnceWith({ items: [...items, { id: 'new', label: 'New tab' }], selectedItem: { id: 'new', label: 'New tab' } });
  });

  it.each([['a', 'b'], ['b', 'c'], ['c', 'b']])('closing selected %s selects neighbor %s', (selectedItemId, next) => {
    const { container, onChanged } = show({ selectedItemId });
    fireEvent.click(container.querySelector(`[data-test-subj="unifiedTabs_closeTabBtn_${selectedItemId}"]`)!);
    expect(onChanged).toHaveBeenCalledExactlyOnceWith({ items: items.filter(item => item.id !== selectedItemId), selectedItem: items.find(item => item.id === next) });
  });

  it('preserves the selected item when closing a different tab; protects the last tab', () => {
    const { container, onChanged, unmount } = show({ selectedItemId: 'a' });
    fireEvent.click(container.querySelector('[data-test-subj="unifiedTabs_closeTabBtn_b"]')!);
    expect(onChanged.mock.calls[0][0].selectedItem).toEqual(items[0]);
    unmount(); show({ items: [items[0]] });
    expect(screen.queryByRole('button', { name: 'Close tab' })).toBeNull();
  });

  it('supports roving keyboard selection and focus, including newly created tabs', async () => {
    render(<EuiProvider><Controlled renderContent={item => item.label} /></EuiProvider>);
    fireEvent.keyDown(screen.getByRole('tab', { name: 'First' }), { key: 'ArrowRight' });
    expect(document.activeElement).toBe(screen.getByRole('tab', { name: 'Second' }));
    expect(screen.getByRole('tabpanel').textContent).toBe('Second');
    fireEvent.keyDown(document.activeElement!, { key: 'End' });
    expect(document.activeElement).toBe(screen.getByRole('tab', { name: 'Third' }));
    fireEvent.keyDown(document.activeElement!, { key: 'Home' });
    expect(document.activeElement).toBe(screen.getByRole('tab', { name: 'First' }));
    fireEvent.click(screen.getByRole('button', { name: 'New tab' }));
    await waitFor(() => expect(document.activeElement).toBe(screen.getByRole('tab', { name: 'New tab' })));
  });

  it('renames with trimmed Enter once and cancels with Escape', async () => {
    const changed = vi.fn();
    render(<EuiProvider><Controlled onChanged={changed} /></EuiProvider>);
    fireEvent.doubleClick(screen.getByRole('tab', { name: 'First' }));
    const input = await screen.findByRole('textbox', { name: 'Rename tab' });
    fireEvent.change(input, { target: { value: '  Renamed  ' } });
    fireEvent.keyDown(input, { key: 'Enter' }); fireEvent.blur(input);
    expect(changed).toHaveBeenCalledExactlyOnceWith({ items: [{ id: 'a', label: 'Renamed' }, ...items.slice(1)], selectedItem: { id: 'a', label: 'Renamed' } });
    fireEvent.doubleClick(screen.getByRole('tab', { name: 'Renamed' }));
    await screen.findByRole('textbox');
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Cancel' } });
    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Escape' });
    expect(screen.getByRole('tab', { name: 'Renamed' })).toBeTruthy(); expect(changed).toHaveBeenCalledOnce();
  });

  it('validates empty/long labels and commits a valid rename on blur', async () => {
    const changed = vi.fn(); render(<EuiProvider><Controlled onChanged={changed} /></EuiProvider>);
    fireEvent.doubleClick(screen.getByRole('tab', { name: 'First' }));
    const input = await screen.findByRole('textbox');
    for (const value of [' ', 'a'.repeat(121)]) {
      fireEvent.change(input, { target: { value } }); fireEvent.keyDown(input, { key: 'Enter' });
      expect(input.getAttribute('aria-invalid')).toBe('true');
    }
    expect(changed).not.toHaveBeenCalled();
    fireEvent.change(input, { target: { value: 'Blur name' } }); fireEvent.blur(input);
    expect(screen.getByRole('tab', { name: 'Blur name' })).toBeTruthy();
  });

  it('offers renaming from the action popover and selection from the open-tabs menu', async () => {
    render(<EuiProvider><Controlled /></EuiProvider>);
    fireEvent.click(screen.getAllByRole('button', { name: 'Actions' })[1]);
    fireEvent.click(await screen.findByRole('menuitem', { name: 'Rename' }));
    const editor = await screen.findByRole('textbox', { name: 'Rename tab' });
    expect(document.activeElement).toBe(editor);
    expect(screen.getByRole('tab', { name: 'Second' }).getAttribute('aria-selected')).toBe('true');
    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Escape' });
    fireEvent.click(screen.getByRole('button', { name: 'Tabs menu' }));
    fireEvent.click(await screen.findByRole('menuitem', { name: 'Second' }));
    expect(screen.getByRole('tab', { name: 'Second' }).getAttribute('aria-selected')).toBe('true');
  });

  it('honors disabled basic behaviors, custom buttons, unsaved markers and appendRight', () => {
    show({ disableCloseButton: true, disableInlineLabelEditing: true, disableTabsBarMenu: true,
      customNewTabButton: <button>Host create</button>, unsavedItemIds: ['a'], appendRight: <button>Append action</button> });
    for (const name of ['Close tab', 'Actions', 'Tabs menu', 'New tab']) expect(screen.queryByRole('button', { name })).toBeNull();
    fireEvent.doubleClick(screen.getByRole('tab', { name: 'First' })); expect(screen.queryByRole('textbox')).toBeNull();
    expect(screen.getByLabelText('Unsaved changes')).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Host create' })).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Append action' })).toBeTruthy();
  });

  it('passes the actual bar into titleAppend and keeps content outside the header', () => {
    show({ renderContent: item => <p>Page {item.label}</p>, wrapTabsBar: bar => <ChromeAppHeader title="Discover" titleAppend={bar} borderless sticky={false} /> });
    const header = screen.getByRole('heading', { name: 'Discover' }).closest('[data-test-subj="kibanaPageHeader"]')!;
    expect(header.contains(screen.getByRole('tablist'))).toBe(true);
    expect(header.contains(screen.getByRole('tabpanel'))).toBe(false);
  });

  it('calls the wrapper with null for hideTabsBar and renders no panel for empty items', () => {
    const wrap = vi.fn(() => <h1>Header remains</h1>);
    show({ items: [], hideTabsBar: true, wrapTabsBar: wrap, renderContent: () => <p>Absent content</p> });
    expect(wrap).toHaveBeenCalledWith(null);
    expect(screen.getByRole('heading', { name: 'Header remains' })).toBeTruthy();
    expect(screen.queryByRole('tablist')).toBeNull(); expect(screen.queryByRole('tabpanel')).toBeNull();
  });
});
