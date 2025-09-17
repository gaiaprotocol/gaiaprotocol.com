import { h } from '@webtaku/h';
import { bundle } from './bundle';
import { footer } from './footer';
import { head } from './head';
import { top } from './top';

function dashboard() {
  return (
    '<!DOCTYPE html>' +
    h(
      'html.dark',
      { lang: 'en' },
      head('Gaia Protocol - Dashboard'),
      h(
        'body.bg-gray-950.text-gray-200.sl-theme-dark',
        top,
        h('main.mx-auto.max-w-7xl.px-4.py-6',
          h('div.flex.items-center.gap-3',
            h('sl-icon', { name: 'activity' }),
            h('div.text-lg.font-semibold', 'Gaia Protocol Dashboard'),
          ),
          h('div.text-sm.text-neutral-500', 'Overview & analytics across the protocol'),
          h('div#dashboard-container')
        ),
        footer,
        bundle
      )
    )
  );
}

export { dashboard };
