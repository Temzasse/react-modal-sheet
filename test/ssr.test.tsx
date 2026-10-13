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

test('renders Sheet id on the sheet root element', () => {
  const markup = renderToString(
    <Sheet id="parent-sheet" isOpen onClose={() => {}}>
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>Hello world</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
  const sheetRoot = markup.match(/<div[^>]*react-modal-sheet-root[^>]*>/);
  expect(sheetRoot?.[0]).toContain('id="parent-sheet"');
});
