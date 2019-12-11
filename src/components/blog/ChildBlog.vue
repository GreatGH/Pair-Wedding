<template>
  <div>
    <!-- blog 背景图片 -->
    <header class="page-banner-area blog-banner-area">
      <div class="section-overlay d-flex">
         <div class="container">
            <div class="page-banner-wrap">
               <h1 class="page-banner-heading">Blog</h1>
               <div>
                  <ul class="breadcrumb clearfix">
                     <li class="breadcrumb-item text-capitalize">
                        <router-link to="/home">Home</router-link>
                     </li>
                     <li class="breadcrumb-item text-capitalize active">
                        Blog
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
    </header>
    <!-- 分页 -->
    <section class="blog-page-area">
       <div class="container">
         <!-- 分页内容 -->
          <ul class="blog-lists-box">
             <li class="blog-list" :key="index" v-for="(item, index) in dataShow" :class="{ 'alt': index%2 == 1 }">
                <div class="card">
                    <div class="blog-overlay">
                      <router-link to="/blog/singleBlog">
                        <figure>
                          <img :src="item.src"/>
                          <figcaption></figcaption>
                        </figure>
                      </router-link>
                    </div>
                    <div class="card-body">
                       <router-link to="/blog/singleBlog">
                         <h4 class="card-title">{{item.title}}</h4>
                       </router-link>
                       <div class="card-footer">
                         <div class="card-footer-box d-flex">
                           <div class="author-box">
                             <a href="#">
                               <img :src="header1"/>
                               <span>{{item.username}}</span>
                             </a>
                           </div>
                           <div class="blog-date text-uppercase">
                             <i class="fa fa-calendar"></i>
                             <span>{{item.time}}</span>
                           </div>
                         </div>
                       </div>
                    </div>
                </div>
              </li>
          </ul>
          <!-- 分页按钮组 -->
          <div class="page">
             <ul class="pagination clearfix flex-center">
                <li class="page-item stic">
                   <a class="page-link "  v-on:click="prePage">Prev</a>
                </li>
                <li class="page-item" :key="index" v-for="(item, index) in totalPage">
                   <a class="page-link"  v-on:click="toPage(index)" :class="{active: currentPage == index}">{{ index+1 }}</a>
                </li>
                <li class="page-item">
                   <a class="page-link"  v-on:click="nextPage">Next</a>
                </li>
             </ul>
          </div>
       </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import img from '../../images/blog/blogimg1.jpg'
import header1 from '../../images/blog/header1.png'
Vue.use(Element)
export default {
  data () {
    return {
      header1: header1,
      listArray: [{
        'title': '25 Places To Get The Best Wedding...',
        'username': 'liulong',
        'time': '2019/12/6',
        src: require('../../images/blog/blogimg1.jpg')
      }, {
        'title': '10 Bridal Bouquets You’ll Fall In Love...',
        'username': 'wangxianhui',
        'time': '2019/12/7',
        src: require('../../images/blog/blogimg2.jpg')
      }, {
        'title': 'Tips For Choosing The Right Weddi...',
        'username': 'chenggang',
        'time': '2019/12/8',
        src: require('../../images/blog/blogimg3.jpg')
      }, {
        'title': 'Planning The Perfect Bachelorette...',
        'username': 'wangwengang',
        'time': '2019/12/9',
        src: require('../../images/blog/blogimg4.jpg')
      }, {
        'title': 'Top 20 Tips for Wedding Invitat...',
        'username': 'yuzhiwei',
        'time': '2019/12/10',
        src: require('../../images/blog/blogimg5.jpg')
      }, {
        'title': 'Best Tips for the Bride and Groom...',
        'username': 'zhaopu',
        'time': '2019/12/11',
        src: require('../../images/blog/blogimg6.jpg')
      }, {
        'title': '30 Places To Get The Best Wedding...',
        'username': 'liulong',
        'time': '2019/12/6',
        src: require('../../images/blog/blogimg1.jpg')
      }, {
        'title': '10 Bridal Bouquets You’ll Fall In Love...',
        'username': 'wangxianhui',
        'time': '2019/12/7',
        src: require('../../images/blog/blogimg2.jpg')
      }, {
        'title': 'Tips For Choosing The Right Weddi...',
        'username': 'chenggang',
        'time': '2019/12/8',
        src: require('../../images/blog/blogimg3.jpg')
      }, {
        'title': 'Planning The Perfect Bachelorette...',
        'username': 'wangwengang',
        'time': '2019/12/9',
        src: require('../../images/blog/blogimg4.jpg')
      }, {
        'title': 'Top 20 Tips for Wedding Invitat...',
        'username': 'yuzhiwei',
        'time': '2019/12/10',
        src: require('../../images/blog/blogimg5.jpg')
      }, {
        'title': 'Best Tips for the Bride and Groom...',
        'username': 'zhaopu',
        'time': '2019/12/11',
        src: require('../../images/blog/blogimg6.jpg')
      }, {
        'title': '35 Places To Get The Best Wedding...',
        'username': 'liulong',
        'time': '2019/12/6',
        src: require('../../images/blog/blogimg1.jpg')
      }, {
        'title': '10 Bridal Bouquets You’ll Fall In Love...',
        'username': 'wangxianhui',
        'time': '2019/12/7',
        src: require('../../images/blog/blogimg2.jpg')
      }, {
        'title': 'Tips For Choosing The Right Weddi...',
        'username': 'chenggang',
        'time': '2019/12/8',
        src: require('../../images/blog/blogimg3.jpg')
      }, {
        'title': 'Planning The Perfect Bachelorette...',
        'username': 'wangwengang',
        'time': '2019/12/9',
        src: require('../../images/blog/blogimg4.jpg')
      }, {
        'title': 'Top 20 Tips for Wedding Invitat...',
        'username': 'yuzhiwei',
        'time': '2019/12/10',
        src: require('../../images/blog/blogimg5.jpg')
      }, {
        'title': 'Best Tips for the Bride and Groom...',
        'username': 'zhaopu',
        'time': '2019/12/11',
        src: require('../../images/blog/blogimg6.jpg')
      }],
      // 控制每页显示数据的数数量
      pageSize: 6,
      // 默认显示第几页
      currentPage: 0,
      // 总数据
      totalPage: [],
      // 当前显示的数据
      dataShow: []
    }
  },
  methods: {
    nextPage: function () {
      if (this.currentPage === this.pageNum - 1) {
        return
      }
      this.dataShow = this.totalPage[++this.currentPage]
    },
    prePage: function () {
      if (this.currentPage === 0) {
        return
      }
      this.dataShow = this.totalPage[--this.currentPage]
    },
    toPage: function (page) {
      this.currentPage = page
      this.dataShow = this.totalPage[this.currentPage]
    }
  },
  created: function () {
    this.pageNum = Math.ceil(this.listArray.length / this.pageSize) || 1
    for (var i = 0; i < this.pageNum; i++) {
      this.totalPage[i] = this.listArray.slice(this.pageSize * i, this.pageSize * (i + 1))
    }
    this.dataShow = this.totalPage[this.currentPage]
  }
}

</script>
<style lang="less" >
@import '../../css/blog.less';
</style>
