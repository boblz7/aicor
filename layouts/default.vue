<template>
  <v-app dark>
    <Menu v-if="$vuetify.breakpoint.mdAndUp" />
    <MenuMobile v-else />

    <v-main>
      <nuxt />
    </v-main>

    <Footer />
  </v-app>
</template>
<script>
import Menu from '~/components/Menu'
import MenuMobile from '~/components/MenuMobile'
import Footer from '~/components/Footer'

export default {
  components: {
    Menu,
    MenuMobile,
    Footer,
  },
  data() {
    return {}
  },
  mounted() {
    this.intercom()
  },
  methods: {
    intercom() {
      // Set your APP_ID
      const APP_ID = 'gk04uwv2'

      window.intercomSettings = {
        app_id: APP_ID,
      }
      ;(function () {
        const w = window
        const ic = w.Intercom
        if (typeof ic === 'function') {
          ic('reattach_activator')
          ic('update', w.intercomSettings)
        } else {
          const d = document
          const i = function () {
            i.c(arguments)
          }
          i.q = []
          i.c = function (args) {
            i.q.push(args)
          }
          w.Intercom = i
          const l = function () {
            const s = d.createElement('script')
            s.type = 'text/javascript'
            s.async = true
            s.src = 'https://widget.intercom.io/widget/' + APP_ID
            const x = d.getElementsByTagName('script')[0]
            x.parentNode.insertBefore(s, x)
          }
          if (document.readyState === 'complete') {
            l()
          } else if (w.attachEvent) {
            w.attachEvent('onload', l)
          } else {
            w.addEventListener('load', l, false)
          }
        }
      })()
    },
  },
}
</script>
