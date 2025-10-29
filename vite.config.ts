import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: mode === "development" ? 8080 : 3000,
    strictPort: true,
    hmr: {
      port: mode === "development" ? 8080 : 3000,
    },
  },
  plugins: [
    dyadComponentTagger(),
    react({
      jsxImportSource: "@emotion/react",
      tsDecorators: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["@radix-ui/react-slot", "lucide-react"],
          utils: ["clsx", "tailwind-merge"],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion"],
  },
  define: {
    global: "globalThis",
  },
}));