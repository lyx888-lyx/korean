<template>
  <div class="olds">
    <div class="olds-in">
      <Oldcard v-for="(item, index) in 9" :key="index"></Oldcard>
    </div>
  </div>
   <Pagination></Pagination>
</template>

<script>
import Oldcard from '@/components/Oldcard'
export default {
  name: 'Oldlist',
  data () {
    return {

    }
  },
  components: {
    Oldcard
  }
}
</script>

<style lang='less' scoped>
 .olds{
   width: 100%;
   min-height: 500px auto;
   background-color: #FBE1BA;
   display: flex;
   justify-content: center;
   align-items: center;
   .olds-in{
     margin-top: 20px;
     margin-bottom: 20px;
     height: 98%;
     width: 80%;
     display: flex;
     justify-content: center;
     flex-wrap: wrap;
     .arco-card {
       margin-left: 20px;
       margin-top: 10px;
      //  margin-bottom: 10px;
        background-color: #b88761;
     }
   }
 }
</style>
