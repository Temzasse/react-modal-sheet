import { defineConfig } from 'vite';
import reactPlugin from '@vitejs/plugin-react';
import restartPlugin from 'vite-plugin-restart';

export default defineConfig({
  plugins: [
    reactPlugin(),
    restartPlugin({
      restart: ['.yalc/react-modal-sheet/**/*'],
    }),
  ],
  optimizeDeps: {
    exclude: ['react-modal-sheet'],
  },
});
