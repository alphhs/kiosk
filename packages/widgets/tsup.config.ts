import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/widgets-render.tsx',
    'src/registry.tsx',
    'src/types.ts',
    'src/background-render.tsx',
    'src/blocks/index.tsx',
    'src/components/index.tsx',
  ],
  format: ['esm'],
  dts: true,
  clean: true,
  external: ['react', 'react-dom', 'swiper', '@react-google-maps/api'],
  splitting: false,
  sourcemap: true,
  loader: {
    '.css': 'css',
    '.scss': 'css',
  },
  banner: {
    js: '"use client";',
  },
  esbuildOptions(options) {
    options.jsx = 'automatic';
    options.jsxImportSource = 'react';
  },
});
