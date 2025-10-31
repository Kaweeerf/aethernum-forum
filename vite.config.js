
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/aetherum-forum/',  // Set your repo name here for GitHub Pages
  plugins: [react()],
})
