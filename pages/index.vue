<template>
  <div>
    <Header />
    <EliAndAicor />
    <EliIlocx />
    <GetInvolved />
    <GetInTouch />
    <Faq />
    <NewsletterSubscribe />
  </div>
</template>
<script>
import Header from '~/components/Header'
import EliAndAicor from '~/components/EliAndAicor'
import EliIlocx from '~/components/EliIlocx'
import GetInvolved from '~/components/GetInvolved'
import GetInTouch from '~/components/GetInTouch'
import Faq from '~/components/Faq'
import NewsletterSubscribe from '~/components/NewsletterSubscribe'

export default {
  components: {
    Header,
    EliAndAicor,
    EliIlocx,
    GetInvolved,
    GetInTouch,
    Faq,
    NewsletterSubscribe,
  },
}
</script>
