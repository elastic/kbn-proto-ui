import type { TabItem } from './types';
interface ReplicaTabProps {
    item: TabItem;
    selected: boolean;
    contentId: string;
    unsaved?: boolean;
    hideSeparator: boolean;
    canClose: boolean;
    canRename: boolean;
    onSelect: () => void;
    onClose: () => void;
    onRename: (label: string) => void;
    onNavigate: (key: string) => void;
}
export declare function ReplicaTab({ item, selected, contentId, unsaved, hideSeparator, canClose, canRename, onSelect, onClose, onRename, onNavigate }: ReplicaTabProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
