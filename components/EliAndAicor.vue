<template>
  <div id="eli_and_aicor" class="eli-and-aicor-container">
    <div class="eli-and-aicor-content">
      <div
        v-for="item in items"
        :key="item.title"
        :class="[{ reverse: item.isOrderReversed }, 'item']"
      >
        <div class="image-container">
          <!-- <v-img :src="item.image"></v-img> -->
          <img :src="item.image" />
        </div>

        <div class="text-container">
          <div class="text-content">
            <h2>{{ item.title }}</h2>

            <p v-html="item.description"></p>
          </div>

          <router-link :to="item.link" class="classic color-white">
            Learn More
            <span><img src="@/assets/images/arrow_right.svg" alt="" /></span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          image: require('@/assets/images/eli_ident_iphonex_mockup.png'),
          title: 'ELI Ident',
          description:
            'We offer a quick and secure way of identity verification using our in-house engineered AI models. <br /><br /> ELI Ident provides seamless customer onboarding experience, reduces costs, increase conversion and deters fraudulent attempts.',
          isOrderReversed: false,
          link: '/eli-ident',
        },
        {
          image: require('@/assets/images/landing_page_aicor_bank_iphonex_mockup.png'),
          title: 'AICOR Bank',
          description:
            'AICOR has developed a proprietary payment processing infrastructure that will change the way businesses accept a wide variety of payments through a single channel, from start to finish.',
          isOrderReversed: true,
          link: '/aicor-bank',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.eli-and-aicor-container {
  width: 100%;
  // height: 1630px;
  background: white;
  padding: 400px 50px 50px;

  .eli-and-aicor-content {
    max-width: $max-screen-width;
    margin: 0 auto;
    background-image: url('@/assets/images/eli-aicor-connected-line.svg');
    background-repeat: no-repeat;
    background-position: 343px 500px;
    background-size: auto;

    .item {
      height: 620px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      // justify-content: space-between;

      &.reverse {
        .image-container {
          order: 1;
        }

        .text-container {
          display: flex;
          flex-direction: column;
          gap: 90px;
          // justify-content: space-between;
          padding-right: 150px;
          padding-left: 0;
          padding-top: 120px;

          .text-content {
            p {
              margin-bottom: 0;
            }
          }
        }
      }

      > div {
        flex: 1;
      }

      .image-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;

        .v-image,
        img {
          position: absolute;
          width: 1100px;
        }
      }

      .text-container {
        display: flex;
        flex-direction: column;
        gap: 50px;
        padding-left: 150px;
        min-height: 400px;
        z-index: 10;

        .text-content {
          h2 {
            width: fit-content;
            display: flex;
            align-items: center;
            position: relative;
            margin-bottom: 20px;

            &::after {
              content: '';
              width: 50px;
              height: 0;
              border: 1px solid #0a307c;
              position: absolute;
              right: -100px;
            }
          }

          // p {
          //   margin-bottom: 50px;
          // }
        }

        a {
          span {
            padding-left: 10px;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 1023px) {
  .eli-and-aicor-container {
    width: 100%;
    // height: 1630px;
    background: white;
    padding: 400px 50px 50px;

    .eli-and-aicor-content {
      max-width: $max-screen-width;
      margin: 0 auto;
      background-repeat: no-repeat;
      background-position: 343px 500px;
      background-size: auto;
      background-image: none;

      .item {
        grid-template-columns: repeat(1, 1fr);
        height: auto;

        &.reverse {
          .text-container {
            gap: 50px;
            padding: 0;
          }
        }

        .image-container {
          display: none;
        }

        .text-container {
          padding: 0;
        }
      }
    }
  }
}
@media only screen and (max-width: 1023px) {
  .eli-and-aicor-container {
    padding: 400px 20px 50px;
    .eli-and-aicor-content {
      display: flex;
      flex-direction: column;
      gap: 50px;
    }
  }
}
</style>
