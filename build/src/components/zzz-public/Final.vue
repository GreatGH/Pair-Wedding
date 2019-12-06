<template>
  <div>
    <Top></Top>
    <div class="center-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Top from './Top'
import Bottom from './Bottom'
export default {
  components: {
    Top,
    Bottom
  }
}
</script>

<style>

</style>
