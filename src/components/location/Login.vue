<template>
  <div class="login dis-fixed">
    <div class="top-banner">
      <img src="~img/z-public/shopcar-bg.jpg" alt="">
    </div>
    <flipInY>
      <div class="bottom-input" v-if="show" slot="flipInY">
        <div class="logo">
          <img src="~img/z-public/logo.png" alt="">
        </div>
        <div>
          <div class="email">
            <input type="text" placeholder="请输入手机号" key="login-email" @input="judge" name="email">
          </div>
          <div class="pwd">
            <input type="password" placeholder="请输入密码" @input="judge" key="login-pwd" name="pwd">
          </div>
          <div class="login-btn" @click="allJudge">立即登录</div>
          <span class="toregister" @click="clear">立即注册</span>
        </div>
      </div>
      <div class="bottom-input" v-if="!show" slot="flipInY">
        <div class="logo">
          <img src="~img/z-public/logo.png" alt="">
        </div>
        <div>
          <div class="email">
            <input type="text" placeholder="请输入手机号" key="register-email" @input="judge" name="email">
          </div>
          <div class="code">
            <div>
              <input type="text" @input="judge" placeholder="请输入验证码" key="register-code" name="code">
            </div>
            <div class="getcode">获取验证码</div>
          </div>
          <div class="pwd">
            <input type="password" @input="judge" placeholder="请输入密码" key="register-pwd" name="pwd">
          </div>
          <div class="repwd">
            <input type="password" @input="judge" placeholder="请再次输入密码" key="register-repwd" name="pwd">
          </div>
          <div class="login-btn" @click="allJudge">立即注册</div>
          <span class="toregister" @click="show = !show">立即登录</span>
        </div>
      </div>
    </flipInY>
    <canvas id="love"></canvas>
  </div>
</template>

<script>
import flipInY from 'comp/location/slot/FlipInY'
export default {
  data () {
    return {
      show: false
    }
  },
  components: {
    flipInY
  },
  methods: {
    judge (e) {
      this.myvalidate({
        name: e.target.getAttribute('name'),
        value: e.target.value,
        el: e.target
      })
    },
    allJudge (e) {
      let inp = e.target.parentNode.querySelectorAll('input')
      let result = []
      let data = []
      inp.forEach(item => {
        result.push(this.myvalidate({
          name: item.getAttribute('name'),
          value: item.value,
          el: item
        }))
        data.push(item.value)
      })
      if (result.filter(item => !item).length > 0) {
        console.log(result)
      } else {
        let url = ''
        if (this.show === true) {
          url = '/login'
        } else {
          url = '/register'
        }
        console.log(data)
        this.axiosRequest({
          url: url,
          data: data,
          method: 'post'
        }).then(res => {
          console.log(res)
          if (this.show === true) {
            this.$router.push = '/shopcar'
          }
        }).catch(err => {
          console.log(err)
        })
      }
    },
    clear () {
      this.show = !this.show
      let valida = document.querySelectorAll('.validate-label')
      valida.forEach(item => {
        item.parentNode.removeChild(item)
      })
    }
  },
  mounted () {
    this.show = !this.show
  }
}
</script>

<style lang="less" scoped>
.login {
  .top-banner {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    &::after {
      position: absolute;
      width: 100%;
      height: 100%;
      display: block;
      top: 0;
      left: 0;
      content: '';
      background: rgba(99, 45, 45, 0.3);
      z-index: 1;
    }
    img{
      width: 100%;
      height: 100%;
    }
  }
  .bottom-input {
    width: 350px;
    padding: 50px 30px;
    border-radius: 10px;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 50px;
    background: transparent;
    border: 1px solid #fff;
    >div {
      >div {
        position: relative;
        height: 50px;
        margin: 50px 0;
        &.code {
          display: flex;
          >div {
            position: relative;
            input {
              width: 100%;
            }
            &.getcode {
              flex: 1;
              width: 30%;
              border-radius: 50px;
              border: 1px solid #fff;
              margin-left: 10px;
            }
          }
        }
        &.login-btn {
          margin: 0 40px;
          border-radius: 30px;
          border: 1px solid #fff;
          cursor: pointer;
          &:hover {
            border-width: 2px;
          }
        }
        input {
          outline: none;
          border: 1px solid #fff;
          background: transparent;
          height: 40px;
          text-indent: 10px;
          border-radius: 40px;
          width: 100%;
          height: 100%;
          &::placeholder {
            color: black;
          }
        }
      }
      >span {
        position: absolute;
        top: 0;
        right: 25px;
        color: white;
      }
    }
  }
}
@media screen and (max-width: 780px){
  .login {
    .top-banner {
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .login {
    .top-banner {
      img {
        width: auto;
      }
    }
  }
}
</style>
