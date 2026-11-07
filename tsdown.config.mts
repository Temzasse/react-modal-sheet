import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.tsx'],
  outDir: 'dist',
  format: ['cjs', 'esm'],
  deps: { neverBundle: ['react', 'react-dom', 'motion'] },
  target: 'es2020',
  sourcemap: true,
  dts: true,
  outExtensions: ({ format }) => ({
    js: format === 'es' ? '.mjs' : '.js',
    dts: format === 'es' ? '.d.mts' : '.d.ts',
  }),
});
