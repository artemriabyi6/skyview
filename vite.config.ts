import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'
// import { base } from 'framer-motion/client'

export default defineConfig({
  plugins: [
    react(),             // плагін React з підтримкою JSX + TSX
    compression()        // gzip стиснення для build (опціонально)
  ],
  base: '/skyview',
  build: {
    minify: 'terser',    // мініфікація коду JS (терсер)
    terserOptions: {
      compress: {
        drop_console: true,   // прибрати всі console.log
        drop_debugger: true,  // прибрати debugger
      },
    },
    sourcemap: false,       // в продакшн зазвичай false, щоб не розкривати код
    assetsInlineLimit: 4096,  // максимальний розмір asset для інлайну (4кб)
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'   // відокремлення node_modules у окремий чанк vendor.js
          }
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      // scss: {
      //   additionalData: `@import "./src/styles/variables.scss";`  // глобальні змінні SCSS, якщо потрібно
      // }
    },
    devSourcemap: false,  // відключити source map для SCSS в продакшн
  },
})

