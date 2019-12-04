
// 每个人的store
import Vue from 'vue'
import Vuex from 'vuex'
import wangxh from 'comp/wangxh/Home'
import liulong from 'comp/liulong/Blog'
import wangwg from 'comp/wangwg/BrideGroom'
import chengeng from 'comp/chengeng/Story'
import yuzw from 'comp/yuzw/Rsvp'
import zhaop from 'comp/zhaop/Pages'

Vue.use(Vuex)

// 公共的store
let mutations = {
  changeRouters (state, page) {
  }
}

let actions = {
}

let getters = {
}
export default new Vuex.Store({
  state: {
    mainRouters: [{
      nowPage: 'HOME',
      route: 'home',
      isHere: true
    }, {
      nowPage: 'Bride & Groom',
      route: 'brideGroom',
      isHere: false
    }, {
      nowPage: 'story',
      route: 'story',
      isHere: false
    }, {
      nowPage: 'Gallery',
      route: 'gallery',
      isHere: false
    }, {
      nowPage: 'RSVP',
      route: 'rsvp',
      isHere: false
    }, {
      nowPage: 'friends',
      route: 'friends',
      isHere: false
    }, {
      nowPage: 'pages',
      route: 'pages',
      isHere: false
    }, {
      nowPage: 'blog',
      route: 'blog',
      isHere: false
    }, {
      nowPage: 'location',
      route: 'location',
      isHere: false
    }]
  },
  mutations,
  actions,
  getters,
  modules: {
    wangxh,
    liulong,
    wangwg,
    chengeng,
    yuzw,
    zhaop
  }
})
