import { render, screen, fireEvent } from '@testing-library/react';
import { EuiProvider } from '@elastic/eui';
import { describe, expect, it, vi } from 'vitest';
import { AgentSidebar } from '../src/rebuilt/agent-builder/AgentSidebar';
import { ChromeHeader } from '../src/rebuilt/ChromeHeader';
describe('agent UI', () => {
  it('submits a trimmed message and attachment through the host callback', () => {
    const submit = vi.fn();
    const attachment = { title: 'Discover', iconType: 'discoverApp' };
    render(<EuiProvider><AgentSidebar onClose={() => {}} attachment={attachment} onSubmit={submit} /></EuiProvider>);
    const input = screen.getByRole('textbox', { name: 'Message input' });
    fireEvent.change(input, { target: { value: '  Investigate this  ' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(submit).toHaveBeenCalledWith('Investigate this', attachment);
    expect((input as HTMLTextAreaElement).value).toBe('');
  });
  it('keeps Shift+Enter for newlines and disables sending while responding', () => {
    const submit = vi.fn();
    render(<EuiProvider><AgentSidebar onClose={() => {}} onSubmit={submit} isResponding initialMessage="Hello" /></EuiProvider>);
    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Enter', shiftKey: true });
    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Enter' });
    expect(submit).not.toHaveBeenCalled();
    expect((screen.getByRole('button', { name: 'Send message' }) as HTMLButtonElement).disabled).toBe(true);
  });
  it('requests close and exposes the active agent button state', () => {
    const close = vi.fn();
    const toggle = vi.fn();
    render(<EuiProvider><AgentSidebar onClose={close} /><ChromeHeader isAgentOpen onAgentClick={toggle} /></EuiProvider>);
    fireEvent.click(screen.getByRole('button', { name: 'Close AI Agent' }));
    expect(close).toHaveBeenCalledOnce();
    const button = screen.getByRole('button', { name: 'AI Agent' });
    expect(button.getAttribute('aria-expanded')).toBe('true');
    fireEvent.click(button);
    expect(toggle).toHaveBeenCalledOnce();
  });
});
