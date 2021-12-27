import { defineConfig } from "vite"
import path from "path"
import react from "@vitejs/plugin-react"
import { VitePWA } from "vite-plugin-pwa" // https://vite-plugin-pwa.netlify.app/guide/
import checker from "vite-plugin-checker" // https://github.com/fi3ework/vite-plugin-checker

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({}), checker({ typescript: true })],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
    },
  },
})
