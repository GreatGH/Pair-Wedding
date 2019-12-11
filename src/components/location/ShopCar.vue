<template>
  <div class="shopcar dis-fixed">
    <div class="shopcar-title">
      <div>
        <img src="~img/z-public/logo.png" alt="">
      </div>
      <div class="title-name">婚礼预约订单</div>
    </div>
    <div class="menu">
      <div class="header">
        <div class="check-all">
          <input type="checkbox">
        </div>
        <div v-for="item in menuheader" class="header-nav" :key="item">{{item}}</div>
      </div>
      <div class="all-shop" v-for="item in shops" :key="item.position"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: 0,
      choose: ['海滩', '森林', '小路'],
      yourchoose: '海滩',
      menuheader: ['拍摄地点', '预览', '价格'],
      shops: [{
        position: '海滩',
        img: '',
        price: ''
      }]
    }
  }
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
  .menu {
    >div {
      padding: 10px 20px;
      &.header {
        display: flex;
        >div {
          font-size: 20px;
          text-align: center;
          &.check-all {
            width: 10%;
            text-align: left;
          }
          &.header-nav {
            width: 30%;
          }
        }
      }
    }
  }
}
</style>
