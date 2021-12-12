<template>
  <Nav></Nav>
  <Oldlist></Oldlist>
  <Footer></Footer>
</template>

<script>
import Oldlist from '@/components/Oldlist'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
export default {
  components: {
    // Oldtop,
    Oldlist,
    Nav,
    Footer
  }
}
</script>

<style lang='less' scoped>

</style>
