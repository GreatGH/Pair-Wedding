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
          <img :src="item.img" alt="" @click="changeSize">
        </div>
        <div class="header-nav">{{item.price | price}}</div>
      </div>
      <div class="header buy">
        <div @click="judgeToken">立即购买</div>
      </div>
    </div>
    <div class="pic-model" v-show="show">
      <div class="outer">
        <div class="inner">
          <img src="~img/z-public/shopcar-bg.jpg" alt="">
          <img src="~img/z-public/shopcar-bg.jpg" alt="">
          <img src="~img/z-public/shopcar-bg.jpg" alt="">
          <img src="~img/z-public/shopcar-bg.jpg" alt="">
        </div>
      </div>
      <div class="left-arrow arrow" @click="arrowClick(-1)">
        <i class="fa fa-angle-left"></i>
      </div>
      <div class="right-arrow arrow" @click="arrowClick(1)">
        <i class="fa fa-angle-right"></i>
      </div>
      <div class="close" @click="show =false">X</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: 0,
      carosoIndex: 0,
      show: false,
      allChoose: false,
      isChoosed: [false, false, false],
      choose: ['海滩', '森林', '小路'],
      yourchoose: '海滩',
      menuheader: ['拍摄地点', '预览', '价格'],
      shops: [{
        position: '海滩',
        img: 'https://www.17sucai.com/preview/1424582/2019-12-02/wedding/assets/img/footer-img/gallery5.jpg',
        price: 12988.99
      }, {
        position: '森林',
        img: 'https://www.17sucai.com/preview/1424582/2019-12-02/wedding/assets/img/footer-img/gallery6.jpg',
        price: 6988.99
      }, {
        position: '小路',
        img: 'https://www.17sucai.com/preview/1424582/2019-12-02/wedding/assets/img/footer-img/gallery3.jpg',
        price: 9988.99
      }, {
        position: '自定义',
        img: '',
        price: 16888.99
      }],
      modelImg: []
    }
  },
  methods: {
    allChoosed () {
      this.allChoose = !this.allChoose
      this.isChoosed = this.isChoosed.map(() => this.allChoose)
    },
    changeChoose (index) {
      this.isChoosed.splice(index, 1, !this.isChoosed[index])
      if (this.isChoosed.filter(item => item).length === this.isChoosed.length) {
        this.allChoose = true
      } else {
        this.allChoose = false
      }
    },
    changeSize () {
      this.show = true
      this.axiosRequest({
        url: '',
        method: 'get'
      }).then(res => {
        this.modelImg = res.data.data
        let modelImg = document.querySelectorAll('.pic-model img')
        modelImg.forEach(item => {
          item.style.width = item.parentNode.parentNode.clientWidth
        })
        modelImg[0].parentNode.style.width = modelImg[0].clientWidth * modelImg.length
      }).catch(err => {
        console.log(err)
      })
    },
    arrowClick (direct) {
      let arrowImg = document.querySelectorAll('.pic-model img')
      if ((direct === 1 && this.index < arrowImg.length - 1) || (direct === -1 && this.index > 0)) {
        this.index += direct
      }
      arrowImg[0].parentNode.style.left = -arrowImg[0].clientWidth * this.index + 'px'
    },
    judgeToken () {
      if (this.$store.state.token === '') {
        this.$router.push('login')
        return
      }
      let bought = []
      bought = this.isChoosed.map((item, index) => {
        if (item) {
          return index + 1
        }
      }).filter(item => item)
      this.axiosRequest({
        url: '/display',
        method: 'post'
      }).then(res => {
        console.log('buy：' + res.data.data)
      }).catch(err => {
        console.log(err)
      })
      console.log(bought)
    }
  },
  filters: {
    price (num) {
      return '$' + num.toFixed(2)
    }
  },
  mounted () {
    document.querySelectorAll('.header input[type=checkbox]').forEach(item => {
      this.isChoosed.push(false)
    })
    this.isChoosed.shift()
  }
}
</script>

<style lang="less" scoped>
@import '~css/shopcar.less';
</style>
