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
          <el-table :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)" border style="width: 96%;margin-left: 2%" height="90%">
            <el-table-column prop="title"></el-table-column>
            <el-table-column prop="name"></el-table-column>
            <el-table-column prop="email"></el-table-column>
         </el-table>

         <el-pagination layout="prev, pager, next"
                   :page-size="pageSize"
                   :total="tableData.length"
                   @current-change="handleCurrentChange"
                   style="text-align: center;margin-top: 1%;">
         </el-pagination>
       </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)
export default {
  data () {
    return {
      tableData: [{
        id: '1',
        title: '1',
        name: 'ssdg',
        email: 'sdgdsg'
      }, {
        id: '2',
        title: '2',
        name: 'ssdg',
        email: 'sdgdsg'
      }, {
        id: '3',
        title: '3',
        name: 'ssdg',
        email: 'sdgdsg'
      }],
      pageSize: 2, // 显示数据的条数
      currentPage: 1// 默认在的第几页
    }
  },
  methods: {
    handleCurrentChange: function (cpage) {
      this.$data.currentPage = cpage
    }
  }
}

</script>
<style lang="less" scope>
@import '../../css/blog.less';
@import '../../css/public.less';
</style>
