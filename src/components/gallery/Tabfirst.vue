<template>
  <div class="public-tab-content">
    <div class="position-reletive clearfix">
      <div class="story-photo-box position-reletive fl">
        <img class="img" :src="Img1"/>
         <div class="gallery-tab">
           <div class="gallery-tab-content">
               <span class="el-icon-circle-plus-outline"></span>
           </div>
         </div>
      </div>
       <div class="story-photo-box position-reletive fl margin-lr-30">
         <img class="img" :src="Img2"/>
          <div class="gallery-tab">
            <div class="gallery-tab-content">
                <span class="el-icon-circle-plus-outline"></span>
            </div>
          </div>
        </div>
        <div class="story-photo-box position-reletive fl">
          <img class="img" :src="Img3"/>
          <div class="gallery-tab">
            <div class="gallery-tab-content">
                <span class="el-icon-circle-plus-outline"></span>
            </div>
          </div>
        </div>
        <div class="img-box">
          <div>
          <img class="img" :src="Img4"/>
              <div class="gallery-tab">
                <div class="gallery-tab-content">
                    <span class="el-icon-circle-plus-outline"></span>
                </div>
              </div>
          </div>
        </div>
         <div class="story-photo-box position-reletive fl margin-t-30">
          <img class="img" :src="Img5"/>
          <div class="gallery-tab">
            <div class="gallery-tab-content">
                <span class="el-icon-circle-plus-outline"></span>
            </div>
          </div>
        </div>
        <div class="story-photo-box position-reletive fl margin-t-30 margin-lr-25">
          <img class="img" :src="Img6"/>
          <div class="gallery-tab">
            <div class="gallery-tab-content">
                <span class="el-icon-circle-plus-outline"></span>
            </div>
          </div>
        </div>
        <div class="story-photo-box position-reletive fl margin-t-30 margin-l-10">
          <img class="img" :src="Img7"/>
          <div class="gallery-tab">
            <div class="gallery-tab-content">
                <span class="el-icon-circle-plus-outline"></span>
            </div>
          </div>
        </div>
        <div class="story-photo-box position-reletive public-img margin-l-10">
          <img class="img" :src="Img8"/>
          <div class="gallery-tab">
            <div class="gallery-tab-content">
                <span class="el-icon-circle-plus-outline"></span>
            </div>
          </div>
        </div>
        <div class="story-photo-box position-reletive margin-t-25 fl margin-l-10">
          <img class="img" :src="Img9"/>
          <div class="gallery-tab">
            <div class="gallery-tab-content">
                <span class="el-icon-circle-plus-outline"></span>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Img1 from '../../images/gallery/5.jpg'
import Img2 from '../../images/gallery/6.jpg'
import Img3 from '../../images/gallery/7.jpg'
import Img4 from '../../images/gallery/8.jpg'
import Img5 from '../../images/gallery/2.jpg'
import Img6 from '../../images/gallery/3.jpg'
import Img7 from '../../images/gallery/1.jpg'
import Img8 from '../../images/gallery/9.jpg'
import Img9 from '../../images/gallery/10.jpg'
export default {
  data () {
    return {
      Img1,
      Img2,
      Img3,
      Img4,
      Img5,
      Img6,
      Img7,
      Img8,
      Img9
    }
  }
}
</script>

<style lang='less' scoped>
// @import '~../css/publicTab.less';
</style>
