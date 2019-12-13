<template>
<div>
  <div class="public-tab-content">
   <div class="position-reletive clearfix">
      <div class="story-photo-box position-reletive big-img fl">
        <img class="img" :src="Img3"/>
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
            <img :src="Img3">
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
import Img3 from '../../images/gallery/7.jpg'

export default {
  data () {
    return {
      Img3
    }
  }
}
</script>

<style lang='less' scoped>
@import '../../css/gallery.less';
</style>
