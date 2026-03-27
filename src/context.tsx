import { createContext, useContext } from 'react';
import type { ExposedContextType, InternalContextType } from './types';

export const InternalSheetContext = createContext<
  InternalContextType | undefined
>(undefined);

export const ExposedSheetContext = createContext<
  ExposedContextType | undefined
>(undefined);

export function useInternalContext() {
  const context = useContext(InternalSheetContext);
  if (!context) throw new Error('Sheet context error');
  return context;
}

export function useExposedContext() {
  const context = useContext(ExposedSheetContext);
  if (!context) throw new Error('Sheet context error');
  return context;
}
