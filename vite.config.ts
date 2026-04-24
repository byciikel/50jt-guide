import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

const devAccessLogger = () => ({
  name: "dev-access-logger",
  configureServer(server: {
    middlewares: {
      use: (handler: (req: { method?: string; url?: string }, res: unknown, next: () => void) => void) => void;
    };
  }) {
    server.middlewares.use((req, _res, next) => {
      console.log(`[vite-dev] ${req.method ?? "GET"} ${req.url ?? "/"}`);
      next();
    });
  },
});

export default defineConfig({
  base: "/50jt-guide/",
  plugins: [react(), tailwindcss(), devAccessLogger()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    hmr: {
      host: "0.0.0.0",
      port: 5173,
    },
    watch: {
      usePolling: true,
    },
  },
});
