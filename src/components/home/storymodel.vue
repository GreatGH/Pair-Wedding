<template>
  <div class="home-container">
    <div class="row-model flex-betwe-w love">
      <div class="story-out-box left"  :key="index" v-for="(item, index) in storyLists">
        <div class="story-box story-left" v-if="index%2 === 0">
          <div class="story-content-wrap">
            <div class="story-photo-box position-relative">
              <img :src="imgapi + item.story_img" alt="爱情故事图片">
            </div>
            <div class="story-text text-right">
              <h4>{{item.title}}<span>{{item.id}}</span></h4>
              <h5>{{item.TIME}}</h5>
              <p>{{item.story}}</p>
            </div>
          </div>
          <!-- <div class="middle-box2">
            <div class="story-divider-img flex-center">
              <img :src="Bgflower"/>
            </div>
          </div> -->
        </div>
        <div class="story-box story-right" v-if="index%2 === 1">
          <div class="story-content-wrap">
            <div class="story-photo-box position-relative show-mobile-device">
              <img :src="imgapi + item.story_img" alt="图片" />
            </div>
            <div class="story-text text-left two">
              <h4>{{item.title}}<span>{{item.id}}</span></h4>
              <h5>{{item.TIME}}</h5>
              <p>{{item.story}}</p>
            </div>
          </div>
          <div class="story-photo-box position-relative show-large-device">
            <img :src="imgapi + item.story_img" alt="爱情故事图片">
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="row-model flex-center-w">
      <div class="story-out-box">
        <div class="story-box story-left">
          <div class="story-content-wrap">
            <div class="story-photo-box position-relative">
              <img :src="Story3" alt="爱情故事图片">
            </div>
            <div class="story-text text-right">
              <h4>Our First Proposed <span>03</span></h4>
              <h5>23 october 2019</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio arcu, aliquet quis sem nec, tristique varius purus. Nulla facilisi. </p>
            </div>
          </div>
        </div>
      </div>
      <div class="middle-box2">
        <div class="story-divider-img flex-center">
          <img :src="Bgflower"/>
        </div>
      </div>
      <div class="story-out-box">
        <div class="story-box story-right">
          <div class="story-content-wrap">
            <div class="story-photo-box position-relative show-mobile-device">
              <img :src="Story4" alt="图片" />
            </div>
            <div class="story-text text-left two">
              <h4>Our First Meet <span>04</span></h4>
              <h5>20 sept 2019</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio arcu, aliquet quis sem nec, tristique varius purus. Nulla facilisi. </p>
            </div>
            <div class="story-photo-box position-relative show-large-device">
              <img :src="Story4" alt="图片" />
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import '../../Common/fontSize.js'
import Story1 from '../../images/home/1.jpg'
import Story2 from '../../images/home/2.jpg'
import Story3 from '../../images/home/3.jpg'
import Story4 from '../../images/home/4.jpg'
import Bgflower from '../../images/home/story-divider.png'
import Axios from 'axios'
export default {
  data () {
    return {
      storyLists: [],
      Story1,
      Story2,
      Story3,
      Story4,
      Bgflower,
      api: 'http://192.168.97.236:3000/lovestory',
      imgapi: 'http://192.168.97.236:3000/home/'
    }
  },
  mounted () {
    Axios({
      url: this.api,
      method: 'get'
    }).then((res) => {
      res = res.data
      if (res.status === 200) {
        this.storyLists = res.data
        // console.log(res.data)
      }
    })
    this.storyLists = this.$store.state.home.storyLists
  }
}
</script>

<style lang="less" scoped>
  @import '../../css/home.less';
</style>
