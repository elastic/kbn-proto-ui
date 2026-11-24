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
  it('shows "Customize navigation" in the More panel by default', async () => {
    openMore();
    expect(customizeButton()?.textContent).toBe('Customize navigation');
    fireEvent.click(customizeButton()!);
    await waitFor(() => expect(customizeButton()).toBeNull());
  });
  it('closes the More panel and calls the supplied callback', async () => {
    const onCustomizeNavigation = vi.fn();
    openMore({ onCustomizeNavigation });
    fireEvent.click(customizeButton()!);
    expect(onCustomizeNavigation).toHaveBeenCalledOnce();
    expect(onCustomizeNavigation).toHaveBeenCalledWith();
    await waitFor(() => expect(customizeButton()).toBeNull());
  });
});
