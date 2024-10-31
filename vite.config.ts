// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/log-in-FSDP/', // Ensure the base path has trailing slashes and matches the repo name exactly
});
