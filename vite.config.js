import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      // Gitpod에서 자동 생성된 호스트 이름 (매번 바뀔 수 있음)
      '3000-samon3869-codeitreactmo-o63ep79hxin.ws-us120.gitpod.io',

      // 또는 와일드카드 방식으로 전체 gitpod.io 도메인을 허용
      '.gitpod.io',
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
