<template>
  <div class="pagnation">
  <a-pagination :total= "200" show-total/>
  </div>
</template>

<script>
export default {
  name: 'Pagnation',
  data () {
    return {
      total: '90'
    }
  }
}
</script>

<style lang='less' scopde>
.pagnation{
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  // text-align: center;
  // margin-bottom: 20px;
  // background: rgb(221, 194, 194);
  background-color: #FBE1BA;
  // color: #fff;
}
</style>
