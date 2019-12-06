<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped lang="less">
body {
  #app {
    margin-right: -18px;
    width: calc(100% + 18px);
    font-weight: 600;
    overflow-y: auto;
    height: 100%;
  }
}
</style>
