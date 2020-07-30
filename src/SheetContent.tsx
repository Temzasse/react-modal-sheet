import * as React from 'react';

import { SheetContentProps } from './types';
import styles from './styles';

const SheetContent = React.forwardRef<any, SheetContentProps>(
  ({ children, style = {}, ...rest }, ref) => {
    return (
      <div
        {...rest}
        ref={ref}
        className="react-modal-sheet-content"
        style={{ ...styles.content, ...style }}
      >
        {children}
      </div>
    );
  }
);

export default SheetContent;
