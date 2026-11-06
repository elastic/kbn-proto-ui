import type { ReactNode } from 'react';
import { KibanaTabs, type KibanaTabsProps, type TabItem, type TabbedContentState } from '../dist/index';

const item: TabItem = { id: 'one', label: 'First', duplicatedFromId: 'original', restoredFromId: 'closed' };
let state: TabbedContentState = { items: [item], selectedItem: item };
const props: KibanaTabsProps = {
  items: state.items, selectedItemId: state.selectedItem?.id,
  createItem: () => item, onChanged: next => { state = next; },
  renderContent: selected => selected.label, wrapTabsBar: (bar: ReactNode) => bar,
  hideTabsBar: false, unsavedItemIds: [item.id], tabContentIdOverride: 'content',
  disableCloseButton: false, disableInlineLabelEditing: false, disableTabsBarMenu: false,
};
void KibanaTabs; void props;
// @ts-expect-error Kibana TabItem uses label, not the host's title field
const wrongItem: TabItem = { id: 'one', title: 'First' };
// @ts-expect-error onChanged receives a state object, not an ID
const wrongChange: KibanaTabsProps['onChanged'] = (id: string) => {};
// @ts-expect-error the tab ID is selectedItemId, not activeTabId
const wrongSelection: KibanaTabsProps = { ...props, activeTabId: 'one' };
// @ts-expect-error services are deliberately outside this standalone subset
const unsupported: KibanaTabsProps = { ...props, services: {} };
void wrongItem; void wrongChange; void wrongSelection; void unsupported;
