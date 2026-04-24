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
  plugins: [react(), tailwindcss(), devAccessLogger()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
