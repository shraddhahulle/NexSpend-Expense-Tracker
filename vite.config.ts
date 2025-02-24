export default {
  build: {
    rollupOptions: {
      input: "/src/main.tsx",
      external: ["/src/main.tsx"],
    },
  },
};
