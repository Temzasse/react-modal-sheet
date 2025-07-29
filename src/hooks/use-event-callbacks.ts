// import { type RefObject, useCallback, useEffect, useRef } from 'react';

// import { type SheetEvents } from '../types';

// export function useEventCallbacks(
//   isOpen: boolean,
//   callbacks: RefObject<SheetEvents>
// ) {
//   const prevOpen = usePrevious(isOpen);
//   const didOpen = useRef(false);

//   // Because of AnimatePrecence we don't have access to latest isOpen value
//   // so we need to read and write to a ref to determine if we are
//   // opening or closing the sheet
//   const handleAnimationComplete = useCallback(() => {
//     if (!didOpen.current) {
//       callbacks.current.onOpenEnd?.();
//       didOpen.current = true;
//     } else {
//       callbacks.current.onCloseEnd?.();
//       didOpen.current = false;
//     }
//   }, [isOpen, prevOpen]);

//   useEffect(() => {
//     if (!prevOpen && isOpen) {
//       callbacks.current.onOpenStart?.();
//     } else if (!isOpen && prevOpen) {
//       callbacks.current.onCloseStart?.();
//     }
//   }, [isOpen, prevOpen]);

//   return { handleAnimationComplete };
// }

// function usePrevious<T>(state: T): T | undefined {
//   const ref = useRef<T>(undefined);

//   useEffect(() => {
//     ref.current = state;
//   });

//   return ref.current;
// }
