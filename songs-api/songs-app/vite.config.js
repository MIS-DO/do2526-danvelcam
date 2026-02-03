import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    hmr: {
      // When behind a proxy, use the proxy host for HMR WebSocket
      clientPort: 80,
      host: 'dev.songs.local'
    }
  }
})
