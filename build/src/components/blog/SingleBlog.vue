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
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scope>
@import '../../css/blog.less';
</style>
