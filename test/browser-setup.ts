import { afterEach } from 'vitest';
import { cleanup } from 'vitest-browser-react';

afterEach(async () => {
  // Unmount portals and release document-wide scroll locks before the next test.
  await cleanup();
});
