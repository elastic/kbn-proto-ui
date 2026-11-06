import {
  KibanaChromeLayout, KibanaChrome, ChromeHeader, KibanaHeader,
  ChromeAppHeader, KibanaPageHeader, Sidebar, KibanaSidebar,
  type KibanaChromeLayoutProps, type KibanaChromeProps,
  type ChromeHeaderProps, type KibanaHeaderProps,
  type ChromeAppHeaderProps, type KibanaPageHeaderProps,
  type SidebarProps, type KibanaSidebarProps,
} from '../dist/index';
const oldHeader: KibanaHeaderProps = { spaceName: 'Legacy' };
const header: ChromeHeaderProps = oldHeader;
const oldAppHeader: KibanaPageHeaderProps = { title: 'Legacy title' };
const appHeader: ChromeAppHeaderProps = oldAppHeader;
const oldLayout: KibanaChromeProps = { pageHeader: oldAppHeader, header: oldHeader };
const layout: KibanaChromeLayoutProps = { ...oldLayout, appHeader };
const oldSidebar: KibanaSidebarProps = { width: 320, onWidthChange: () => {}, children: 'content' };
const sidebar: SidebarProps = oldSidebar;
void [KibanaChromeLayout, KibanaChrome, ChromeHeader, KibanaHeader, ChromeAppHeader, KibanaPageHeader, Sidebar, KibanaSidebar, header, layout, sidebar];

const newLayout: KibanaChromeLayoutProps = {
  sidebarApps: [{ id: 'inspect', render: () => 'Inspector content' }],
  activeSidebarApp: 'inspect', onActiveSidebarAppChange: id => { void id; },
  header: { onSearchClick: () => {}, actions: [
    { id: 'inspect', label: 'Inspector', iconType: 'inspect', sidebarAppId: 'inspect' },
    { id: 'help', label: 'Custom action', iconType: 'beaker', variant: 'plain', onClick: () => {} },
  ] },
};
void newLayout;
