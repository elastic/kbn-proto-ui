import { createElement } from 'react';
import { KibanaProjectPicker, type KibanaProjectPickerProps, type ChromeHeaderProps, type KibanaChromeLayoutProps } from '../dist/index';
const picker: KibanaProjectPickerProps = { selected: 31, total: 435, onClick: () => {}, tooltip: 'Choose projects' };
const header: ChromeHeaderProps = {
  switcher: createElement('button', null, 'ACME Corp'),
  projectPicker: createElement(KibanaProjectPicker, picker),
  subscriptionBadge: 'Trial', trailing: 'Before avatar', afterUserMenu: 'Prototype tools',
};
const chrome: KibanaChromeLayoutProps = { header };
const withUserMenu: ChromeHeaderProps = { userMenu: createElement('button', null, 'Kate'), afterUserMenu: null };
void withUserMenu;
const standalone: ChromeHeaderProps = { logo: { href: '/', label: 'Elastic home' }, sideNavWidth: 100 };
// @ts-expect-error the layout supplies the logo and nav width itself; use its top-level `logo`
const layoutHeaderLogo: KibanaChromeLayoutProps = { header: { logo: {} } };
void standalone; void layoutHeaderLogo;
// @ts-expect-error counts are numbers, not formatted strings
const invalid: KibanaProjectPickerProps = { selected: '31', total: 435 };
void chrome; void invalid;
