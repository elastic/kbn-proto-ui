/* Copyright Elasticsearch B.V. Licensed under Elastic License 2.0.
 * Modified: static standalone navigation data; see SOURCES.md. */
import type { NavItem, NavLink, NavSection } from './types';
export const link = (id: string, label: string): NavLink => ({ id, label, href: `#${id}` });
export const item = (id: string, label: string, iconType: string): NavItem => ({ ...link(id, label), iconType });
export const section = (id: string, label: string | undefined, pairs: [string, string][]): NavSection => ({ id, label, items: pairs.map(([id, label]) => link(id, label)) });
export const panel = (id: string, label: string, iconType: string, sections: NavSection[]): NavItem => ({
  ...item(id, label, iconType), href: sections[0]?.items[0]?.href ?? `#${id}`, sections,
});
