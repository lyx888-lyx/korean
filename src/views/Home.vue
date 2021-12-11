<template>
  <div class="home">
    <Toptip></Toptip>
    <Topnavmini></Topnavmini>
    <Carousel></Carousel>
    <Nav></Nav>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Topnavmini from '@/components/Topnavmini'
import Toptip from '@/components/Toptip'
import Nav from '@/components/Nav'
import Carousel from '@/components/Carousel'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
export default {
  name: 'Home',
  components: {
    Nav,
    Carousel,
    Main,
    Footer,
    Toptip,
    Topnavmini
  }
}
</script>
<style lang='less' scoped>
</style>
