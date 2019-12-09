<template>
  <div class="aside">
    <div class="shopcar">
      <router-link to="shopcar">
        <i class="fa fa-shopping-cart"></i>
      </router-link>
    </div>
    <div class="gotop">
      <router-link to>
        <i class="fa fa-arrow-up"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.aside {
  text-align: center;
  // width: 80px;
  position: fixed;
  bottom: 10%;
  right: 10%;
  background-color: rgba(255, 0, 0, 0.5);
  >div {
    font-size: 24px;
    color: #f2f2f2;
    a {
      padding: 10px 15px;
      display: inline-block;
      width: 100%;
      height: 100%;
      font-size: 24px;
      color: #f2f2f2;
    }
  }
}
</style>
