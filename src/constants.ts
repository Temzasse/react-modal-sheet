import type { SheetTweenConfig } from './types';

export const MAX_HEIGHT = 'calc(100% - env(safe-area-inset-top) - 34px)';

export const IS_SSR = typeof window === 'undefined';

export const DEFAULT_TWEEN_CONFIG: SheetTweenConfig = {
  ease: 'easeOut',
  duration: 0.2,
};

export const REDUCED_MOTION_TWEEN_CONFIG: SheetTweenConfig = {
  ease: 'linear',
  duration: 0.01,
};

export const DEFAULT_DRAG_CLOSE_THRESHOLD = 0.6;

export const DEFAULT_DRAG_VELOCITY_THRESHOLD = 500;

export const REACHABILITY_PADDING_VAR =
  '--react-modal-sheet-content-reachability-padding';
