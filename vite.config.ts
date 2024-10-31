// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/log-in-FSDP/', // Replace 'repo-name' with your GitHub repository name
});