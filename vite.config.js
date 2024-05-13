import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { sassPlugin } from 'vite-plugin-sass';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sassPlugin({}), // Add sassPlugin for SCSS support
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import 'tailwindcss/base'; @import 'tailwindcss/components'; @import 'tailwindcss/utilities';`,
      },
    },
  },
});
