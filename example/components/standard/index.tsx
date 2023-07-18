import * as React from 'react';
import styled from 'styled-components';

import Sheet from '../../../src';
import { Button } from '../common';
import { useMeasure } from 'react-use';
import { StandardBottomSheet } from './StandardBottomSheet';

const OPENED_SNAP_INDEX = 0;
const CLOSED_SNAP_INDEX = 1;

/**
 * A sheet that shows only `<Sheet.Header>` when closed and both `<Sheet.Header>` and `<Sheet.Content>` when open.
 */
const Standard = () => {
  const [headerRef, { height: headerHeight }] = useMeasure();
  // FIXME: The opened sheet is rendered momentarily immediately after the page is loaded.
  //        This behavior is incorrect because the sheet is initially closed.
  //
  // FIXME: When a sheet is open, changing the height of the window causes it to switch to showing only `<Sheet.Header>.
  //        This behavior is incorrect because `isOpen` remains `true`.
  const [isOpen, setOpen] = React.useState(false);

  const open = React.useCallback(() => setOpen(true), []);
  const close = React.useCallback(() => setOpen(false), []);
  const toggleOpen = React.useCallback(() => setOpen(prev => !prev), []);

  return (
    <>
      <Button onClick={open}>Open Sheet</Button>

      <StandardBottomSheet
        isOpen={isOpen}
        onOpen={open}
        onClose={close}
        // Set snap points consisting of '40% of window height' and 'header height'.
        //
        // FIXME: The 'Snap points need to be in descending order' warning is triggered when 40% of window height is smaller than header height.
        snapPoints={headerHeight === 0 ? [0.4, 0] : [0.4, headerHeight]}
        initialSnap={OPENED_SNAP_INDEX}
        closedSnapIndex={CLOSED_SNAP_INDEX}
      >
        <Sheet.Container>
          <Sheet.Header ref={headerRef}>
            <HeaderContent onClick={toggleOpen}>
              {isOpen
                ? 'Click or drag here to close ⬇️'
                : 'Click or drag here to open ⬆️'}
            </HeaderContent>
          </Sheet.Header>
          <Sheet.Content disableDrag>
            <Sheet.Scroller>
              {Array.from({ length: 20 }, (_, i) => (
                <p key={i}>This is the content.</p>
              ))}
            </Sheet.Scroller>
          </Sheet.Content>
        </Sheet.Container>
        {/*
         * NOTE: Passing `false` or `null` for `<Sheet>` children will result in a runtime error.
         *       To avoid this, fragment (`<></>`) is passed here.
         *
         * FIXME: When `isOpen === false`, the backdrop immediately disappears. It should fade out.
         */}
        {isOpen ? <Sheet.Backdrop onTap={close} /> : <></>}
      </StandardBottomSheet>
    </>
  );
};

const HeaderContent = styled.button`
  font-size: xx-large;
  font-weight: bold;
  text-align: center;

  display: block;
  width: 100%;
  padding: 16px;

  cursor: pointer;
`;

export default Standard;
