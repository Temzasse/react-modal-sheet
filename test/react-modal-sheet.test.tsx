import { test } from 'vitest';
import { createRoot } from 'react-dom/client';
import React from 'react';

import { Sheet } from '../src';

test('renders without crashing', () => {
  const root = createRoot(document.createElement('div'));
  root.render(
    <Sheet isOpen onClose={() => {}}>
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>Content here...</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
  root.unmount();
});
