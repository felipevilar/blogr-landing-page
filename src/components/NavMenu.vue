<template>
  <div class="modure" v-show="toogle" @click="toogle = !toogle"></div>
  <nav>
    <div class="left">
      <img src=".././assets/logo.svg" />
    </div>
    <div class="right">
      <label class="hamburguer_menu" @click="toogle = !toogle">
        <transition name="slide-fade">
          <img src=".././assets/icon-hamburger.svg" v-if="!toogle" />
          <img src=".././assets/icon-close.svg" v-else />
        </transition>
      </label>

      <ul :class="toogle ? 'menu' : 'hide'">
        <div class="links">
          <ul>
            <li
              v-for="link in links"
              :key="link.name"
              :to="link.url"
              class="outer-li"
            >
              <label @click="link.isOpen = !link.isOpen">{{ link.name }}</label>
              <ul class="inner-ul" v-show="link.isOpen">
                <li
                  v-for="subLink in link.subLinks"
                  :key="subLink.name"
                  class="inner-li"
                >
                  {{ subLink.name }}
                </li>
              </ul>
            </li>
            <hr />
          </ul>
        </div>
        <div class="right_content">
          <p>Login</p>
          <BaseButton urlButton="#" class="toogleButton">Sing Up</BaseButton>
        </div>
      </ul>
    </div>
  </nav>
</template>

<script>
import BaseButton from "@/components/BaseButton";

export default {
  name: "NavMenu",
  components: { BaseButton },
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
  data: function () {
    return {
      toogle: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.right_content {
  display: flex;
}
hr {
  display: none;
}
.hamburguer_menu {
  display: none;
}
nav {
  padding: 2rem;
  display: flex;
  align-items: center;
  font-family: $font-ubuntu;
  font-weight: 500;
  font-size: 16px;
  color: $white;

  img {
    margin-right: 4rem;
  }
}

.left,
.right {
  display: flex;
  justify-content: flex-end;
}

.right {
  width: 100%;
  p {
    margin-right: 2rem;
    opacity: 0.8;
  }
}

.menu,
.hide {
  width: 100%;
  justify-content: space-between;
  list-style: none;
  display: flex;
  opacity: 0.8;
  margin: 0;
  align-items: center;

  li {
    display: inline;
    margin-right: 2rem;

    &::after {
      content: url(.././assets/icon-arrow-light.svg);
      margin-left: 0.5rem;
    }
  }

  a {
    color: $white;
    text-decoration: none;
  }
}
@media (max-width: 940px) {
  .modure {
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
  }
  hr {
    display: flex;
    width: 100%;
    opacity: 0.1;
  }

  nav {
    position: relative;
    padding: 0;
  }

  .hamburguer_menu {
    display: block;
    position: relative;

    img {
      position: absolute;
      padding: 0;
      margin: 0;
    }
  }

  .right_content {
    flex-direction: column;
    font-size: 1.3rem;
    margin-right: 2rem;

    p {
      margin: 1.5rem 0;
    }
  }

  .menu {
    flex-direction: column;
    position: absolute;
    top: 4rem;
    left: 0;
    opacity: 1;
    background: $white;
    border: 1px solid $grayish-blue;
    border-radius: 7px;
    justify-content: center;
    box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.4);
    padding: 1rem;
    padding-bottom: 1.5rem;
    color: $very-dark-blue;
    z-index: 100;

    .links {
      width: 100%;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      width: 100%;

      .outer-li {
        width: 100%;
        margin: 1rem 0;
        font-size: 1.3rem;

        label {
          position: relative;
          &::after {
            content: url(.././assets/icon-arrow-dark.svg);
            margin-left: 0.5rem;
          }
        }
      }
    }

    .inner-ul {
      margin-top: 1rem;
      background-color: #c8c8cb4f;
      padding: 1rem;
      &::after {
        content: none;
      }
      .inner-li {
        color: $very-dark-blue;
        opacity: 0.7;
        text-decoration: none;
        margin: 0.5rem 0;
        font-size: 1.2rem;
        text-align: center;

        &::after {
          content: none;
        }
      }
    }
  }

  .hide {
    display: none;
  }
  .menu,
  .hide {
    li {
      &::after {
        content: none;
      }
    }
  }

  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.2s ease-in;
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: rotate(360deg) scale(0);
  }
}
</style>