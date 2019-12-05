<template>
  <div class="Home-container">
      <div class="row-Module">
        <div class="pic-out-box">
            <div class="bride-groom-box">
              <div class="bride-groom-photo position-relative">
                <div class="bride-photo-box position-relative">
                  <img :src="BridePhoto1" alt="新娘图片">
                </div>
                <div class="bride-border-box">
                  <span class="bride-groom-border"></span>
                  <span class="bride-groom-border"></span>
                  <span class="bride-groom-border"></span>
                  <span class="bride-groom-border"></span>
                </div>
              </div>
              <div class="bride-groom-content">
                <a href="#"><h3 class="transion-ease5 color-main el-icon-edit">Alice</h3></a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio arcu, aliquet quis sem nec, tristique varius purus. Nulla facilisi. Integer pretium tortor nec purus sollicitudin condimentum.</p>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import '../../Common/fontSize.js'
import BridePhoto1 from '../../images/home/bride-photo.jpg'
export default {
  data () {
    return {
      BridePhoto1
    }
  }
}
</script>

<style lang="less">
  @import '../../css/homeNewpeople.less';
</style>
