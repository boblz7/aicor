export const ContactForm = () => import('../../components/ContactForm.vue' /* webpackChunkName: "components/contact-form" */).then(c => wrapFunctional(c.default || c))
export const EliAndAicor = () => import('../../components/EliAndAicor.vue' /* webpackChunkName: "components/eli-and-aicor" */).then(c => wrapFunctional(c.default || c))
export const EliIlocx = () => import('../../components/EliIlocx.vue' /* webpackChunkName: "components/eli-ilocx" */).then(c => wrapFunctional(c.default || c))
export const Faq = () => import('../../components/Faq.vue' /* webpackChunkName: "components/faq" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const GetInTouch = () => import('../../components/GetInTouch.vue' /* webpackChunkName: "components/get-in-touch" */).then(c => wrapFunctional(c.default || c))
export const GetInvolved = () => import('../../components/GetInvolved.vue' /* webpackChunkName: "components/get-involved" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const HeaderEli = () => import('../../components/HeaderEli.vue' /* webpackChunkName: "components/header-eli" */).then(c => wrapFunctional(c.default || c))
export const Menu = () => import('../../components/Menu.vue' /* webpackChunkName: "components/menu" */).then(c => wrapFunctional(c.default || c))
export const MenuMobile = () => import('../../components/MenuMobile.vue' /* webpackChunkName: "components/menu-mobile" */).then(c => wrapFunctional(c.default || c))
export const NewsletterSubscribe = () => import('../../components/NewsletterSubscribe.vue' /* webpackChunkName: "components/newsletter-subscribe" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
