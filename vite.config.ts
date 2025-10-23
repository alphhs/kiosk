import { lingui } from "@lingui/vite-plugin";
import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tailwindcss() as any,
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    lingui(),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler'], "@lingui/babel-plugin-lingui-macro" ],
      },
    }),
  ],
  assetsInclude: ['**/*.po'],
})
