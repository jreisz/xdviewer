import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/xdviewer/",
  plugins: [
    svelte({
      compilerOptions: {
        dev: true,
      },
    }),
  ],
});
