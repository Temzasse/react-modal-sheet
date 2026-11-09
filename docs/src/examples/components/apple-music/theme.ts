import { defineGlobalStyles } from '@pandacss/dev';

// Document and portal styles stay scoped to this example.
export const musicTheme = defineGlobalStyles({
  'html[data-playground][data-example-slug="apple-music"]': {
    '&, & body, & #root': {
      backgroundColor: '#0d0719',
    },
    color: '#ffffff',
    '& .react-modal-sheet-drag-indicator': {
      backgroundColor: '#777777 !important',
    },
    accentColor: '#ffffff',
  },
});
