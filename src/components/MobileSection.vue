<template>
  <section class="mobile">
    <div class="phone">
      <img src="~@/assets/illustration-phones.svg" class="phone_img" />
    </div>
    <div class="phone_text">
      <h1>State of the Art Infrastructure</h1>
      <p>
        With reliability and speed in mind, worldwide data centers provide the
        backbone for ultra-fast connectivity. This ensures your site will load
        instantly, no matter where your readers are, keeping your site
        competitive.
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" >
.mobile {
  display: grid;
  grid-template-columns: 750px 1fr;
  grid-template-rows: 410px;
  grid-template-areas: "phone phone_text";
  background-image: url(~@/assets/bg-pattern-circles.svg),
    linear-gradient(to right, $very-dark-gray-blue, $very-dark-desaturated-blue);
  background-repeat: no-repeat;
  background-position: -200px 80%, center;
  margin: 4rem 0;
  border-radius: 0 100px 0 100px;
  color: $white;
  text-align: left;

  .phone {
    position: relative;
    grid-area: phone;
    .phone_img {
      position: absolute;
      left: 8rem;
      top: -4rem;
    }
  }
  .phone_text {
    grid-area: phone_text;
    align-self: center;
    margin-bottom: 3rem;

    h1 {
      font-family: $font-overpass;
      font-size: 2.3rem;
      font-weight: 600;
    }
    p {
      font-family: $font-overpass;
      line-height: 1.8rem;
      opacity: 0.8;
      padding-right: 150px;
    }
  }
}
@media (max-width: 1200px) {
  // rules here apply to devices from 993px to 1200px (inclusive)
  .mobile {
    grid-template-columns: 580px 1fr;
    .phone {
      .phone_img {
        position: absolute;
        left: 1rem;
      }
    }
    .phone_text {
      p {
        padding-right: 1rem;
      }
    }
  }
}
@media (max-width: 940px) {
  .mobile {
    grid-template-columns: 1fr;
    grid-template-rows: 350px 410px;
    grid-template-areas: "phone" "phone_text";
    margin-top: 18rem;
    text-align: center;
    background-position: -182px 170%, center;

    .phone {
      position: relative;
      grid-area: phone;
      .phone_img {
        position: absolute;
        left: 50%;
        margin-left: -270px;
        top: -90%;
      }
    }
    .phone_text {
      grid-area: phone_text;
      margin-bottom: 8rem;
      padding-bottom: 3rem;

      p {
        opacity: .8;
        font-size: 1.8rem;
        font-weight: 300;
        line-height: 2.5rem;
        letter-spacing: 1px;
        padding: 2rem;
      }
    }
  }
}
@media (max-width: 650px) {
  .phone {
    .phone_img {
      width: 360px;
      top: -55% !important;
      left: 72% !important;
    }
  }
}
</style>