<template>
  <div class="aicor-bank-container">
    <div class="aicor-bank-content">
      <div class="aicor-header">
        <div class="image">
          <img src="~/assets/images/aicor_bank_iphonex_mockup.png" alt="" />
        </div>

        <div class="content">
          <h2>
            Experience fast and secure way to send, receive, and access your
            money
          </h2>

          <div class="items">
            <div class="item">
              <div class="item-image">
                <img src="~/assets/images/shopping_card_icon.svg" alt="" />
              </div>

              <div class="item-text">
                <p>Shop with AICOR Bank</p>

                <label class="color-gray">
                  Choose AICOR Bank at checkout and you can skip entering your
                  financial info when you make a purchase. We help you shop with
                  confidence.
                </label>
              </div>
            </div>

            <div class="vhr"></div>
            <!-- <hr /> -->

            <div class="item">
              <div class="item-image">
                <img src="~/assets/images/credit_card_icon.svg" alt="" />
              </div>

              <div class="item-text">
                <p>Get paid by customers</p>

                <label class="color-gray">
                  Whether you’re selling on a marketplace, offering a service
                  online, or setting up a store, we will help you get paid fast
                  and secure.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="why-choose-aicor">
        <div class="text">
          <p class="why-title color-dark-blue">Why choose AICOR Bank?</p>

          <p class="why-subtitle">
            With AICOR Bank you enjoy fast transfers, easy navigation, and
            access to your money <br />
            at any time and anywhere with the highest level of security.
          </p>
        </div>

        <div class="why-sketch">
          <div class="items-left">
            <div v-for="item in itemsLeft" :key="item.title" class="item">
              <div class="item-image">
                <img :src="item.image" alt="" />
              </div>

              <p>{{ item.title }}</p>

              <label>{{ item.subtitle }}</label>
            </div>
          </div>

          <div class="items-center-image">
            <img
              src="~/assets/images/aicor_bank_features_iphonex_mockup.png"
              alt=""
            />
          </div>
          <div class="items-right">
            <div v-for="item in itemsRight" :key="item.title" class="item">
              <div class="item-image">
                <img :src="item.image" alt="" />
              </div>

              <p>{{ item.title }}</p>

              <label>{{ item.subtitle }}</label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <NewsletterSubscribe is-on-aicor />
  </div>
</template>
<script>
import NewsletterSubscribe from "~/components/NewsletterSubscribe";

export default {
  components: {
    NewsletterSubscribe,
  },
  data() {
    return {
      itemsLeft: [
        {
          title: "Conventient",
          subtitle:
            "Pay by scanning QR codes. This is especially convenient when purchasing online. You no longer need to enter bank details or do double confirmations.",
          image: require("~/assets/images/qr_code_icon.svg"),
        },
        {
          title: "Mobile Wallet",
          subtitle:
            "The only wallet that you will ever need. Have your money with you anywhere you go and easily access your account balance and payment history.",
          image: require("~/assets/images/wallet_icon.svg"),
        },
        {
          title: "Notifications",
          subtitle:
            "Receive notifications about incoming and outgoing payments in real-time. Respond fast and keep going with your important activities.",
          image: require("~/assets/images/notifications_icon.svg"),
        },
      ],
      itemsRight: [
        {
          title: "Secure",
          subtitle:
            "Your payments and personal information are kept safe, and your security is our priority as we developed comprehensive anti-fraud and AML measurements.",
          image: require("~/assets/images/security_icon.svg"),
        },
        {
          title: "AI Verification",
          subtitle:
            "Using AI as quick and secure way of identity verification for seamless onboarding experience.",
          image: require("~/assets/images/ai_verification_icon.svg"),
        },
        {
          title: "Instant",
          subtitle:
            "It’s easy for AICOR wallet holders to send and receive money. You just need an email address or phone number.",
          image: require("~/assets/images/instant_icon.svg"),
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.vhr {
  width: 1px;
  background: $light-gray;
}
.aicor-bank-container {
  .aicor-bank-content {
    .aicor-header {
      height: 1180px;
      display: flex;
      align-items: center;
      padding-top: 100px;
      background: $variant-light-blue;

      > div {
        flex: 1;
      }

      .image {
        img {
          width: 100%;
          transform: scale(1.2);
          position: relative;
          right: -70px;
        }
      }

      .content {
        padding-right: 50px;
        h2 {
          max-width: 810px;
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 100px;
        }

        .items {
          max-width: 810px;
          display: flex;
          justify-content: space-between;
          gap: 120px;

          .item {
            .item-image {
              height: 50px;
              margin-bottom: 30px;

              img {
                height: 100%;
              }
            }

            .item-text {
              p {
                font-size: 18px;
                color: $dark-blue;
                font-weight: 600;
                margin-bottom: 20px;
              }
            }
          }
        }
      }
    }

    .why-choose-aicor {
      max-width: $max-screen-width;
      margin: 0 auto;
      padding: 100px 50px;

      .text {
        text-align: center;

        .why-title {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 30px;
        }

        .why-subtitle {
          margin-bottom: 40px;
        }
      }

      .why-sketch {
        display: flex;
        gap: 66px;

        .items-center-image {
          width: 436px;
          flex-basis: 436px;

          img {
            width: 100%;
          }
        }

        .items-left,
        .items-right {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
          padding: 65px 0 40px;

          .item {
            display: flex;
            flex-direction: column;

            .item-image {
              width: 50px;
              margin-bottom: 20px;
            }

            p {
              font-size: 21px;
              font-weight: 600;
              color: $dark-blue;
              margin-bottom: 10px;
            }

            label {
              color: $gray;
            }
          }
        }

        .items-left {
          .item {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            text-align: right;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 1409px) {
  .aicor-bank-container {
    .aicor-bank-content {
      .aicor-header {
        .image {
          img {
            right: 0;
          }
        }

        .content {
          .items {
            gap: 60px;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 1199px) {
  .aicor-bank-container {
    .aicor-bank-content {
      .aicor-header {
        height: auto;
        padding: 200px 0;
        .image {
          display: none;
        }

        .content {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 50px;
        }
      }

      .why-choose-aicor {
        padding: 20px;

        .why-sketch {
          gap: 33px;
        }
      }
    }
  }
}

@media only screen and (max-width: 1023px) {
  .aicor-bank-container {
    .aicor-bank-content {
      .aicor-header {
        .content {
          padding: 0 20px;

          .items {
            gap: 30px;
          }
        }
      }

      .why-choose-aicor {
        .items-center-image {
          display: none;
        }

        .items-left,
        .items-right {
          gap: 50px;

          .item {
            height: 250px;
          }
        }
      }
    }
  }
}
</style>
