import { createElement } from 'react';
import { KibanaProjectPicker, type KibanaProjectPickerProps, type ChromeHeaderProps, type KibanaChromeLayoutProps } from '../dist/index';
const picker: KibanaProjectPickerProps = { selected: 31, total: 435, onClick: () => {}, tooltip: 'Choose projects' };
const header: ChromeHeaderProps = {
  switcher: createElement('button', null, 'ACME Corp'),
  projectPicker: createElement(KibanaProjectPicker, picker),
  subscriptionBadge: 'Trial', trailing: 'Before avatar', afterUserMenu: 'Prototype tools',
};
const chrome: KibanaChromeLayoutProps = { header };
// @ts-expect-error counts are numbers, not formatted strings
const invalid: KibanaProjectPickerProps = { selected: '31', total: 435 };
void chrome; void invalid;
