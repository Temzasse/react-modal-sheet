import * as CSS from 'csstype';

const styles: { [key: string]: CSS.Properties } = {
  wrapper: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9999999,
    overflow: 'hidden',
  },
  backdrop: {
    zIndex: 1,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(51, 51, 51, 0.5)',
    touchAction: 'none', // Disable iOS body scrolling
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
    flex: 1,
    overflow: 'auto',
    position: 'relative',
  },
};

export default styles;
