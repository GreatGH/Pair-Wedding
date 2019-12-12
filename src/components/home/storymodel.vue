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
      <div :key="'infot' + index" class="story-out-box" v-for="(item,index) in lists.slice(2, 3)">
        <div class="story-box story-left">
          <div class="story-content-wrap">
            <div class="story-photo-box position-relative">
              <img :src="apiimg + item.story_img"  alt="图片" />
            </div>
            <div class="story-text text-right">
              <h4>{{item.title}}<span>03</span></h4>
              <h5>{{item.TIME}}</h5>
              <p>{{item.story}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="middle-box2">
        <div class="story-divider-img flex-center">
          <img :src="Bgflower"/>
        </div>
      </div>
      <div :key="'infots' + index" class="story-out-box" v-for="(item,index) in lists.slice(3, 4)">
        <div class="story-box story-right">
          <div class="story-content-wrap">
            <div class="story-text text-left two">
              <h4>{{item.title}}<span>04</span></h4>
              <h5>{{item.TIME}}</h5>
              <p>{{item.story}}</p>
            </div>
            <div class="story-photo-box position-relative show-large-device">
              <img :src="apiimg + item.story_img"  alt="图片" />
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import '../../Common/fontSize.js'
import Bgflower from '../../images/home/story-divider.png'
import Axios from 'axios'
export default {
  data () {
    return {
      storyLists: [],
      // Story1,
      // Story2,
      // Story3,
      // Story4,
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
