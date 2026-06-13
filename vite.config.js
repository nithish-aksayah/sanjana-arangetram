import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Keep images out of base64 blobs — inline images bypass browser cache on every render
    assetsInlineLimit: 0,
    // Split CSS per chunk to eliminate unused styles from initial bundle
    cssCodeSplit: true,
    // Target modern browsers for smaller output (avoids legacy polyfills)
    target: 'esnext',
    chunkSizeWarningLimit: 1000
  },
  // Dev server: send proper cache headers so browser caches public/images
  // between page navigations without re-fetching
  server: {
    headers: {
      'Cache-Control': 'public, max-age=86400'
    }
  }
})

