import {
  EuiButtonEmpty, EuiButtonIcon, EuiHealth, EuiLink, EuiText, EuiToolTip, useEuiTheme,
} from '@elastic/eui';
import type { MouseEvent } from 'react';
import { PageHeaderMenu, plainText } from './PageHeaderMenu';
import { PageHeaderTitle } from './PageHeaderTitle';
import { PageHeaderBadges, PageHeaderTabs } from './PageHeaderExtras';
import type { KibanaPageHeaderProps } from './types';

export function KibanaPageHeader({
  title, back, badges, share, favorite, description, metadata, tabs, menu, titleAppend,
  spacing, borderless = false, sticky = true,
}: KibanaPageHeaderProps) {
  const { euiTheme: theme } = useEuiTheme();
  const sparse = title === undefined && !badges?.length && !tabs?.length && !description && !metadata?.length && titleAppend == null && !favorite && !share;
  const resolvedSpacing = spacing ?? (sparse ? 'compact' : 'standard');
  const compact = resolvedSpacing === 'compact';
  const inset = resolvedSpacing === 'flush' ? undefined : compact ? theme.size.s : resolvedSpacing === 'largeBleed' ? theme.size.l : theme.size.base;
  const bleed = resolvedSpacing === 'bleed' || resolvedSpacing === 'largeBleed';
  const hasSecondary = !!description || !!metadata?.length;
  const hasTabs = !!tabs?.length;
  const hasAppend = titleAppend != null;
  const isFavorite = favorite?.status === 'favorited' || favorite?.status === 'removing';
  const favoriteBusy = favorite?.status === 'adding' || favorite?.status === 'removing';
  const shareLabel = plainText(share?.label) || 'Share';
  const iconCss = { width: 24, height: 24, color: theme.colors.textSubdued };
  if (sparse && !back && !menu?.items?.length && !menu?.primaryActionItem && !menu?.switch) return null;
  return <div data-test-subj="kibanaPageHeader" css={{
    position: sticky ? 'sticky' : undefined, top: sticky ? 0 : undefined, zIndex: sticky ? theme.levels.mask : undefined,
    flexShrink: 0, minWidth: 0, boxSizing: 'border-box', paddingInline: inset,
    marginInline: bleed ? `-${inset}` : undefined, marginTop: bleed ? `-${inset}` : undefined,
    background: theme.colors.backgroundBasePlain, borderBottom: borderless ? undefined : theme.border.thin,
    marginBottom: borderless ? undefined : `-${theme.border.width.thin}`,
  }}>
    <div css={{ display: 'flex', alignItems: 'center', gap: theme.size.m, flexWrap: 'wrap', minWidth: 0, boxSizing: 'border-box',
      minHeight: hasSecondary || hasTabs ? hasAppend ? undefined : `calc(${compact ? 48 : 64}px - ${inset ?? theme.size.base} + ${theme.size.xs})` : compact ? 48 : 64,
      paddingBlockStart: hasAppend ? undefined : inset ?? theme.size.base,
      paddingBlockEnd: hasAppend ? undefined : hasSecondary || hasTabs ? theme.size.xs : inset ?? theme.size.base,
    }}>
      <div css={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0 }}>
        <div css={{ display: 'flex', alignItems: 'center', gap: theme.size.xs, minWidth: 0, maxWidth: hasAppend ? 'min(40%, 360px)' : '100%' }}>
          <div css={{ display: 'flex', alignItems: 'center', gap: theme.size.s, minWidth: 0 }}>
            {back && <EuiToolTip content={`Back to ${plainText(back.label)}`}><EuiButtonIcon iconType="sortLeft" color="text" display="empty" size="xs"
              css={{ color: theme.colors.textSubdued, flexShrink: 0 }} href={back.href} onClick={back.onClick} aria-label={`Back to ${plainText(back.label)}`} /></EuiToolTip>}
            {title !== undefined && <PageHeaderTitle title={title} compact={compact} hasBack={!!back} />}
          </div>
          <PageHeaderBadges badges={badges} />
          {share && <EuiToolTip content={plainText(share.tooltip?.content) || shareLabel} title={plainText(share.tooltip?.title) || undefined}>
            <EuiButtonIcon iconType="share" color="text" display="empty" size="xs" css={iconCss} aria-label={shareLabel} isDisabled={share.isDisabled}
              onClick={(event: MouseEvent<HTMLButtonElement>) => { const trigger = event.currentTarget; void share.onClick({ returnFocus: () => trigger.focus() }); }} />
          </EuiToolTip>}
          {favorite && <EuiToolTip content={isFavorite ? 'Remove from Starred' : 'Add to Starred'}>
            <EuiButtonIcon iconType={isFavorite ? 'starFilled' : 'starEmpty'} color="text" display="empty" size="xs" css={iconCss}
              aria-label={isFavorite ? 'Remove from Starred' : 'Add to Starred'} aria-pressed={isFavorite} aria-busy={favoriteBusy}
              isDisabled={favorite.isDisabled || favoriteBusy} onClick={favorite.onToggle} />
          </EuiToolTip>}
        </div>
        {hasAppend && <div css={{ display: 'flex', alignItems: 'center', flex: '1 1 0', minWidth: 0 }}>{titleAppend}</div>}
      </div>
      <PageHeaderMenu menu={menu} />
    </div>
    {hasSecondary && <div css={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: `${theme.size.xs} ${theme.size.m}`, paddingBlockEnd: hasTabs ? theme.size.xs : inset ?? theme.size.base }}>
      {description ? <EuiText size="xs" color="subdued" css={{ maxInlineSize: '80ch' }}><p>
        {plainText(typeof description === 'string' ? description : description.text)}
        {typeof description === 'object' && description.learnMoreUrl && <> <EuiLink href={description.learnMoreUrl} external target="_blank">Learn more</EuiLink></>}
      </p></EuiText> : metadata?.slice(0, 3).map((item, index) => {
        if (!item) return null;
        const css = { color: theme.colors.textSubdued, fontWeight: theme.font.weight.bold };
        if (item.type === 'health') return <EuiHealth key={index} color={item.color} textSize="xs" css={css} data-test-subj={item['data-test-subj']}>{plainText(item.label)}</EuiHealth>;
        if (item.type === 'button') return <EuiButtonEmpty key={index} color="text" flush="both" size="xs" href={item.href} onClick={item.onClick}
          css={{ ...css, height: 'auto', minHeight: 0, lineHeight: 'inherit' }} data-test-subj={item['data-test-subj']}>{plainText(item.label)}</EuiButtonEmpty>;
        return <EuiText key={index} size="xs" css={css} data-test-subj={item['data-test-subj']}>{plainText(item.label)}
          {item.value !== undefined && <span css={{ fontWeight: theme.font.weight.medium }}> {plainText(item.value)}</span>}
        </EuiText>;
      })}
    </div>}
    {hasTabs && <PageHeaderTabs tabs={tabs!} />}
  </div>;
}
