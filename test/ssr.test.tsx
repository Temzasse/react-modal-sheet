/**
 * @jest-environment node
 */

import * as React from 'react';
import { renderToString } from 'react-dom/server';
import Sheet from '../src';

describe('Test with SSR enabled', () => {
  it('renders <Sheet.Content> in html output', () => {
    const content = 'Hello world';
    const markup = renderToString(
      <Sheet isOpen onClose={() => {}} ssr>
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

describe('Test with SSR disabled', () => {
  it('does not render <Sheet.Content> in html output', () => {
    const content = 'Hello world';
    const markup = renderToString(
      <Sheet isOpen onClose={() => {}} ssr={false}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>{content}</Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    );

    expect(markup).not.toContain(content);
  });
});
