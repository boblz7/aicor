<template>
  <div class="aicor-footer">
    <div class="top-part-container">
      <div class="top-part-content">
        <div class="address">
          <img src="~/assets/images/aicor-logo.svg" alt="" />

          <p>AICOR Verwaltungs GmbH</p>
          <p>Warthestr. 21</p>
          <p>14513 Teltow</p>
          <p>Germany</p>
        </div>

        <div class="items">
          <div class="item">
            <p class="item-title">Solutions</p>

            <div class="anchor">
              <nuxt-link to="/eli-ident">ELI Ident</nuxt-link>
            </div>

            <div class="anchor">
              <nuxt-link to="/aicor-bank">AICOR Bank</nuxt-link>
            </div>
          </div>

          <div class="item">
            <p class="item-title">Comany</p>

            <a v-scroll-to="{ el: '#contact' }">Contact</a>
          </div>

          <div class="item">
            <p class="item-title">Support</p>

            <div class="anchor">
              <a v-scroll-to="{ el: '#faq' }">FAQ</a>
            </div>
          </div>
        </div>

        <div class="have-any-questions">
          <p class="item-title">Have any questions?</p>

          <p>
            E-mail us at:
            <a class="weight-600" href="mailto:info@aicor.io">info@aicor.io</a>
          </p>

          <div class="social-icons">
            <a href="" class="color-gray"
              ><img src="~/assets/images/twitter_icon.svg" alt=""
            /></a>

            <a href="" class="color-gray"
              ><img src="~/assets/images/facebook_icon.svg" alt=""
            /></a>

            <a href="" class="color-gray"
              ><img src="~/assets/images/linkedin_icon.svg" alt=""
            /></a>

            <a href="" class="color-gray"
              ><img src="~/assets/images/instagram_icon.svg" alt=""
            /></a>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-part-container">
      <div class="bottom-part-content">
        <div>
          <label>Copyright © 2021 by AICOR Verwaltungs GmbH, Germany</label>
        </div>

        <div>
          <label>Disclaimer</label>

          <label>Terms and Conditions</label>

          <label>Privacy Policy</label>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.aicor-footer {
  background: white;
  padding: 0;
  margin-top: 100px;

  .top-part-container {
    width: 100%;
    background: white;
    margin-bottom: 60px;
    padding: 0 50px;

    .top-part-content {
      max-width: $max-screen-width;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;

      a {
        color: $gray;
      }

      .address {
        img {
          margin-bottom: 40px;
        }
      }

      .items {
        display: flex;
        justify-content: space-between;
        gap: 160px;

        .item-title {
          color: $dark-blue;
          font-weight: 600;
          margin-bottom: 33px;
        }

        .item {
          .anchor {
            margin-bottom: 16px;
          }
        }
      }

      .have-any-questions {
        .item-title {
          color: $dark-blue;
          font-weight: 600;
          margin-bottom: 33px;
        }

        .social-icons {
          display: flex;
          gap: 35px;
          margin-top: 32px;

          img {
            width: 26px;
          }
        }
      }
    }
  }

  .bottom-part-container {
    width: 100%;
    height: 80px;
    background: $variant-light-blue;
    padding: 0 50px;

    .bottom-part-content {
      width: 100%;
      height: 100%;
      max-width: $max-screen-width;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;

      label {
        color: $gray;
      }

      > div:last-child {
        display: flex;
        gap: 64px;
      }
    }
  }
}
@media only screen and (max-width: 1409px) {
  .aicor-footer {
    .top-part-container {
      .top-part-content {
        .items {
          gap: 80px;
        }
      }
    }
  }
}

@media only screen and (max-width: 1023px) {
  .aicor-footer {
    .top-part-container {
      .top-part-content {
        flex-direction: column;
        gap: 50px;

        .items {
          flex-direction: column;
          gap: inherit;
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .aicor-footer {
    .top-part-container {
      padding: 0 20px;
    }

    .bottom-part-container {
      height: auto;
      padding: 20px 50px;

      .bottom-part-content {
        flex-direction: column-reverse;
        text-align: center;
        gap: 30px;

        > div:last-child {
          flex-direction: column;
          gap: 20px;
        }
      }
    }
  }
}
</style>
