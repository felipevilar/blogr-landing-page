<template>
  <section class="future">
    <div class="future__title">
      <h1>Designed for the future</h1>
    </div>
    <div class="future__text">
      <div class="card">
        <h1>Introducing an extensible editor</h1>
        <p>
          Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creating content. The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog.
        </p>
      </div>
      <div class="card">
        <h1>Robust content management</h1>
        <p>
          Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          categories, sections, format, or flow. With this functionality, you’re
          in full control.
        </p>
      </div>
    </div>
    <div class="future__figure">
      <img src="~@/assets/illustration-editor-desktop.svg" class="figure_img" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.future {
  margin-top: 8rem;
  margin-bottom: 20rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas: "title title" "texto figure";

  &__title {
    grid-area: title;
    h1 {
      font-size: 2rem;
    }
  }

  &__text {
    @extend .titleText;
  }

  &__figure {
    position: relative;
    grid-area: figure;

    .figure_img {
      position: absolute;
      right: -250px;
      top: -130px;
    }
  }

  .card {
    @extend .cardModel;
  }
}
@media (max-width: 1200px) {
  // rules here apply to devices from 993px to 1200px (inclusive)
  .future {
    grid-template-columns: 1fr 35%;
    .figure_img {
      right: -550px;
    }
  }
}
@media (max-width: 940px) {
  .future {
    grid-template-columns: 1fr;
    grid-template-rows: 120px auto auto;
    grid-template-areas: "title" "figure" "texto";
    margin: 8rem 0;

    &__figure {
      content: url(~@/assets/illustration-editor-mobile.svg);
      width: 100%;
      .figure_img {
        display: none;
      }
    }
  }
}
</style>