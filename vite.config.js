import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 เพิ่ม base ให้ตรงกับชื่อ repo
export default defineConfig({
  base: '/digital-wedding-invitation/',
  plugins: [react()],
})
