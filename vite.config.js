import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Fix for react-dom issue
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-dom': 'react-dom',
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  server: {
    port: 5173,
  },
});