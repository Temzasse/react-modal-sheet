import * as React from 'react';
import { SheetContextType } from './types';

export const SheetContext = React.createContext<SheetContextType | undefined>(
  undefined
);

export const useSheetContext = () => {
  const context = React.useContext(SheetContext);
  if (!context) throw Error('Sheet context error');
  return context;
};
