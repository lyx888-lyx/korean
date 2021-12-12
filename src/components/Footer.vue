<template>
  <div class="footer">
    <div class="footer-in">
      <div class="footer-dobin-left">
        <div class="footer-dob-left-in1">
          <img src="../assets/logo.png" alt="here is logo" />
          <span id="support">技术支持:</span>
          <ul class="footer-in-tags">
            <li>
              <a-tag checkable color="#7816ff">前端</a-tag>
            </li>
            <li>
              <a-tag checkable color="#00b42a">Vue</a-tag>
            </li>
            <li>
              <a-tag checkable color="#165dff">Arco Design</a-tag>
            </li>
            <li>
              <a-tag checkable color="#7bc616">Nginx</a-tag>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-dobin-right">
        <a-card class="card" title="特别声明" hoverable>
          <template #extra>
            <a-link>More</a-link>
          </template>
          您是访问本网站的第<span id="num">12344</span
          >位用户,很高兴您能访问此网站，但希望您能知道：
          <div id="footer-tip">{{ tip }}</div>
        </a-card>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-in-left">
        <a-tag>
          <template #icon>
            <icon-copyright />
          </template>
          Powered By ByteHero
        </a-tag>
        <span id="copyright">&copy;CopyRight of Zha</span>
      </div>
      <div class="footer-bottom-in-right">
        <span>皖ICP备2021016370号-1</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      tip: '本网站内容仅供于学习，不用作商业用途!'
    }
  }
}
</script>

<style lang='less' scoped>
.footer {
  height: 400px;
  width: 100%;
  background-color: #ab2429;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    height: 50px;
    width: 90%;
    .footer-bottom-in-left {
      width: 400px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: start;
      #copyright{
        margin-left: 10px;
        margin-top: 5px;
        font-size: 10px;
        color: #f6e8cf;
      }
    }
    .footer-bottom-in-right{
      display: flex;
      align-items: center;
      color: #f6e8cf;
    }
  }
  .footer-in {
    height: 312px;
    width: 90%;
    margin-top: 20px;
    border-bottom: 1px solid #f6e8cf;
    display: flex;
    justify-content: space-between;

    .footer-dobin-left {
      height: 100%;
      width: 30%;

      .footer-dob-left-in1 {
        height: 200px;
        position: absolute;

        #support {
          font-size: 18px;
          color: #f6e8cf;
          position: relative;
          left: -270px;
          top: 20px;
        }
        .footer-in-tags {
          height: 50px;
          width: 100%;
          display: flex;
          align-items: flex-end;

          li {
            list-style: none;
            margin-right: 10px;
          }
        }
      }
    }

    .footer-dobin-right {
      height: 100%;
      width: 23%;
      .card {
        height: 90%;
        background-color: #f6e8cf;
        .arco-link{
          color: #ab2429;
        }

        #footer-tip {
          height: 30px;
          width: 100%;
          margin-top: 10px;
          text-indent: 2em;
        }
        #num {
          font-size: 22px;
        }
      }
    }
  }
}
</style>
