<template>
  <div class=" scond-style coteng-box fly-content">
      <!-- 111 -->
      <div :key="index" class="coteng" v-for="(item,index) in list.slice(0, 8)">
        <div class="single-friend">
          <div class="friend-box">
            <div class="friend-photo-box ">
                <div class="friend-p-wrap">
                  <img :src=" apiimg + item.img"/>
                </div>
            </div>
          </div>
          <div class="friend-content text-center">
            <h3 class="luck">{{item.NAME}}</h3>
            <p class="identify">{{item.groomsman}}</p>
            <div>
              <ul>
                <li class="icon-fri fa fa-facebook"></li>
                <li class="icon-fri fa fa-twitter"></li>
                <li class="icon-fri fa fa-linkedin"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Bounin from 'comp/location/slot/BounceIn'
import smallss from './first-small'
import Axios from 'axios'
export default {
  data () {
    return {
      list: [],
      apiimg: 'http://192.168.97.236:3000/friends/',
      api: 'http://192.168.97.236:3000/friend'
    }
  },
  components: {
    smallss,
    Bounin
  },
  mounted () {
    Axios({
      url: this.api,
      method: 'get'
    }).then((res) => {
      res = res.data
      if (res.status === 200) {
        this.list = res.data
      }
    })
  }
}

</script>

<style lang="less" scoped>
@import '../../../css/friends.less';
</style>
