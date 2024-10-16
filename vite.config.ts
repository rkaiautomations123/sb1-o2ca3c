import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    assetsInlineLimit: 0, // This ensures that all assets are processed and not inlined
  },
})