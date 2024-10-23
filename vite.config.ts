import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
import type { BuildOptions } from 'vite';

const host = process.env.TAURI_DEV_HOST;
const minify: BuildOptions['minify'] = !process.env.TAURI_DEBUG ? 'esbuild' : false;

export default defineConfig(async () => ({
  plugins: [UnoCSS(), react()],
  clearScreen: false,
  server: {
    host: host || false,
    port: 11420,
    strictPort: true,
    hmr: host
      ? {
          protocol: 'ws',
          host,
          port: 11430,
        }
      : undefined,
  },
  // to make use of `TAURI_DEBUG` and other env variables
  // https://tauri.studio/v1/api/config#buildconfig.beforedevcommand
  envPrefix: ['VITE_', 'TAURI_'],
  build: {
    // Tauri supports es2021
    target: process.env.TAURI_PLATFORM == 'windows' ? 'chrome105' : 'safari13',
    // don't minify for debug builds
    minify,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG,
  },
}));
