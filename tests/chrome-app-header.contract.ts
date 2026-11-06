import type {
  AppHeaderEditableTitle, AppHeaderMetadataItems, AppHeaderShareAction,
  AppMenuConfig, ChromeAppHeaderProps,
} from '../dist/index';

const title: AppHeaderEditableTitle = {
  text: 'Traffic', placeholder: 'Untitled dashboard', ariaLabel: 'Edit dashboard name',
  onSave: async value => value ? undefined : 'Title cannot be empty.',
};
const share: AppHeaderShareAction = { onClick: ({ returnFocus }) => returnFocus(), tooltip: { content: 'Share traffic', title: 'Share' } };
const menu: AppMenuConfig = {
  items: [{ id: 'export', label: 'Export', iconType: 'export', disableButton: () => false,
    run: params => { params?.triggerElement.focus(); params?.returnFocus(); } }],
  primaryActionItem: { id: 'save', label: 'Save', iconType: 'save', run: () => {},
    splitButtonProps: { secondaryButtonAriaLabel: 'Save options', items: [{ id: 'copy', label: 'Save a copy', run: () => {} }] } },
  switch: { id: 'live', label: 'Live', checked: false, disabled: false, onChange: (_checked: boolean) => {} },
};
const props: ChromeAppHeaderProps = { title, share, menu, metadata: [{ type: 'text', label: 'Created by', value: 'Andrea' }] };
void props;

// @ts-expect-error Description and metadata are mutually exclusive in Kibana.
const both: ChromeAppHeaderProps = { description: 'Traffic', metadata: [{ type: 'text', label: 'Created' }] };
// @ts-expect-error Metadata has a maximum of three items.
const tooMany: AppHeaderMetadataItems = [{ type: 'text', label: '1' }, { type: 'text', label: '2' }, { type: 'text', label: '3' }, { type: 'text', label: '4' }];
// @ts-expect-error A generic children slot is intentionally absent.
const children: ChromeAppHeaderProps = { children: 'arbitrary' };
// @ts-expect-error Presets are not part of the Kibana contract.
const preset: ChromeAppHeaderProps = { config: 'discover' };
// @ts-expect-error Kibana's share tooltip is a structured object.
const tooltip: AppHeaderShareAction = { onClick: () => {}, tooltip: 'wrong shape' };
// @ts-expect-error Menu items use disableButton, not disabled.
const disabled: AppMenuConfig = { items: [{ id: 'edit', label: 'Edit', iconType: 'pencil', run: () => {}, disabled: true }] };
// @ts-expect-error historyConfig is intentionally unsupported.
const history: AppMenuConfig = { historyConfig: { undo: { onClick: () => {} } } };
void [both, tooMany, children, preset, tooltip, disabled, history];
