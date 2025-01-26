import { defineConfig } from "vite";
import React from "@vitejs/plugin-react-swc";
// import copy from "rollup-plugin-copy";

export default defineConfig({
  plugins: [React()],

  // build: {
  //   rollupOptions: {
  //     plugins: [
  //       copy({
  //         targets: [{ src: "src/data.json", dest: "dist" }],
  //         hook: "writeBundle",
  //       }),
  //     ],
  //   },
  // },
});
