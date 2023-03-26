<template>
  <div>
    <main>
      <Nav/>
      
      <Treeservices/>
      <router-view/>
      <Footer/>
    </main>
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue'

import Footer from '@/components/Footer.vue'

export default {
  components: {
    Nav,
    Footer
    }
}
</script>
<style lang="scss">
.section.section-hero.section-shaped {
    height: 100%;
}
</style>
