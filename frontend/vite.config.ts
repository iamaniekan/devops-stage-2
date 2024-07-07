import { TanStackRouterVite } from "@tanstack/router-vite-plugin"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 3000,
  },
  plugins: [react(), TanStackRouterVite()],
})
