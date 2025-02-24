// vite.config.js
export default {
  build: {
    rollupOptions: {
      external: ["/src/main.tsx"], // Externalizing main.tsx
    },
  },
};
