import { h } from '@webtaku/h';
import { Notice } from '../types/notice';
import { bundle } from './bundle';
import { footer } from './footer';
import { head } from './head';
import { top } from './top';

function formatDate(date: string | number) {
  try {
    return new Intl.DateTimeFormat('en', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(new Date(date));
  } catch {
    return String(date);
  }
}

function typeMeta(t?: string) {
  const v = (t || '').toLowerCase();
  if (v === 'update') return { label: 'Update', variant: 'success' as const };
  if (v === 'news') return { label: 'News', variant: 'primary' as const };
  const pretty = v ? v.charAt(0).toUpperCase() + v.slice(1) : 'Notice';
  return { label: pretty, variant: 'neutral' as const };
}

function cardLink(attrs: Record<string, any>, ...children: any[]) {
  return h('a.block.focus:outline-none.focus:ring-2.focus:ring-blue-600.rounded-lg', attrs, ...children);
}

function container(section: any) {
  return h('div.container.mx-auto.px-4', section);
}

function breadcrumb() {
  return h(
    'nav.mb-6',
    h(
      'sl-breadcrumb',
      { class: 'text-sm' },
      h('sl-breadcrumb-item', { href: '/' }, 'Home'),
      h('sl-breadcrumb-item', { active: true }, 'Notices')
    )
  );
}

function noticesList(notices: Notice[]) {
  if (!Array.isArray(notices) || notices.length === 0) {
    return h('div.text-gray-400.text-sm', 'No notices yet. Stay tuned!');
  }

  return h(
    'div.grid.grid-cols-1.md:grid-cols-2.lg:grid-cols-3.gap-6',
    ...notices.map((n) => {
      const tm = typeMeta((n as any).type);

      return cardLink(
        { href: `/notice/${n.id}` },
        h(
          'sl-card.bg-gray-900/40.backdrop-blur',
          { class: 'hover:translate-y-[-2px] transition-transform duration-200 h-full' },
          h('div.space-y-2',
            h('div.flex.items-center.space-x-2.text-xs',
              h('sl-badge', { variant: tm.variant, pill: true }, tm.label),
              h('span.text-gray-400', '•'),
              h('span.text-gray-400', formatDate(n.createdAt))
            ),
            h('div.text-base.font-semibold.text-white.line-clamp-2', n.title),
            n.content
              ? h('div.text-sm.text-gray-300.line-clamp-2', n.content.replace(/#/g, ''))
              : ''
          ),
          h('div[slot=footer].flex.justify-end.mt-2',
            h('sl-button', { variant: 'default', size: 'small' }, 'Read more')
          )
        )
      );
    })
  );
}

function notices(noticeList: Notice[]) {
  return '<!DOCTYPE html>' + h(
    'html.dark', { lang: 'en' },
    head('Notices - Gaia Protocol'),
    h(
      'body.bg-gray-950.text-gray-200.sl-theme-dark',
      top,
      h(
        'main',
        h(
          'section.py-10.md:py-14',
          container(
            h('div',
              breadcrumb(),
              h('div.flex.flex-col.items-center.text-center.space-y-2.mb-8',
                h('h1.text-3xl.md:text-4xl.font-bold.text-white', 'Notices'),
                h('p.text-gray-400.max-w-2xl', 'Updates, releases, and community highlights.')
              ),
              noticesList(noticeList)
            )
          )
        )
      ),
      footer,
      bundle
    )
  );
}

export { notices };
