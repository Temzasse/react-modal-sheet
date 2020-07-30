import * as React from 'react';

import { SheetEvents } from './types';
import { applyRootStyles, cleanupRootStyles } from './utils';

export const useModalEffect = (isOpen: boolean, rootId?: string) => {
  const prevOpen = usePrevious(isOpen);

  // Automatically apply the iOS modal effect to the body when sheet opens/closes
  React.useEffect(() => {
    if (rootId && !prevOpen && isOpen) {
      applyRootStyles(rootId);
    } else if (rootId && !isOpen && prevOpen) {
      cleanupRootStyles(rootId);
    }
  }, [isOpen, prevOpen]); // eslint-disable-line

  // Make sure to cleanup modal styles on unmount
  React.useEffect(() => {
    return () => {
      if (rootId && isOpen) cleanupRootStyles(rootId);
    };
  }, [isOpen]); // eslint-disable-line
};

export const useEventCallbacks = (
  isOpen: boolean,
  callbacks: React.MutableRefObject<SheetEvents>
) => {
  const prevOpen = usePrevious(isOpen);
  const didOpen = React.useRef(false);

  // Because of AnimatePrecence we don't have access to latest isOpen value
  // so we need to read and write to a ref to determine if we are
  // opening or closing the sheet
  const handleAnimationComplete = React.useCallback(() => {
    if (!didOpen.current) {
      callbacks.current.onOpenEnd?.();
      didOpen.current = true;
    } else {
      callbacks.current.onCloseEnd?.();
      didOpen.current = false;
    }
  }, [isOpen, prevOpen]); // eslint-disable-line

  React.useEffect(() => {
    if (!prevOpen && isOpen) {
      callbacks.current.onOpenStart?.();
    } else if (!isOpen && prevOpen) {
      callbacks.current.onCloseStart?.();
    }
  }, [isOpen, prevOpen]); // eslint-disable-line

  return { handleAnimationComplete };
};

const usePrevious = <T,>(state: T): T | undefined => {
  const ref = React.useRef<T>();

  React.useEffect(() => {
    ref.current = state;
  });

  return ref.current;
};
