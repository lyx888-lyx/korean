<template>
  <a-alert closable>{{ toptip }}</a-alert>
</template>

<script>
export default {
  name: 'Toptip',
  data () {
    return {
      toptip: '您最好使用Chrome、Firefox、Safari进行浏览'
    }
  }
}
</script>

<style>

</style>
