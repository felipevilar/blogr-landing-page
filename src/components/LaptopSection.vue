<template>
  <section class="laptop">
    <div class="laptop__figure">
      <img src="~@/assets/illustration-laptop-desktop.svg" class="laptop_img" />
    </div>
    <div class="laptop__text">
      <div class="card">
        <h1>Free, open, simple</h1>
        <p>
          Blogr is a free and open source application backed by a large
          community of helpful developers. It supports features such as code
          syntax highlighting, RSS feeds, social media integration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </p>
      </div>
      <div class="card">
        <h1>Powerful tooling</h1>
        <p>
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze, but capable of
          producing even the most complicated sites.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.laptop {
  margin-top: 18rem;
  margin-bottom: 14rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "figure texto";

  &__text {
    @extend .titleText;
  }

  &__figure {
    position: relative;
    grid-area: figure;

    .laptop_img {
      position: absolute;
      top: -200px;
      left: -275px;
    }
  }

  .card {
    @extend .cardModel;
  }
}
@media (max-width: 1200px) {
  // rules here apply to devices from 993px to 1200px (inclusive)
  .laptop {
    grid-template-columns: 35% 1fr;
    .laptop_img {
      left: -550px;
    }
    &__text {
      padding-right: 3rem;
    }
  }
}
@media (max-width: 940px) {
  .laptop {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: "figure" "texto";
    margin: 8rem 0;

    &__figure {
      content: url(~@/assets/illustration-laptop-mobile.svg);
      width: 100%;
      .laptop_img {
        display: none;
      }
    }
  }
}
</style>