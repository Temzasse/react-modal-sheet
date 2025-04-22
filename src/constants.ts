export const MAX_HEIGHT = 'calc(100% - env(safe-area-inset-top) - 34px)';

export const IS_SSR = typeof window === 'undefined';

export const DEFAULT_TWEEN_CONFIG = {
  ease: 'easeOut',
  duration: 0.2,
};

// Cấu hình cho reduced motion - gần như ngay lập tức nhưng vẫn giữ hướng animation
export const REDUCED_MOTION_TWEEN_CONFIG = {
  ease: 'linear',
  duration: 0.01, // Thời lượng cực ngắn để đảm bảo trải nghiệm reduced motion
};

// Cấu hình transition cho component khi reduced motion được bật
export const REDUCED_MOTION_TRANSITION_CONFIG = {
  duration: 0.01,
};

// Cấu hình positions cho sheet
export const SHEET_POSITIONS = {
  // Vị trí ban đầu - ở dưới cùng màn hình
  INITIAL: (windowHeight: number) => ({ y: windowHeight }),
  // Vị trí animation của sheet khi mở với reduced motion - giống với vị trí ban đầu
  REDUCED_MOTION_ANIMATE: (initialY: number) => ({ y: initialY }),
  // Vị trí exit - quay về dưới cùng màn hình
  EXIT: (windowHeight: number) => ({ y: windowHeight }),
};

export const DEFAULT_DRAG_CLOSE_THRESHOLD = 0.6;

export const DEFAULT_DRAG_VELOCITY_THRESHOLD = 500;
