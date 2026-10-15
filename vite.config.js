import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5173,
    open: true,
    host: true   // ← ESTA LÍNEA es la clave
  }
})