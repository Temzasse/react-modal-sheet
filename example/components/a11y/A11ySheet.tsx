import { useRef, type PropsWithChildren } from 'react';
import { type OverlayTriggerState } from 'react-stately';
import { Sheet } from 'react-modal-sheet';

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

export function A11ySheet({
  state, label, children, ...rest
}: PropsWithChildren<SheetProps>) {
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
}

const A11ySheetContent = ({
  state,
  label,
  children,
}: PropsWithChildren<SheetProps>) => {
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
  const ref = useRef<HTMLDivElement>(null);
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


