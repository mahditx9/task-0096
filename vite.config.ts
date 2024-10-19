import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import checker from "vite-plugin-checker";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    tsconfigPaths(),
    checker({
      typescript: true,
    }),
  ],
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://145.239.98.20:8000",
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
});
