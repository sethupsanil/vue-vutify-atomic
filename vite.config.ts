import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@enum': fileURLToPath(new URL('./src/enums', import.meta.url)),
      '@component': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@atom': fileURLToPath(new URL('./src/components/atoms', import.meta.url)),
    }
  }
})
