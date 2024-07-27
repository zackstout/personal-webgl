import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createHtmlPlugin } from "vite-plugin-html";
import glsl from "vite-plugin-glsl";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    // Hmm this isn't quite right... we also want it to be "" if we are using preview... not sure how to detect
    base: process.env.NODE_ENV === "development" ? "" : "/personal-webgl",
    build: {
      target: "esnext",
    },
    plugins: [
      vue(),
      glsl(),
      createHtmlPlugin({
        minify: command === "build",
        entry: "src/main.ts",
        template:
          process.env.NODE_ENV === "development"
            ? "index.dev.html"
            : "index.html",
      }),
    ],
  };
});
