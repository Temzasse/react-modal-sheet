import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Sheet from '../src';

// TODO: add tests

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Sheet isOpen onClose={() => {}}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>Content here...</Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
