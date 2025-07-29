import { useEffect, useState } from 'react';
import { useStableCallback } from './use-stable-callback';

type SheetState = 'closed' | 'opening' | 'open' | 'closing';

type UseSheetStatesProps = {
  isOpen: boolean;
  onClosed?: () => Promise<void> | void;
  onOpening?: () => Promise<void> | void;
  onOpen?: () => Promise<void> | void;
  onClosing?: () => Promise<void> | void;
};

export function useSheetState({
  isOpen,
  onClosed: _onClosed,
  onOpening: _onOpening,
  onOpen: _onOpen,
  onClosing: _onClosing,
}: UseSheetStatesProps) {
  const [state, setState] = useState<SheetState>(isOpen ? 'open' : 'closed');
  const onClosed = useStableCallback(() => _onClosed?.());
  const onOpening = useStableCallback(() => _onOpening?.());
  const onOpen = useStableCallback(() => _onOpen?.());
  const onClosing = useStableCallback(() => _onClosing?.());

  useEffect(() => {
    if (isOpen && state === 'closed') {
      setState('opening');
    } else if (!isOpen && (state === 'open' || state === 'opening')) {
      setState('closing');
    }
  }, [isOpen, state]);

  useEffect(() => {
    async function handle() {
      switch (state) {
        case 'closed':
          await onClosed?.();
          break;

        case 'opening':
          await onOpening?.();
          setState('open');
          break;

        case 'open':
          await onOpen?.();
          break;

        case 'closing':
          await onClosing?.();
          setState('closed');
          break;
      }
    }
    handle().catch((error) => {
      console.error('Internal sheet state error:', error);
    });
  }, [state]);

  return state;
}
