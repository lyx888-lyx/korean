<template>
    <a-menu mode="horizontal" :default-selected-keys="['1']" id="menu">
      <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
        <div
          :style="{
            width: '80px',
            height: '30px',
            borderRadius: '2px',
            background: 'var(--color-fill-3)',
            cursor: 'text'
          }"
        />
      </a-menu-item>
      <a-menu-item key="1">首页</a-menu-item>
      <a-menu-item key="2">文章</a-menu-item>
      <a-menu-item key="3">关于我</a-menu-item>
      <a-menu-item key="4">图一乐</a-menu-item>
    </a-menu>
</template>
<style lang='less' scoped>
 .arco-menu{
  //  box-shadow: 2px black;
  // border: 1px solid slategray;
  box-shadow: 10px 4px 5px #e0e2e4;
  position: sticky;
  top: 0;
  z-index: 999;
 }
</style>
