import * as React from 'react';
import { OverlayTriggerState } from 'react-stately';
import Sheet from 'react-modal-sheet';

import {
  FocusScope,
  useDialog,
  useOverlay,
  useModal,
  OverlayProvider,
} from 'react-aria';

type SheetProps = {
  state: OverlayTriggerState;
  label: string;
};

const A11ySheet = ({
  state,
  label,
  children,
  ...rest
}: React.PropsWithChildren<SheetProps>) => {
  return (
    <Sheet {...rest} isOpen={state.isOpen} onClose={state.close}>
      <OverlayProvider>
        <FocusScope contain autoFocus restoreFocus>
          <A11ySheetContent state={state} label={label}>
            {children}
          </A11ySheetContent>
        </FocusScope>
      </OverlayProvider>
    </Sheet>
  );
};

const A11ySheetContent = ({
  state,
  label,
  children,
}: React.PropsWithChildren<SheetProps>) => {
  const a11yProps = useA11ySheet(state, label);

  return (
    <>
      <Sheet.Container {...a11yProps}>
        <Sheet.Header />
        <Sheet.Content>{children}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </>
  );
};

const useA11ySheet = (state: OverlayTriggerState, label: string) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const dialog = useDialog({ 'aria-label': label }, ref);
  const overlay = useOverlay(
    { onClose: state.close, isOpen: true, isDismissable: true },
    ref
  );

  useModal();

  return {
    ref,
    ...overlay.overlayProps,
    ...dialog.dialogProps,
  } as any; // HACK: fix type conflicts with Framer Motion
};

export default A11ySheet;
