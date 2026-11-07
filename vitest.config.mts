import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    projects: [
      {
        extends: true,
        test: {
          name: 'unit',
          environment: 'node',
          include: ['test/**/*.test.{ts,tsx}'],
          exclude: ['test/**/*.browser.test.tsx'],
          restoreMocks: true,
        },
      },
      {
        extends: true,
        test: {
          name: 'browser',
          include: ['test/**/*.browser.test.tsx'],
          setupFiles: ['test/browser-setup.ts'],
          restoreMocks: true,
          browser: {
            enabled: true,
            provider: playwright(),
            headless: true,
            ui: false,
            viewport: { width: 400, height: 800 },
            instances: [{ browser: 'chromium' }, { browser: 'webkit' }],
          },
        },
      },
    ],
  },
});
