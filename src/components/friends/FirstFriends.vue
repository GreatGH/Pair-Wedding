<template>
  <div>
    <div class="first">
      <Top></Top>
    </div>
    <div>
      <Smallss></Smallss>
    </div>
    <div>
      <Carousel></Carousel>
    </div>
 </div>
</template>

<script>
import Top from './top'
import Smallss from './first-small.vue'
import Carousel from './carousel'
export default {
  data () {
    return {

    }
  },
  components: {
    Top,
    Smallss,
    Carousel
  }

}
</script>

<style lang="less" scoped>
@import '../../css/friends.less';
</style>
