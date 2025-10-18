import { h } from "@webtaku/h";

const footer = h('footer.bg-gray-950.border-t.border-gray-800.mt-16',
  h('div.container.mx-auto.px-4.py-6.flex.flex-col.md:flex-row.items-center.justify-between.space-y-4.md:space-y-0',
    h('p.text-gray-500.text-sm', '© 2025 Gaia Protocol. All rights reserved.'),
    h('div.flex.items-center.space-x-6',
      /*h('a', {
        href: 'https://docs.gaiaprotocol.com',
        target: '_blank',
        rel: 'noopener noreferrer',
        class: 'text-gray-400 hover:text-white'
      }, 'Docs'),*/
      h('a', {
        href: 'https://github.com/gaiaprotocol',
        target: '_blank',
        rel: 'noopener noreferrer',
        class: 'text-gray-400 hover:text-white flex items-center space-x-1'
      },
        h('sl-icon', { name: 'github', label: 'GitHub' })
      ),
      h('a', {
        href: 'https://x.com/gaia_protocol',
        target: '_blank',
        rel: 'noopener noreferrer',
        class: 'text-gray-400 hover:text-white flex items-center space-x-1'
      },
        h('sl-icon', { name: 'twitter-x', label: 'X' })
      )
    )
  )
);

export { footer };
