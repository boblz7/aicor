<template>
  <div class="header-container">
    <div class="header-content">
      <div class="top-part">
        <div class="left-part">
          <h1>Your Best Value Proposition</h1>

          <p class="color-gray weight-300">
            AICOR is a highly innovative company, established to <br />
            provide cutting-edge intelligent technical solutions for a <br />
            wide range of industries.
          </p>

          <button
            v-scroll-to="{ el: '#eli_and_aicor', offset: 200 }"
            class="white--text weight-600"
          >
            Our Solutions
          </button>

          <div>
            <img src="~/assets/images/mouse.svg" />
            <label class="color-light-gray weight-600">Scroll Down</label>
          </div>
        </div>

        <div class="right-part">
          <div>
            <!-- <v-img
              :src="require('@/assets/images/eli_screen_iphonex_mockup.png')"
            ></v-img> -->
            <img src="~/assets/images/eli_screen_iphonex_mockup.png" />
          </div>
        </div>
      </div>

      <div id="what_makes_aicor_different" class="bottom-part">
        <div class="text">
          <h2 class="color-white">What makes AICOR different?</h2>

          <p class="color-white">
            We are focused on delivering more simple and secure solutions to the
            existing <br />
            problems by syncing combined expertise in various fields.
          </p>
        </div>

        <div class="content">
          <div
            v-for="item in headerBottomPartItems"
            :key="item.title"
            class="content-item"
          >
            <img :src="item.icon" />
            <!-- <v-img :src="item.icon"></v-img> -->

            <p class="color-dark-blue weight-600">{{ item.title }}</p>

            <label class="color-gray">{{ item.description }}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headerBottomPartItems: [
        {
          icon: require('@/assets/images/expertise.svg'),
          title: 'Expertise',
          description:
            'Our extensive knowledge and expertise in different fields that our team combines ensure that we provide high-quality products and services.',
        },
        {
          icon: require('@/assets/images/security.svg'),
          title: 'Security',
          description:
            'We developed comprehensive anti-fraud and security measures to help prevent, detect, or disrupt illegal actions and keep our customers and their data safe.',
        },
        {
          icon: require('@/assets/images/simplicity.svg'),
          title: 'Simplicity',
          description:
            'Focus is on simplicity as we remove the unnecessary from our products until all that remains is essential and useful for an enjoyable, intuitive experience.',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.header-container {
  width: 100%;
  height: 1630px;
  background: linear-gradient(352deg, #00a8ee 50%, white 50%);
  padding: 200px 50px 0;

  .header-content {
    width: 100%;
    height: 100%;
    max-width: $max-screen-width;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .top-part {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;

      > div {
        flex: 1;
      }

      .left-part {
        padding-bottom: 100px;
        h1 {
          margin-bottom: 30px;
        }

        p {
          margin-bottom: 52px;
        }

        button {
          width: 170px;
          height: 60px;
          background: $variant-blue;
          border-radius: 10px;
          margin-bottom: 103px;
        }

        div {
          display: flex;
          align-items: center;
          gap: 15px;
        }
      }

      .right-part {
        display: flex;
        align-items: center;
        justify-content: center;
        > div {
          width: 410px;

          img {
            width: 100%;
          }
        }
      }
    }

    .bottom-part {
      position: relative;
      bottom: -170px;

      .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        text-align: center;
        margin-bottom: 50px;
      }

      .content {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;

        .content-item {
          max-height: 440px;

          display: flex;
          flex-direction: column;
          align-items: center;
          // justify-content: space-between;
          flex: 1;
          background: white;
          border-radius: 10px;
          padding: 75px;
          text-align: center;
          box-shadow: 0px 70px 60px -30px rgba(0, 48, 92, 0.1);

          .v-image,
          img {
            width: 120px;
            margin-bottom: 40px;
          }

          p {
            font-size: 24px;
            margin-bottom: 10px;
          }

          label {
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 1409px) {
  .header-container {
    .header-content {
      .bottom-part {
        .content {
          .content-item {
            // max-height: initial;
            height: 400px;
            padding: 50px;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 1199px) {
  .header-container {
    .header-content {
      .bottom-part {
        .content {
          .content-item {
            // max-height: initial;
            height: 500px;
            padding: 50px;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 1023px) {
  .header-container {
    height: 1430px;
    padding: 200px 30px 0;
    background: linear-gradient(352deg, #00a8ee 40%, white 40%);

    .header-content {
      .top-part {
        .left-part {
          padding: 0;

          button {
            margin-bottom: 50px;
          }
        }

        .right-part {
          > div {
            width: 350px;
          }
        }
      }

      .bottom-part {
        .content {
          .content-item {
            height: 350px;
            padding: 20px;

            img {
              width: 70px;
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .header-container {
    height: auto;
    background: linear-gradient(352deg, #00a8ee 65%, white 65%);
    padding: 200px 20px 0;

    .header-content {
      .top-part {
        .left-part {
          h1 {
            font-size: 45px;
          }
        }

        .right-part {
          display: none;
        }
      }

      .bottom-part {
        .content {
          flex-direction: column;
          .content-item {
            img {
              width: 120px;
            }
          }
        }
      }
    }
  }
}
</style>
