<template>
  <div class="publictab-content">
    <div class="publictab-content-title text-center">
      <h2 class="section-hender">Our Gallery</h2>
      <img :src="divider"/>
      <h3 class="publictab-content-detaile text-center font-16">Aliquam erat volutpat. Curabitur tempor
         nibh quis arcu convallis, sed viverra quam sollicitudin.
         Proin sed augue sed neque ultricies condimentum.</h3>
    </div>
    <div class="tab-content">
        <el-tabs v-model="activeName">
          <el-tab-pane label="ALL" name="first">
            <TabFirst></TabFirst>
          </el-tab-pane>
          <el-tab-pane label="Bride" name="second">
            <TabSecond></TabSecond>
          </el-tab-pane>
          <el-tab-pane label="Groom" name="third">
            <TabThird></TabThird>
          </el-tab-pane>
          <el-tab-pane label="Love Slory" name="fourth">
            <TabFourth></TabFourth>
          </el-tab-pane>
          <el-tab-pane label="Friends" name="fifth">
            <TabFifth></TabFifth>
          </el-tab-pane>
          <el-tab-pane label="Parly" name="sixth">
            <TabSixth></TabSixth>
          </el-tab-pane>
        </el-tabs>
    </div>
  </div>
</template>

<script>
import '../../Common/fontSize'
import divider from '../../images/gallery/divider.png'
import TabFirst from './Tabfirst'
import TabSecond from './TabSecond'
import TabThird from './TabThird'
import TabFourth from './TabFourth'
import TabFifth from './TabFifth'
import TabSixth from './TabSixth'
export default {
  data () {
    return {
      activeName: 'first',
      divider
    }
  },
  components: {
    TabFirst,
    TabSecond,
    TabThird,
    TabFourth,
    TabFifth,
    TabSixth
  }
}
</script>

<style lang='less' scoped>
@import '../../css/gallery.less';
</style>
