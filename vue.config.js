module.exports = {
  publicPath: '/blogr-landing-page/',
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/variables.scss";`,
      },
    },
  },
};
