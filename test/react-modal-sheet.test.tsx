import React from 'react';
import { createRoot } from 'react-dom/client';
import { test } from 'vitest';

import { Sheet } from '../src';

test('renders without crashing', () => {
  const root = createRoot(document.createElement('div'));
  root.render(
    <Sheet
      isOpen
      onClose={() => {
        /* no-op */
      }}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>Content here...</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
  root.unmount();
});
