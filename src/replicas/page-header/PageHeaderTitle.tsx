import { useEffect, useId, useRef, useState } from 'react';
import { EuiTitle, useEuiTheme } from '@elastic/eui';
import type { AppHeaderTitle } from './types';
import { plainText } from './PageHeaderMenu';

export function PageHeaderTitle({ title, compact, hasBack }: { title: AppHeaderTitle; compact: boolean; hasBack: boolean }) {
  const { euiTheme } = useEuiTheme();
  const editable = typeof title === 'object' && title !== null;
  const text = plainText(editable ? title.text : title);
  const placeholder = editable ? plainText(title.placeholder) : '';
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(text);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const pending = useRef(false);
  const resolved = useRef(false);
  const input = useRef<HTMLInputElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const errorId = useId();
  useEffect(() => { if (!editing) setDraft(text); }, [text, editing]);
  useEffect(() => { if (editing) { input.current?.focus(); input.current?.select(); } }, [editing]);
  const finish = (restoreFocus: boolean) => {
    resolved.current = true;
    setEditing(false);
    if (restoreFocus) requestAnimationFrame(() => button.current?.focus());
  };
  const save = async (restoreFocus: boolean) => {
    if (!editable || pending.current || resolved.current) return;
    const nextTitle = draft.trim();
    if (nextTitle === text.trim()) { finish(restoreFocus); return; }
    if (!nextTitle) { setError('Title cannot be empty.'); return; }
    pending.current = true; setSaving(true);
    try {
      const result = await title.onSave(nextTitle);
      if (typeof result === 'string' && result) { setError(result); return; }
      setError(''); finish(restoreFocus);
    } catch { setError('Enter a valid title.'); }
    finally { pending.current = false; setSaving(false); }
  };
  if (!editable && !text) return null;
  return <div css={{ minWidth: 0, maxWidth: '100%', position: 'relative', paddingInlineStart: compact && !hasBack ? 8 : undefined }}>
    <EuiTitle size={compact ? 'xs' : 's'}><h1 css={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
      {editing ? <input ref={input} value={draft} disabled={saving}
        aria-label={editable ? plainText(title.ariaLabel) || 'Edit title' : 'Edit title'} aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined} placeholder={placeholder}
        onChange={event => { setDraft(event.target.value); setError(''); }}
        onBlur={() => { void save(false); }}
        onKeyDown={event => {
          if (event.nativeEvent.isComposing) return;
          if (event.key === 'Enter') { event.preventDefault(); void save(true); }
          if (event.key === 'Escape' && !pending.current) { event.preventDefault(); setError(''); finish(true); }
        }}
        css={{ width: `${Math.max(draft.length, placeholder.length, 4) + 1}ch`, maxWidth: '100%', padding: 0, border: 0, background: 'transparent', color: 'inherit', font: 'inherit', outlineOffset: 2 }} />
        : editable ? <button ref={button} type="button" onClick={() => { resolved.current = false; setError(''); setDraft(text); setEditing(true); }}
          aria-label={plainText(title.ariaLabel) || 'Edit title'}
          css={{ padding: 0, border: 0, background: 'transparent', color: text ? 'inherit' : euiTheme.colors.textSubdued, font: 'inherit', cursor: 'text', maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', '&:hover': { boxShadow: `0 0 0 4px ${euiTheme.colors.backgroundBaseSubdued}` } }}>
          {text || placeholder}
        </button> : text}
    </h1></EuiTitle>
    {error && <span id={errorId} role="alert" css={{ position: 'absolute', top: '100%', fontSize: 12, color: euiTheme.colors.textDanger, zIndex: 1 }}>{error}</span>}
  </div>;
}
