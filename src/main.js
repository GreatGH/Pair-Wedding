import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 公共样式
import 'css/public'

// 字体图标引入
import 'css/font-awesome/css/font-awesome.min'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
