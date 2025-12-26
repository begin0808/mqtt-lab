import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mqtt-lab/', // <--- 請加入這一行，'/專案名稱/'
})
