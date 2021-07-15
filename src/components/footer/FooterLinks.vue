<template>
  <div class="list-wrapper">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="link in links" :key="link.name">
        <router-link :to="link.url">{{ link.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterLinks",
  props: {
    links: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.list-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: left;

  h1 {
    font-family: $font-overpass;
    font-size: 1rem;
    color: $white;
    margin-bottom: 0;
  }

  ul {
    list-style: none;
    font-family: $font-ubuntu;

    li {
      margin: 0.8rem 0;
    }
  }
  a {
    &:hover {
      color: $light-red;
    }
    color: $grayish-blue;
    opacity: 0.7;
    text-decoration: none;
  }
}
@media (max-width: 768px) {
  .list-wrapper {
    text-align: center;

    h1 {
      font-family: $font-overpass;
      font-size: 1.5rem;
      color: $white;
      margin-bottom: 0;
    }

    ul {
      list-style: none;
      font-family: $font-ubuntu;
      font-size: 1.5rem;

      li {
        margin: 0.8rem 0;
      }
    }
    a {
      &:hover {
        color: $light-red;
      }
      color: $grayish-blue;
      opacity: 0.7;
      text-decoration: none;
    }
  }
}
</style>