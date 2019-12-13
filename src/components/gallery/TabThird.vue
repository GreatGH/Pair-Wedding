<template>
<div>
  <div class="public-tab-content">
   <div class="position-reletive clearfix">
      <div class="story-photo-box position-reletive big-img fl">
        <img class="img" :src="Img1"/>
         <div class="gallery-tab">
           <div class="gallery-tab-content">
               <span class="el-icon-circle-plus-outline"></span>
           </div>
         </div>
      </div>
      <div class="story-photo-box position-reletive fl big-img margin-lr-25">
          <img class="img" :src="Img3"/>
          <div class="gallery-tab">
            <div class="gallery-tab-content">
                <span class="el-icon-circle-plus-outline"></span>
            </div>
          </div>
      </div>
        <div class="story-photo-box position-reletive small-img fl ">
          <img class="img" :src="Img7"/>
          <div class="gallery-tab">
            <div class="gallery-tab-content">
                <span class="el-icon-circle-plus-outline"></span>
            </div>
          </div>
        </div>
        <div class="story-photo-box position-reletive small-img margin-t-30 fl margin-l-10">
          <img class="img" :src="Img9"/>
          <div class="gallery-tab">
            <div class="gallery-tab-content">
                <span class="el-icon-circle-plus-outline"></span>
            </div>
          </div>
        </div>
   </div>
  </div>
  <div class="public-tab-content-two">
    <ul class="tab-content-lists clearfix">
      <li>
        <div class="overflow position-reletive big-img">
            <img :src="Img1">
            <div class="gallery-tab-two">
              <div class="gallery-tab-content-two">
                <span class="el-icon-circle-plus-outline"></span>
              </div>
            </div>
        </div>
        <div class="margin-t-15 overflow position-reletive small-img">
          <img :src="Img7">
          <div class="gallery-tab-two">
            <div class="gallery-tab-content-two">
              <span class="el-icon-circle-plus-outline"></span>
            </div>
          </div>
        </div>
      </li>
       <li>
        <div class="overflow position-reletive big-img">
            <img :src="Img3">
            <div class="gallery-tab-two">
              <div class="gallery-tab-content-two">
                <span class="el-icon-circle-plus-outline"></span>
              </div>
            </div>
        </div>
        <div class="margin-t-15 overflow small-img position-reletive">
          <img :src="Img9">
          <div class="gallery-tab-two">
            <div class="gallery-tab-content-two">
              <span class="el-icon-circle-plus-outline"></span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import Img1 from '../../images/gallery/5.jpg'
import Img3 from '../../images/gallery/3.jpg'
import Img7 from '../../images/gallery/9.jpg'
import Img9 from '../../images/gallery/10.jpg'
export default {
  data () {
    return {
      Img1,
      Img3,
      Img7,
      Img9
    }
  }
}
</script>

<style lang='less' scoped>
@import '../../css/gallery.less';
</style>
