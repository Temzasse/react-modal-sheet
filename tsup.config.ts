import { defineConfig } from 'tsup';

export default defineConfig({
  outDir: 'dist',
  entry: ['src/index.tsx'],
  format: ['cjs', 'esm'],
  external: ['react', 'react-dom', 'framer-motion'],
  splitting: false,
  treeshake: true,
  sourcemap: true,
  dts: true,
  clean: true,
});
