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
    rollupOptions: {
      output: {
        /**
         * Code-splitting strategy:
         *  - vendor:        react, react-dom, react-router-dom  (~140 KB gzip)
         *  - ui-libs:       framer-motion, lucide-react, swiper  (~90 KB gzip)
         *  - vendor-others: firebase, everything else            (~60 KB gzip)
         *
         * Lazy-loaded pages (RSVP, Gallery, About, Gurus, Sanjana, Invitation,
         * Guestbook, Brochure, WatchLive, RoadToArangetram) each become their
         * own async chunk and are NOT loaded on the initial Home route.
         */
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

