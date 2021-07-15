<template>
  <div class="hero">
    <div class="wrapper">
      <NavMenu :links="links"></NavMenu>
      <div class="hero-content">
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <BaseButton urlButton="#">Start for Free</BaseButton>
        <BaseButton urlButton="#" v-bind:filled="false">Learn More</BaseButton>
      </div>
    </div>
  </div>

  <FutureSection></FutureSection>
  <MobileSection></MobileSection>
  <LaptopSection></LaptopSection>
  <FooterSection :links="links"></FooterSection>
</template>

<script>
import BaseButton from "@/components/BaseButton";
import NavMenu from "@/components/NavMenu";
import FooterSection from "@/components/footer/FooterSection";
import MobileSection from "@/components/MobileSection";
import LaptopSection from "@/components/LaptopSection";
import FutureSection from "@/components/FutureSection";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Home",
  components: {
    BaseButton,
    NavMenu,
    FooterSection,
    MobileSection,
    LaptopSection,
    FutureSection,
  },
  data: () => {
    return {
      links: [
        {
          name: "Product",
          url: "#",
          isOpen: false,
          subLinks: [
            {
              name: "Overview",
              url: "#",
            },
            {
              name: "Pricing",
              url: "#",
            },
            {
              name: "Marketplace",
              url: "#",
            },
            {
              name: "Features",
              url: "#",
            },
            {
              name: "Integrations",
              url: "#",
            },
          ],
        },
        {
          name: "Company",
          url: "#",
          isOpen: false,
          subLinks: [
            {
              name: "About",
              url: "#",
            },
            {
              name: "Team",
              url: "#",
            },
            {
              name: "Blog",
              url: "#",
            },
            {
              name: "Carrers",
              url: "#",
            },
          ],
        },
        {
          name: "Connect",
          url: "#",
          isOpen: false,
          subLinks: [
            {
              name: "Contact",
              url: "#",
            },
            {
              name: "Newsletter",
              url: "#",
            },
            {
              name: "LinkedIn",
              url: "#",
            },
          ],
        },
      ],
    };
  },
  mounted: function () {
    const elements1 = gsap.utils.toArray([".future__text", ".laptop_img"]);
    const elements2 = gsap.utils.toArray([".laptop__text", ".figure_img"]);
    const elements3 = gsap.utils.toArray([".list-wrapper"]);
    this.animate(elements1, -360, "30deg", "top center", "ease-in", 0.5);
    this.animate(elements2, 360, "-30deg", "top center", "ease-in", 0.5);
    this.animate(elements3, -360, "0deg", "top bottom", "slowMo", 0.5);
  },
  methods: {
    animate: function (
      element,
      xpos,
      degrees,
      startPoint,
      setEase = "ease-in",
      setDuration = 1
    ) {
      element.forEach((element) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: startPoint,
          },
          opacity: 0,
          rotate: degrees,
          x: xpos,
          duration: setDuration,
          ease: setEase,
        });
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hero {
  position: relative;
  z-index: 1;
  height: 600px;
  border-radius: 0px 0px 0px 100px;
  background-image: linear-gradient(to right, $very-light-red, $light-red);
  color: $white;
  padding-top: 3.5rem;

  &::before {
    position: absolute;
    z-index: -1;
    content: "";
    background-image: url(~@/assets/bg-pattern-intro.svg);
    background-position: -400px center;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
}

.wrapper {
  width: 80%;
  margin: 0 auto;
}

.hero-content {
  font-family: $font-overpass;
  margin-top: 7rem;

  h1 {
    font-size: 3.5rem;
    margin: 0;
  }

  p {
    letter-spacing: 1px;
    font-size: 18px;
    margin-bottom: 3rem;
  }

  a {
    margin-right: 1rem;
  }
}

@media (max-width: 1200px) {
  .hero-content {
    h1 {
      font-size: 3rem;
    }
  }
}
@media (max-width: 550px) {
  .hero-content {
    h1 {
      font-size: 2rem;
    }
  }
}

</style>

