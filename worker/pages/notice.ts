import { h } from '@webtaku/h';
import { Notice } from '../types/notice';
import { bundle } from './bundle';
import { footer } from './footer';
import { head } from './head';
import { top } from './top';
import { marked } from 'marked';

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

function estimateReadingTime(content?: string) {
  if (!content) return null;
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function container(section: any) {
  return h('div.container.mx-auto.px-4', section);
}

function headerBlock(n: Notice) {
  const read = estimateReadingTime(n.content);
  const updated =
    (n as any).updatedAt && (n as any).updatedAt !== n.createdAt
      ? ` • Updated ${formatDate((n as any).updatedAt)}`
      : '';

  const tm = typeMeta((n as any).type);

  return h(
    'header.mb-8',
    breadcrumb(n),
    h(
      'div.space-y-3',
      h('h1.text-3xl.md:text-5xl.font-extrabold.text-white.leading-tight', n.title || 'Untitled'),
      h(
        'div.flex.flex-wrap.items-center.gap-2.text-sm.text-gray-400',
        h('sl-badge', { variant: tm.variant, pill: true }, tm.label),
        h('span', '•'),
        h('span', formatDate(n.createdAt)),
        read ? h('span', '•') : '',
        read ? h('span', read) : '',
        updated ? h('span', updated) : ''
      ),
      (n as any).author
        ? h(
          'div.flex.items-center.gap-3.mt-2',
          (n as any).author.avatar
            ? h('img.rounded-full', {
              src: (n as any).author.avatar,
              alt: (n as any).author.name || 'Author',
              width: 28,
              height: 28,
            })
            : '',
          h(
            'div.text-sm.text-gray-300',
            'By ',
            h('span.font-medium.text-white', (n as any).author.name || 'Unknown')
          )
        )
        : ''
    )
  );
}

function coverBlock(n: Notice) {
  const cover = (n as any).cover;
  if (!cover) return '';
  return h(
    'div.mb-8',
    h(
      'sl-card.bg-gray-900/40.backdrop-blur',
      { class: 'overflow-hidden' },
      h('img', {
        slot: 'image',
        src: cover,
        alt: n.title || 'Cover',
        class: 'w-full h-64 md:h-96 object-cover',
      })
    )
  );
}

function tagsRow(n: Notice) {
  const tags: string[] | undefined = (n as any).tags;
  if (!tags || tags.length === 0) return '';
  return h(
    'div.mt-6.flex.flex-wrap.gap-2',
    ...tags.map((t) => h('sl-badge', { variant: 'neutral', pill: true }, t))
  );
}

function contentBlock(n: Notice) {
  const html = n.content ? marked.parse(n.content) as string : '';

  return h(
    'article',
    h(
      'div.bg-gray-900/40.backdrop-blur.rounded-2xl.p-6.md:p-8.prose.prose-invert.max-w-none.markdown-body',
      html || '<p class="text-gray-400 text-sm">No content available.</p>',
    )
  );
}

function breadcrumb(n: Notice) {
  return h(
    'nav.mb-6',
    h(
      'sl-breadcrumb',
      { class: 'text-sm' },
      h('sl-breadcrumb-item', { href: '/' }, 'Home'),
      h('sl-breadcrumb-item', { href: '/#news' }, 'News'),
      h(
        'sl-breadcrumb-item',
        {
          active: true,
          style: {
            maxWidth: '200px',          // 길이 제한
            overflow: 'hidden',         // 넘치는 텍스트 숨김
            whiteSpace: 'nowrap',       // 한 줄 유지
            textOverflow: 'ellipsis'    // 말줄임 표시
          }
        },
        n.title || 'Notice'
      )
    )
  );
}

function shareRow(n: Notice) {
  return h(
    'div.mt-8.flex.items-center.justify-between',
    h(
      'div.flex.items-center.gap-2',
      h('sl-button', { href: '/#news', variant: 'default' }, '← Back to News')
    ),
    h(
      'div.flex.items-center.gap-2',
      h(
        'sl-button',
        {
          variant: 'neutral',
          size: 'small',
          onclick:
            "navigator.clipboard.writeText(location.href).then(()=>{this.textContent='Copied!';setTimeout(()=>this.textContent='Share',1500);})",
        },
        'Share'
      )
    )
  );
}


function notice(n: Notice) {
  const pageTitle = n?.title ? `${n.title} - Gaia Protocol News` : 'Notice - Gaia Protocol News';

  return (
    '<!DOCTYPE html>' +
    h(
      'html.dark',
      { lang: 'en' },
      head(pageTitle),
      h(
        'body.bg-gray-950.text-gray-200.sl-theme-dark',
        top,
        h(
          'main',
          h(
            'section.py-10.md:py-14',
            container(
              h('div.max-w-3xl.mx-auto',
                headerBlock(n),
                coverBlock(n),
                contentBlock(n),
                tagsRow(n),
                h('sl-divider.my-8'),
                shareRow(n)
              )
            )
          )
        ),
        footer,
        bundle
      )
    )
  );
}

export { notice };
