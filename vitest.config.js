import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * @type {import('vite').defineConfig}
 */
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    passWithNoTests: true,
  },
});
