<template>
  <div class="friends-area">
      <div class="section-overlay">
          <div class="container  fly-content">
              <div class="flex-center-w">
                <div>
                  <h3 class="title">Friends Says</h3>
                  <img src="~img/friends/divider.png" alt="">
                </div>
              </div>
              <div class="carousel carousel-box-model">
                <el-carousel :interval="5000" indicator-position="outside">
                    <el-carousel-item :key="index" v-for="(item,index) in list.slice(4, 7)">
                        <div class="friend-says-img">
                            <img :src=" apiimg + item.img"/>
                            <div class="backticks">
                                <img :src=" apiimg + item.img"/>
                            </div>
                        </div>
                        <div class="flex-center-w">
                            <h2 class="h2">{{item.NAME}}</h2>
                            <h3 class="h3">{{item.say}}</h3>
                        </div>
                    </el-carousel-item>
                </el-carousel>
              </div>
          </div>
      </div>
  </div>
</template>
<script>

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
@import '../../css/friends.less';
</style>
