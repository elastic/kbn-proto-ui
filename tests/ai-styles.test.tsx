import { render, screen } from '@testing-library/react';
import { EuiProvider } from '@elastic/eui';
import { describe, expect, it } from 'vitest';
import {
  SvgAiGradientDefs,
  useAiButtonGradientStyles,
  useSvgAiGradient,
} from '../src/utilities/aiStyles';

function CustomAiAction() {
  const { buttonCss, labelCss } = useAiButtonGradientStyles({ variant: 'outlined' });
  const { colors, gradientId, iconGradientCss } = useSvgAiGradient({ variant: 'outlined' });
  return <>
    <SvgAiGradientDefs gradientId={gradientId} colors={colors} />
    <button css={[buttonCss, iconGradientCss]}><span css={labelCss}>Custom AI action</span></button>
    <output data-testid="colors">{JSON.stringify(colors)}</output>
  </>;
}

describe('public AI styling utilities', () => {
  it('updates custom controls and their SVG colors when the host theme changes', () => {
    const { container, rerender } = render(<EuiProvider colorMode="light"><CustomAiAction /></EuiProvider>);
    const lightColors = screen.getByTestId('colors').textContent;
    const lightClass = screen.getByRole('button', { name: 'Custom AI action' }).className;
    const lightStops = [...container.querySelectorAll('stop')].map(stop => stop.getAttribute('stop-color'));
    expect(lightStops).toEqual(Object.values(JSON.parse(lightColors!)));

    rerender(<EuiProvider colorMode="dark"><CustomAiAction /></EuiProvider>);
    const darkColors = screen.getByTestId('colors').textContent;
    expect(darkColors).not.toBe(lightColors);
    expect(screen.getByRole('button', { name: 'Custom AI action' }).className).not.toBe(lightClass);
    const darkStops = [...container.querySelectorAll('stop')].map(stop => stop.getAttribute('stop-color'));
    expect(darkStops).toEqual(Object.values(JSON.parse(darkColors!)));
  });

  it('keeps SVG gradient definitions distinct for multiple custom controls', () => {
    const { container } = render(<EuiProvider><CustomAiAction /><CustomAiAction /></EuiProvider>);
    const gradients = [...container.querySelectorAll('linearGradient')];
    expect(gradients).toHaveLength(2);
    const ids = gradients.map(gradient => gradient.id);
    expect(ids.every(Boolean)).toBe(true);
    expect(new Set(ids).size).toBe(2);
  });
});
