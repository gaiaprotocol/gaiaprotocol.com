import { h } from '@webtaku/h';
import { head } from './head';
import { bundle } from './bundle';
import { footer } from './footer';
import { top } from './top';

function intro() {
  return '<!DOCTYPE html>' + h(
    'html.dark', { lang: 'en' },
    head('Gaia Protocol'),
    h(
      'body.bg-gray-950.text-gray-300.sl-theme-dark',
      top,

      'Gaia Protocol',

      footer,
      bundle,
    )
  );
}

export { intro };
