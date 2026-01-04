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
  // 그 외 값은 첫 글자만 대문자로 표시
  const pretty = v ? v.charAt(0).toUpperCase() + v.slice(1) : 'Notice';
  return { label: pretty, variant: 'neutral' as const };
}

function sectionTitle(title: string, subtitle?: string) {
  return h(
    'div.flex.flex-col.items-center.text-center.space-y-2.mb-8',
    h('h2.text-3xl.md:text-4xl.font-bold.text-white', title),
    subtitle ? h('p.text-gray-400.max-w-2xl', subtitle) : ''
  );
}

function cardLink(attrs: Record<string, any>, ...children: any[]) {
  // Wrapper <a> to make the whole sl-card clickable (Shoelace action area)
  return h('a.block.focus:outline-none.focus:ring-2.focus:ring-blue-600.rounded-lg', attrs, ...children);
}

function protocolCards() {
  const items = [
    {
      title: 'Material Factory',
      desc: 'An ERC-20 based system for tokenizing game resources with automated pricing based on supply and demand.',
      cover: '/images/covers/material-factory.jpg',
      url: 'https://github.com/gaiaprotocol/protocol/blob/main/src/gaming/MaterialFactory.sol',
    },
    {
      title: 'Topic Shares',
      desc: 'A tokenized system for subject-based participation where share holders receive fees and influence decisions.',
      cover: '/images/covers/topic-shares.jpg',
      url: 'https://github.com/gaiaprotocol/protocol/blob/main/src/social/TopicShares.sol',
    },
    {
      title: 'Clan Emblems',
      desc: 'Digital insignia representing community membership; trading fees contribute to clan operations.',
      cover: '/images/covers/clan-emblems.jpg',
      url: 'https://github.com/gaiaprotocol/protocol/blob/main/src/social/ClanEmblems.sol',
    },
    {
      title: 'Persona Fragments',
      desc: 'Tokenizes digital identity & relationships; users connect via fragment ownership.',
      cover: '/images/covers/persona-fragments.jpg',
      url: 'https://github.com/gaiaprotocol/protocol/blob/main/src/social/PersonaFragments.sol',
    },
  ];

  return h(
    'div.grid.grid-cols-1.md:grid-cols-2.gap-6',
    ...items.map((it) =>
      cardLink(
        { href: it.url, target: '_blank', rel: 'noopener noreferrer' },
        h(
          'sl-card.bg-gray-900/40.backdrop-blur.w-full',
          { class: 'hover:translate-y-[-2px] transition-transform duration-200' },
          h('img', { slot: 'image', src: it.cover, alt: it.title, class: 'object-cover h-48 w-full' }),
          h('div.flex.items-start.justify-between',
            h('div',
              h('div.text-lg.font-semibold.text-white', it.title),
              h('div.text-sm.text-gray-300.mt-1', it.desc),
            ),
            h('sl-icon.text-gray-300', { name: 'box-arrow-up-right' })
          ),
          h(
            'div[slot=footer].flex.justify-between.items-center.mt-2',
            h('sl-badge.pulse', { variant: 'neutral' }, 'Protocol'),
            h('sl-button', { variant: 'primary', size: 'small' }, 'View on GitHub')
          )
        )
      )
    )
  );
}

function appsCards() {
  const items = [
    {
      title: 'Gaia Materials',
      desc: 'A platform for trading Web3 gaming resources as ERC-20 tokens.',
      cover: '/images/covers/gaia-materials.jpg',
      soon: true
    },
    {
      title: 'topic.trade',
      desc: 'Trade topics; holders share fees and govern posting channels.',
      cover: '/images/covers/topictrade.jpg',
      soon: true
    },
    {
      title: 'Gaia Clans',
      desc: 'Create clans, join via passes, fund ops via trading fees.',
      cover: '/images/covers/gaia-clans.jpg',
      soon: true
    },
    {
      title: 'Gaia Personas',
      desc: 'Express Web3 identity via tradable personas and earn from fees.',
      cover: '/images/covers/gaia-personas.jpg',
      soon: true
    },
    {
      title: 'Gaia Names',
      desc: 'A naming system for the Gaia ecosystem.',
      cover: '/images/covers/gaia-names.png',
      url: 'https://names.gaia.cc'
    }
  ];

  return h(
    'div.grid.grid-cols-1.md:grid-cols-2.lg:grid-cols-3.gap-6',
    ...items.map((it) => {
      const cardCore = h(
        'sl-card.bg-gray-900/40.backdrop-blur.w-full',
        { class: 'hover:translate-y-[-2px] transition-transform duration-200' },
        h('img', { slot: 'image', src: it.cover, alt: it.title, class: 'object-cover h-48 w-full opacity-80' }),
        it.soon
          ? h('sl-badge.absolute.top-3.right-3', { variant: 'warning', pill: true }, 'Coming soon')
          : '',
        h('div.flex.items-start.justify-between',
          h('div',
            h('div.text-lg.font-semibold.text-white', it.title),
            h('div.text-sm.text-gray-300.mt-1', it.desc)
          ),
          it.soon ? h('sl-icon.text-yellow-400', { name: 'clock' }) : h('sl-icon.text-blue-400', { name: 'box-arrow-up-right' })
        ),
        h(
          'div[slot=footer].flex.justify-end.mt-2',
          it.soon
            ? h('sl-button', { variant: 'neutral', size: 'small', onclick: "alert('Coming soon!')" }, 'Notify me')
            : h('sl-button', { variant: 'primary', size: 'small' }, 'Open')
        )
      );

      return it.url
        ? cardLink({ href: it.url, target: '_blank', rel: 'noopener noreferrer' }, cardCore)
        : h('div', cardCore);
    })
  );
}

function gamesCards() {
  const items = [
    {
      title: 'Gaia War',
      desc: 'A fully-onchain strategy game.',
      cover: '/images/covers/gaiawar.jpg',
      soon: true
    }
  ];

  return h(
    'div.grid.grid-cols-1.md:grid-cols-2.lg:grid-cols-3.gap-6',
    ...items.map((it) =>
      h(
        'sl-card.bg-gray-900/40.backdrop-blur',
        { class: 'hover:translate-y-[-2px] transition-transform duration-200' },
        h('img', { slot: 'image', src: it.cover, alt: it.title, class: 'object-cover h-48 w-full opacity-80' }),
        it.soon ? h('sl-badge.absolute.top-3.right-3', { variant: 'warning', pill: true }, 'Coming soon') : '',
        h('div.flex.items-start.justify-between',
          h('div',
            h('div.text-lg.font-semibold.text-white', it.title),
            h('div.text-sm.text-gray-300.mt-1', it.desc)
          ),
          h('sl-icon.text-yellow-400', { name: 'controller' })
        ),
        h('div[slot=footer].flex.justify-end.mt-2',
          h('sl-button', { variant: 'neutral', size: 'small', onclick: "alert('Coming soon!')" }, 'Details')
        )
      )
    )
  );
}

function assetsCards() {
  const items = [
    {
      title: '$GAIA',
      desc: 'A membership token providing various benefits across the Gaia ecosystem.',
      cover: '/images/covers/token.jpg',
      url: 'https://token.gaia.cc'
    },
    {
      title: 'The Gods',
      desc: 'A membership NFT collection of Gaia Protocol consisting of 3,333 NFTs.',
      cover: '/images/covers/thegods.jpg',
      video: '/images/covers/thegods.mp4',
      url: 'https://gods.gaia.cc'
    }
  ];

  return h(
    'div.grid.grid-cols-1.md:grid-cols-2.gap-6',
    ...items.map((it) =>
      cardLink(
        { href: it.url, target: '_blank', rel: 'noopener noreferrer' },
        h(
          'sl-card.bg-gray-900/40.backdrop-blur',
          { class: 'hover:translate-y-[-2px] transition-transform duration-200' },
          it.video
            ? h('video', {
              slot: 'image',
              autoplay: true,
              loop: true,
              muted: true,
              playsinline: true,
              class: 'h-48 w-full object-cover opacity-80'
            },
              h('source', { src: it.video, type: 'video/mp4' })
            )
            : h('img', { slot: 'image', src: it.cover, alt: it.title, class: 'object-cover h-48 w-full' }),
          h('div',
            h('div.text-lg.font-semibold.text-white', it.title),
            h('div.text-sm.text-gray-300.mt-1', it.desc)
          ),
          h('div[slot=footer].flex.justify-between.items-center.mt-2',
            h('sl-badge', { variant: 'success' }, 'Live'),
            h('sl-button', { variant: 'primary', size: 'small' }, 'Open')
          )
        )
      )
    )
  );
}

function newsCards(notices: Notice[]) {
  if (!Array.isArray(notices) || notices.length === 0) {
    return h('div.text-gray-400.text-sm', 'No news yet. Stay tuned!');
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

function hero() {
  return h(
    'section.relative.h-[80vh].min-h-[560px].flex.items-center.justify-center.overflow-hidden',
    h('video.absolute.inset-0.w-full.h-full.object-cover', { autoplay: true, loop: true, muted: true, playsinline: true },
      h('source', { src: '/videos/hero.mp4', type: 'video/mp4' })
    ),
    h('div.relative.z-10.text-center.max-w-3xl.px-6.space-y-6',
      h('h1.text-5xl.md:text-7xl.text-white.drop-shadow-lg.font-trojan-pro', 'Gaia Protocol'),
      h('p.text-lg.md:text-2xl.text-gray-300.drop-shadow', 'Web3 Social + Gaming Protocol'),
      h('div.flex.justify-center.space-x-3',
        h('a', { href: '/notice/1' },
          h('sl-button', { variant: 'primary', size: 'large' }, 'Learn more')
        ),
      )
    ),
    h('div.absolute.inset-0.bg-gradient-to-b.from-transparent.via-black/40.to-black'),
  );
}

function container(section: any) {
  return h('div.container.mx-auto.px-4', section);
}

function intro(notices: Notice[]) {
  return '<!DOCTYPE html>' + h(
    'html.dark', { lang: 'en' },
    head('Gaia Protocol - Web3 Social + Gaming Protocol'),
    h(
      'body.bg-gray-950.text-gray-200.sl-theme-dark',
      top,

      // Hero
      hero(),

      // Protocol
      h('section.py-16', container(
        h('div',
          sectionTitle('Protocol', 'Core smart contracts that power Gaia Protocol.'),
          protocolCards()
        )
      )),

      // Apps
      h('section.py-16', container(
        h('div',
          sectionTitle('Apps', 'Ecosystem applications built on the protocol.'),
          appsCards()
        )
      )),

      // Games
      h('section.py-16', container(
        h('div',
          sectionTitle('Games', 'Onchain games leveraging Gaia mechanics.'),
          gamesCards()
        )
      )),

      // Assets
      h('section.py-16', container(
        h('div',
          sectionTitle('Assets', 'Live assets you can explore right now.'),
          assetsCards()
        )
      )),

      // News
      h('section#news.py-16', container(
        h('div',
          sectionTitle('News', 'Updates, releases, and community highlights.'),
          newsCards(notices)
        )
      )),

      footer,
      bundle
    )
  );
}

export { intro };
