<template>
  <div class="friends-area">
      <div class="section-overlay">
          <div class="container">
              <div class="flex-center-w">
                <div>
                  <h3 class="title">Friends Says</h3>
                  <img src="~img/friends/divider.png" alt="">
                </div>
              </div>
              <div class="carousel carousel-box-model">
                <el-carousel :interval="5000" indicator-position="outside">
                    <el-carousel-item :key="index" v-for="(item,index) in lists">
                        <div class="friend-says-img">
                            <img :src="crown" alt="">
                            <div class="backticks">
                                <img :src="crown">
                            </div>
                        </div>
                        <div class="flex-center-w">
                            <h2 class="h2">{{item.title}}</h2>
                            <h3 class="h3">{{ item.content }}</h3>
                        </div>
                    </el-carousel-item>
                </el-carousel>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import crown from '../../images/friends/1.png'
// import backticks from '../../images/friends/backticks.png'
export default {
  data () {
    return {
      crown,
      lists: [{
        imgto: '~img/friends/1.png',
        title: 'Zoey',
        content: '“Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis, sed viverra quam sollicitudin. Proin sed augue sed neque ultricies condimentum.”'
      }, {
        imgto: '~img/friends/1.png',
        title: 'Zoey',
        content: '“Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis, sed viverra quam sollicitudin. Proin sed augue sed neque ultricies condimentum.”'
      }, {
        imgto: '~img/friends/1.png',
        title: 'Zoey',
        content: '“Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis, sed viverra quam sollicitudin. Proin sed augue sed neque ultricies condimentum.”'
      }]
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../css/friends.less';
</style>
