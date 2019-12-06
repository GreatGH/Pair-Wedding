<template>
  <div class="text-center">
      <!-- 111 -->
      <div :key="index" class="coteng" v-for="(item,index) in date.slice(0, 8)">
        <div class="single-friend">
          <div class="friend-box">
            <div class="friend-photo-box">
              <div class="friend-p-wrap">
                <img src="../../images/friends/5.png"/>
              </div>
            </div>
          </div>
          <div class="friend-content text-center">
            <h3 class="friend-name">{{item.name}}</h3>
            <p class="friend-identity ">{{item.identify}}</p>
            <div>
              <ul>
                <li class="icon-fri fa fa-phone"></li>
                <li class="icon-fri fa fa-phone"></li>
                <li class="icon-fri fa fa-phone"></li>
              </ul>
            </div>
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
        identify: '2'
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
        identify: '2'
      }, {
        img: '../../images/friends/1.png',
        name: 'Charlotte',
        identify: '2'
      }, {
        img: '../../images/friends/1.png',
        name: 'Charlotte',
        identify: '2'
      }, {
        img: '../../images/friends/1.png',
        name: 'Charlotte',
        identify: '2'
      }]
    }
  },
  components: {
    smallss
  }

}
</script>

<style>

</style>
