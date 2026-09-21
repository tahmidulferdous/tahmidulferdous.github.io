import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://tahmidulferdous.github.io",
  build: {
    format: "directory",
  },
});
