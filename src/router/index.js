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

Vue.use(Router)

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
    path: '/pages/singleBlogPage',
    component: SinglePages
  }, {
    path: '/pages/classicGalleryPage',
    component: ClassifyPages
  },
  {
    path: '/pages/404Page',
    component: ErrorPages
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/gallery',
    redirect: '/gallery/masonaryGalleryPage'
  }, {
    path: '/gallery/classicGalleryPage',
    component: CGPages
  }, {
    path: '/gallery/masonaryGalleryPage',
    component: MGPage
  }, {
    path: '/friends',
    redirect: '/friends/friendsStyle1'
  }, {
    path: '/friends/friendsStyle2',
    component: SecondFriends
  }, {
    path: '/friends/friendsStyle1',
    component: FirstFriends
  }, {
    path: '/location',
    component: Location
  }, {
    path: '',
    redirect: '/home'
  }
]

/* const finalChildren = [
  {
    path: '/brideGroom',
    component: BrideGroom
  }, {
    path: '/blog',
    component: Blog
  }, {
    path: '/blog/singleBlog',
    component: SingleBlog
  }, {
    path: '/blog/childblog',
    component: ChildBlog
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
    component: Gallery
  }, {
    path: '/gallery/classicGalleryPage',
    component: CGPages
  }, {
    path: '/gallery/masonaryGalleryPage',
    component: MGPage
  }, {
    path: '/friends',
    component: Friends
  }, {
    path: '/friends/friendsStyle1',
    component: FirstFriends
  }, {
    path: '/friends/friendsStyle2',
    component: SecondFriends
  }, {
    path: '/location',
    component: Location
  }, {
    path: '',
    redirect: '/home'
  }
]
*/

export default new Router({
  routes: [
    {
      path: '/',
      component: Final,
      children: finalChildren
    }
  ]
})
