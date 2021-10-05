<template>
  <div
    :class="[{ 'menu-on-scroll': isScroll, _eli: isOnEli }, 'menu-container']"
  >
    <div class="menu-content">
      <div class="logo" @click="$router.push({ path: '/' })">
        <img
          :src="
            isOnHome
              ? aicorLogo
              : isOnEli
              ? aicorLogoOnlyWhite
              : aicorLogoOnlyBlue
          "
        />
      </div>

      <div>
        <v-expand-x-transition>
          <div v-if="!hideMenuRight" class="items">
            <nuxt-link :class="[{ 'item-white': isOnEli }, 'item']" to="/">
              Home
              <span class="hover-dot-container"><span></span></span>
            </nuxt-link>

            <a
              v-for="item in menuItems"
              :key="item.url"
              v-scroll-to="!!item.url && { el: item.url, offset: -120 }"
              :class="[{ 'item-white': isOnEli }, 'item']"
            >
              {{ item.name }}
              <span class="hover-dot-container"><span></span></span>
            </a>

            <button
              v-scroll-to="{ el: '#contact' }"
              :class="[{ 'on-eli': isOnEli }, 'contact-us-button']"
            >
              Contact Us
            </button>
          </div>
        </v-expand-x-transition>

        <div
          v-if="isOnEli"
          class="eli-hamburger"
          @click="hideMenuRight = !hideMenuRight"
        >
          <img src="~/assets/images/hamburger_menu_icon.svg" alt="" />
        </div>
      </div>

      <!-- <div v-else class="mobile-menu">
        <div class="eli-hamburger" @click="showMobileMenu = !showMobileMenu">
          <img
            v-if="(isScroll && isOnEli) || isOnEli"
            src="~/assets/images/hamburger_menu_icon.svg"
            alt=""
          />
          <img
            v-else
            src="~/assets/images/hamburger_menu_icon_blue.svg"
            alt=""
          />
        </div>

        <v-expand-transition>
          <div v-if="showMobileMenu" class="items">
            <nuxt-link class="item" to="/">
              Home
              <span class="hover-dot-container"><span></span></span>
            </nuxt-link>

            <a v-for="item in menuItems" :key="item.url" class="item">
              {{ item.name }}
              <span class="hover-dot-container"><span></span></span>
            </a>

            <button v-scroll-to="{ el: '#contact' }" class="contact-us-button">
              Contact Us
            </button>
          </div>
        </v-expand-transition>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      aicorLogo: require('@/assets/images/aicor-logo.svg'),
      aicorLogoOnlyBlue: require('@/assets/images/aicor_logo_only_darkblue.svg'),
      aicorLogoOnlyWhite: require('@/assets/images/aicor_logo_only_white.svg'),
      menuItems: [
        {
          name: 'About',
          url: '#what_makes_aicor_different',
        },
        {
          name: 'Solutions',
          // url: 'solutions',
        },
        {
          name: 'Investors',
          url: '#eli-ilocx',
        },
      ],
      isScroll: false,
      isOnEli: false,
      isOnHome: true,
      hideMenuRight: this.isOnEli || false,
      showMobileMenu: false,
    }
  },
  watch: {
    $route(to, from) {
      this.routeChecker(to.path)
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted() {
    this.routeChecker(this.$route.path, true)
  },
  methods: {
    handleScroll() {
      this.isScroll = window.scrollY > 50
    },
    routeChecker(path) {
      this.isOnEli = false
      this.isOnHome = false
      this.hideMenuRight = false

      if (path === '/eli-ident') {
        this.isOnEli = this.hideMenuRight = true
      } else if (path === '/') this.isOnHome = true
    },
  },
}
</script>
<style lang="scss" scoped>
.menu-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 58px 20px;
  z-index: 99;
  background: transparent;
  transition: all 200ms ease-in-out;

  &.menu-on-scroll {
    padding: 20px;
    // background: white;
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 54px 60px -30px rgba(0, 45, 87, 0.12);
    backdrop-filter: blur(30px);

    &._eli {
      background: rgba(0, 168, 238, 0.7);
    }

    // .menu-content {
    //   .items {
    //     .item.item-white {
    //       color: $dark-blue;
    //     }
    //   }

    //   .contact-us-button.on-eli {
    //     color: $menu-contact-us-button-color;
    //     border: 1px solid $menu-contact-us-button-color;
    //   }
    // }
  }

  &._eli {
    .menu-content {
      .items {
        margin-right: 100px;
      }
    }
  }

  .menu-content {
    position: relative;
    max-width: $max-screen-width;
    margin: 0 auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      // width: 210px;
      height: 54px;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .items {
      display: flex;
      align-items: center;
      gap: 29px;

      .item {
        position: relative;
        font-size: $menu-items-font-size;
        color: $menu-items-color;

        transition: all 100ms ease-in-out;

        &:hover {
          color: $menu-items-hover-color;
          .hover-dot-container {
            opacity: 1;
          }
          &.item-white {
            color: $menu-items-hover-color;
          }
        }

        &.item-white {
          color: white;
        }

        .hover-dot-container {
          opacity: 0;
          position: absolute;
          top: -10px;
          width: 100%;
          display: flex;
          justify-content: center;

          transition: 100ms ease-in-out;

          span {
            width: 5px;
            height: 5px;
            background: $menu-items-hover-color;
            border-radius: 50%;
          }
        }
      }
    }

    .contact-us-button {
      width: 150px;
      height: 54px;
      background: transparent;
      border: 1px solid $menu-contact-us-button-color;
      border-radius: 10px;
      margin-left: 91px;
      color: $menu-contact-us-button-color;
      transition: all 100ms ease-in-out;

      &.on-eli {
        color: white;
        border: 1px solid white;
      }
    }

    .eli-hamburger {
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      width: 30px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
}

@media only screen and (max-width: 1023px) {
  .menu-container {
    .menu-content {
      .contact-us-button {
        margin: 0;
      }

      .logo {
        margin-right: 30px;
      }
    }
  }
}
</style>
