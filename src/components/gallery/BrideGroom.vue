<template>
<div>
  <div class="Brid-groom-content">
    <div class="Brid-groom-area">
      <div class="container">
        <div class="container-wrap">
          <h1>Bride and Groom</h1>
          <ul class="container-wrap-lists clearfix">
            <li class="container-wrap-list fl">
              <router-link to="/home">Home</router-link>
            </li>
            <li class="container-wrap-list active fl">Bride & Groom</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="margin-t-40">
    <NewPeoPleModule></NewPeoPleModule>
  </div>
  <!-- <BrideBanner></BrideBanner> -->
  <div class="module-store">
    <StoryModel></StoryModel>
  </div>
  <PublicTab></PublicTab>
</div>
</template>

<script>
import '../../Common/fontSize'
import PublicTab from './publicTab.vue'
// import BrideBanner from './Bridebanner.vue'

import StoryModel from '../home/storymodel'
import NewPeoPleModule from '../home/NewPeopleModle'
export default {
  components: {
    PublicTab,
    StoryModel,
    // BrideBanner,
    NewPeoPleModule
  }
}
</script>

<style lang='less' scoped>
@import '../../css/gallery.less';
</style>
