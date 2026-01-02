import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Fix for react-dom resolution issue in Vite 7+
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-dom': 'react-dom',
    },
  },
  optimizeDeps: {
    include: ['react-dom', 'react-dom/client'],
  },
  server: {
    port: 5173,
  },
});