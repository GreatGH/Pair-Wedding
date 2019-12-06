<template>
  <div class="locations">
    <div class="banner">
      <div class="img">
        <img src="~img/z-public/location-banner.jpg" alt="">
      </div>
      <div class="title">
        <div>
          <div class="main-title">Locations</div>
          <div class="home-locations">
            <router-link to="/home" class="home">Home</router-link>
            <span>/</span>
            <router-link to="/location" class="location">Locations</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="relative gang-coontent">
      <div class="top flex-betwe-w">
        <div v-for="item in relative" :key="item.method" :class="item.class">
          <div class="flex-center">
            <div>
              <i :class="item.icon"></i>
            </div>
            <div class="detail">
              <div class="title">{{item.method}}</div>
              <div class="all-detail">
                <div>{{item.detail1}}</div>
                <div>{{item.detail2}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="map"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      relative: [{
        class: 'phone',
        icon: 'fa fa-phone',
        method: 'Phone',
        detail1: '+124 (2486) 444',
        detail2: '+133 (4444) 878'
      }, {
        class: 'email',
        icon: 'fa fa-at',
        method: 'E-mail',
        detail1: 'info@andit.com',
        detail2: 'support@andit.com'
      }, {
        class: 'location',
        icon: 'fa fa-map-marker',
        method: 'Location',
        detail1: '32, Ahsan Ahmed Road,',
        detail2: 'Chotomirzapur, Khulna.'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
img {
  transition: all 1s ease-out;
}
img:hover {
  transform: scale(1.1)
}
@import '~css/location.less';
</style>
