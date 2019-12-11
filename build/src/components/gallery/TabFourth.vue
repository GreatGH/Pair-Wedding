<template>
  <div class="public-tab-content">
   <div class="position-reletive clearfix">
     <div class="story-photo-box position-reletive fl margin-t-30">
          <img class="img" :src="Img2"/>
          <div class="gallery-tab">
            <div class="gallery-tab-content">
                <span class="el-icon-circle-plus-outline"></span>
            </div>
          </div>
        </div>
        <div class="story-photo-box position-reletive public-img4 margin-l-10">
          <img class="img" :src="Img9"/>
          <div class="gallery-tab">
            <div class="gallery-tab-content">
                <span class="el-icon-circle-plus-outline"></span>
            </div>
          </div>
        </div>
         <div class="story-photo-box position-reletive fl margin-lr-25 margin-t-30">
          <img class="img" :src="Img5"/>
          <div class="gallery-tab">
            <div class="gallery-tab-content">
                <span class="el-icon-circle-plus-outline"></span>
            </div>
          </div>
        </div>
        <div class="story-photo-box position-reletive fl margin-t-30">
          <img class="img" :src="Img8"/>
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
import Img2 from '../../images/gallery/6.jpg'
import Img9 from '../../images/gallery/10.jpg'
import Img5 from '../../images/gallery/2.jpg'
import Img8 from '../../images/gallery/9.jpg'
export default {
  data () {
    return {
      Img2,
      Img5,
      Img8,
      Img9
    }
  }
}
</script>

<style>

</style>
