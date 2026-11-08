import { fileURLToPath } from 'node:url';

import react from '@astrojs/react';
import starlight from '@astrojs/starlight';
import pandacss from '@pandacss/vite';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://temzasse.github.io',
  base: '/react-modal-sheet',
  trailingSlash: 'always',
  devToolbar: { placement: 'bottom-right' },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Geist',
      cssVariable: '--font-body',
      weights: ['100 900'],
      styles: ['normal'],
    },
    {
      provider: fontProviders.google(),
      name: 'Geist Pixel',
      cssVariable: '--font-heading',
      weights: [400],
      styles: ['normal'],
    },
  ],
  integrations: [
    react(),
    starlight({
      title: 'React Modal Sheet',
      logo: {
        src: './src/assets/logo-text.png',
        alt: '',
        replacesTitle: true,
      },
      components: { Head: './src/components/docs-head.astro' },
      description:
        'Flexible bottom sheets for React. Explore the API, gestures, and interactive examples.',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Temzasse/react-modal-sheet',
        },
      ],
      editLink: {
        baseUrl:
          'https://github.com/Temzasse/react-modal-sheet/edit/main/docs/',
      },
      customCss: ['./src/styles/layers.css'],
      sidebar: [
        {
          label: 'Start here',
          items: [
            { label: 'Overview', slug: '' },
            { slug: 'getting-started/installation' },
            { slug: 'getting-started/usage' },
            { slug: 'examples' },
          ],
        },
        {
          label: 'Examples',
          items: [{ autogenerate: { directory: 'examples' } }],
        },
        {
          label: 'API reference',
          items: [{ autogenerate: { directory: 'reference' } }],
        },
        {
          label: 'Guides',
          items: [
            { slug: 'guides/detents' },
            { slug: 'guides/scrolling' },
            { slug: 'guides/keyboard' },
            { slug: 'guides/modal-effect' },
            { slug: 'guides/customization' },
            { slug: 'guides/accessibility' },
            { slug: 'guides/troubleshooting' },
          ],
        },
        { slug: 'contributing' },
      ],
    }),
  ],
  vite: {
    plugins: [pandacss()],
    resolve: {
      alias: {
        'react-modal-sheet': fileURLToPath(
          new URL('../src/index.tsx', import.meta.url)
        ),
      },
      dedupe: ['react', 'react-dom', 'motion', 'react-use-measure'],
    },
    server: { fs: { allow: ['..'] } },
  },
});
