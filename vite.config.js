import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Production builds are served from https://shiva701.github.io/Portfolio/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/Portfolio/' : '/',
}));
