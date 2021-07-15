<template>
  <transition enter-active-class="animate__bounceIn" appear>
    <router-link v-bind:to="urlButton">
      <button :class="filled ? 'btn' : 'btn outline'" v-bind="$attrs">
        <slot>Go</slot>
      </button>
    </router-link>
  </transition>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "BaseButton",
  props: {
    urlButton: String,
    filled: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  font-family: "Ubuntu";
  border: 1px solid transparent;
  background-color: $white;
  border-radius: 50px;
  padding: 1rem;
  outline: none;
  color: $light-red;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: $very-light-red-hover;
    border: 1px solid transparent;
    color: $white;
  }
}

.outline {
  color: $white;
  background: transparent;
  border: 1px solid $white;

  &:hover {
    background-color: $very-light-red-hover;
    border: 1px solid transparent;
  }
}
@media (max-width: 940px) {
  .toogleButton {
    background-image: linear-gradient(to right, $very-light-red, $light-red);
    color: white;
    padding: 1rem 2rem;
  }
}
</style>