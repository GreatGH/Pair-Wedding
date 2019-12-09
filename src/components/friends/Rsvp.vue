<template>
  <div class="locations">
    <div class="banner">
      <div class="img">
        <img src="~img/friends/rsvp-page-banner-bg.jpg" alt="">
      </div>
      <div class="title">
        <div>
          <div class="main-title">RSVP</div>
          <div class="home-locations">
            <router-link to="/home" class="home">Home</router-link>
            <span>/</span>
            <router-link to="/location" class="location">RSVP</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- 留言处 -->
    <div class="rsvp-come-area">
      <div class="container">
        <div class="rsvp-form-area">
          <div class="from"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
@import '~css/location.less';
@import '../../css/friends.less';
</style>
