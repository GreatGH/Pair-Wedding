<template>
  <div class="">
    <div class="banner-area rsvp-form-area">
        <div class="setion-over">
            <div class="container">
                <div class="title">
                  <div class="text-center">
                  <div class="main-title">RSVP</div>
                  <div class="home-locations">
                      <router-link to="/home" class="home">Home</router-link>
                      <span>/</span>
                      <router-link to="/rsvp" class="location">RSVP</router-link>
                  </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
    <div class="leave">
      <FormModel></FormModel>
    </div>
  </div>
</template>

<script>
import FormModel from '../home/formModel.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    FormModel
  }
}
</script>

<style lang="less" scoped>
@import '../../css/friends.less';
.leave {
  padding: 80px
}
</style>
