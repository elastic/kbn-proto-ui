import { useRef, useState } from 'react';
import type { ReactNode } from 'react';
import {
  EuiButtonEmpty, EuiButtonIcon, EuiIcon, EuiMarkdownFormat, EuiPanel,
  EuiText, EuiTitle, useEuiTheme,
} from '@elastic/eui';

export interface AgentAttachment { title: string; iconType?: string; }
export interface AgentMessage { id: string; role: 'user' | 'assistant'; text: string; }
export interface AgentSidebarProps {
  onClose: () => void;
  attachment?: AgentAttachment;
  messages?: AgentMessage[];
  onSubmit?: (text: string, attachment?: AgentAttachment) => void;
  isResponding?: boolean;
  initialMessage?: string;
  title?: string;
  welcome?: ReactNode;
  connector?: { label: string; logo?: string; onClick?: () => void };
  onNavigationClick?: () => void;
  onMoreClick?: () => void;
  children?: ReactNode;
}

/** UI only. Conversation state and responses belong to the consuming prototype. */
export function AgentSidebar({
  onClose, attachment, messages = [], onSubmit, isResponding = false, initialMessage = '',
  title = 'New Conversation', welcome, connector, onNavigationClick, onMoreClick, children,
}: AgentSidebarProps) {
  const { euiTheme } = useEuiTheme();
  const [draft, setDraft] = useState(initialMessage);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const send = () => {
    if (!draft.trim() || isResponding || !onSubmit) return;
    onSubmit(draft.trim(), attachment);
    setDraft('');
    inputRef.current?.focus();
  };
  return (
    <div css={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0,
      background: `linear-gradient(${euiTheme.colors.backgroundBasePlain} 21.09%, ${euiTheme.colors.backgroundBaseSubdued} 51.44%, ${euiTheme.colors.backgroundBasePlain} 87.98%)` }}>
      <div css={{ flexShrink: 0, height: 64, padding: 16, display: 'flex', gap: 8, alignItems: 'center' }}>
        <EuiButtonIcon iconType="menu" color="text" aria-label="Open conversation navigation" onClick={onNavigationClick} isDisabled={!onNavigationClick} />
        <div css={{ flex: 1, minWidth: 0 }}>
          <h2 css={{ fontSize: 14, fontWeight: euiTheme.font.weight.medium, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</h2>
          <EuiText size="xs" color="subdued">Elastic AI Agent</EuiText>
        </div>
        <EuiButtonIcon iconType="boxesVertical" size="s" color="text" aria-label="More conversation actions" onClick={onMoreClick} isDisabled={!onMoreClick} />
        <EuiButtonIcon iconType="cross" color="text" aria-label="Close AI Agent" onClick={onClose} />
      </div>
      <div role="log" aria-label="Conversation" aria-live="polite" css={{ flex: '1 1 0', minHeight: 0, overflowY: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 24,
        ...(messages.length || children ? {} : { justifyContent: 'center', alignItems: 'center' }) }}>
        {children ?? (messages.length ? messages.map((message) => message.role === 'user' ? (
          <EuiPanel key={message.id} color="subdued" paddingSize="m" hasBorder={false} hasShadow={false}
            css={{ alignSelf: 'flex-end', flexGrow: 0, flexShrink: 0, maxWidth: '85%', overflowWrap: 'anywhere' }}>
            <EuiText size="s" css={{ whiteSpace: 'pre-wrap' }}>{message.text}</EuiText>
          </EuiPanel>
        ) : <div key={message.id} css={{ overflowWrap: 'anywhere' }}><EuiMarkdownFormat textSize="s">{message.text}</EuiMarkdownFormat></div>) : (
          welcome ?? <EuiTitle size="m"><h2 css={{ textAlign: 'center', letterSpacing: '-0.2px' }}>How can I help you?<br /><span css={{ color: euiTheme.colors.textPrimary }}>I can investigate alerts</span></h2></EuiTitle>
        ))}
        {isResponding && <EuiText size="s" color="subdued" role="status">Thinking…</EuiText>}
      </div>
      <div css={{ flexShrink: 0, padding: 16 }}>
        <form aria-label="Message input form" onSubmit={(event) => { event.preventDefault(); send(); }}
          css={{ border: euiTheme.border.thin, borderRadius: 16, backgroundColor: euiTheme.colors.backgroundBasePlain,
            minHeight: 150, padding: 16, display: 'flex', flexDirection: 'column', gap: 8,
            '&:focus-within': { borderColor: euiTheme.colors.borderStrongPrimary } }}>
          {attachment && <EuiPanel color="subdued" paddingSize="s" hasShadow={false} css={{ alignSelf: 'flex-start', maxWidth: '100%', display: 'flex', alignItems: 'center', gap: 8 }}>
            <EuiIcon type={attachment.iconType ?? 'dashboardApp'} />
            <EuiText size="s" css={{ minWidth: 0, overflowWrap: 'anywhere' }}><strong>{attachment.title}</strong></EuiText>
          </EuiPanel>}
          <textarea ref={inputRef} value={draft} placeholder="Ask anything" aria-label="Message input"
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) { event.preventDefault(); send(); }
            }}
            css={{ flexGrow: 1, minHeight: 40, maxHeight: 240, resize: 'none', border: 'none', outline: 'none', background: 'transparent', padding: 0,
              font: 'inherit', fontSize: 16, lineHeight: '1.4286rem', color: euiTheme.colors.textParagraph,
              '&:focus, &:focus-visible': { outline: 'none' },
              '&::placeholder': { color: euiTheme.colors.textSubdued } }} />
          <div css={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
            <div css={{ minWidth: 0 }}>{connector && <EuiButtonEmpty size="xs" color="text" flush="both" onClick={connector.onClick} isDisabled={!connector.onClick} aria-label={`Select connector, ${connector.label}`}>
              <span css={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                {connector.logo && <img src={connector.logo} alt="" width={16} height={16} />}{connector.label}
              </span>
            </EuiButtonEmpty>}</div>
            <EuiButtonIcon type="submit" iconType="sortUp" display="fill" size="s" aria-label="Send message" isDisabled={!draft.trim() || isResponding || !onSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
}
