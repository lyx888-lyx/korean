<template>
  <div class="footer">
    <div class="footer-in-top">
      <div class="footer-dobin">
        <div class="footer-dobin-left">
          <span id="footer-h">Programmer-Zha</span>
          <div class="under-table">
            <div class="recommend-browser">
              <span>推荐使用:</span>
              <ul>
                <li><img src="../assets/GOOGEL.png" alt="" /></li>
                <li><img src="../assets/firefox.png" alt="" /></li>
              </ul>
            </div>
            <div class="tags">
              <!-- <span>Tips:</span> -->
              <ul>
                <li>
                  <a-tag checkable color="#7816ff">前端</a-tag>
                </li>
                <li>
                  <a-tag checkable color="#00b42a">Vue</a-tag>
                </li>
                <li>
                  <a-tag checkable color="#7bc616">Nginx</a-tag>
                </li>
                <li>
                  <a-tag checkable color="#165dff">Arco Design</a-tag>
                </li>
              </ul>
            </div>
            <div class="contact-me">
              <ul>
                <li>
                  <span id="contect">联系我</span>
                </li>
                <li>
                  <a-tooltip content="QQ:2848135295">
                    <icon-qq />
                  </a-tooltip>
                </li>
                <li>
                  <a-tooltip content="暂无">
                    <icon-github />
                  </a-tooltip>
                </li>
                <li>
                  <a-tooltip content="微信：19157720829">
                    <icon-wechat />
                  </a-tooltip>
                </li>
                <li>
                  <a-tooltip content="E-mail:19157720829@yeah.net">
                    <icon-email />
                  </a-tooltip>
                </li>
                <li>
                  <a-tooltip content="Tel:19157720829">
                    <icon-phone />
                  </a-tooltip>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-dobin-right">
          <a-descriptions :data="data" title="特别感谢" :column="1" />
        </div>
      </div>
    </div>
    <div class="footer-in-bottom">
      <div class="footer-in-bottom-left">
        <a-tag size="medium">
          <template #icon>
            <icon-common />
          </template>
          Powered by ByteHero
        </a-tag>
        <div class="span">
          <span>Blog of Zha | 前端 | Vue</span>
        </div>
      </div>
      <div class="footer-in-bottom-right">
        <span>皖ICP备2021016370号-1</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        {
          label: 'Vue',
          value: '本站主要框架'
        },
        {
          label: 'Visual Studio Code',
          value: '轻量快捷的编辑器'
        },
        {
          label: 'Nginx',
          value: '网站服务器'
        }
      ]
    }
  }
}
</script>

<style lang='less' scoped>
.footer {
  height: 417px;
  width: 100%;
  background-color: #f7f8fa;
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: end;
  .footer-in-top {
    height: 340px;
    width: 100%;
    display: flex;
    justify-content: center;
    .footer-dobin {
      height: 100%;
      width: 90%;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #cbcbcb;
      .footer-dobin-left {
        height: 100%;
        width: 400px;
        #footer-h {
          font-style: normal;
          font-family: sans-serif;
          font-weight: bold;
          font-size: 20px;
        }

        .under-table {
          height: 310px;
          width: 100%;

          .recommend-browser {
            height: 40px;
            width: 100%;
            margin-top: 14px;
            position: relative;

            span {
              font-size: 12px;
              color: #4a4949;
            }
            ul {
              display: block;
              height: 50px;
              list-style: none;
              position: absolute;
              top: -14px;
              left: 18px;

              li {
                float: left;
                height: 30px;
                width: 30px;
                text-align: center;
                line-height: 30px;
                margin-left: 10px;
                &:nth-child(2) {
                  margin-top: -4px;
                }
              }
            }
          }
          .tags {
            height: 200px;
            width: 100%;
            position: relative;
            ul {
              display: flex;
              flex-wrap: wrap;
              position: absolute;
              left: -20px;
            }
            ul li {
              list-style: none;
              margin-left: 10px;
              margin-top: 10px;
            }
          }
          .contact-me {
            margin-top: -20px;
            height: 50px;
            width: 330px;

            ul {
              display: flex;
              justify-content: space-evenly;
              align-items: center;
              li {
                list-style: none;
                height: 50px;
                width: 50px;
                line-height: 50px;
                text-align: center;
                #contect {
                  color: salmon;
                  font-size: 14px;
                  margin-right: 5px;
                }
              }
            }
          }
        }
      }
      .footer-dobin-right {
        height: 100%;
        width: 400px;
        .arco-descriptions{
          margin-top: 40px;
          min-width: 200px;
        }
      }
    }
  }
  .footer-in-bottom {
    height: 50px auto;
    // min-height: 50px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .footer-in-bottom-left {
      height: 50px;
      width: 450px;
      line-height: 50px;
      .span {
        font-size: 10px;
        color: #898989;
        height: 20px;
        width: 120px;
        position: relative;
        top: -33px;
        left: 290px;
        span {
          position: absolute;
          top: -15px;
          left: 10px;
          width: 180px;
        }
      }
      .arco-tag {
        margin-left: 130px;
        border: 1px solid #d4c6c6;
      }
    }
    .footer-in-bottom-right {
      height: 50px;
      width: 300px;
      line-height: 50px;
      color: #6f6f6f;
    }
  }
}
</style>
