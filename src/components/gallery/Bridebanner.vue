<template>
  <div class="banner-wadding-content">
    <div class="wadding-content-wrapper">
      <div class="section-wadding-content">
        <div class="section-wadding-container">
          <div class="section-row">
            <div class="text-center">
              <h2>Wedding Events</h2>
              <img :src="Logo">
              <h3>Aliquam erat volutpat. Curabitur tempor nibh
                  quis arcu convallis, sed viverra quam sollicitudin.
                  Proin sed augue sed neque ultricies condimentum.
              </h3>
            </div>
          </div>
          <el-carousel :interval="4000" type="card" height="340px" >
            <el-carousel-item v-for="item in 3" :key="item">
              <h3 class="medium">
                <img :src="banner2">
                <div>
                <span class="surface-content">
                  <h4 class="surface-content-title">Wedding Party</h4>
                  <h6>Thurs day, 20 Oct 2019</h6>
                  <h6>13.00 pm-15.00 pm</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi.</p>
                </span>
                </div>
               </h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../Common/fontSize'
import Logo from '../../images/gallery/divider.png'
import banner1 from '../../images/gallery/events1.jpg'
import banner2 from '../../images/gallery/events2.jpg'
import banner3 from '../../images/gallery/events3.jpg'
export default {
  data () {
    return {
      Logo,
      banner1,
      banner2,
      banner3
    }
  }
}
</script>

<style lang='less'>

</style>
