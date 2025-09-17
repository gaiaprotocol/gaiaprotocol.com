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
        h('main#dashboard-container.mx-auto.max-w-7xl.px-4'),
        footer,
        bundle
      )
    )
  );
}

export { dashboard };
