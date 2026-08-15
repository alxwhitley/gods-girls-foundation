import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  vite: {
    build: {
      // Lightning CSS currently folds view timelines into an animation shorthand
      // that Chrome drops in production. Preserve the authored longhands.
      cssMinify: false,
    },
  },
});
