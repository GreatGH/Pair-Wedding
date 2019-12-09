<template>
<div>
  <div class="Brid-groom-content">
    <div class="Brid-groom-area">
      <div class="container">
        <div class="container-wrap">
          <h1>Bride and Groom</h1>
          <ul class="container-wrap-lists clearfix">
            <li class="container-wrap-list fl margin-r-5">
              <router-link to="/home">Home</router-link>
            </li>
            <li class="container-wrap-list active fl margin-l-5">Bride & Groom</li>
          </ul>
        </div>
      </div>
    </div>
    <PublicTab></PublicTab>
  </div>
  <BrideBanner></BrideBanner>
  <PublicTab></PublicTab>
</div>
</template>

<script>
import PublicTab from './publicTab.vue'
import BrideBanner from './Bridebanner.vue'
export default {
  components: {
    PublicTab,
    BrideBanner
  }
}
</script>

<style lang='less' scoped>
@import '../../css/gallery.less';
</style>
