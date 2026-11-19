import type { ReactElement, ReactNode } from 'react';
export interface TabItem {
    id: string;
    label: string;
    duplicatedFromId?: string;
    restoredFromId?: string;
    customMenuButton?: React.JSX.Element;
}
export interface TabbedContentState {
    items: TabItem[];
    selectedItem: TabItem | null;
}
/** Supported service-independent subset of Kibana's UnifiedTabsProps. */
export interface KibanaTabsProps {
    items: TabItem[];
    selectedItemId?: string;
    'data-test-subj'?: string;
    hideTabsBar?: boolean;
    renderContent?: (selectedItem: TabItem) => ReactNode;
    wrapTabsBar?: (tabsBar: ReactNode) => ReactNode;
    createItem: () => TabItem;
    customNewTabButton?: ReactElement;
    onChanged: (state: TabbedContentState) => void;
    tabContentIdOverride?: string;
    appendRight?: ReactNode;
    unsavedItemIds?: string[];
    disableCloseButton?: boolean;
    disableInlineLabelEditing?: boolean;
    disableTabsBarMenu?: boolean;
}
