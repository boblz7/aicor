<template>
  <div
    class="newsletter-subscribe-container"
    :style="isOnAicor && 'padding: 0;'"
  >
    <div
      :class="[{ 'is-on-aicor': isOnAicor }, 'newsletter-subscribe-content']"
    >
      <div class="corner-image">
        <img src="~/assets/images/contact_from_dot_pattern.svg" alt="" />
      </div>

      <div class="text">
        <div class="line-to-left">
          <div class="line-left"></div>
          <p class="color-white">Subscribe to our newsletter</p>
        </div>

        <h2 v-if="!isOnAicor" class="color-white">
          Stay updated and receive important news <br />
          about our products and services!
        </h2>
        <h2 v-else class="color-white">
          Subscribe and get notified. AICOR Bank is cooming soon!
        </h2>

        <v-form ref="form" v-model="valid" @submit.prevent="validate">
          <v-text-field
            v-model="email"
            :rules="[rules.required, rules.email]"
            label="Your email address"
            solo
            validate-on-blur
            required
            height="60px"
          ></v-text-field>

          <button
            :disabled="!valid"
            color="success"
            class="classic color-white weight-600 outlined__white shadow-none"
          >
            Send
          </button>
        </v-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isOnAicor: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      valid: true,
      email: '',
      rules: {
        email: (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        required: (v) => !!v || 'Required',
      },
    }
  },
}
</script>
<style lang="scss" scoped>
.newsletter-subscribe-container {
  width: 100%;
  padding-top: 200px;

  .newsletter-subscribe-content {
    position: relative;
    width: 100%;
    max-width: $max-screen-width;
    margin: 0 auto;
    background: $default-blue;
    box-shadow: 0px 97px 45px -49px rgba(0, 21, 122, 0.1);
    border-radius: 12px;
    padding: 88px 50px 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    &.is-on-aicor {
      max-width: 100%;
    }

    .corner-image {
      position: absolute;
      top: -110px;
      left: -110px;
      width: 120px;
    }

    .text {
      max-width: $max-screen-width3;

      .line-to-left {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 38px;

        .line-left {
          width: 50px;
          height: 1.5px;
          background: white;
        }

        p {
          font-size: 18px;
          font-weight: 500;
          margin: 0;
        }
      }

      h2 {
        font-size: 32px;
        margin-bottom: 20px;
      }

      form {
        display: flex;
        gap: 20px;

        .v-text-field--solo {
          border-radius: 10px;
        }

        button {
          width: 170px;
          height: 60px;
          padding: 0;
        }
      }
    }
  }
}

@media only screen and (max-width: 1409px) {
  .newsletter-subscribe-container {
    .newsletter-subscribe-content {
      border-radius: 0;
    }
  }
}

@media only screen and (max-width: 1409px) {
  .newsletter-subscribe-container {
    .newsletter-subscribe-content {
      &.is-on-aicor {
        padding: 88px 20px 100px;
      }
    }
  }
}
</style>
