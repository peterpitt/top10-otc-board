import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NOTE: If your repository name is different, change the base accordingly.
export default defineConfig({
  base: '/top10-otc-board/',
  plugins: [react()],
})
