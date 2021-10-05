<template>
  <div class="eli-ilocx-container">
    <div class="media-items">
      <div class="media">
        <!-- <figure
          class="zoom"
          onmousemove="zoom(event)"
          style="background-image: url('./assets/ilocx.jpg')"
        > -->
        <img src="~/assets/images/eli_ilo_browser_,mockup.jpg" />
        <!-- </figure> -->
      </div>

      <div id="eli-ilocx" class="text">
        <h2>ELI Ident listed on ILOCX</h2>

        <div class="list">
          <div>
            <p>
              We are pleased to announce the listing of ELI Ident on ILOCX, a
              revenue based funding platform.
            </p>
          </div>
          <div>
            <p>
              Initial Licence Offerenigs (ILOs) are a new type of opportunity
              where you can back companies and receive a percentage of their
              revenue in return.
            </p>
          </div>
        </div>

        <div class="two-buttons">
          <a
            href="https://news.ilocx.com/eli-ident-lists-on-ilocx/"
            data-href="https://news.ilocx.com/eli-ident-lists-on-ilocx/"
            class="classic outlined color-default-blue weight-600 shadow-none"
          >
            View our ILO page
          </a>

          <button
            data-href="https://ilo.aicor.io/ilo/eli_ident/"
            class="classic color-white weight-600 shadow-none"
          >
            View Our Case Study
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.eli-ilocx-container {
  background: $variant-gray;
  padding: 100px 50px;

  .media-items {
    max-width: $max-screen-width;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 150px;
    height: 400px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }

    > div {
      flex: 1;
    }

    .media {
      height: 100%;
      overflow: hidden;
    }

    .text {
      position: relative;
      height: 100%;

      h2 {
        font-size: 40px;
        margin-bottom: 30px;
      }

      .two-buttons {
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: center;
        gap: 30px;
      }
    }
  }
}

@media only screen and (max-width: 1409px) {
  .eli-ilocx-container {
    .media-items {
      gap: 50px;
    }
  }
}
@media only screen and (max-width: 1023px) {
  .eli-ilocx-container {
    .media-items {
      width: 100%;
      height: 100%;
      flex-direction: column;

      .media {
        overflow: unset;
      }

      .text {
        .two-buttons {
          position: relative;
          // flex-direction: column;
          margin-top: 30px;

          button {
            width: 250px;
          }
        }
      }
    }
  }
}
</style>
