// Dev-only drift check: compares the standalone app menu type snapshot with the
// published @kbn/ui-app-menu declarations. If this fails after `npm run update:kbn`,
// update src/wrappers/app-menu.types.ts to match.
import type * as Pub from '@kbn/ui-app-menu';
import type { ComponentProps } from 'react';
import type * as Ours from '../src/wrappers/app-menu.types';
import type { KibanaAppMenuProps } from '../src/wrappers/AppMenu';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

export type AppMenuDriftChecks = [
  Assert<Equal<Ours.AppMenuConfig, Pub.AppMenuConfig>>,
  Assert<Equal<Ours.AppMenuItemType, Pub.AppMenuItemType>>,
  Assert<Equal<Ours.AppMenuStaticItem, Pub.AppMenuStaticItem>>,
  Assert<Equal<Ours.AppMenuPopoverItem, Pub.AppMenuPopoverItem>>,
  Assert<Equal<Ours.AppMenuPrimaryActionItem, Pub.AppMenuPrimaryActionItem>>,
  Assert<Equal<Ours.AppMenuSplitButtonProps, Pub.AppMenuSplitButtonProps>>,
  Assert<Equal<Ours.AppMenuRunAction, Pub.AppMenuRunAction>>,
  Assert<Equal<Ours.AppMenuRunActionParams, Pub.AppMenuRunActionParams>>,
  Assert<Equal<Ours.AppMenuEbtAttrs, Pub.AppMenuEbtAttrs>>,
  Assert<Equal<Ours.AppMenuBreakpointSource, Pub.AppMenuBreakpointSource>>,
  Assert<Equal<KibanaAppMenuProps, ComponentProps<typeof Pub.AppMenuComponent>>>,
];
