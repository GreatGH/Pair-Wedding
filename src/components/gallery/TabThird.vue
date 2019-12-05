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
      <div class="story-photo-box position-reletive fl margin-lr-25">
          <img class="img" :src="Img3"/>
          <div class="gallery-tab">
            <div class="gallery-tab-content">
                <span class="el-icon-circle-plus-outline"></span>
            </div>
          </div>
      </div>
        <div class="story-photo-box position-reletive fl margin-l-10">
          <img class="img" :src="Img7"/>
          <div class="gallery-tab">
            <div class="gallery-tab-content">
                <span class="el-icon-circle-plus-outline"></span>
            </div>
          </div>
        </div>
        <div class="story-photo-box position-reletive margin-t-30 fl margin-l-10">
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
import Img3 from '../../images/gallery/3.jpg'
import Img7 from '../../images/gallery/1.jpg'
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

<style>

</style>
