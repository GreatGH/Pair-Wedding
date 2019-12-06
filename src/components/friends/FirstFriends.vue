<template>
  <div>
    <div>
      <Top></Top>
    </div>
    <div class="frimode container">
      <smallss></smallss>
    </div>
    <div>
      <carousel></carousel>
    </div>
 </div>
</template>

<script>
import smallss from './first-small.vue'
import Top from './top'
import carousel from './carousel'
export default {
  data () {
    return {

    }
  },
  components: {
    Top,
    smallss,
    carousel
  }

}
</script>

<style lang="less">
@import '../../css/friends.less';
</style>
