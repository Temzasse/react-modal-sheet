import * as React from 'react';
import styled from 'styled-components';
import { useButton } from 'react-aria';
import { useOverlayTriggerState } from 'react-stately';

import { Button, Screen } from '../common';
import A11ySheetBase from './A11ySheet';

const A11yExample = () => {
  const sheetState = useOverlayTriggerState({});
  const openButtonRef = React.useRef<HTMLButtonElement>(null);
  const openButton = useButton({ onPress: sheetState.open }, openButtonRef);

  return (
    <Screen bg="light">
      <Button {...openButton.buttonProps} ref={openButtonRef}>
        Simple A11y Bottom Sheet
      </Button>

      <A11ySheet state={sheetState} label="Accessible bottom sheet">
        <SheetContent>
          <strong>This is a simple a11y sheet 🦾</strong>
          <p>Your content goes here...</p>
        </SheetContent>
      </A11ySheet>
    </Screen>
  );
};

const A11ySheet = styled(A11ySheetBase)`
  margin: 0 auto;
  max-width: 680px;
`;

const SheetContent = styled.div`
  text-align: center;
  padding-top: 24px;
`;

export default A11yExample;
