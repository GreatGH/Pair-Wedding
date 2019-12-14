<template>
      <div class="tab-box">
        <ul class="tab-title">
          <li :class="{ classred:index==current}" :key="index"  @click="filt = item.name ;addClass(index)"  v-for="(item,index) in tabitems">{{item.name}}</li>
        </ul>
        <transition-group tag="ul"  class="lists" name="animate">
          <li class="animate-item" :key="item.id" v-for="item in filteredItems">
            <el-image
              :src="item.src"
              :preview-src-list="imgList1">
            </el-image>
          </li>
        </transition-group>
      </div>
</template>
<script>
import one from '../../images/gallery/1.jpg'
import two from '../../images/gallery/2.jpg'
import three from '../../images/gallery/3.jpg'
import four from '../../images/gallery/5.jpg'
import five from '../../images/gallery/6.jpg'
import six from '../../images/gallery/7.jpg'
import seven from '../../images/gallery/8.jpg'
import eight from '../../images/gallery/9.jpg'
import nine from '../../images/gallery/10.jpg'
export default {
  data () {
    return {
      current: 0,
      srcLists: [
        {id: 1, src: one, type: 'Birde'},
        {id: 2, src: two, type: 'Birde'},
        {id: 3, src: three, type: 'Birde'},
        {id: 4, src: four, type: 'Groom'},
        {id: 5, src: five, type: 'Friends'},
        {id: 6, src: six, type: 'LoveStory'},
        {id: 7, src: seven, type: 'LoveStory'},
        {id: 8, src: eight, type: 'LoveStory'},
        {id: 9, src: nine, type: 'Party'}
      ],
      tabitems: [
        {name: 'All'},
        {name: 'Birde'},
        {name: 'Groom'},
        {name: 'LoveStory'},
        {name: 'Friends'},
        {name: 'Party'}],
      filt: 'All'
    }
  },
  computed: {
    filteredItems () {
      var result
      if (this.filt !== 'All') {
        var filt = this.filt
        result = this.srcLists.filter(function (a) {
          return a.type === filt
        })
      } else {
        result = this.srcLists
      }
      return result
    },
    imgList1 () {
      let imgList = this.filteredItems.map(function (item) {
        return item.src
      })
      return imgList
    }
  },
  methods: {
    addClass (index) {
      this.current = index
    }
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
  }
</style>
