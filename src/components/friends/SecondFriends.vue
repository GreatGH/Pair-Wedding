<template>
  <div>
    <div class="seconfri">
      <Top></Top>
    </div>
    <div>
      <Conder></Conder>
    </div>
    <div>
      <Carousel></Carousel>
    </div>
  </div>
</template>

<script>
import Top from './top.vue'
import Conder from './Second/first-small'
import Carousel from './carousel'
export default {
  components: {
    Top,
    Conder,
    Carousel
  }
}
</script>

<style lang="less" scoped>
@import '../../css/friends.less';
</style>
