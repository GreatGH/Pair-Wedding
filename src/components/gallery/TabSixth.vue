<template>
<div>
  <div class="public-tab-content">
   <div class="position-reletive clearfix">
      <div class="story-photo-box position-reletive fl">
        <img class="img" :src="Img4"/>
         <div class="gallery-tab">
           <div class="gallery-tab-content">
               <span class="el-icon-circle-plus-outline"></span>
           </div>
         </div>
      </div>
      <div class="story-photo-box position-reletive margin-l-30 fl">
        <img class="img" :src="Img7"/>
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
        <div class="overflow position-reletive">
            <img :src="Img4">
            <div class="gallery-tab-two">
              <div class="gallery-tab-content-two">
                <span class="el-icon-circle-plus-outline"></span>
              </div>
            </div>
        </div>
      </li>
       <li>
        <div class="overflow position-reletive">
            <img :src="Img7">
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
import Img4 from '../../images/gallery/8.jpg'
import Img7 from '../../images/gallery/1.jpg'

export default {
  data () {
    return {
      Img4,
      Img7
    }
  }
}
</script>

<style>

</style>
