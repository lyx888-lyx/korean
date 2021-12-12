<template>
  <div class="topnav">
    <ul>
      <li>
        <div class="logo">
      <!-- <img src="../assets/logo.png" alt=""> -->
    </div>
      </li>
      <li><router-link to="/">首页</router-link></li>
       <li><router-link to="">资讯动态</router-link></li>
       <li><router-link to="/olds">陈列展馆</router-link></li>
      <!-- <li>故事会</li> -->
      <li><router-link to="">故事会</router-link></li>
      <li><router-link to="">英雄纪念堂</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>

.topnav{
  height: 50px;
  width: 100%;
  background-color: #ab2429;
  margin-top: -13px;
  position: sticky;
  top: 0;
  z-index: 999;
  .logo{
    height: 50px;
    width: 180px;
    // background-color: blue;
    background:url(../assets/logo.png);
    background-size: 100%;
  }

  ul{
    li {
      float: left;
      display: block;
      height: 48px;
      line-height:48px;
      list-style: none;
      margin:0 10px;
      padding: 0px 20px;
      color:#fff;
      font-size: 18px;
      font-family: "Microsoft YaHei" !important;
      transition: 0.3s;
      box-sizing: content-box;

      a{
          color:#fff;
          font-size: 18px;
          text-decoration: none;
          display: block;
          &:hover{
            color: #FFD04C;
          }
      }

      &:hover{
        // background-color: aquamarine;
        color: #FFD04C;
        background-color:#c53a3f ;
        border-bottom: 2px solid #e2cc24;
      }
    }
  }
}
</style>
