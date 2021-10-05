<template>
  <div class="get-involved-container">
    <div class="get-involved-content">
      <div>
        <h2 class="color-white">
          Want to get involved in our <br />
          company’s success?
        </h2>

        <!-- <img
          class="arrow-round-up"
          src="~/assets/images/arrow-round-up.svg"
          alt=""
        /> -->
      </div>

      <p class="color-white">
        ILO’s are not based on profits, but gross revenue, or all sales without
        any costs or taxes <br />
        subtracted, therefore if you buy our ILO you will make money as we make
        sales.
      </p>

      <p class="color-white">
        Our ILO guarantees that when we make money - you make money.
      </p>

      <div class="purchase-ilo-button">
        <a
          href="https://ilo.aicor.io/ilo/eli_ident/"
          class="classic white color-default-blue weight-600"
        >
          Purchase our ILO
        </a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.get-involved-container {
  position: relative;
  background: $default-blue;
  padding: 100px 50px;
  background-image: url('@/assets/images/ilocx_cta_background.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .get-involved-content {
    max-width: $max-screen-width;
    margin: 0 auto;
    text-align: center;

    // > div {
    //   position: relative;
    //   width: fit-content;
    //   margin: 0 auto;

    // .arrow-round-up {
    //   position: absolute;
    //   top: -60px;
    //   right: -170px;
    // }
    // }

    h2 {
      margin-bottom: 40px;
    }

    .purchase-ilo-button {
      margin-top: 60px;
    }
  }
}

@media only screen and (max-width: 1023px) {
  .get-involved-container {
    .get-involved-content {
      > div {
        // .arrow-round-up {
        //   display: none;
        // }
      }
    }
  }
}
</style>
