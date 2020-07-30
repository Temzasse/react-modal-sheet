import * as React from 'react';

import styles from './styles';

const SheetContent = React.forwardRef<any, any>(
  ({ children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className="react-modal-sheet-content"
        style={styles.content}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

export default SheetContent;
