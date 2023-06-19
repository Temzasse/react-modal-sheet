import * as React from 'react';
import { SheetScrollerContextType, SheetContextType } from './types';

export const SheetContext = React.createContext<SheetContextType | undefined>(
  undefined
);

export const useSheetContext = () => {
  const context = React.useContext(SheetContext);
  if (!context) throw Error('Sheet context error');
  return context;
};

export const SheetScrollerContext = React.createContext<
  SheetScrollerContextType | undefined
>(undefined);

export function SheetScrollerContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const sheetContext = useSheetContext();
  const [disableDrag, setDisableDrag] = React.useState(
    !!sheetContext.disableDrag
  );

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
  const context = React.useContext(SheetScrollerContext);
  if (!context) throw Error('Sheet scroller context error');
  return context;
};
