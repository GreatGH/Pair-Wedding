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
                          <img :src="item.blog_cover"/>
                          <figcaption></figcaption>
                        </figure>
                      </router-link>
                    </div>
                    <div class="card-body">
                       <router-link to="/blog/singleBlog">
                         <h4 class="card-title">{{item.content}}</h4>
                       </router-link>
                       <div class="card-footer">
                         <div class="card-footer-box d-flex">
                           <div class="author-box">
                             <a href="#">
                               <img :src="header1"/>
                               <span>{{item.author}}</span>
                             </a>
                           </div>
                           <div class="blog-date text-uppercase">
                             <i class="fa fa-calendar"></i>
                             <span>{{item.TIME}}</span>
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
// import axios from 'axios'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import header1 from '../../images/blog/header1.png'
Vue.use(Element)
export default {
  data () {
    return {
      header1: header1,
      // blog静态数据渲染 listArray
      listArray: [{
        'author': '112',
        'content': 'dsgfdfsgsdfg',
        blog_cover: require('../../images/blog/blogimg1.jpg'),
        'TIME': '234234234'
      }, {
        'author': '112',
        'content': 'dsgfdfsgsdfg',
        blog_cover: require('../../images/blog/blogimg1.jpg'),
        'TIME': '234234234'
      }, {
        'author': '112',
        'content': 'dsgfdfsgsdfg',
        blog_cover: require('../../images/blog/blogimg1.jpg'),
        'TIME': '234234234'
      }, {
        'author': '112',
        'content': 'dsgfdfsgsdfg',
        blog_cover: require('../../images/blog/blogimg1.jpg'),
        'TIME': '234234234'
      }, {
        'author': '112',
        'content': 'dsgfdfsgsdfg',
        blog_cover: require('../../images/blog/blogimg1.jpg'),
        'TIME': '234234234'
      }, {
        'author': '112',
        'content': 'dsgfdfsgsdfg',
        blog_cover: require('../../images/blog/blogimg1.jpg'),
        'TIME': '234234234'
      }, {
        'author': '112',
        'content': 'dsgfdfsgsdfg',
        blog_cover: require('../../images/blog/blogimg1.jpg'),
        'TIME': '234234234'
      }, {
        'author': '112',
        'content': 'dsgfdfsgsdfg',
        blog_cover: require('../../images/blog/blogimg1.jpg'),
        'TIME': '234234234'
      }, {
        'author': '112',
        'content': 'dsgfdfsgsdfg',
        blog_cover: require('../../images/blog/blogimg1.jpg'),
        'TIME': '234234234'
      }, {
        'author': '112',
        'content': 'dsgfdfsgsdfg',
        blog_cover: require('../../images/blog/blogimg1.jpg'),
        'TIME': '234234234'
      }, {
        'author': '112',
        'content': 'dsgfdfsgsdfg',
        blog_cover: require('../../images/blog/blogimg1.jpg'),
        'TIME': '234234234'
      }],
      // 控制每页显示数据的数数量
      pageSize: 6,
      // 默认显示第几页
      currentPage: 0,
      // 总数据
      totalPage: [],
      // 当前显示的数据
      // 一个数组dataShow接收dataShow的内容
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
    // 渲染blog 页面内容
    // getlists () {
    //   // 相当于ajax请求
    //   axios({
    //     method: 'get',
    //     url: 'http://192.168.97.236:3000/blog/'
    //   }).then((res) => {
    //     this.dataShow = res.data.data
    //   })
    // }
  },
  // mounted () {
  //   this.getlists()
  // },
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
