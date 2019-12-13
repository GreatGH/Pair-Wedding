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
            <input type="text" placeholder="请输入邮箱" key="login-email" @input="judge" name="email">
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
            <input type="text" placeholder="请输入邮箱" key="register-email" @input="judge" name="email">
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
            <input type="password" @input="judge" placeholder="请再次输入密码" key="register-repwd" name="repwd">
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
import arr1 from './heart'
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
      let data = {}
      inp.forEach(item => {
        result.push(this.myvalidate({
          name: item.getAttribute('name'),
          value: item.value,
          el: item
        }))
        if (item.getAttribute('name') !== 'repwd') {
          data[item.getAttribute('name')] = item.value
        }
      })
      if (result.filter(item => !item).length > 0) {
        console.log(result)
      } else {
        let url = ''
        if (this.show === true) {
          url = '/userlogin'
        } else {
          url = '/register'
        }
        console.log(data)
        this.axiosRequest({
          url: url,
          data: data,
          method: 'post'
        }).then(res => {
          if (this.show === false && res.data.status === 200) {
            this.show = true
          }
          console.log(res)
          if (this.show === true && res.data.status === 200) {
            console.log(this.$router)
            this.$router.replace({path: '/shopcar'})
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
    },
    canvas () {
      let canvas = document.querySelector('#love')
      let ctx = canvas.getContext('2d')
      let canvasDiv = canvas.parentNode
      console.log(canvasDiv.clientWidth)
      canvas.setAttribute('width', canvasDiv.clientWidth)
      canvas.setAttribute('height', canvasDiv.clientHeight)
      setTimeout(() => {
        arr1.forEach((item, index) => {
          setTimeout(() => {
            for (let i = 0; i < 20; i++) {
              let a = Math.floor(Math.random() * 50 - 25)
              let b = Math.floor(Math.random() * 50 - 25)
              let c1 = Math.floor(Math.random() * 200 + 50)
              let c2 = Math.floor(Math.random() * 200 + 50)
              let c3 = Math.floor(Math.random() * 200 + 50)
              ctx.beginPath()
              ctx.moveTo(item.x, item.y)
              ctx.lineTo(item.x - a, item.y - b)
              ctx.setLineDash([0])
              ctx.strokeStyle = 'rgb(' + c1 + ', ' + c2 + ', ' + c3 + ')'
              ctx.stroke()
            }
          }, 1000)
        })
      }, 500)
      // canvasDiv.onmousemove = e => {
      //   let arr = []
      //   let x = e.clientX
      //   let y = e.clientY
      //   for (let i = 0; i < 20; i++) {
      //     let a = Math.floor(Math.random() * 50 - 25)
      //     let b = Math.floor(Math.random() * 50 - 25)
      //     let c1 = Math.floor(Math.random() * 100 + 50)
      //     let c2 = Math.floor(Math.random() * 100 + 50)
      //     let c3 = Math.floor(Math.random() * 100 + 50)
      //     arr.push({
      //       a: x - a,
      //       b: y - b
      //     })
      //     ctx.beginPath()
      //     ctx.moveTo(x, y)
      //     ctx.lineTo(x - a, y - b)
      //     ctx.setLineDash([0])
      //     ctx.strokeStyle = 'rgb(' + c1 + ', ' + c2 + ', ' + c3 + ')'
      //     ctx.stroke()
      //   }
      //   arr.map((item, index) => {
      //     setTimeout(() => {
      //       ctx.beginPath()
      //       ctx.moveTo(x, y)
      //       ctx.lineTo(item.a, item.b)
      //       ctx.strokeStyle = 'transparent'
      //       ctx.stroke()
      //     }, 100)
      //     return false
      //   })
      // }
    }
  },
  mounted () {
    this.show = !this.show
    this.canvas()
  }
}
</script>

<style lang="less" scoped>
.login {
  #love {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
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
    z-index: 3;
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
