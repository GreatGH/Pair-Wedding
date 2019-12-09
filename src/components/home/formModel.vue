<template>
  <div class="home-container">
      <div class="row-module flex-center-w">
          <div class="rsvp-form-area">
            <div class="row-module">
              <el-form :model="ruleForm" ref="ruleForm" :rules="rules">
                <div class="flex-betwe-w">
                  <el-form-item class="form-item-input" prop="user">
                      <input v-model="ruleForm.user" type="text" placeholder="Your Name"/>
                  </el-form-item>
                  <el-form-item class="form-item-input" prop="email">
                    <input v-model="ruleForm.email" type="text" placeholder="Your Email"/>
                  </el-form-item>
                  <el-form-item class="form-item-input" prop="guest">
                      <input type="number" placeholder="Guest"/>
                  </el-form-item>
                  <el-form-item class="form-item-input" prop="classtype">
                    <input type="text" placeholder="Ceremony & Party"/>
                  </el-form-item>
                  <el-form-item class="form-item-input textarea-box">
                    <textarea placeholder="Share Something..."></textarea>
                    <div class="rsvp-submit-button text-center"><el-button @click="submitForm('ruleForm')" class="submit-btn" type="default">RSVG</el-button></div>
                  </el-form-item>
                </div>
              </el-form>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import '../../Common/fontSize.js'
export default {
  data () {
    var user = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('名称不能为空'))
      }
    }
    var guest = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('宾客数量不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        }
      }, 1000)
    }
    return {
      ruleForm: {
        user: '',
        email: '',
        guest: '',
        classtype: ''
      },
      rules: {
        user: [
          {required: true, message: '名称不能为空', trigger: 'blur'},
          {validator: user, trigger: 'blur'}
        ],
        email: [
          {required: true, message: '请输入邮箱地址', trigger: 'blur'},
          {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur']}
        ],
        guest: [
          {validator: guest, trigger: 'blur'}
        ],
        classtype: [
          {required: true, message: '类型不能为空(聚会或婚礼等)', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: '登录成功',
            type: 'success'
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../css/home.less';
</style>
