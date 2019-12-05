<template>
  <div class="Home-container">
      <div class="row-Module flex-center-w">
        <div class="pic-out-box frist-box">
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
                <a href="#"><h3 class="transion-ease5 color-main">Alice</h3></a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio arcu, aliquet quis sem nec, tristique varius purus. Nulla facilisi. Integer pretium tortor nec purus sollicitudin condimentum.</p>
                <div class="bride-groom-social text-center">
                  <ul>
                    <li>
                      <a href="#" class="font-weight transion-ease5">f</a>
                    </li>
                    <li>
                      <a href="#" class="font-weight transion-ease5">f</a>
                    </li>
                    <li>
                      <a href="#" class="font-weight transion-ease5">f</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        <div class="middle-box">
          <div class="bride-groom-divider">
            <div class="bride-divider-img">
              <img :src="BrideLove" alt="love">
            </div>
          </div>
        </div>
        <div class="pic-out-box">
            <div class="bride-groom-box">
              <div class="bride-groom-photo position-relative">
                <div class="bride-photo-box position-relative">
                  <img :src="BridePhoto2" alt="新娘图片">
                </div>
                <div class="bride-border-box">
                  <span class="bride-groom-border"></span>
                  <span class="bride-groom-border"></span>
                  <span class="bride-groom-border"></span>
                  <span class="bride-groom-border"></span>
                </div>
              </div>
              <div class="bride-groom-content">
                <a href="#"><h3 class="transion-ease5 color-main">Alice</h3></a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio arcu, aliquet quis sem nec, tristique varius purus. Nulla facilisi. Integer pretium tortor nec purus sollicitudin condimentum.</p>
                <div class="bride-groom-social text-center">
                  <ul>
                    <li>
                      <a href="#" class="font-weight transion-ease5">f</a>
                    </li>
                    <li>
                      <a href="#" class="font-weight transion-ease5">f</a>
                    </li>
                    <li>
                      <a href="#" class="font-weight transion-ease5">f</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import '../../Common/fontSize.js'
import BridePhoto1 from '../../images/home/bride-photo.jpg'
import BrideLove from '../../images/home/bride-groom-divider-love.png'
import BridePhoto2 from '../../images/home/groom-photo.jpg'
export default {
  data () {
    return {
      BridePhoto1,
      BridePhoto2,
      BrideLove
    }
  }
}
</script>

<style lang="less">
  @import '../../css/homeNewpeople.less';
</style>
