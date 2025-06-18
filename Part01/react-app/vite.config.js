import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // ✅ 전역 테스트 타임아웃 설정
    testTimeout: 100_000_000,
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
});
