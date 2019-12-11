<template>
  <div class="banner-area ">
      <div class="setion-over">
          <div class="container">
              <div class="title">
                <div class="text-center">
                <div class="main-title">Friends</div>
                <div class="home-locations">
                    <router-link to="/home" class="home">Home</router-link>
                    <span>/</span>
                    <router-link to="/friends/friendsStyle1" class="location">Friends</router-link>
                </div>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import '../../css/friends.less';
</style>
