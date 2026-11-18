import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Se publica en consultoria.hosperation.com/modulo-5/
export default defineConfig({
  base: '/modulo-5/',
  plugins: [react()],
})
