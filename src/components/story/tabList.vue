<template>
      <div class="tab-box">
        <ul class="tab-title">
          <li :class="{classred: index === current}" :key="index" @click="current = index" v-for="(item, index) in tabitems">{{item}}</li>
        </ul>
        <transition-group tag="ul"  class="lists" name="animate">
          <li class="animate-item" v-for="item in filteredItems" :key="item.id">
            <el-image
              :src="item.img"
              :preview-src-list="imgList1">
            </el-image>
          </li>
        </transition-group>
      </div>
</template>

<script>
export default {
  data () {
    return {
      current: 0,
      srcLists: [],
      tabitems: ['all', 'bride', 'groom', 'lovestory', 'friend', 'party']
    }
  },
  computed: {
    filteredItems () {
      let result = []
      result = this.srcLists.filter(item => {
        return item.classify === this.tabitems[this.current]
      })
      return result
    },
    imgList1 () {
      let imgList = this.srcLists.map(item => {
        if (this.tabitems[this.current] === item.classify) {
          return item.img
        } else if (this.tabitems[this.current] === 'all') {
          return item.img
        }
      }).filter(item => {
        return item !== undefined
      })
      return imgList
    }
  },
  created () {
    this.axiosRequest({
      url: '/gallery/',
      method: 'get'
    }).then((res) => {
      if (res.status === 200) {
        this.srcLists = res.data.data
      }
    })
  },
  mounted () {
    this.srcLists = this.$store.state.story.srcLists
  }
}
</script>
<style lang="less" scoped>
  .tab-box{
    width: 80%;
    margin: 0 auto;
  }

  .lists:after {
    clear: both;
    content: '';
    display: block;
  }
  .lists {
    width: 100%;
    column-count: 3;
    column-gap: 10px;
  }
  .lists li {
    text-align: center;
    margin-bottom: 10px;
  }
  .animate-item {
    transition: all 1s;
    display: inline-block;
  }
  .animate-enter, .animate-leave-to
  {
    opacity: 0;
    transform: translateY(50px);
  }
  .animate-leave-active {
    position: absolute;
  }
  .tab-title{
    width: 100%;
    text-align: center;
    padding-bottom: 20px;
    li{
      display: inline-block;
      margin: 10px 10px;
      cursor: default;
      text-transform: capitalize;
    }
  }
  .tab-title{
    .classred{
      border-bottom: 1px solid #ff4061;
      color:#ff4061 ;
    }
  }
  .tab-title{
    li:hover{
      border-bottom: 1px solid #ff4061;
      color:#ff4061 ;
    }
  }
  /deep/
  .el-image{
    img:hover{
      transform: scale(1.1);
      transition: all ease-in-out 0.7s;
      opacity: 0.8;
    }
  }
  @media screen and (max-width:576px) {
    .lists {
      column-count: 2;
    }
    .tab-title li{
      font-size: 12px;
      margin: 10px 5px;
    }
  }
@media only screen and (min-width: 768px){
  /deep/
  .el-icon-circle-close{
    font-size: 30px;
  }
}
</style>
