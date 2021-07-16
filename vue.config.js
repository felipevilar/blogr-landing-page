module.exports = {
  publicPath: '/blogr/',
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/variables.scss";`,
      },
    },
  },
};
