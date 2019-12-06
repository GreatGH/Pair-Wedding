import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAMap from 'vue-amap'

// 公共样式
import 'css/public.less'
import '@/Common/fontSize.js'

// 字体图标引入
import 'css/font-awesome/css/font-awesome.min'

Vue.use(ElementUI)
Vue.use(VueAMap)

// MapType: 卫星地图切换
// ToolBar: 缩放工具栏
// PlaceSearch: 搜索
VueAMap.initAMapApiLoader({
  key: 'mapkey',
  plugin: [
    'AMap.Autocomplete',
    'AMap.PlaceSearch',
    'AMap.Scale',
    'AMap.Overflow',
    'AMap.ToolBar',
    'AMap.MapType',
    'AMap.PolyEditor',
    'AMap.CircleEditor',
    'AMap.Geolocation'
  ],
  v: '1.4.4'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
