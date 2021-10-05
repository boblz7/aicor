<template>
  <div class="eli-ident-container">
    <HeaderEli />

    <div class="eli-ident-content">
      <div class="introducing">
        <div class="left-part">
          <h2>Introducing</h2>
          <h2>Electronic Legitimation Intelligence</h2>
        </div>

        <div class="right-part">
          <p>
            Automated AI-powered system offering fast, secure and cost-effective
            services.
          </p>

          <div class="buttons-container">
            <a
              href="https://eli-ident.io/"
              class="classic color-white weight-600 shadow-none"
            >
              Explore ELI
            </a>
            <button
              v-scroll-to="{ el: '#contact', offset: 0 }"
              class="classic outlined color-default-blue weight-600 shadow-none"
            >
              Request Demo
            </button>
          </div>
        </div>
      </div>

      <div class="eli-ident-solutions">
        <div class="text">
          <h2>
            ELI Ident is on a mission <br />
            to revolutionize identification
          </h2>

          <p>
            Whether you want to provide seamless user onboarding, remove the
            hassle of traditional <br />
            password logins or implement more rigorous security checks ELI is
            here for you.
          </p>
        </div>

        <div class="items">
          <div v-for="item in items" :key="item.title" class="item">
            <img :src="item.image" alt="" />

            <div class="item-content">
              <p class="item-title color-dark-blue">{{ item.title }}</p>

              <p class="">{{ item.subtitle }}</p>

              <a class="classic eli shadow-none" :href="item.url">
                Read More
                <span>
                  <img src="~/assets/images/button_arrow_darkblue.svg" alt="" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <GetInTouch background="#eaf5ff" />
  </div>
</template>
<script>
import GetInTouch from '~/components/GetInTouch'

export default {
  components: {
    GetInTouch,
  },
  data() {
    return {
      items: [
        {
          title: 'KYC - Identity Verification',
          subtitle:
            'Automate the onboarding and verification process while minimizing forms and steps',
          url: 'https://eli-ident.io/#kyc-verification',
          image: require('~/assets/images/eli_kyc.png'),
        },
        {
          title: 'AML Screening',
          subtitle:
            'Check submitted user identities through international sanction and embargo lists',
          url: 'https://eli-ident.io/#aml-screening',
          image: require('~/assets/images/eli_aml.png'),
        },
        {
          title: 'ELI Universal Login',
          subtitle:
            'Streamline the user onboarding experience across multiple platforms with single sign-on',
          url: 'https://eli-ident.io/#eli-universal-login',
          image: require('~/assets/images/eli_universal_login.png'),
        },
        {
          title: 'Attendance Tracking',
          subtitle:
            'Verify employees’ whereabouts with fully automated identity verification plus data recording',
          url: 'https://eli-ident.io/#attendance-tracking-and-access-control',
          image: require('~/assets/images/eli_attendance.png'),
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.eli-ident-container {
  .eli-ident-content {
    max-width: $max-screen-width;
    margin: 0 auto;

    .introducing {
      position: relative;
      top: -84px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 126px;
      box-shadow: 0px 16px 30px rgba(0, 0, 0, 0.07);
      border-radius: 12px;
      padding: 53px;
      background: white;

      .left-part {
        max-width: 474px;
        h2:first-child {
          font-size: 30px;
          font-weight: 400;
        }
        h2:last-child {
          font-size: 40px;
        }
      }

      .right-part {
        max-width: 450px;

        .buttons-container {
          display: flex;
          gap: 30px;
          margin-top: 51px;
        }
      }
    }

    .eli-ident-solutions {
      padding-top: 66px;
      padding-bottom: 100px;

      .text {
        text-align: center;
        margin-bottom: 100px;

        h2 {
          font-size: 40px;
          font-weight: 700;
          margin-bottom: 30px;
        }
      }

      .items {
        max-width: $max-screen-width4;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 60px;

        .item {
          box-shadow: 0px 15px 33px rgb(0 0 0 / 6%);
          border-radius: 0px 0px 12px 12px;

          > img {
            width: 100%;
          }

          .item-content {
            padding: 60px 84px 100px;

            .item-title {
              font-size: 24px;
              font-weight: 700;
              margin-bottom: 20px;
            }

            a {
              margin-top: 50px;
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 1409px) {
  .eli-ident-container {
    .eli-ident-content {
      .introducing {
        margin: 0 50px;
        gap: 50px;
      }

      .eli-ident-solutions {
        .items {
          padding: 0 50px;
        }
      }
    }
  }
}

@media only screen and (max-width: 1023px) {
  .eli-ident-container {
    .eli-ident-content {
      .introducing {
        flex-direction: column;

        .right-part {
          .buttons-container {
            button {
              // width: 100%;
            }
          }
        }
      }

      .eli-ident-solutions {
        .items {
          gap: 30px;
          .item {
            .item-content {
              padding: 30px 30px 50px;
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .eli-ident-container {
    .eli-ident-content {
      .introducing {
        margin: 0 20px;

        .right-part {
          .buttons-container {
            flex-direction: column;

            button,
            a {
              width: 100%;
              text-align: center;
            }
          }
        }
      }

      .eli-ident-solutions {
        .items {
          grid-template-columns: repeat(1, 1fr);
          padding: 0 20px;
          gap: 20px;
        }
      }
    }
  }
}
</style>
