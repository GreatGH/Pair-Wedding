<template>
  <div class="home-container">
    <div class="row-model flex-center-w">
      <div class="story-out-box">
        <div class="story-box story-left">
          <div class="story-content-wrap">
            <div class="story-photo-box position-relative">
              <img :src="Story1" alt="爱情故事图片">
            </div>
            <div class="story-text text-right">
              <h4>Our First Proposed <span>01</span></h4>
              <h5>23 october 2019</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio arcu, aliquet quis sem nec, tristique varius purus. Nulla facilisi. </p>
            </div>
          </div>
        </div>
      </div>
      <div class="middle-box2">
        <div class="story-divider-img flex-center">
          <img :src="Bgflower"/>
        </div>
      </div>
      <div class="story-out-box">
        <div class="story-box story-right">
          <div class="story-content-wrap">
            <div class="story-photo-box position-relative show-mobile-device">
              <img :src="Story2" alt="图片" />
            </div>
            <div class="story-text text-left two">
              <h4>Our First Meet <span>02</span></h4>
              <h5>20 sept 2019</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio arcu, aliquet quis sem nec, tristique varius purus. Nulla facilisi. </p>
            </div>
            <div class="story-photo-box position-relative show-large-device">
              <img :src="Story2" alt="图片" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row-model flex-center-w">
      <div class="story-out-box">
        <div class="story-box story-left">
          <div class="story-content-wrap">
            <div class="story-photo-box position-relative">
              <img :src="Story3" alt="爱情故事图片">
            </div>
            <div class="story-text text-right">
              <h4>Our First Proposed <span>03</span></h4>
              <h5>23 october 2019</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio arcu, aliquet quis sem nec, tristique varius purus. Nulla facilisi. </p>
            </div>
          </div>
        </div>
      </div>
      <div class="middle-box2">
        <div class="story-divider-img flex-center">
          <img :src="Bgflower"/>
        </div>
      </div>
      <div class="story-out-box">
        <div class="story-box story-right">
          <div class="story-content-wrap">
            <div class="story-photo-box position-relative show-mobile-device">
              <img :src="Story4" alt="图片" />
            </div>
            <div class="story-text text-left two">
              <h4>Our First Meet <span>04</span></h4>
              <h5>20 sept 2019</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio arcu, aliquet quis sem nec, tristique varius purus. Nulla facilisi. </p>
            </div>
            <div class="story-photo-box position-relative show-large-device">
              <img :src="Story4" alt="图片" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../Common/fontSize.js'
import Story1 from '../../images/home/1.jpg'
import Story2 from '../../images/home/2.jpg'
import Story3 from '../../images/home/3.jpg'
import Story4 from '../../images/home/4.jpg'
import Bgflower from '../../images/home/story-divider.png'
export default {
  data () {
    return {
      Story1,
      Story2,
      Story3,
      Story4,
      Bgflower
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../css/home.less';
</style>
