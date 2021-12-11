<template>
  <div class="navtop">
    <div class="nav-box">
      <ul>
        <li>
          <a-dropdown trigger="hover">
            <a href="#">网站导航</a>
            <template #content>
              <a-doption>首页</a-doption>
              <a-doption>文章</a-doption>
              <a-doption>关于我</a-doption>
            </template>
          </a-dropdown>
        </li>
        <li><a href="#">手机端</a></li>
        <li><a href="#">管理员登陆</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navtop'
}
</script>

<style lang='less' scoped>
.navtop {
  height: 30px;
  background: #e3e4e5;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;

  .nav-box {
    margin: 0 auto;
    width: 1190px;
    text-align: right;
    justify-content: center;

    ul li {
      display: inline-block;
      padding: 0 10px;
      font-size: 12px;
      height: 30px;
      line-height: 30px;
      position: relative;
      /*float: right;*/
      &:not(:last-child):after {
        content: "";
        width: 1px;
        height: 14px;
        background: #cccccc;
        position: absolute;
        top: 8px;
        right: 0;
        display: block;
      }
      &:not(:last-child):after {
        content: "";
        width: 1px;
        height: 14px;
        background: #cccccc;
        position: absolute;
        top: 8px;
        right: 0;
        display: block;
      }
      a {
        color: #999999;
        text-decoration: none;
        &:hover {
          color: rgb(22, 93, 255);
          cursor: pointer;
        }
      }
    }
  }
}
</style>
