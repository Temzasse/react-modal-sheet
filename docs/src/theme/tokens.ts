import {
  defineTokens,
  defineSemanticTokens,
  defineTextStyles,
} from '@pandacss/dev';

// The shared scale is deliberately small; custom app details belong to examples.
export const tokens = defineTokens({
  fonts: {
    $body: {
      value: 'var(--font-body, sans-serif)',
    },
    $heading: {
      value: 'var(--font-heading, var(--font-body, sans-serif))',
    },
    $system: {
      value: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    },
  },
  spacing: {
    $0: {
      value: '0px',
    },
    '$0.5': {
      value: '2px',
    },
    $1: {
      value: '4px',
    },
    '$1.5': {
      value: '6px',
    },
    $2: {
      value: '8px',
    },
    '$2.5': {
      value: '10px',
    },
    $3: {
      value: '12px',
    },
    $4: {
      value: '16px',
    },
    $5: {
      value: '20px',
    },
    $6: {
      value: '24px',
    },
    $7: {
      value: '28px',
    },
    $8: {
      value: '32px',
    },
    $10: {
      value: '40px',
    },
    $12: {
      value: '48px',
    },
    $16: {
      value: '64px',
    },
    $20: {
      value: '80px',
    },
    $24: {
      value: '96px',
    },
  },
  radii: {
    $xs: {
      value: '4px',
    },
    $sm: {
      value: '6px',
    },
    $md: {
      value: '8px',
    },
    $lg: {
      value: '12px',
    },
    $xl: {
      value: '16px',
    },
    $full: {
      value: '999px',
    },
    $circle: {
      value: '50%',
    },
  },
  sizes: {
    $content: {
      value: '52rem',
    },
    $wide: {
      value: '80rem',
    },
    $example: {
      value: '800px',
    },
    $sheet: {
      value: '720px',
    },
  },
  shadows: {
    $subtle: {
      value: '0 1px 3px rgb(0 0 0 / 4%)',
    },
    $floating: {
      value: '0 4px 20px rgb(0 0 0 / 15%)',
    },
    $sheet: {
      value:
        '0 1px 3px rgb(0 0 0 / 10%), 0 1px 2px rgb(0 0 0 / 20%), 0 12px 20px rgb(0 0 0 / 30%)',
    },
  },
  borders: {
    $default: {
      value: '1px solid {colors.$border.default}',
    },
    $subtle: {
      value: '1px solid {colors.$bg.surface}',
    },
    $field: {
      value: '1px solid {colors.$surface.border}',
    },
    $fieldStrong: {
      value: '2px solid {colors.$surface.border}',
    },
    $preview: {
      value: '1px solid {colors.$border.preview}',
    },
    $focus: {
      value: '3px solid {colors.$accent.solid}',
    },
  },
  gradients: {
    $page: {
      value:
        'linear-gradient(to bottom, {colors.$bg.canvas} 0%, {colors.$bg.stop2} 33.333%, {colors.$bg.stop3} 66.667%, {colors.$bg.stop4} 100%)',
    },
  },
});

// Starlight defaults to dark until its theme script chooses light explicitly.
export const semanticTokens = defineSemanticTokens({
  colors: {
    $accent: {
      subtle: {
        value: {
          base: '#392510',
          _light: '#ede2ff',
        },
      },
      solid: {
        value: {
          base: '#f5b841',
          _light: '#763ac5',
        },
      },
      text: {
        value: {
          base: '#ffd27a',
          _light: '#50218c',
        },
      },
    },
    $text: {
      heading: {
        value: {
          base: '#faf7ff',
          _light: '#211631',
        },
      },
      bright: {
        value: {
          base: '#ece6f6',
          _light: '#38294e',
        },
      },
      body: {
        value: {
          base: '#c8bedb',
          _light: '#50415f',
        },
      },
      muted: {
        value: {
          base: '#a094b5',
          _light: '#68597e',
        },
      },
    },
    $border: {
      strong: {
        value: {
          base: '#68597e',
          _light: '#a094b5',
        },
      },
      default: {
        value: {
          base: '#38294e',
          _light: '#d5cbe3',
        },
      },
      preview: {
        value: 'rgba(150, 150, 150, 0.25)',
      },
    },
    $bg: {
      surface: {
        value: {
          base: '#150e25',
          _light: '#eee7f6',
        },
      },
      canvas: {
        value: {
          base: '#0B0520',
          _light: '#fdfaff',
        },
      },
      navigation: {
        value: {
          base: '{colors.$bg.surface}',
          _light: '#f6f1fb',
        },
      },
      stop2: {
        value: {
          base: 'color-mix(in srgb, {colors.$bg.canvas} 85%, black)',
          _light: 'color-mix(in srgb, {colors.$bg.canvas} 99%, black)',
        },
      },
      stop3: {
        value: {
          base: 'color-mix(in srgb, {colors.$bg.canvas} 70%, black)',
          _light: 'color-mix(in srgb, {colors.$bg.canvas} 98%, black)',
        },
      },
      stop4: {
        value: {
          base: 'color-mix(in srgb, {colors.$bg.canvas} 55%, black)',
          _light: 'color-mix(in srgb, {colors.$bg.canvas} 97%, black)',
        },
      },
    },
    $surface: {
      card: {
        value: {
          base: '#2c2c2e',
          _light: '#eeeeee',
        },
      },
      sheet: {
        value: {
          base: '#1c1c1e',
          _light: '#ffffff',
        },
      },
      app: {
        value: {
          base: '#111111',
          _light: '#ffffff',
        },
      },
      text: {
        value: {
          base: '#f5f5f7',
          _light: '#111111',
        },
      },
      muted: {
        value: {
          base: '#a1a1a6',
          _light: '#666666',
        },
      },
      border: {
        value: {
          base: '#38383a',
          _light: '#dddddd',
        },
      },
      field: {
        value: {
          base: '#2c2c2e',
          _light: '#ffffff',
        },
      },
      hover: {
        value: {
          base: '#3a3a3c',
          _light: '#e5e5ea',
        },
      },
      indicator: {
        value: {
          base: '#8e8e93',
          _light: '#aaaaaa',
        },
      },
    },
  },
});

export const textStyles = defineTextStyles({
  $docs: {
    heading: {
      value: {
        fontFamily: '{fonts.$heading}',
        fontWeight: '400',
        fontSynthesis: 'none',
      },
    },
    body: {
      value: {
        fontFamily: '{fonts.$body}',
        fontSize: '1rem',
        fontWeight: '400',
        lineHeight: '1.75',
      },
    },
    caption: {
      value: {
        fontFamily: '{fonts.$body}',
        fontSize: '.8125rem',
      },
    },
    control: {
      value: {
        fontFamily: '{fonts.$heading}',
        fontSize: '.875rem',
        fontWeight: '400',
      },
    },
    link: {
      value: {
        fontFamily: '{fonts.$body}',
        fontSize: '.875rem',
        fontWeight: '600',
      },
    },
  },
  $example: {
    body: {
      value: {
        fontFamily: '{fonts.$system}',
        fontSize: '16px',
        fontWeight: '400',
      },
    },
    control: {
      value: {
        fontFamily: '{fonts.$system}',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '1',
      },
    },
    launch: {
      value: {
        fontFamily: '{fonts.$system}',
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '1.25',
      },
    },
    navigation: {
      value: {
        fontFamily: '{fonts.$system}',
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '1.4',
      },
    },
    eyebrow: {
      value: {
        fontSize: '12px',
        fontWeight: '600',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
      },
    },
    title: {
      value: {
        fontSize: 'clamp(28px, 5vw, 40px)',
        fontWeight: '650',
        letterSpacing: '-0.035em',
        lineHeight: '1.15',
      },
    },
    description: {
      value: {
        fontSize: '17px',
        lineHeight: '1.6',
      },
    },
    label: {
      value: {
        fontSize: '14px',
        fontWeight: '400',
      },
    },
    strong: {
      value: {
        fontSize: '16px',
        fontWeight: '700',
      },
    },
    emphasis: {
      value: {
        fontSize: '16px',
        fontWeight: '600',
      },
    },
    cardTitle: {
      value: {
        fontSize: '18px',
        fontWeight: '500',
      },
    },
    section: {
      value: {
        fontSize: '20px',
        fontWeight: '700',
      },
    },
    display: {
      value: {
        fontSize: '24px',
        fontWeight: '700',
      },
    },
    paragraph: {
      value: {
        fontSize: '16px',
        lineHeight: '1.4',
      },
    },
  },
});
