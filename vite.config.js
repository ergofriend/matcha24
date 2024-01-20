import autoprefixer from "autoprefixer";

export default {
  build: {
    rollupOptions: {
      input: ["src/style.scss"],
      output: {
        assetFileNames: ({ name }) => name,
      },
    },
    outDir: "build",
    cssMinify: true,
  },
  css: {
    devSourcemap: false,
    postcss: {
      plugins: [autoprefixer()],
    },
  },
};
