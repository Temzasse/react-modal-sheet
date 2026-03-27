import { interpolate, useTransform } from 'motion/react';
import { Sheet } from 'react-modal-sheet';

export function useSnapPointTransform(
  /** The output values corresponding to the snap points. Must have the same length as snap points array */
  output: number[],
  /** The default value to return during the first render when snap points are not yet calculated */
  defaultValue?: number
) {
  const { snapPoints, y } = Sheet.useContext();

  return useTransform(y, (val) => {
    const firstValue = output[0];

    if (firstValue === undefined) {
      throw new Error('Output array must have at least one value');
    }

    if (snapPoints.length === 0) {
      return defaultValue ?? firstValue;
    }

    if (output.length !== snapPoints.length) {
      throw new Error('Output array must have the same length as snap points');
    }

    const mix = interpolate(
      snapPoints.map((point) => point.snapValueY),
      output
    );

    return mix(val);
  });
}
