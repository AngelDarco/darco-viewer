import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import cssInjectedJsPlugin from "vite-plugin-css-injected-by-js";
// import postcssNested from "postcss-nested";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: "index",
      fileName: "index",
      entry: "./src/components/Viewer.tsx",
      formats: ["es", "umd", "cjs"]
    },
    minify: true,
    emptyOutDir: true,
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        dir: "dist",
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  },
  plugins: [
    react(),
    cssInjectedJsPlugin(),
    dts({
      rollupTypes: true,
      outDir: "dist/@types",
      insertTypesEntry: true,
      include: ["src/**/*.ts", "src/**/*.tsx"]
    })
  ]
  // css: {
  //   postcss: {
  //     plugins: [postcssNested()]
  //   }
  // }
});
