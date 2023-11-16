export const SAFE_AREA_TOP_OFFSET = 34;

export const MAX_HEIGHT = `calc(100% - env(safe-area-inset-top) - ${SAFE_AREA_TOP_OFFSET}px)`;

export const IS_SSR = typeof window === 'undefined';

export const DEFAULT_TWEEN_CONFIG = {
  ease: 'easeOut',
  duration: 0.2,
};

export const REDUCED_MOTION_TWEEN_CONFIG = {
  ease: 'linear',
  duration: 0.01,
};

export const DRAG_CLOSE_THRESHOLD = 0.6;

export const DRAG_VELOCITY_THRESHOLD = 500;
