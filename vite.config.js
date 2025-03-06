import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-react/',

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: 'index.html',
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/manual-[name][extname]'; // 🔹 Impede renomeação automática do CSS
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  },
  css: {
    postcss: null // 🔹 Desativa qualquer processamento de CSS automático
  }
});
