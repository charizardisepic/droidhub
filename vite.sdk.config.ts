// @ts-check
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/arena-sdk/index.ts",
      name: "ArenaAppStoreSdk",
      fileName: "index",
      formats: ["es"],
    },
    outDir: "public/arena-sdk",
    emptyOutDir: false,
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
});
