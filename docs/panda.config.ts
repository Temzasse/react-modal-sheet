import { defineConfig } from '@pandacss/dev';

import { musicTheme } from './src/examples/components/apple-music/theme';
import { slackTheme } from './src/examples/components/slack-message/theme';
import { tokens, semanticTokens, textStyles } from './src/theme/tokens';

export default defineConfig({
  presets: ['@pandacss/preset-base', '@pandacss/preset-panda'],
  preflight: false,
  conditions: {
    extend: {
      light: '[data-theme="light"] &',
    },
  },
  theme: {
    extend: {
      tokens,
      semanticTokens,
      textStyles,
    },
  },
  jsxFramework: 'react',
  jsxStyleProps: 'none',
  include: ['./src/**/*.{ts,tsx,astro}'],
  exclude: [],
  outdir: 'styled-system',
  globalCss: {
    ...musicTheme,
    ...slackTheme,
    ':root': {
      '--sl-color-accent-low': '{colors.$accent.subtle}',
      '--sl-color-accent': '{colors.$accent.solid}',
      '--sl-color-accent-high': '{colors.$accent.text}',
      '--sl-color-white': '{colors.$text.heading}',
      '--sl-color-gray-1': '{colors.$text.bright}',
      '--sl-color-gray-2': '{colors.$text.body}',
      '--sl-color-gray-3': '{colors.$text.muted}',
      '--sl-color-gray-4': '{colors.$border.strong}',
      '--sl-color-gray-5': '{colors.$border.default}',
      '--sl-color-gray-6': '{colors.$bg.surface}',
      '--sl-color-black': '{colors.$bg.canvas}',
      '--sl-color-gray-7': '{colors.$bg.navigation}',
      '--sl-color-bg': '{colors.$bg.canvas}',
      '--sl-color-bg-nav': '{colors.$bg.navigation}',
      '--sl-color-bg-sidebar': '{colors.$bg.navigation}',
      '--sl-color-text': '{colors.$text.body}',
      '--sl-color-text-accent': '{colors.$accent.text}',
      '--sl-font': '{fonts.$body}',
      '--sl-font-heading': '{fonts.$heading}',
      '--sl-font-heading-weight': '400',
      '--sl-content-width': '{sizes.$content}',
      '--docs-grain-opacity': '0.08',
    },
    ':root[data-has-sidebar]:not([data-has-toc])': {
      '--sl-content-width': '{sizes.$wide}',
    },
    'html:not([data-playground]) body': {
      textStyle: '$docs.body',
      minHeight: '100vh',
      backgroundGradient: '$page',
      backgroundAttachment: 'fixed',
    },
    'html:not([data-playground]) body::after': {
      content: "''",
      position: 'fixed',
      inset: '$0',
      zIndex: '100',
      pointerEvents: 'none',
      opacity: 'var(--docs-grain-opacity)',
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Cpath fill='%23000' d='M0 0h180v180H0z' filter='url(%23grain)'/%3E%3C/svg%3E\")",
      backgroundRepeat: 'repeat',
    },
    '.sl-markdown-content table': {
      display: 'block',
      overflowX: 'auto',
    },
    '.site-title img': {
      width: '280px',
      maxWidth: '100%',
      height: 'auto',
      imageRendering: 'pixelated',
    },
    'html:not([data-playground]) :is(h1, h2, h3, h4, h5, h6, .site-title, .card .title, .sidebar-content .large, button, [role="button"], .sl-link-button)':
      {
        textStyle: '$docs.heading',
      },
    '.sl-markdown-content td': {
      minWidth: '8rem',
    },
    '.sl-markdown-content td:last-child': {
      minWidth: '18rem',
    },
    // Keep example pages free of the dev toolbar, including fullscreen previews.
    'html[data-playground] astro-dev-toolbar': {
      display: 'none !important',
    },
    // Keep the playground's document reset isolated from Starlight pages.
    'html[data-playground]': {
      '--vh': '1vh',
      backgroundColor: '$bg.canvas',
      color: '$text.body',
      accentColor: '$accent.text',
      height: '100%',
      overflow: 'hidden',
      '@supports (height: 1dvh)': {
        '--vh': '1dvh',
      },
      '& body': {
        height: '100%',
        overflow: 'hidden',
        margin: '$0',
        textStyle: '$example.body',
        fontStyle: 'normal',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        WebkitOverflowScrolling: 'touch',
        WebkitTapHighlightColor: 'transparent',
        WebkitTouchCallout: 'none',
      },
      '& #root': {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        backgroundColor: '$bg.canvas',
        height: '100%',
        minHeight: 'calc(100 * var(--vh))',
      },
      '& #root > astro-island': {
        display: 'contents',
      },
      '& :is(button, input, textarea)': {
        textStyle: '$example.body',
      },
      '& button': {
        border: 'none',
        background: 'none',
        margin: '$0',
        padding: '$0',
      },
      '& *': {
        boxSizing: 'border-box',
      },
      '& ul': {
        listStyle: 'none',
        padding: '$0',
        margin: '$0',
      },
      '& li': {
        margin: '$0',
      },
      '& a': {
        textDecoration: 'none',
        color: 'inherit',
      },
    },
    'html[data-playground]:not([data-example-slug="custom-styles"]):not([data-example-slug="apple-maps"]):not([data-example-slug="apple-music"]):not([data-example-slug="slack-message"]) .react-modal-sheet-container':
      {
        backgroundColor: '{colors.$surface.sheet} !important',
        color: '$surface.text',
      },
    'html[data-playground]:not([data-example-slug="apple-music"]) .react-modal-sheet-drag-indicator':
      {
        backgroundColor: '{colors.$surface.indicator} !important',
      },
    'html[data-playground][data-example-layout="custom"]': {
      color: '$surface.text',
      accentColor: '$surface.text',
      '&, & body, & #root': {
        backgroundColor: '$surface.app',
      },
    },
    'html[data-playground][data-example-layout="shared"] .react-modal-sheet-container':
      {
        '@media (min-width: 720px)': {
          maxWidth: '$sheet',
          left: 'calc(50% - 360px) !important',
        },
      },
  },
});
