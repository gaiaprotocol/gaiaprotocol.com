import { h } from "@webtaku/h";

const brand = h(
  'a.flex.items-center.space-x-3.text-white',
  { href: '/' },
  // 로고 뱃지 (원형 그라데이션 안에 G)
  h('div.w-8.h-8.rounded-full.flex.items-center.justify-center.bg-gradient-to-br.from-blue-500.to-purple-600.shadow',
    h('span.text-sm.font-bold', 'G')
  ),
  h('span.text-lg.md:text-xl.font-semibold', 'Gaia Protocol')
);

const top = h(
  // sticky + blur + 그라데이션 바닥 라인
  'nav.sticky.top-0.z-50.bg-black/80.backdrop-blur-md.border-b.border-gray-800',
  h(
    'div.container.mx-auto.px-4.py-3.flex.items-center.justify-between',
    brand,
    h(
      'div.flex.items-center.space-x-3',
      h(
        'a',
        {
          href: 'https://dashboard.gaiaprotocol.com',
          target: '_blank',
          rel: 'noopener noreferrer'
        },
        h('sl-button', { variant: 'primary', size: 'small' }, 'Dashboard')
      )
    )
  ),
);

export { top };
