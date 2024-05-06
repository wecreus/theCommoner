import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
  ],
  define: {
    global: {},
  },
  build: {
    commonjsOptions: { transformMixedEsModules: true },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/assets/styles/_variables.scss"; @import "src/assets/styles/_mixins.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
