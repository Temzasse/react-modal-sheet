import { clamp, motion, useTransform } from 'motion/react';
import { useState } from 'react';
import { Sheet, type SheetRef } from 'react-modal-sheet';

import { styled } from '../../../styled-system/jsx';
import { BoxList } from './box-list';
import { Button } from './common';
import { ExampleLayout } from './example-layout';

const snapPoints = [0, 170, 0.5, -200, 1];
const initialSnap = 1;
const lastSnap = snapPoints.length - 1;
const footerHeight = 80;

export function ScrollableSnapPoints() {
  const [currentSnap, setCurrentSnap] = useState(initialSnap);
  const [sheetRef, setSheetRef] = useState<SheetRef | null>(null);

  function handleSheetRef(ref: SheetRef | null) {
    if (!sheetRef && ref) setSheetRef(ref);
  }

  return (
    <ExampleLayout
      title="Scrollable + snap points"
      description="A combination of scrollable content inside the sheet with snap points. Additionally has a custom footer that stays in place when the sheet moves."
    >
      {({ isOpen, close }) => (
        <Sheet
          ref={handleSheetRef}
          isOpen={isOpen}
          onClose={close}
          snapPoints={snapPoints}
          initialSnap={initialSnap}
          onSnap={setCurrentSnap}
        >
          <Sheet.Container>
            <SheetHeader>
              <Sheet.DragIndicator />
              <CurrentSnapText>
                <span>Current snap point: {currentSnap}</span>
                <span>Content is only scrollable at the upmost snap point</span>
              </CurrentSnapText>
            </SheetHeader>

            <Sheet.Content
              // Allow scroll and drag for content when at the upmost snap point
              disableScroll={(state) => state.currentSnap !== lastSnap}
              // Make sure there's enough padding at the bottom for the footer
              scrollStyle={{ paddingBottom: footerHeight }}
            >
              <BoxList count={20} />
            </Sheet.Content>
          </Sheet.Container>

          {/* Only render the footer when the ref has been set */}
          {!!sheetRef && <SheetFooter sheetRef={sheetRef} />}

          <Sheet.Backdrop onTap={close} />
        </Sheet>
      )}
    </ExampleLayout>
  );
}

// A custom sheet footer component
function SheetFooter({ sheetRef }: { sheetRef: SheetRef }) {
  /**
   * Move the footer up as the sheet is dragged up but only until till it reaches
   * its own height (so that it sticks to the bottom).
   * Also animate it down when the sheet is dragged back down so that it
   * looks like it is part of the sheet.
   */
  const footerY = useTransform(() => {
    const y = sheetRef.yInverted.get();
    return clamp(0, footerHeight, footerHeight - y);
  });

  return (
    <Footer
      style={{
        y: footerY,
        height: footerHeight,
      }}
    >
      <Controls>
        <Button onPress={() => sheetRef.snapTo(0)}>0</Button>
        <Button onPress={() => sheetRef.snapTo(1)}>1</Button>
        <Button onPress={() => sheetRef.snapTo(2)}>2</Button>
        <Button onPress={() => sheetRef.snapTo(3)}>3</Button>
        <Button onPress={() => sheetRef.snapTo(4)}>4</Button>
      </Controls>
    </Footer>
  );
}

const SheetHeader = styled(Sheet.Header, {
  base: {
    padding: '16px',
    backgroundColor: 'var(--example-sheet-bg)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
  },
});

const CurrentSnapText = styled('div', {
  base: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    '& > span:first-child': {
      fontWeight: '600',
      fontSize: '16px',
    },
    '& > span:last-child': {
      fontSize: '14px',
      color: 'var(--example-muted)',
    },
  },
});

const Footer = styled(motion.div, {
  base: {
    position: 'absolute',
    left: '0',
    right: '0',
    bottom: '0',
    zIndex: '3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--example-sheet-bg)',
    borderTop: '1px solid var(--example-border)',
    pointerEvents: 'auto',
    '@media (min-width: 720px)': {
      maxWidth: '720px',
      left: 'calc(50% - 360px) !important',
    },
  },
});

const Controls = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
  },
});
