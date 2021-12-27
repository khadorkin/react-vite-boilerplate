import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { VitePWA } from "vite-plugin-pwa" // https://vite-plugin-pwa.netlify.app/guide/
import checker from "vite-plugin-checker" // https://github.com/fi3ework/vite-plugin-checker

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({}), checker({ typescript: true })],
})
