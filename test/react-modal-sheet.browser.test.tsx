import React, { createRef, StrictMode, type RefObject } from 'react';
import { describe, expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { page, userEvent, type Locator } from 'vitest/browser';

import {
  Sheet,
  type SheetContentProps,
  type SheetHeaderProps,
  type SheetProps,
  type SheetRef,
} from '../src';

test('opens, closes, and reopens with ordered lifecycle callbacks', async () => {
  const events: string[] = [];
  const onAction = vi.fn();
  const sheetRef = createRef<SheetRef>();
  const sheetProps = {
    onOpenStart: () => events.push('open:start'),
    onOpenEnd: () => events.push('open:end'),
    onCloseStart: () => events.push('close:start'),
    onCloseEnd: () => events.push('close:end'),
  };
  const screen = await render(
    <TestSheet
      onAction={onAction}
      sheetRef={sheetRef}
      sheetProps={{ ...sheetProps, isOpen: false }}
    />
  );
  await expect.element(page.getByTestId('container')).not.toBeInTheDocument();

  await screen.rerender(
    <TestSheet
      onAction={onAction}
      sheetRef={sheetRef}
      sheetProps={sheetProps}
    />
  );
  await expectSheetAt({ sheetRef, y: 0 });
  await expect.poll(() => events).toEqual(['open:start', 'open:end']);
  await page.getByRole('button', { name: 'Content action' }).click();
  expect(onAction).toHaveBeenCalledTimes(1);

  await screen.rerender(
    <TestSheet
      onAction={onAction}
      sheetRef={sheetRef}
      sheetProps={{ ...sheetProps, isOpen: false }}
    />
  );
  await expect.element(page.getByTestId('container')).not.toBeInTheDocument();
  await page.getByRole('button', { name: 'Background action' }).click();
  expect(onAction).toHaveBeenCalledTimes(2);
  expect(events).toEqual([
    'open:start',
    'open:end',
    'close:start',
    'close:end',
  ]);

  await screen.rerender(
    <TestSheet
      onAction={onAction}
      sheetRef={sheetRef}
      sheetProps={sheetProps}
    />
  );
  await expectSheetAt({ sheetRef, y: 0 });
  await expect
    .poll(() => events)
    .toEqual([
      'open:start',
      'open:end',
      'close:start',
      'close:end',
      'open:start',
      'open:end',
    ]);
});

test('initialSnap, snapTo, context, and rendered position agree', async () => {
  const sheetRef = createRef<SheetRef>();
  const onSnap = vi.fn();
  const onClose = vi.fn();
  const sheetProps = {
    snapPoints: [0, 0.5, 1],
    initialSnap: 1,
    onSnap,
    onClose,
  };
  const screen = await render(
    <TestSheet sheetRef={sheetRef} sheetProps={sheetProps} />
  );
  await expect.poll(() => onSnap).toHaveBeenLastCalledWith(1);
  const height = getSheet(sheetRef).height;
  await expectSheetAt({ sheetRef, y: height / 2 });
  await expect.element(page.getByTestId('current-snap')).toHaveTextContent('1');

  await page.getByRole('button', { name: 'Snap fully open' }).click();
  await expectSheetAt({ sheetRef, y: 0 });
  await expect.element(page.getByTestId('current-snap')).toHaveTextContent('2');
  expect(onSnap).toHaveBeenLastCalledWith(2);
  expect(getSheet(sheetRef).yInverted.get()).toBeCloseTo(height, 0);
  expect(getSheet(sheetRef).yProgress.get()).toBeCloseTo(1);

  await page.getByRole('button', { name: 'Snap halfway' }).click();
  await expectSheetAt({ sheetRef, y: height / 2 });
  await expect.element(page.getByTestId('current-snap')).toHaveTextContent('1');
  expect(getSheet(sheetRef).yProgress.get()).toBeCloseTo(0.5);

  await page.getByRole('button', { name: 'Snap closed' }).click();
  expect(onClose).toHaveBeenCalledTimes(1);
  // Closing is controlled: requesting closure does not change isOpen.
  await expectSheetAt({ sheetRef, y: height / 2 });
  await screen.rerender(
    <TestSheet
      sheetRef={sheetRef}
      sheetProps={{ ...sheetProps, isOpen: false }}
    />
  );
  await expect.element(page.getByTestId('container')).not.toBeInTheDocument();
});

test('header dragging moves the sheet before release and settles at a snap', async () => {
  const sheetRef = createRef<SheetRef>();
  const onSnap = vi.fn();
  await render(
    <TestSheet
      sheetRef={sheetRef}
      sheetProps={{ snapPoints: [0, 0.5, 1], initialSnap: 2, onSnap }}
    />
  );
  await expectSheetAt({ sheetRef, y: 0 });
  const distance = getSheet(sheetRef).height * 0.3;

  await drag({
    target: page.getByTestId('header'),
    deltaY: distance,
    whileDragging: async () => {
      expect(getSheet(sheetRef).y.get()).toBeGreaterThan(distance - 10);
      expect(
        page.getByTestId('container').element().getBoundingClientRect().top
      ).toBeGreaterThan(
        window.innerHeight - getSheet(sheetRef).height + distance - 10
      );
    },
  });

  await expectSheetAt({ sheetRef, y: getSheet(sheetRef).height / 2 });
  await expect.element(page.getByTestId('current-snap')).toHaveTextContent('1');
  expect(onSnap).toHaveBeenLastCalledWith(1);

  await drag({
    target: page.getByTestId('header'),
    deltaY: -getSheet(sheetRef).height * 0.35,
  });
  await expectSheetAt({ sheetRef, y: 0 });
  expect(onSnap).toHaveBeenLastCalledWith(2);
});

test('dragging upward cannot move past fully open', async () => {
  const sheetRef = createRef<SheetRef>();
  await render(
    <TestSheet
      sheetRef={sheetRef}
      sheetProps={{ detent: 'content' }}
      contentHeight={200}
    />
  );
  await expectSheetAt({ sheetRef, y: 0 });
  await drag({
    target: page.getByTestId('header'),
    deltaY: -120,
    whileDragging: async () => {
      expect(getSheet(sheetRef).y.get()).toBe(0);
    },
  });
  await expectSheetAt({ sheetRef, y: 0 });
});

test('dragging down requests closure and the parent can close the sheet', async () => {
  const sheetRef = createRef<SheetRef>();
  const onClose = vi.fn();
  const screen = await render(
    <TestSheet sheetRef={sheetRef} sheetProps={{ onClose }} />
  );
  await expectSheetAt({ sheetRef, y: 0 });
  await drag({
    target: page.getByTestId('header'),
    deltaY: getSheet(sheetRef).height * 0.75,
  });
  await expect.poll(() => onClose).toHaveBeenCalledTimes(1);
  await screen.rerender(
    <TestSheet sheetRef={sheetRef} sheetProps={{ isOpen: false, onClose }} />
  );
  await expect.element(page.getByTestId('container')).not.toBeInTheDocument();
});

test('disableDismiss returns to the lowest open snap and still allows explicit closure', async () => {
  const sheetRef = createRef<SheetRef>();
  const onClose = vi.fn();
  const sheetProps = {
    snapPoints: [0, 0.5, 1],
    initialSnap: 2,
    disableDismiss: true,
    onClose,
  };
  const screen = await render(
    <TestSheet sheetRef={sheetRef} sheetProps={sheetProps} />
  );
  await expectSheetAt({ sheetRef, y: 0 });
  await drag({
    target: page.getByTestId('header'),
    deltaY: getSheet(sheetRef).height * 0.75,
  });
  await expectSheetAt({ sheetRef, y: getSheet(sheetRef).height / 2 });
  await expect.element(page.getByTestId('current-snap')).toHaveTextContent('1');
  expect(onClose).not.toHaveBeenCalled();
  await page.getByRole('button', { name: 'Snap closed' }).click();
  expect(onClose).toHaveBeenCalledTimes(1);
  await screen.rerender(
    <TestSheet
      sheetRef={sheetRef}
      sheetProps={{ ...sheetProps, isOpen: false }}
    />
  );
  await expect.element(page.getByTestId('container')).not.toBeInTheDocument();
});

test.each(['header', 'content'] as const)(
  'disableDrag prevents dragging from the %s',
  async (surface) => {
    const sheetRef = createRef<SheetRef>();
    const onDragStart = vi.fn();
    await render(
      <TestSheet
        sheetRef={sheetRef}
        sheetProps={{ disableDrag: true, onDragStart }}
      />
    );
    await expectSheetAt({ sheetRef, y: 0 });
    await drag({
      target: page.getByTestId(surface),
      deltaY: 200,
      whileDragging: async () => {
        expect(getSheet(sheetRef).y.get()).toBe(0);
      },
    });
    await expectSheetAt({ sheetRef, y: 0 });
    expect(onDragStart).not.toHaveBeenCalled();
  }
);

test('content disableDrag leaves header dragging enabled', async () => {
  const sheetRef = createRef<SheetRef>();
  const onDragStart = vi.fn();
  await render(
    <TestSheet
      sheetRef={sheetRef}
      sheetProps={{ onDragStart }}
      contentProps={{ disableDrag: true }}
    />
  );
  await expectSheetAt({ sheetRef, y: 0 });
  await drag({ target: page.getByTestId('content'), deltaY: 100 });
  expect(onDragStart).not.toHaveBeenCalled();
  await expectSheetAt({ sheetRef, y: 0 });
  await drag({ target: page.getByTestId('header'), deltaY: 100 });
  expect(onDragStart).toHaveBeenCalledTimes(1);
  await expectSheetAt({ sheetRef, y: 0 });
});

test('header disableDrag leaves content dragging enabled', async () => {
  const sheetRef = createRef<SheetRef>();
  const onDragStart = vi.fn();
  await render(
    <TestSheet
      sheetRef={sheetRef}
      sheetProps={{ onDragStart }}
      headerProps={{ disableDrag: true }}
    />
  );
  await expectSheetAt({ sheetRef, y: 0 });
  await drag({ target: page.getByTestId('header'), deltaY: 100 });
  expect(onDragStart).not.toHaveBeenCalled();
  await expectSheetAt({ sheetRef, y: 0 });
  await drag({ target: page.getByTestId('content'), deltaY: 100 });
  expect(onDragStart).toHaveBeenCalledTimes(1);
  await expectSheetAt({ sheetRef, y: 0 });
});

test('content drag control can depend on the current snap', async () => {
  const sheetRef = createRef<SheetRef>();
  const onDragStart = vi.fn();
  await render(
    <TestSheet
      sheetRef={sheetRef}
      sheetProps={{ snapPoints: [0, 0.5, 1], initialSnap: 1, onDragStart }}
      contentProps={{ disableDrag: ({ currentSnap }) => currentSnap !== 2 }}
    />
  );
  await expect.poll(() => sheetRef.current?.height ?? 0).toBeGreaterThan(0);
  await expectSheetAt({ sheetRef, y: getSheet(sheetRef).height / 2 });
  await drag({ target: page.getByTestId('content'), deltaY: 100 });
  expect(onDragStart).not.toHaveBeenCalled();
  await page.getByRole('button', { name: 'Snap fully open' }).click();
  await expectSheetAt({ sheetRef, y: 0 });
  await expect.element(page.getByTestId('current-snap')).toHaveTextContent('2');
  await drag({ target: page.getByTestId('content'), deltaY: 100 });
  expect(onDragStart).toHaveBeenCalledTimes(1);
  await expectSheetAt({ sheetRef, y: 0 });
});

test('remeasures snap points after viewport resize and still supports dragging', async () => {
  const sheetRef = createRef<SheetRef>();
  const originalViewport = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  const screen = await render(
    <TestSheet
      sheetRef={sheetRef}
      sheetProps={{ snapPoints: [0, 0.5, 1], initialSnap: 2 }}
    />
  );
  try {
    await expectSheetAt({ sheetRef, y: 0 });
    await page.viewport(500, 600);
    await expect.poll(() => getSheet(sheetRef).height).toBe(566);
    expect(getSheet(sheetRef).snapPoints[1]).toEqual({
      snapIndex: 1,
      snapValue: 283,
      snapValueY: 283,
    });
    await expectSheetAt({ sheetRef, y: 0 });
    await drag({ target: page.getByTestId('header'), deltaY: 170 });
    await expectSheetAt({ sheetRef, y: 283 });
    await expect
      .element(page.getByTestId('current-snap'))
      .toHaveTextContent('1');
    await page.getByRole('button', { name: 'Snap fully open' }).click();
    await expectSheetAt({ sheetRef, y: 0 });
  } finally {
    await screen.unmount();
    await page.viewport(originalViewport.width, originalViewport.height);
  }
});

test('scrolling content does not drag the sheet; returning to the top enables dragging', async () => {
  const sheetRef = createRef<SheetRef>();
  const onDragStart = vi.fn();
  const contentDrag = vi.fn(() => false);
  await render(
    <TestSheet
      sheetRef={sheetRef}
      sheetProps={{ onDragStart }}
      contentProps={{ disableDrag: contentDrag }}
      contentHeight={2000}
    />
  );
  await expectSheetAt({ sheetRef, y: 0 });
  const scroller = getScroller();
  await userEvent.wheel(page.getByTestId('content'), { delta: { y: 300 } });
  await expect.poll(() => scroller.scrollTop).toBeGreaterThan(100);
  await expect
    .poll(() => contentDrag)
    .toHaveBeenLastCalledWith(
      expect.objectContaining({ scrollPosition: 'middle' })
    );
  await drag({ target: page.getByTestId('content'), deltaY: 100 });
  expect(onDragStart).not.toHaveBeenCalled();
  await expectSheetAt({ sheetRef, y: 0 });

  await userEvent.wheel(page.getByTestId('content'), { delta: { y: -3000 } });
  await expect.poll(() => scroller.scrollTop).toBe(0);
  await expect
    .poll(() => contentDrag)
    .toHaveBeenLastCalledWith(
      expect.objectContaining({ scrollPosition: 'top' })
    );
  await drag({ target: page.getByTestId('content'), deltaY: 100 });
  expect(onDragStart).toHaveBeenCalledTimes(1);
  await expectSheetAt({ sheetRef, y: 0 });
});

test('disableScroll can depend on the current snap', async () => {
  const sheetRef = createRef<SheetRef>();
  await render(
    <TestSheet
      sheetRef={sheetRef}
      sheetProps={{ snapPoints: [0, 0.5, 1], initialSnap: 1 }}
      contentProps={{
        disableDrag: true,
        disableScroll: ({ currentSnap }) => currentSnap !== 2,
      }}
      contentHeight={2000}
    />
  );
  await expect.poll(() => sheetRef.current?.height ?? 0).toBeGreaterThan(0);
  await expect.poll(() => sheetRef.current?.currentSnap).toBe(1);
  await expectSheetAt({ sheetRef, y: getSheet(sheetRef).height / 2 });
  const scroller = getScroller();
  expect(getComputedStyle(scroller).overflowY).toBe('clip');
  await userEvent.wheel(page.getByTestId('content'), { delta: { y: 300 } });
  await animationFrames(4);
  expect(scroller.scrollTop).toBe(0);

  await page.getByRole('button', { name: 'Snap fully open' }).click();
  await expectSheetAt({ sheetRef, y: 0 });
  await expect.poll(() => getComputedStyle(scroller).overflowY).toBe('auto');
  await userEvent.wheel(page.getByTestId('content'), { delta: { y: 300 } });
  await expect.poll(() => scroller.scrollTop).toBeGreaterThan(100);
  expect(getSheet(sheetRef).y.get()).toBeCloseTo(0);
});

describe('sizing', () => {
  test.each(['default', 'full'] as const)(
    '%s detent uses the viewport height',
    async (detent) => {
      const sheetRef = createRef<SheetRef>();
      await render(<TestSheet sheetRef={sheetRef} sheetProps={{ detent }} />);
      await expectSheetAt({ sheetRef, y: 0 });
      expect(getSheet(sheetRef).height).toBe(
        window.innerHeight - (detent === 'default' ? 34 : 0)
      );
    }
  );

  test('content detent grows with content and caps height with a usable scroller', async () => {
    const sheetRef = createRef<SheetRef>();
    const screen = await render(
      <TestSheet
        sheetRef={sheetRef}
        sheetProps={{ detent: 'content' }}
        contentHeight={100}
      />
    );
    await expectSheetAt({ sheetRef, y: 0 });
    const initialHeight = getSheet(sheetRef).height;
    await screen.rerender(
      <TestSheet
        sheetRef={sheetRef}
        sheetProps={{ detent: 'content' }}
        contentHeight={300}
      />
    );
    await expect
      .poll(() => getSheet(sheetRef).height)
      .toBe(initialHeight + 200);
    await screen.rerender(
      <TestSheet
        sheetRef={sheetRef}
        sheetProps={{ detent: 'content' }}
        contentHeight={2000}
      />
    );
    await expect
      .poll(() => getSheet(sheetRef).height)
      .toBe(window.innerHeight - 34);
    await userEvent.wheel(page.getByTestId('content'), { delta: { y: 3000 } });
    await expect
      .element(page.getByRole('button', { name: 'Last item' }))
      .toBeInViewport();
    await page.getByRole('button', { name: 'Last item' }).click();
  });
});

test('backdrop dismissal requires an explicit handler', async () => {
  const sheetRef = createRef<SheetRef>();
  const onClose = vi.fn();
  const screen = await render(
    <TestSheet sheetRef={sheetRef} sheetProps={{ onClose }} />
  );
  await expectSheetAt({ sheetRef, y: 0 });
  expect(
    getComputedStyle(page.getByTestId('backdrop').element()).pointerEvents
  ).toBe('none');
  expect(onClose).not.toHaveBeenCalled();
  await screen.rerender(
    <TestSheet sheetRef={sheetRef} sheetProps={{ onClose }} dismissOnBackdrop />
  );
  await page.getByTestId('backdrop').click({ position: { x: 10, y: 10 } });
  expect(onClose).toHaveBeenCalledTimes(1);
});

test('uses a custom portal mount point and removes the portal on unmount', async () => {
  const mountPoint = document.createElement('div');
  document.body.append(mountPoint);
  try {
    const sheetRef = createRef<SheetRef>();
    const screen = await render(
      <TestSheet sheetRef={sheetRef} sheetProps={{ mountPoint }} />
    );
    await expectSheetAt({ sheetRef, y: 0 });
    expect(page.getByTestId('sheet').element().parentElement).toBe(mountPoint);
    await screen.unmount();
    expect(mountPoint.childElementCount).toBe(0);
  } finally {
    mountPoint.remove();
  }
});

test('opens and closes under StrictMode', async () => {
  const sheetRef = createRef<SheetRef>();
  const screen = await render(
    <StrictMode>
      <TestSheet sheetRef={sheetRef} />
    </StrictMode>
  );
  await expectSheetAt({ sheetRef, y: 0 });
  await screen.rerender(
    <StrictMode>
      <TestSheet sheetRef={sheetRef} sheetProps={{ isOpen: false }} />
    </StrictMode>
  );
  await expect.element(page.getByTestId('container')).not.toBeInTheDocument();
});

test('reduced motion still reaches the requested snap and closes', async () => {
  const sheetRef = createRef<SheetRef>();
  const sheetProps = {
    prefersReducedMotion: true,
    snapPoints: [0, 0.5, 1],
    initialSnap: 1,
  };
  const screen = await render(
    <TestSheet sheetRef={sheetRef} sheetProps={sheetProps} />
  );
  await expect.poll(() => sheetRef.current?.height ?? 0).toBeGreaterThan(0);
  await expect.poll(() => sheetRef.current?.currentSnap).toBe(1);
  await expectSheetAt({ sheetRef, y: getSheet(sheetRef).height / 2 });
  await page.getByRole('button', { name: 'Snap fully open' }).click();
  await expectSheetAt({ sheetRef, y: 0 });
  await screen.rerender(
    <TestSheet
      sheetRef={sheetRef}
      sheetProps={{ ...sheetProps, isOpen: false }}
    />
  );
  await expect.element(page.getByTestId('container')).not.toBeInTheDocument();
});

function TestSheet({
  sheetRef,
  sheetProps,
  contentProps,
  headerProps,
  contentHeight = 1000,
  dismissOnBackdrop = false,
  onAction,
}: {
  sheetRef?: RefObject<SheetRef | null>;
  sheetProps?: Omit<Partial<SheetProps>, 'children'>;
  contentProps?: Pick<SheetContentProps, 'disableDrag' | 'disableScroll'>;
  headerProps?: Pick<SheetHeaderProps, 'disableDrag'>;
  contentHeight?: number;
  dismissOnBackdrop?: boolean;
  onAction?: () => void;
}) {
  return (
    <>
      <button onClick={onAction}>Background action</button>
      <Sheet
        ref={sheetRef}
        isOpen
        onClose={() => {}}
        {...sheetProps}
        data-testid="sheet"
      >
        <Sheet.Container data-testid="container">
          <Sheet.Header {...headerProps} data-testid="header" />
          <Sheet.Content {...contentProps} data-testid="content">
            <div
              style={{
                height: contentHeight,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <button onClick={onAction}>Content action</button>
              {sheetProps?.snapPoints && <SnapControls />}
              <button style={{ marginTop: 'auto' }}>Last item</button>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop
          data-testid="backdrop"
          onClick={dismissOnBackdrop ? sheetProps?.onClose : undefined}
        />
      </Sheet>
    </>
  );
}

function SnapControls() {
  const { snapTo, currentSnap } = Sheet.useContext();
  return (
    <>
      <output data-testid="current-snap">{currentSnap}</output>
      <button onClick={() => snapTo(2)}>Snap fully open</button>
      <button onClick={() => snapTo(1)}>Snap halfway</button>
      <button onClick={() => snapTo(0)}>Snap closed</button>
    </>
  );
}

async function expectSheetAt({
  sheetRef,
  y,
}: {
  sheetRef: RefObject<SheetRef | null>;
  y: number;
}) {
  await expect.poll(() => sheetRef.current?.height ?? 0).toBeGreaterThan(0);
  await expect.poll(() => sheetRef.current?.y.get()).toBeCloseTo(y, 0);
  await expect
    .poll(
      () => page.getByTestId('container').element().getBoundingClientRect().top
    )
    .toBeCloseTo(window.innerHeight - getSheet(sheetRef).height + y, 0);
  await expect.element(page.getByTestId('sheet')).toBeVisible();
}

async function drag({
  target,
  deltaY,
  whileDragging,
}: {
  target: Locator;
  deltaY: number;
  whileDragging?: () => Promise<void>;
}) {
  const rect = target.element().getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + 10;
  await userEvent.pointer({
    target,
    coords: { x: rect.width / 2, y: 10 },
    keys: '[MouseLeft>]',
  });
  try {
    for (let step = 1; step <= 12; step++) {
      await userEvent.pointer({ coords: { x, y: y + (deltaY * step) / 12 } });
      await animationFrames(1);
    }
    // Hold still to test distance-based snapping, independent of driver speed.
    // Exact flick velocities are covered by the classifier unit tests.
    await animationFrames(8);
    await whileDragging?.();
  } finally {
    await userEvent.pointer({
      coords: { x, y: y + deltaY },
      keys: '[/MouseLeft]',
    });
  }
}

async function animationFrames(count: number) {
  for (let frame = 0; frame < count; frame++) {
    await new Promise<void>((resolve) =>
      requestAnimationFrame(() => resolve())
    );
  }
}

function getSheet(sheetRef: RefObject<SheetRef | null>) {
  const sheet = sheetRef.current;
  if (!sheet) throw new Error('Expected the sheet ref to be mounted');
  return sheet;
}

function getScroller() {
  const scroller = document.querySelector<HTMLElement>(
    '.react-modal-sheet-content-scroller'
  );
  if (!scroller) throw new Error('Expected sheet content to be mounted');
  return scroller;
}
