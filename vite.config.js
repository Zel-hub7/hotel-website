import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cors from 'koa2-cors'; // Import the koa2-cors middleware

export default defineConfig({
  plugins: [react()],
  server: {
    middleware: [cors()], // Add the cors middleware to the server's middleware array
    fs: {
      allow: ['..'], // Allow accessing files outside of the project directory
    },
  },
});