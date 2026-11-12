import { fireEvent, render, screen } from '@testing-library/react';
import { EuiProvider } from '@elastic/eui';
import { describe, expect, it, vi } from 'vitest';
import { AiButton, AiButtonDefault, AiButtonEmpty, AiButtonIcon } from '../src/wrappers/ai-components';

describe('published AI buttons', () => {
  it('preserves actions, disabled states and anchor behavior across variants', () => {
    const onClick = vi.fn();
    render(<EuiProvider>
      <AiButton iconType="productAgent" onClick={onClick}>Ask agent</AiButton>
      <AiButtonDefault disabled onClick={onClick}>Unavailable</AiButtonDefault>
      <AiButtonEmpty href="/agents">Browse agents</AiButtonEmpty>
      <AiButtonIcon iconType="sparkles" aria-label="Suggest" onClick={onClick} />
      <AiButton variant="outlined">Explain</AiButton>
    </EuiProvider>);
    fireEvent.click(screen.getByRole('button', { name: 'Ask agent' }));
    fireEvent.click(screen.getByRole('button', { name: 'Unavailable' }));
    fireEvent.click(screen.getByRole('button', { name: 'Suggest' }));
    expect(onClick).toHaveBeenCalledTimes(2);
    expect(screen.getByRole('link', { name: 'Browse agents' }).getAttribute('href')).toBe('/agents');
    expect(screen.getByRole('button', { name: 'Explain' })).toBeTruthy();
  });
});
