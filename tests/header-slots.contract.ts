import { createElement } from 'react';
import { KibanaProjectPicker, type KibanaProjectPickerProps, type KibanaHeaderProps, type KibanaChromeProps } from '../dist/index';
const picker: KibanaProjectPickerProps = { selected: 31, total: 435, onClick: () => {}, tooltip: 'Choose projects' };
const header: KibanaHeaderProps = {
  switcher: createElement('button', null, 'ACME Corp'),
  projectPicker: createElement(KibanaProjectPicker, picker),
  subscriptionBadge: 'Trial', trailing: 'Before avatar', afterUserMenu: 'Prototype tools',
};
const chrome: KibanaChromeProps = { header };
// @ts-expect-error counts are numbers, not formatted strings
const invalid: KibanaProjectPickerProps = { selected: '31', total: 435 };
void chrome; void invalid;
