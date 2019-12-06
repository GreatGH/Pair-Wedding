<template>
  <div class="friends-area">
      <div class="section-overlay">
          <div class="container">
              <div class="text-center">
                  <div>
                      <h3 class="title">Friends Says</h3>
                      <img src="~img/friends/divider.png" alt="">
                  </div>
              </div>
              <div class="carousel">
                <el-carousel indicator-position="outside">
                    <el-carousel-item :key="index" v-for="(item,index) in lists.slice(0, 8)">
                        <div class="friend-says-img">
                            <img :src="crown" alt="">
                        </div>
                        <div>
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
import crown from '../../images/friends/divider.png'
export default {
  data () {
    return {
      crown,
      lists: [{
        img: '',
        title: 'Zoey',
        content: '“Aliquam erat volutpat. Curabitur tempor nibh quis arcu convallis, sed viverra quam sollicitudin. Proin sed augue sed neque ultricies condimentum.”'
      }]
    }
  }
}
</script>
<style lang="less">
.el-carousel__item h3 {
color: #475669;
opacity: 0.75;
}
</style>
