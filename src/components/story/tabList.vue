<template>
  <div class="tab-box">
    <ul class="tab-title">
      <li :class="{ classred:index==current}" :key="index"  @click="filt = item.name ;addClass(index)"  v-for="(item,index) in tabitems">{{item.name}}</li>
    </ul>
    <viewer :images="filteredItems" class="masonry">
      <transition-group name="list-complete" tag="ul">
        <li :key="src.id" v-for="src in filteredItems" class="column list-complete-item blok">
          <div class="img-box"><img  :src="src.img" :key="src.id"></div>
        </li>
      </transition-group>
    </viewer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      current: 0,
      srcLists: [],
      tabitems: [
        {name: 'all'},
        {name: 'bride'},
        {name: 'groom'},
        {name: 'lovestory'},
        {name: 'friend'},
        {name: 'party'}],
      filt: 'all'
    }
  },
  computed: {
    filteredItems () {
      var result
      if (this.filt !== 'all') {
        var filt = this.filt
        result = this.srcLists.filter(function (a) {
          return a.classify === filt
        })
      } else {
        result = this.srcLists
      }
      return result
    }
  },
  methods: {
    addClass (index) {
      this.current = index
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
  @media screen and (max-width:576px) {
    .tab-title li{
      font-size: 12px;
      margin: 10px 5px;
    }
  }
  .masonry{
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    column-count: 3;
  }
  .column{
    margin: 0 0 1em 0;
    break-inside: avoid;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
      transform: scale(1.1);
    }
  }

  .list-complete-item {
    transition: all .5s;
    display: inline-block;
  }
  .list-complete-item .img-box{
    overflow: hidden;
  }
  .list-complete-item:hover img{
    transform: scale(1);
    transition: all ease-in-out 0.7s;
    opacity: 0.8;
  }
  .list-complete-enter, .list-complete-leave-active {
    opacity: 0;
    transform: translateY(30px);
  }
  .list-complete-leave-active {
    position: absolute;
  }

  @media only screen and (max-width: 768px){
    .column {
      margin: 0 0 .5em 0;
    }
  }
  @media only screen and (max-width: 576px){
    .masonry{
      column-count: 2;
    }
    .column {
      margin: 0 0 .2em 0;
    }
  }
</style>
