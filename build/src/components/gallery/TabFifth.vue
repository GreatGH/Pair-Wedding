<template>
  <div class="public-tab-content">
   <div class="position-reletive clearfix">
      <div class="story-photo-box position-reletive fl">
        <img class="img" :src="Img3"/>
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
import Img3 from '../../images/gallery/7.jpg'

export default {
  data () {
    return {
      Img3
    }
  }
}
</script>

<style>

</style>
