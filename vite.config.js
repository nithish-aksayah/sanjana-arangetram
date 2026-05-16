import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Prevent small images from being base64-inlined — inlined images bypass
    // the browser cache entirely, causing them to re-decode on every render.
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor';
            }
            if (id.includes('framer-motion') || id.includes('lucide-react') || id.includes('swiper')) {
              return 'ui-libs';
            }
            return 'vendor-others';
          }
        }
      }
    },
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

