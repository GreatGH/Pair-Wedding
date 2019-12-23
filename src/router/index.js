import Vue from 'vue'
import Router from 'vue-router'

const Final = () => import('comp/zzz-public/Final')
const Home = () => import('comp/home/Home')
// const Blog = () => import('comp/blog/Blog')
const SingleBlog = () => import('comp/blog/SingleBlog')
const ChildBlog = () => import('comp/blog/ChildBlog')
const BrideGroom = () => import('comp/gallery/BrideGroom')
// const Gallery = () => import('comp/gallery/Gallery')
const CGPages = () => import('comp/gallery/CGPages')
const MGPage = () => import('comp/gallery/MGPage')
const Story = () => import('comp/story/Story')
const Rsvp = () => import('comp/friends/Rsvp')
// const Friends = () => import('comp/friends/Friends')
const FirstFriends = () => import('comp/friends/FirstFriends')
const SecondFriends = () => import('comp/friends/SecondFriends')
// const Pages = () => import('comp/pages/Pages')
const ClassifyPages = () => import('comp/pages/ClassifyPages')
const ErrorPages = () => import('comp/pages/ErrorPages')
const SinglePages = () => import('comp/pages/SinglePages')
const Location = () => import('comp/location/Location')
const ShopCar = () => import('comp/location/ShopCar')
const Login = () => import('comp/location/Login')
Vue.use(Router)

const scrollBehavior = (to, from, savedPosition) => {
  return savedPosition
}

const finalChildren = [
  {
    path: '/brideGroom',
    component: BrideGroom
  }, {
    path: '/blog',
    redirect: '/blog/blog'
  }, {
    path: '/blog/singleBlog',
    component: SingleBlog
  }, {
    path: '/blog/blog',
    component: ChildBlog
  }, {
    path: '/story',
    component: Story
  }, {
    path: '/rsvp',
    component: Rsvp
  }, {
    path: '/pages',
    redirect: '/pages/classicGalleryPage'
  }, {
    path: '/pages/classicGalleryPage',
    component: ClassifyPages
  }, {
    path: '/pages/404Page',
    component: ErrorPages
  }, {
    path: '/pages/singleBlogPage',
    component: SinglePages
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/gallery',
    redirect: '/gallery/masonaryGalleryPage'
  }, {
    path: '/gallery/masonaryGalleryPage',
    component: MGPage
  }, {
    path: '/gallery/classicGalleryPage',
    component: CGPages
  }, {
    path: '/friends',
    redirect: '/friends/friendsStyle1'
  }, {
    path: '/friends/friendsStyle1',
    component: FirstFriends
  }, {
    path: '/friends/friendsStyle2',
    component: SecondFriends
  }, {
    path: '/location',
    component: Location,
    scrollBehavior
  }, {
    path: '',
    redirect: '/home'
  }
]

let router = new Router({
  routes: [
    {
      path: '/',
      component: Final,
      children: finalChildren
    }, {
      path: '/shopcar',
      component: ShopCar
    }, {
      path: '/login',
      component: Login,
      beforeEnter (to, from, next) {
        if (router.app.$options.store.state.token === 'login') {
          router.app.$options.store.commit('changeSituation', 'error')
          router.app.$options.store.commit('changeMessage', '您已登录')
          setTimeout(() => {
            router.app.$options.store.commit('changeSituation', '')
            router.app.$options.store.commit('changeMessage', '')
            next(from.path)
          }, 1000)
        } else {
          next()
        }
      }
    }
  ]
})

export default router
