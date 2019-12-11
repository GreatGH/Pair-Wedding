<template>
  <div class="coteng-box  fly-content flex-betwe-w">
      <!-- 111 -->
      <div :key="index" class="coteng" v-for="(item,index) in date.slice(0, 8)">
        <div class="single-friend">
          <div class="friend-box">
            <div class="friend-photo-box photo-box">
              <div class="friend-p-wrap">
                <img src="../../images/friends/1.png"/>
              </div>
            </div>
          </div>
          <div class="friend-content text-center">
            <h3 class="luck">{{item.name}}</h3>
            <p class="identify">{{item.identify}}</p>
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
// import img1 from '../../images/y-zhi/1.png'
import smallss from './first-small'
export default {
  data () {
    return {
      date: [{
        img: '../../images/friends/1.png',
        name: 'Charlotte',
        identify: 'Groomman'
      }, {
        img: '../../images/friends/1.png',
        name: 'Charlotte',
        identify: 'Groomman'
      }, {
        img: '../../images/friends/1.png',
        name: 'Charlotte',
        identify: 'Brideman'
      }, {
        img: '../../images/friends/1.png',
        name: 'Charlotte',
        identify: 'Groomman'
      }, {
        img: '../../images/friends/1.png',
        name: 'Charlotte',
        identify: 'Groomman'
      }, {
        img: '../../images/friends/1.png',
        name: 'Charlotte',
        identify: 'Brideman'
      }, {
        img: '../../images/friends/1.png',
        name: 'David',
        identify: 'Brideman'
      }, {
        img: '../../images/friends/1.png',
        name: 'Charlotte',
        identify: 'Brideman'
      }, {
        img: '../../images/friends/1.png',
        name: 'David',
        identify: 'Brideman'
      }]
    }
  },
  components: {
    smallss
  }

}
</script>

<style lang="less" scoped>
@import '../../css/friends.less';
</style>
