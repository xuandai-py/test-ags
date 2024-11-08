import inject from "@rollup/plugin-inject";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import mkcert from "vite-plugin-mkcert";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      mkcert(),
      inject({
        // => that should be first under plugins array
        $: "jquery",
        jQuery: "jquery",
        moment: "moment",
      }),
      react(),
    ],

    build: {
      rollupOptions: {
        external: ["./node_modules/bootstrap/dist/js/bootstrap.bundle"],
      },
    },

    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },

    server: {
      port: env.VITE_AGS_PORT,
      proxy: {
        "/api": {
          target: env.VITE_AGS_API_URL,
          changeOrigin: true,
          secure: !(mode === "development"),
        },
      },
      cors: false,
    },

    base: "/",
    optimizeDeps: {
      include: ["@emotion/react", "@emotion/styled", "@mui/material/Tooltip"],
    },
  };
});
