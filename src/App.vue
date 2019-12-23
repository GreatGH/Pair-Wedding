<template>
  <div id="app">
    <router-view/>
    <BottomNav></BottomNav>
  </div>
</template>

<script>
import BottomNav from 'comp/zzz-public/BottomNav'
export default {
  name: 'App',
  mounted () {
    window.onscroll = () => {
      let nowScrollTop = document.documentElement.scrollTop | document.body.scrollTop
      if (nowScrollTop > 100 && document.querySelector('.cg-topnav')) {
        document.querySelector('.cg-topnav').classList.add('show')
      } else if (document.querySelector('.cg-topnav')) {
        document.querySelector('.cg-topnav').classList.remove('show')
      }
      // if(window.screenTop)
      // document.querySelector('.cg-topnav')
    }
  },
  components: {
    BottomNav
  }
}
</script>

<style scoped lang="less">
body {
  #app {
    position: relative;
    // margin-right: -18px;
    // width: calc(100% + 18px);
    font-weight: 600;
    // overflow-y: auto;
    height: 100%;
  }
}
</style>
