<template>
   <a-card hoverable :style="{ width: '360px' }">
    <template #cover>
      <div
        :style="{
          height: '204px',
          overflow: 'hidden',
        }"
      >
        <img
          :style="{ width: '100%', transform: 'translateY(-20px)' }"
          alt="dessert"
          src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
        />
      </div>
    </template>
    <a-card-meta title="Cardtitle">
      <template #description>
        Card content <br />
        Card content
      </template>
    </a-card-meta>
  </a-card>
</template>

<script>
export default {
  name: 'Oldcard'

}
</script>

<style>

</style>
