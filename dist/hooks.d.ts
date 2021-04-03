import * as React from 'react';
import { SheetEvents } from './types';
export declare const useModalEffect: (isOpen: boolean, rootId?: string | undefined) => void;
export declare const useEventCallbacks: (isOpen: boolean, callbacks: React.MutableRefObject<SheetEvents>) => {
    handleAnimationComplete: () => void;
};
