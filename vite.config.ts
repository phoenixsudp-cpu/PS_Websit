import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/PS_Websit/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
