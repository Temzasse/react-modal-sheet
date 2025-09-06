// @vitest-environment node

import React from 'react';
import { renderToString } from 'react-dom/server';
import { expect, test } from 'vitest';

import { Sheet } from '../src';

test('renders Sheet in HTML output', () => {
  const markup = renderToString(
    <Sheet isOpen onClose={() => {}}>
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>Hello world</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
  expect(markup).toContain('react-modal-sheet');
});
