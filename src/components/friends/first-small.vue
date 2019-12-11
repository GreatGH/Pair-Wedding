<template>
  <div class="coteng-box  fly-content flex-betwe-w">
      <!-- 111 -->
      <div :key="index" class="coteng" v-for="(item,index) in list.slice(0, 8)">
        <div class="single-friend">
          <div class="friend-box">
            <div class="friend-photo-box photo-box">
              <Bounin>
                <div class="friend-p-wrap" slot="bounceInDown" v-if="show">
                   <img :src=" apiimg + item.img"/>
                </div>
              </Bounin>
            </div>
          </div>
          <div class="friend-content text-center">
            <h3 class="luck">{{item.NAME}}</h3>
            <p class="identify">{{item.groomsman}}</p>
            <ul>
              <li class="icon-fri fa fa-facebook"></li>
              <li class="icon-fri fa fa-twitter"></li>
              <li class="icon-fri fa fa-linkedin"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Bounin from 'comp/location/slot/BounceInDown'
import smallss from './first-small'
import Axios from 'axios'
export default {
  data () {
    return {
      list: [],
      show: false,
      apiimg: 'http://192.168.97.236:3000/friends/',
      api: 'http://192.168.97.236:3000/friend'
    }
  },
  components: {
    smallss,
    Bounin
  },
  mounted () {
    this.show = true
    Axios({
      url: this.api,
      method: 'get'
    }).then((res) => {
      res = res.data
      if (res.status === 200) {
        this.list = res.data
        // console.log(this.list)
      }
    })
  }

}
</script>

<style lang="less" scoped>
@import '../../css/friends.less';
</style>
