// @vitest-environment node

import { test, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import React from 'react';

import Sheet from '../src';

test('renders Sheet in HTML output', () => {
  const content = 'Hello world';
  const markup = renderToString(
    <Sheet isOpen onClose={() => {}}>
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>{content}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
  expect(markup).toContain(content);
});
