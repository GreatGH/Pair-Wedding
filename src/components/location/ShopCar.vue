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
          <input type="checkbox" @click="allChoosed" :class="{show: allChoose}" id="allchoose">
          <label for="allchoose">全选</label>
        </div>
        <div v-for="item in menuheader" class="header-nav" :key="item">{{item}}</div>
      </div>
      <div class="all-shop header" v-for="(item, index) in shops" :key="item.position">
        <div class="check-all">
          <input type="checkbox" @click="changeChoose(index)" :class="{show: isChoosed[index]}">
        </div>
        <div class="header-nav">{{item.position}}</div>
        <div class="header-nav">
          <img :src="item.img" alt="">
        </div>
        <div class="header-nav">{{item.price | price}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: 0,
      allChoose: false,
      isChoosed: [false, false, false],
      choose: ['海滩', '森林', '小路'],
      yourchoose: '海滩',
      menuheader: ['拍摄地点', '预览', '价格'],
      shops: [{
        position: '海滩',
        img: '',
        price: 9988.99
      }, {
        position: '海滩',
        img: '',
        price: 9988.99
      }, {
        position: '海滩',
        img: '',
        price: 9988.99
      }]
    }
  },
  methods: {
    allChoosed () {
      this.allChoose = !this.allChoose
      this.isChoosed = this.isChoosed.map(() => this.allChoose)
    },
    changeChoose (index) {
      this.isChoosed.splice(index, 1, !this.isChoosed[index])
      console.log(1)
      if (this.isChoosed.filter(item => item).length === this.isChoosed.length) {
        console.log(2)
        this.allChoose = true
      } else {
        console.log(3)
        this.allChoose = false
      }
    }
  },
  filters: {
    price (num) {
      return '$' + num.toFixed(2)
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
            >input {
              appearance: none;
              position: relative;
              width: 20px;
              height: 20px;
              border: 1px solid black;
              &.show::after {
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                display: block;
                content: '\2714';
              }
            }
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
