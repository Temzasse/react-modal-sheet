import React, { type ReactNode, createContext, useContext, useState } from 'react';
import { type SheetScrollerContextType, type SheetContextType } from './types';

export const SheetContext = createContext<SheetContextType | undefined>(
  undefined
);

export const useSheetContext = () => {
  const context = useContext(SheetContext);
  if (!context) throw Error('Sheet context error');
  return context;
};

export const SheetScrollerContext = createContext<
  SheetScrollerContextType | undefined
>(undefined);

export function SheetScrollerContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const sheetContext = useSheetContext();
  const [disableDrag, setDisableDrag] = useState(!!sheetContext.disableDrag);

  function setDragEnabled() {
    if (!sheetContext.disableDrag) setDisableDrag(false);
  }

  function setDragDisabled() {
    if (!disableDrag) setDisableDrag(true);
  }

  return (
    <SheetScrollerContext.Provider
      value={{ disableDrag, setDragEnabled, setDragDisabled }}
    >
      {children}
    </SheetScrollerContext.Provider>
  );
}

export const useSheetScrollerContext = () => {
  const context = useContext(SheetScrollerContext);
  if (!context) throw Error('Sheet scroller context error');
  return context;
};
