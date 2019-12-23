<template>
  <div class="bottom-nav">
    <div :class="{show: $route.path !== '/login' && $route.path !== '/shopcar'}">
      <router-link to="/home">
        <div>
          <i class="fa fa-home"></i>
        </div>
        <div>主页</div>
      </router-link>
    </div>
    <div v-for="item in bottomNav" :key="item.title" :class="{show: $route.path === item.router}">
      <router-link :to="item.router">
        <div>
          <i :class="item.iclass"></i>
        </div>
        <div>{{item.title}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: [{
        iclass: 'fa fa-shopping-cart',
        router: '/shopcar',
        title: '购物车'
      }, {
        iclass: 'fa fa-user',
        router: '/login',
        title: '登录'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: rosybrown;
  z-index: 171;
  box-shadow: 1px 0px 6px 1px darkcyan;
  display: none;
  >div {
    padding-top: 10px;
    line-height: 30px;
    flex: 1;
    text-align: center;
    &.show {
      background: radial-gradient(rosybrown, pink);
    }
    >a {
      display: inline-block;
      width: 100%;
      height: 100%;
      >div {
        font-size: 18px;
        color: white;
        i {
          font-size: 24px;
        }
      }
    }
  }
}
@media screen and (max-width: 768px){
  .bottom-nav {
    display: flex;
  }
}
</style>
