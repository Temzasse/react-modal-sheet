import { defineGlobalStyles } from '@pandacss/dev';

// Document and portal styles stay scoped to this example.
export const slackTheme = defineGlobalStyles({
  'html[data-playground][data-example-slug="slack-message"]': {
    '--slack-hairline-scale': '1',
    '@media (min-resolution: 2dppx)': {
      '--slack-hairline-scale': '0.5',
    },
    '@media (min-resolution: 3dppx)': {
      '--slack-hairline-scale': '0.333333',
    },
    '--slack-bg': '#1a1d21',
    '--slack-surface': '#282b30',
    '--slack-search-bg': '#23262b',
    '--slack-text': '#f8f8f8',
    '--slack-muted': '#b3b5b7',
    '--slack-border': '#34373c',
    '--slack-accent': '#d9b8f0',
    '--slack-accent-soft': 'rgb(155 105 190 / 18%)',
    '--slack-tab-bg': 'rgb(49 51 57 / 82%)',
    color: 'var(--slack-text)',
    '&, & body, & #root': {
      backgroundColor: 'var(--slack-bg)',
    },
    accentColor: 'var(--slack-accent)',
  },
  'html[data-example-slug="slack-message"][data-theme="light"]': {
    '--slack-bg': '#ffffff',
    '--slack-surface': '#f1eef4',
    '--slack-search-bg': '#f5f2f7',
    '--slack-text': '#1d1c1d',
    '--slack-muted': '#6b6570',
    '--slack-border': '#e5e1e8',
    '--slack-accent': '#67368a',
    '--slack-accent-soft': 'rgb(129 77 165 / 12%)',
    '--slack-tab-bg': 'rgb(250 248 252 / 86%)',
  },
});
