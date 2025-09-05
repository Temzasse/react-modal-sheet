import { defineConfig } from "vite";
import { VitePWA as pwaPlugin } from "vite-plugin-pwa";
import reactPlugin from "@vitejs/plugin-react";
import restartPlugin from "vite-plugin-restart";

export default defineConfig(({ mode }) => ({
  plugins: [
    reactPlugin(),
    restartPlugin({
      restart: [".yalc/react-modal-sheet/**/*"],
    }),
    pwaPlugin({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.svg",
        "favicon.ico",
        "apple-touch-icon-180x180.png",
        "maskable-icon-512x512.png",
      ],
      manifest: {
        start_url: "/",
        display: "standalone",
        name: "React Modal Sheet",
        short_name: "React Modal Sheet",
        description: "React Modal Sheet Playground",
        theme_color: "#000000",
        orientation: "portrait",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      devOptions: {
        enabled: mode === "development",
      },
    }),
  ],
  optimizeDeps: {
    exclude: ["react-modal-sheet"],
  },
  server: {
    allowedHosts: ['namely-enough-caiman.ngrok-free.app']
  }
}));
