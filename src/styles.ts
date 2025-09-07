import type { CSSProperties } from 'react';

export const styles = {
  root: {
    base: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
    },
    decorative: {},
  },
  backdrop: {
    base: {
      zIndex: 1,
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      touchAction: 'none',
      userSelect: 'none',
    },
    decorative: {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      border: 'none',
      WebkitTapHighlightColor: 'transparent',
    },
  },
  container: {
    base: {
      zIndex: 2,
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
      pointerEvents: 'auto',
      display: 'flex',
      flexDirection: 'column',
    },
    decorative: {
      backgroundColor: '#fff',
      borderTopRightRadius: '8px',
      borderTopLeftRadius: '8px',
      boxShadow: '0px -2px 16px rgba(0, 0, 0, 0.3)',
    },
  },
  headerWrapper: {
    base: {
      width: '100%',
    },
    decorative: {},
  },
  header: {
    base: {
      width: '100%',
      position: 'relative',
    },
    decorative: {
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  indicator: {
    base: {},
    decorative: {
      width: '18px',
      height: '4px',
      borderRadius: '99px',
      backgroundColor: '#ddd',
    },
  },
  content: {
    base: {
      minHeight: '0px',
      position: 'relative',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    decorative: {},
  },
  scroller: {
    base: {
      height: '100%',
      overflowY: 'auto',
      overscrollBehaviorY: 'none',
    },
    decorative: {},
  },
} satisfies Record<
  string,
  {
    base: CSSProperties;
    decorative: CSSProperties;
  }
>;
