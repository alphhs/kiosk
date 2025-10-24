import { lingui } from "@lingui/vite-plugin";
import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tailwindcss() as any,
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
     svgr({
      include: '**/*.svg',
      exclude: '**/*.svg?url',
    }),
    lingui(),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler'], "@lingui/babel-plugin-lingui-macro" ],
      },
    }),
  ],
  define: {
    'process.env.PLATFORM': JSON.stringify(process.env.PLATFORM || 'kolon'),
    'process.env.STAGE': JSON.stringify(process.env.STAGE || 'dev'),
  },
   build: {
    outDir: `dist/${process.env.PLATFORM || 'kolon'}.${process.env.STAGE || 'dev'}`,
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ['**/*.po'],
})
