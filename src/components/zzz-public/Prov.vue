// 提示语
<template>
  <div class="prov-outer" @change="console.log(111)" :class="{show: true}">
    <span class="prov" :class="{
    error: $store.state.situation === 'error',
    success: $store.state.situation === 'success'}">
      {{$store.state.message}}
    </span>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.prov-outer {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: none;
  z-index: 172;
  &.show {
    display: block;
  }
  .prov {
    padding: 20px 40px;
    border-radius: 10px;
    color: white;
    &.error {
      background: red;
    }
    &.success {
      background: rgb(64, 64, 206);
    }
  }
}
</style>
