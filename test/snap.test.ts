import type { PanInfo } from 'motion';
import { describe, expect, test, vi } from 'vitest';

import { classifyDragEnd, computeSnapPoints } from '../src/snap';

describe('computeSnapPoints', () => {
  test.each([800, 1000])('converts mixed units at height %i', (sheetHeight) => {
    const snaps = computeSnapPoints({
      sheetHeight,
      snapPointsProp: [0, 100, 0.5, -100, 1],
    });

    expect(snaps).toEqual([
      { snapIndex: 0, snapValue: 0, snapValueY: sheetHeight },
      { snapIndex: 1, snapValue: 100, snapValueY: sheetHeight - 100 },
      { snapIndex: 2, snapValue: sheetHeight / 2, snapValueY: sheetHeight / 2 },
      { snapIndex: 3, snapValue: sheetHeight - 100, snapValueY: 100 },
      { snapIndex: 4, snapValue: sheetHeight, snapValueY: 0 },
    ]);
  });

  test('rounds fractional percentage heights to pixels', () => {
    expect(
      computeSnapPoints({ sheetHeight: 801, snapPointsProp: [0, 0.5, 1] })[1]
    ).toEqual({ snapIndex: 1, snapValue: 401, snapValueY: 400 });
  });

  test('supplies missing closed and fully open endpoints with diagnostics', () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(
      computeSnapPoints({ sheetHeight: 800, snapPointsProp: [0.5] })
    ).toEqual([
      { snapIndex: 0, snapValue: 0, snapValueY: 800 },
      { snapIndex: 1, snapValue: 400, snapValueY: 400 },
      { snapIndex: 2, snapValue: 800, snapValueY: 0 },
    ]);
    expect(error).toHaveBeenCalledWith(
      expect.stringContaining('First snap point')
    );
    expect(error).toHaveBeenCalledWith(
      expect.stringContaining('Last snap point')
    );
  });

  test.each([0, -1])('rejects unmeasured height %i', (sheetHeight) => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(
      computeSnapPoints({ sheetHeight, snapPointsProp: [0, 0.5, 1] })
    ).toEqual([]);
    expect(error).toHaveBeenCalledWith(
      expect.stringContaining('cannot compute snap points')
    );
  });

  test('diagnoses snap points that are not in ascending order', () => {
    const assertion = vi.spyOn(console, 'assert').mockImplementation(() => {});
    computeSnapPoints({ sheetHeight: 800, snapPointsProp: [0, 0.75, 0.5, 1] });
    expect(assertion).toHaveBeenCalledWith(
      false,
      expect.stringContaining('ascending order')
    );
  });

  test('warns about snap points outside the sheet', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    vi.spyOn(console, 'assert').mockImplementation(() => {});
    computeSnapPoints({ sheetHeight: 800, snapPointsProp: [0, -900, 900, 1] });
    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining('Snap point -100 is outside')
    );
    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining('Snap point 900 is outside')
    );
  });
});

describe('classifyDragEnd', () => {
  const snapPoints = computeSnapPoints({
    sheetHeight: 1000,
    snapPointsProp: [0, 0.5, 1],
  });

  test.each([
    {
      name: 'tiny downward movement returns to the nearest snap',
      y: 510,
      offset: 10,
      velocity: 0,
      index: 1,
    },
    {
      name: 'tiny upward movement returns to the nearest snap',
      y: 490,
      offset: -10,
      velocity: 0,
      index: 1,
    },
    {
      name: 'sticks near a snap despite substantial displacement',
      y: 520,
      offset: 100,
      velocity: 0,
      index: 1,
    },
    {
      name: 'downward drag below commit threshold returns upward',
      y: 174,
      offset: 174,
      velocity: 0,
      index: 2,
    },
    {
      name: 'downward drag at commit threshold returns upward',
      y: 175,
      offset: 175,
      velocity: 0,
      index: 2,
    },
    {
      name: 'downward drag past commit threshold advances downward',
      y: 176,
      offset: 176,
      velocity: 0,
      index: 1,
    },
    {
      name: 'upward drag below commit threshold returns downward',
      y: 326,
      offset: -174,
      velocity: 0,
      index: 1,
    },
    {
      name: 'upward drag at commit threshold returns downward',
      y: 325,
      offset: -175,
      velocity: 0,
      index: 1,
    },
    {
      name: 'upward drag past commit threshold advances upward',
      y: 324,
      offset: -176,
      velocity: 0,
      index: 2,
    },
    {
      name: 'downward flick advances one snap',
      y: 100,
      offset: 100,
      velocity: 1201,
      index: 1,
    },
    {
      name: 'upward flick advances one snap',
      y: 900,
      offset: -100,
      velocity: -1201,
      index: 1,
    },
    {
      name: 'strong downward flick closes fully',
      y: 100,
      offset: 100,
      velocity: 2001,
      index: 0,
    },
    {
      name: 'strong upward flick opens fully',
      y: 900,
      offset: -100,
      velocity: -2001,
      index: 2,
    },
    {
      name: 'strong flick boundary still advances only one snap',
      y: 100,
      offset: 100,
      velocity: 2000,
      index: 1,
    },
    {
      name: 'upward strong flick boundary still advances only one snap',
      y: 900,
      offset: -100,
      velocity: -2000,
      index: 1,
    },
    {
      name: 'release velocity takes precedence over displacement',
      y: 600,
      offset: 100,
      velocity: -1300,
      index: 1,
    },
    {
      name: 'downward release velocity takes precedence over displacement',
      y: 400,
      offset: -100,
      velocity: 1300,
      index: 1,
    },
    {
      name: 'flick overrides tiny movement and stickiness',
      y: 501,
      offset: 1,
      velocity: 1300,
      index: 0,
    },
    {
      name: 'downward flick at closed endpoint stays closed',
      y: 1000,
      offset: 100,
      velocity: 1300,
      index: 0,
    },
    {
      name: 'upward flick at open endpoint stays open',
      y: 0,
      offset: -100,
      velocity: -1300,
      index: 2,
    },
    {
      name: 'stationary release stays at the current snap',
      y: 500,
      offset: 0,
      velocity: 0,
      index: 1,
    },
  ])('$name', ({ y, offset, velocity, index }) => {
    const result = classifyDragEnd({
      y,
      info: panInfo({ offset, velocity }),
      sheetHeight: 1000,
      snapPoints,
      dragVelocityThreshold: 1200,
      dragCloseThreshold: 0.6,
    });

    expect(result).toEqual({ yTo: [1000, 500, 0][index], snapIndex: index });
  });

  test.each([
    { y: 599, velocity: 0, threshold: 0.6, expectedY: 0 },
    { y: 600, velocity: 0, threshold: 0.6, expectedY: 1000 },
    { y: 601, velocity: 0, threshold: 0.6, expectedY: 1000 },
    { y: 399, velocity: 0, threshold: 0.4, expectedY: 0 },
    { y: 400, velocity: 0, threshold: 0.4, expectedY: 1000 },
    { y: 500, velocity: 600, threshold: 0.6, expectedY: 1000 },
    { y: 700, velocity: -600, threshold: 0.6, expectedY: 0 },
    { y: 100, velocity: 1201, threshold: 0.6, expectedY: 1000 },
    { y: 900, velocity: -1201, threshold: 0.6, expectedY: 0 },
    { y: -20, velocity: -100, threshold: 0.6, expectedY: 0 },
    { y: 1020, velocity: 100, threshold: 0.6, expectedY: 1000 },
  ])(
    'without snaps: y=$y, velocity=$velocity, close threshold=$threshold',
    ({ y, velocity, threshold, expectedY }) => {
      expect(
        classifyDragEnd({
          y,
          info: panInfo({ offset: velocity < 0 ? -100 : 100, velocity }),
          sheetHeight: 1000,
          snapPoints: [],
          dragVelocityThreshold: 1200,
          dragCloseThreshold: threshold,
        })
      ).toEqual({ yTo: expectedY, snapIndex: undefined });
    }
  );

  test.each([
    { velocity: 799, expectedIndex: 2 },
    { velocity: 800, expectedIndex: 2 },
    { velocity: 801, expectedIndex: 1 },
  ])(
    'honors a custom flick threshold at velocity $velocity',
    ({ velocity, expectedIndex }) => {
      expect(
        classifyDragEnd({
          y: 10,
          info: panInfo({ offset: 10, velocity }),
          sheetHeight: 1000,
          snapPoints,
          dragVelocityThreshold: 800,
          dragCloseThreshold: 0.6,
        })
      ).toEqual({
        yTo: expectedIndex === 2 ? 0 : 500,
        snapIndex: expectedIndex,
      });
    }
  );
});

function panInfo({
  offset,
  velocity,
}: {
  offset: number;
  velocity: number;
}): PanInfo {
  return {
    point: { x: 0, y: offset },
    delta: { x: 0, y: Math.sign(offset) },
    offset: { x: 0, y: offset },
    velocity: { x: 0, y: velocity },
  };
}
