import type { ReactNode } from 'react';
export interface AgentAttachment {
    title: string;
    iconType?: string;
}
export interface AgentMessage {
    id: string;
    role: 'user' | 'assistant';
    text: string;
}
export interface AgentSidebarProps {
    onClose: () => void;
    attachment?: AgentAttachment;
    messages?: AgentMessage[];
    onSubmit?: (text: string, attachment?: AgentAttachment) => void;
    isResponding?: boolean;
    initialMessage?: string;
    title?: string;
    welcome?: ReactNode;
    connector?: {
        label: string;
        logo?: string;
        onClick?: () => void;
    };
    onNavigationClick?: () => void;
    onMoreClick?: () => void;
    children?: ReactNode;
}
/** UI only. Conversation state and responses belong to the consuming prototype. */
export declare function AgentSidebar({ onClose, attachment, messages, onSubmit, isResponding, initialMessage, title, welcome, connector, onNavigationClick, onMoreClick, children, }: AgentSidebarProps): import("@emotion/react/jsx-runtime").JSX.Element;
