<template>
  <div>
    <!-- blog 背景图片 -->
    <header class="page-banner-area blog-banner-area single">
      <div class="section-overlay d-flex">
         <div class="container">
            <div class="page-banner-wrap">
               <h1 class="page-banner-heading">Single Blog</h1>
               <div>
                  <ul class="breadcrumb clearfix">
                     <li class="breadcrumb-item text-capitalize">
                        <router-link to="/home">Home</router-link>
                     </li>
                     <li class="breadcrumb-item text-capitalize active">
                        Blog Single
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
    </header>

    <!-- singleblog content -->
    <section class="blog-page-area">
      <div class="container">
        <div class="row clearfix">
            <div class="single-blog-details fl">
                <div id="content">
                   <div class="block-1">
                     <div class="card">
                        <img src="../../images/blog/single-blog-details-img.jpg"/>
                        <div class="card-footer d-flex">
                          <div class="card-footer-box d-flex">
                            <div class="author-box">
                              <img src="../../images/blog/blog-writer.png" />
                              <span>by John Doe</span>
                            </div>
                            <div class="blog-date">
                               <i class="fa fa-calendar"></i>
                                06 Sep, 2019
                            </div>
                            <div class="card-footer-share">
                              <i class="el-icon-document-copy"></i>
                              03 Comments
                            </div>
                            <div class="card-footer-share">
                              <i class="fa fa-thumbs-o-up"></i>
                              30
                            </div>
                          </div>
                        </div>
                        <div class="card-body">
                          <h2 class="card-title text-capitalize">Tips For Choosing The Right Wedding Dress</h2>
                        </div>
                     </div>
                     <p>
                       Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem den aperiam, eaque ipsa quae
                      ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
                     </p>
                     <div class="blog-content-media">
                       <img src="../../images/blog/block-2-1.jpg">
                     </div>
                     <p>
                       Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                       Neque porro quisquam est, qui dolorem ipsum quia. sed quia ipsum den consequuntur magni dolores eos.
                     </p>
                     <p>
                       Dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                     </p>
                     <p>
                       Corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
                       qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                     </p>
                     <blockquote class="position-relative">
                       <p>
                         Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                       </p>
                     </blockquote>
                   </div>
                   <div class="block-2">
                     <div class="share-article d-flex justify-content-between">
                       <div class="share-box">
                         <i class="fa fa-tag"></i>
                         <a ><span>Wedding,</span></a>
                         <a ><span>Party,</span></a>
                         <a ><span>engagement</span></a>
                       </div>
                       <div class="share-box">
                         <button>
                           <i class="fa fa-share-alt"></i>
                           <span>Share this article</span>
                         </button>
                       </div>
                     </div>
                     <div class="about-author d-flex justify-content-between">
                       <div class="author-img blog-writer">
                         <img src="../../images/blog/blog-writer.png"/>
                       </div>
                       <div class="author-details">
                         <h4>John Doe</h4>
                         <p>
                           Ut enim ad minima veniam, quis nostrum exerci tationem ullam corporis suscipit den ser mori ten laboriosam, nisi ut aliquid ex ea commodi consequatur.
                         </p>
                         <div class="author-social">
                           <ul>
                             <li>
                               <a><i class="fa fa-facebook"></i></a>
                             </li>
                             <li>
                               <a><i class="fa fa-twitter"></i></a>
                             </li>
                             <li>
                               <a><i class="fa fa-linkedin"></i></a>
                             </li>
                             <li>
                               <a><i class="fa fa-pinterest-square"></i></a>
                             </li>
                           </ul>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div class="block-3">
                     <h2>3 Comments</h2>
                     <div class="blog-comments-section">
                       <div class="main-comment">
                         <div class="about-author d-flex justify-content-between">
                           <div class="author-img">
                             <img src="../../images/blog/blog-details-author-65-2.png" />
                           </div>
                           <div class="author-details">
                             <div class="d-flex justify-content-between align-items-center">
                               <h4 class="author-name">
                                 John Doe
                                 <span class="comment-date-time">13 June, 2019 at 07:30</span>
                               </h4>
                               <span class="reply-btn">Reply</span>
                             </div>
                             <p>
                               Ut enim ad minima veniam, quis nostrum exerci tationem ullam corporis suscipit den ser mori ten.
                             </p>
                           </div>
                         </div>
                         <div class="about-author d-flex justify-content-between under-comments">
                           <div class="author-img">
                             <img src="../../images/blog/blog-details-author-65-1.png">
                           </div>
                           <div class="author-details">
                             <div class="d-flex justify-content-between align-items-center">
                               <h4 class="author-name">
                                 John Doe
                                 <span class="comment-date-time">13 June, 2019 at 07:30</span>
                               </h4>
                               <span class="reply-btn">Reply</span>
                             </div>
                             <p>
                               Ut enim ad minima veniam, quis nostrum exerci
                                    tationem ullam corporis suscipit.
                             </p>
                           </div>
                         </div>
                       </div>
                       <div class="main-comment">
                         <div class="about-author d-flex justify-content-between">
                           <div class="author-img">
                             <img src="../../images/blog/blog-details-author-65-1.png" />
                           </div>
                           <div class="author-details">
                             <div class="d-flex justify-content-between align-items-center">
                               <h4 class="author-name">
                                 Rosta Doe
                                 <span class="comment-date-time">13 June, 2019 at 07:30</span>
                               </h4>
                               <span class="reply-btn">Reply</span>
                             </div>
                             <p>
                               Ut enim ad minima veniam, quis nostrum exerci tationem ullam corporis suscipit den ser mori ten.
                             </p>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div class="leave-comment-area">
                       <h2>Leave a Comment</h2>
                       <!-- form表单验证 -->
                       <el-form label-position="top" label-width="80px" :model="dynamicValidateForm" ref="dynamicValidateForm">
                          <div class="row">
                            <el-form-item
                              label="Full Name"
                              prop="name"
                              :rules="{
                                required: true, message: '用户名不能为空！', trigger: 'blur'
                              }"
                              class="col-sm-6"
                            >
                              <el-input v-model="dynamicValidateForm.name"></el-input>
                            </el-form-item>
                            <el-form-item
                              prop="email"
                              label="Email"
                              :rules="[
                                { required: true, message: '请输入邮箱地址！', trigger: 'blur' },
                                { type: 'email', message: '请输入正确的邮箱地址！', trigger: ['blur', 'change'] }
                              ]"
                              class="col-sm-6"
                            >
                              <el-input v-model="dynamicValidateForm.email"></el-input>
                            </el-form-item>
                           <el-form-item
                              v-for="(domain, index) in dynamicValidateForm.domains"
                              label="Write Comment"
                              :key="domain.key"
                              :prop="'domains.' + index + '.value'"
                              :rules="{
                                required: true, message: '内容不能为空！', trigger: 'blur'
                              }"
                              class="col-sm-12"
                            >
                              <el-input v-model="domain.value"/>
                            </el-form-item>
                            <el-form-item class="col-sm-12">
                              <el-button class="text-uppercase" type="primary" @click="submitForm('dynamicValidateForm')">submit</el-button>
                              <el-button class="text-uppercase" @click="resetForm('dynamicValidateForm')">cancel</el-button>
                            </el-form-item>
                          </div>
                       </el-form>
                     </div>
                   </div>
                </div>
            </div>
            <div class="single-blog-aside fr">
              <aside class="sidebar wedding-widget-area" id="sidebar">
                <div class="widget widget-search" id="search">
                    <form class="form-inline">
                      <input type="text" class="form-control font-14" id="blog_search" placeholder="Search" />
                      <button type="submit" class="btn bg-orange font-14">
                        <i class="fa fa-search"></i>
                      </button>
                    </form>
                </div>
                <div class="widget widget-categories" id="categories">
                  <h4 class="widget-title font-w-semi-b position-relative">Categories</h4>
                  <ul>
                    <li><a >Venue(15)</a></li>
                    <li><a >Photography(20)</a></li>
                    <li><a >party(21)</a></li>
                    <li><a >decoration(74)</a></li>
                    <li><a >dress(10)</a></li>
                  </ul>
                </div>
                <div class="widget widget-recent-posts" id="recent-posts">
                  <h4 class="widget-title font-w-semi-b position-relative">Recent Posts</h4>
                  <ul>
                    <li :key="index" v-for="(item, index) in img">
                      <a class="d-flex align-items-center">
                        <figure>
                          <img :src="item.src">
                          <div class="abslut"></div>
                        </figure>
                        <p>
                          Best  & Top Bridal Bouquet Collection
                          <span>July 04, 2019</span>
                        </p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="widget widget-popular-tags" id="popular-tags">
                  <h4 class="widget-title font-w-semi-b position-relative">
                    Popular Tags
                  </h4>
                  <ul>
                    <li>
                      <a >Wedding</a>
                    </li>
                     <li>
                      <a >party</a>
                    </li>
                     <li>
                      <a >bridal</a>
                    </li>
                     <li>
                      <a >dress</a>
                    </li>
                     <li>
                      <a >vendor</a>
                    </li>
                     <li>
                      <a >henna</a>
                    </li>
                    <li>
                      <a >Makeup</a>
                    </li>
                    <li>
                      <a >engagement</a>
                    </li>
                  </ul>
                </div>
                <div class="widget widget-instagram" id="instagram">
                  <h4 class="widget-title position-relative">
                    Instagram
                  </h4>
                  <ul>
                    <li :key="index" v-for="(item, index) in imges">
                      <a >
                        <figure>
                          <img :src="item.img1" />
                          <div class="abslut"></div>
                        </figure>
                      </a>
                      <a >
                        <figure>
                          <img :src="item.img2" />
                          <div class="abslut"></div>
                        </figure>
                      </a>
                      <a >
                        <figure>
                          <img :src="item.img3" />
                          <div class="abslut"></div>
                        </figure>
                      </a>
                      <a >
                        <figure>
                          <img :src="item.img4" />
                          <div class="abslut"></div>
                        </figure>
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imges: [
        {
          img1: require('../../images/blog/sidebar-instagram-img-1.jpg'),
          img2: require('../../images/blog/sidebar-instagram-img-2.jpg'),
          img3: require('../../images/blog/sidebar-instagram-img-3.jpg'),
          img4: require('../../images/blog/sidebar-instagram-img-4.jpg')
        },
        {
          img1: require('../../images/blog/sidebar-instagram-img-5.jpg'),
          img2: require('../../images/blog/sidebar-instagram-img-6.jpg'),
          img3: require('../../images/blog/sidebar-instagram-img-7.jpg'),
          img4: require('../../images/blog/sidebar-instagram-img-8.jpg')
        },
        {
          img1: require('../../images/blog/sidebar-instagram-img-9.jpg'),
          img2: require('../../images/blog/sidebar-instagram-img-10.jpg'),
          img3: require('../../images/blog/sidebar-instagram-img-11.jpg'),
          img4: require('../../images/blog/sidebar-instagram-img-12.jpg')
        }
      ],
      img: [
        {src: require('../../images/blog/sidebar-recent-posts-1.jpg')},
        {src: require('../../images/blog/sidebar-recent-posts-2.jpg')},
        {src: require('../../images/blog/sidebar-recent-posts-3.jpg')}
      ],
      dynamicValidateForm: {
        name,
        email: '',
        domains: [{
          value: ''
        }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../css/blog.less';
</style>
