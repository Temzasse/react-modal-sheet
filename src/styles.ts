import { type Properties } from 'csstype';

const styles: Record<string, Properties> = {
  wrapper: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    pointerEvents: 'none',
  },
  backdrop: {
    zIndex: 1,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    touchAction: 'none', // Disable iOS body scrolling
    border: 'none',
  },
  container: {
    zIndex: 2,
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: '8px',
    borderTopLeftRadius: '8px',
    boxShadow: '0px -2px 16px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    pointerEvents: 'auto',
  },
  headerWrapper: {
    width: '100%',
  },
  header: {
    height: '40px',
    width: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    width: '18px',
    height: '4px',
    borderRadius: '99px',
    backgroundColor: '#ddd',
  },
  content: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '0px',
    position: 'relative',
  },
  scroller: {
    height: '100%',
    overflowY: 'auto',
  },
};

export default styles;
