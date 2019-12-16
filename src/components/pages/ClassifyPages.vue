<template>
  <div>
    <div class="galleryclassic">
      <div class="galleryclassic-content">
        <div class="page-banner-wrap">
          <h1>Gallery Classic</h1>
          <h3><a href="">Home</a><span>/</span>Gallery Classic</h3>
        </div>
      </div>
    </div>
    <div class="page-area">
      <Tab></Tab>
    </div>
  </div>
</template>

<script>
import Tab from '../story/tabList.vue'
export default {
  components: {
    Tab
  }
}
</script>

<style lang="less" scoped>
@import '~css/pages.less';
</style>
