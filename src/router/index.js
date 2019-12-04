import Vue from 'vue'
import Router from 'vue-router'
import Final from 'comp/zzz-public/Final'

import Blog from 'comp/liulong/Blog'
import BrideGroom from 'comp/wangwg/BrideGroom'
import Gallery from 'comp/wangwg/Gallery'
import Story from 'comp/chengeng/Story'
import Rsvp from 'comp/yuzw/Rsvp'
import Friends from 'comp/yuzw/Friends'
import Pages from 'comp/zhaop/Pages'
import Home from 'comp/wangxh/Home'
import Location from 'comp/chengang/Location'

Vue.use(Router)

console.log(Vue)

let finalChildren = [
  {
    path: '/brideGroom',
    component: BrideGroom
  }, {
    path: '/blog',
    component: Blog
  }, {
    path: '/story',
    component: Story
  }, {
    path: '/rsvp',
    component: Rsvp
  }, {
    path: '/pages',
    component: Pages
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/gallery',
    component: Gallery
  }, {
    path: '/friends',
    component: Friends
  }, {
    path: '/location',
    component: Location
  }, {
    path: '',
    redirect: '/home'
  }
]

export default new Router({
  routes: [
    {
      path: '/',
      component: Final,
      children: finalChildren
    }
  ]
})
