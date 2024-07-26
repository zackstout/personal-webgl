import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createHtmlPlugin } from "vite-plugin-html";
import glsl from "vite-plugin-glsl";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    base: "/personal-webgl",
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
