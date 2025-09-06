import { createContext, useContext } from 'react';
import { type SheetContextType } from './types';

export const SheetContext = createContext<SheetContextType | undefined>(
  undefined
);

export function useSheetContext() {
  const context = useContext(SheetContext);
  if (!context) throw new Error('Sheet context error');
  return context;
}
