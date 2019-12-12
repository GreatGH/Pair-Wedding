<template>
  <div class="home-container">
      <div :key="index" class="row-Module flex-center-w" v-for="(item,index) in lists">
        <div class="pic-out-box frist-box">
            <div class="bride-groom-box">
              <div class="bride-groom-photo position-relative">
                <div class="bride-photo-box position-relative">
                   <img :src="apiimg + item.bride_img"  alt="新娘图片"/>
                </div>
                <div class="bride-border-box">
                  <span class="bride-groom-border"></span>
                  <span class="bride-groom-border"></span>
                  <span class="bride-groom-border"></span>
                  <span class="bride-groom-border"></span>
                </div>
              </div>
              <div class="bride-groom-content">
                <a href="#"><h3 class="transion-ease5 color-main">{{item.bride}}</h3></a>
                <p>{{item.bride_introduce}}</p>
                <div class="bride-groom-social text-center">
                  <ul>
                    <li>
                      <a href="#" class="font-weight transion-ease5"><i class="fa fa-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#" class="font-weight transion-ease5"><i class="fa fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#" class="font-weight transion-ease5"><i class="fa fa-linkedin"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        <div class="middle-box">
          <div class="bride-groom-divider">
            <div class="bride-divider-img">
              <img :src="BrideLove" alt="love">
            </div>
          </div>
        </div>
        <div class="pic-out-box">
            <div class="bride-groom-box">
              <div class="bride-groom-photo position-relative">
                <div class="bride-photo-box position-relative">
                  <img :src="apiimg + item.groom_img"  alt="新郎图片"/>
                </div>
                <div class="bride-border-box">
                  <span class="bride-groom-border"></span>
                  <span class="bride-groom-border"></span>
                  <span class="bride-groom-border"></span>
                  <span class="bride-groom-border"></span>
                </div>
              </div>
              <div class="bride-groom-content">
                <a href="#"><h3 class="transion-ease5 color-main">{{item.groom}}</h3></a>
                <p>{{item.groom_introduce}}</p>
                <div class="bride-groom-social text-center">
                  <ul>
                    <li>
                      <a href="#" class="font-weight transion-ease5"><i class="fa fa-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#" class="font-weight transion-ease5"><i class="fa fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#" class="font-weight transion-ease5"><i class="fa fa-linkedin"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import BridePhoto1 from '../../images/home/bride-photo.jpg'
import BrideLove from '../../images/home/bride-groom-divider-love.png'
import BridePhoto2 from '../../images/home/groom-photo.jpg'
import Axios from 'axios'
export default {
  data () {
    return {
      BridePhoto1,
      BridePhoto2,
      BrideLove,
      lists: [],
      api: 'http://192.168.97.236:3000/Pair/',
      apiimg: 'http://192.168.97.236:3000/Home/'
    }
  },
  mounted () {
    Axios({
      url: this.api,
      method: 'get'
    }).then((res) => {
      res = res.data
      if (res.status === 200) {
        this.lists = res.data
        console.log(this.lists)
      }
    })
  }
}
</script>

<style lang="less" scoped>
  @import '../../css/home.less';
</style>
