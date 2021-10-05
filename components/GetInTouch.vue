<template>
  <div id="contact" class="get-in-touch-container" :style="{ background }">
    <div class="get-in-touch-content">
      <div class="text-container">
        <div class="text-content">
          <h2>Get in touch</h2>

          <p>
            You can reach us via the following contact details, we’re <br />
            happy to answer any questions you may have.
          </p>

          <div>
            <div>
              <img src="~/assets/images/location-icon.svg" alt="" />
              <label class="color-gray">Warthestr. 21 14513 Teltow</label>
            </div>

            <div>
              <img src="~/assets/images/mail-icon.svg" alt="" />
              <a class="label color-gray" href="mailto:info@aicor.io"
                >info@aicor.io</a
              >
            </div>
          </div>
        </div>

        <div class="image">
          <img src="~/assets/images/contact_plane.svg" alt="" loading="lazy" />
        </div>
      </div>

      <div class="contact-us">
        <ContactForm />
      </div>
    </div>
  </div>
</template>
<script>
import ContactForm from '~/components/ContactForm'

export default {
  components: {
    ContactForm,
  },
  props: {
    background: {
      type: String,
      default: 'white',
    },
  },
}
</script>
<style lang="scss" scoped>
.get-in-touch-container {
  padding: 100px 50px;

  .get-in-touch-content {
    max-width: $max-screen-width2;
    margin: 0 auto;
    display: flex;

    > div {
      flex: 1;
    }

    .text-container {
      .text-content {
        margin-bottom: 100px;

        h2 {
          margin-bottom: 10px;
        }

        > div {
          display: flex;
          align-items: center;
          gap: 38px;
          margin-top: 50px;

          > div {
            display: flex;
            align-items: center;
            gap: 10px;
          }
        }
      }

      .image {
        img {
          width: 100%;
          max-width: 475px;
        }
      }
    }
  }
}

@media only screen and (max-width: 1199px) {
  .get-in-touch-container {
    .get-in-touch-content {
      gap: 50px;
    }
  }
}

@media only screen and (max-width: 1023px) {
  .get-in-touch-container {
    .get-in-touch-content {
      flex-direction: column;
      gap: 0;

      .text-container {
        .image {
          display: none;
        }

        .text-content {
          max-width: 570px;
          margin: 0 auto;
          margin-bottom: 100px;
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .get-in-touch-container {
    padding: 100px 20px;
  }
}
</style>
