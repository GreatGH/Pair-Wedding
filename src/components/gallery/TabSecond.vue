<template>
<div>
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
       <div class="story-photo-box position-reletive fl">
        <img class="img" :src="Img2"/>
         <div class="gallery-tab">
           <div class="gallery-tab-content">
               <span class="el-icon-circle-plus-outline"></span>
           </div>
         </div>
       </div>
       <div class="img-box img-box4">
          <img class="img" :src="Img4"/>
              <div class="gallery-tab">
                <div class="gallery-tab-content">
                    <span class="el-icon-circle-plus-outline"></span>
                </div>
              </div>
        </div>
         <div class="story-photo-box position-reletive fl">
          <img class="img" :src="Img8"/>
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
          <div class="position-reletive overflow">
            <img :src="Img1">
            <div class="gallery-tab-two">
            <div class="gallery-tab-content-two">
              <span class="el-icon-circle-plus-outline"></span>
            </div>
            </div>
          </div>
        </li>
        <li>
           <div class="position-reletive overflow">
            <img :src="Img4">
            <div class="gallery-tab-two">
            <div class="gallery-tab-content-two">
              <span class="el-icon-circle-plus-outline"></span>
            </div>
            </div>
          </div>
           <div class="position-reletive overflow margin-t-20">
            <img :src="Img8">
            <div class="gallery-tab-two">
            <div class="gallery-tab-content-two">
              <span class="el-icon-circle-plus-outline"></span>
            </div>
            </div>
          </div>
        </li>
        <li>
          <div class="position-reletive overflow margin-t-20">
            <img :src="Img2">
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
import Img2 from '../../images/gallery/10.jpg'
import Img4 from '../../images/gallery/8.jpg'
import Img8 from '../../images/gallery/9.jpg'
export default {
  data () {
    return {
      Img1,
      Img2,
      Img4,
      Img8
    }
  }
}
</script>

<style>

</style>
