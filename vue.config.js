module.exports = {
  publicPath: '/blogr-page/',
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/variables.scss";`,
      },
    },
  },
};
