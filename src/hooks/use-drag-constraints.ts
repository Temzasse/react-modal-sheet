import { useCallback, useRef } from 'react';

import { type BoundingBox } from 'motion/react';

// This is a hacky way to fix a bug in motion/react where the drag
// constraints are not updated when window is resized.
// https://github.com/framer/motion/issues/1659
const constraints: BoundingBox = { bottom: 0, top: 0, left: 0, right: 0 };

export function useDragConstraints() {
  const ref = useRef<any>(null);
  const onMeasure = useCallback(() => constraints, []);
  return { ref, onMeasure };
}
