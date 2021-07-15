<template>
  <footer>
    <img src="@/assets/logo.svg" />
    <FooterLinks :links="links[0].subLinks" title="Product"></FooterLinks>
    <FooterLinks :links="links[1].subLinks" title="Company"></FooterLinks>
    <FooterLinks :links="links[2].subLinks" title="Connect"></FooterLinks>
  </footer>
</template>

<script>
import FooterLinks from "@/components/footer/FooterLinks";
export default {
  name: "FooterSection",
  components: { FooterLinks },
  props: { 
    links: { 
      type: Array,
      required: true,
    }
  }
};
</script>

<style lang="scss" >
footer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  padding: 50px 200px 0px 200px;
  background-color: $very-dark-black-blue;
  border-radius: 0 100px 0 0;
}

@media (max-width: 1200px) {
  footer {
    padding: 50px 100px 0px 100px;
  }
}
@media (max-width: 768px) {
  footer {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    justify-items: center;

    img {
      margin-bottom: 2rem;
    }
  }
}
</style>