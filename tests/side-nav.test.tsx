import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { EuiProvider } from '@elastic/eui';
import { describe, expect, it, vi } from 'vitest';
import { KibanaSideNav, type KibanaSideNavProps } from '../src/wrappers/KibanaSideNav';
import type { NavItemsOverride } from '../src/solution-menus';

// jsdom has no layout, so force the More entry with explicit overflow items.
const withOverflow: NavItemsOverride = (nav) => ({ ...nav, overflowItems: [{ id: 'extra', label: 'Extra page', iconType: 'beaker', href: '/extra' }] });
const customizeButton = () => document.querySelector('[data-test-subj="customizeNavigationMoreMenuButton"]');

function openMore(props: KibanaSideNavProps = {}) {
  render(<EuiProvider><KibanaSideNav navItems={withOverflow} {...props} /></EuiProvider>);
  fireEvent.click(screen.getByRole('button', { name: 'More' }));
}

describe('KibanaSideNav customize navigation', () => {
  it('renders no Customize navigation button without a callback', () => {
    openMore();
    expect(screen.getByText('Extra page')).toBeTruthy();
    expect(customizeButton()).toBeNull();
  });
  it('shows the button with a callback; activating it closes More and invokes the callback', async () => {
    const onCustomizeNavigation = vi.fn();
    openMore({ onCustomizeNavigation });
    expect(customizeButton()?.textContent).toBe('Customize navigation');
    fireEvent.click(customizeButton()!);
    expect(onCustomizeNavigation).toHaveBeenCalledOnce();
    expect(onCustomizeNavigation).toHaveBeenCalledWith();
    await waitFor(() => expect(customizeButton()).toBeNull());
  });
});
