import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Fix for react-dom resolution issue
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-dom': 'react-dom'
    }
  },
  server: {
    port: 5173
  }
});