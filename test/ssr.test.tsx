/**
 * @jest-environment node
 */

import * as React from 'react';
import { renderToString } from 'react-dom/server';
import Sheet from '../src';

describe('SSR', () => {
  it('renders <Sheet.Content> in html output', () => {
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
});
