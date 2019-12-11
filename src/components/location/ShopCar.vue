<template>
  <div class="shopcar dis-fixed">
    <div class="shopcar-title">
      <div>
        <img src="~img/z-public/logo.png" alt="">
      </div>
      <div class="title-name">婚礼预约订单</div>
    </div>
    <div class="my-menu">
      <div class="left-show">
        <div class="enviroment">
          <div class="enviroment-outer">
            <div class="enviroment-inner">
              <img src="" alt="">
            </div>
          </div>
        </div>
        <div class="presee">
          <div class="presee-outer">
            <div class="presee-inner">
              <img src="" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="right-choose"></div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.shopcar {
  .shopcar-title {
    background: url(~img/z-public/shopcar-banner.jpg) no-repeat;
    background-size: 100%;
    display: flex;
    justify-content: center;
    line-height: 70px;
    box-shadow: 0 2px 6px 1px rgba(0, 0, 0, .5);
    >div {
      img {
        vertical-align: middle;
      }
      padding: 0 20px;
      color: #e2e2e2;
      letter-spacing: 2px;
    }
  }
  .my-menu {
    display: flex;
    >div {
      flex: 1;
      &.left-show {
        padding: 30px;
        width: 40%;
        display: flex;
        >div {
          flex: 1;
          flex-direction: column;
          &.presee {
            height: 10%;
          }
          &.enviroment {
            >div {
              overflow: hidden;
              .caroso-outer {
                width: 999999px;
                .caroso-inner {

                }
              }
            }
          }
        }
      }
      &.right-choose {
        width: 60%;
      }
    }
  }
}
</style>
