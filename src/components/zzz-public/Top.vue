<template>
  <div>
    <div class="flex-center cg-topnav">
      <div class="logo">
        <router-link to="/">
          <img src="~img/z-public/logo.png" alt="">
        </router-link>
      </div>
      <div class="topnav-choose" :class="{show: !isDisplay}">
        <div v-for="item in $store.state.mainRouters" :key="item.route" @click="isClicked">
          <router-link :to="item.route" active-class="active">
            {{item.nowPage}}
            <i class="fa fa-angle-down"></i>
          </router-link>
        </div>
      </div>
      <div class="display">
        <div class="display-icon" :class="{show: isDisplay}" @click="isDisplay = !isDisplay">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="display-icon" :class="{show: !isDisplay}" @click="isDisplay = !isDisplay">X</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      isDisplay: true
    }
  },
  methods: {
    isClicked () {
      console.log(123)
    }
  }
}
</script>

<style scoped lang="less">
.cg-topnav {
  padding: 8px 16px;
  line-height: 64px;
  height: 80px;
  font-size: 15px;
  font-family: "Noto Color Emoji";
  letter-spacing: 1px;
  box-shadow: 0 -8px 19px 1px black;
  .logo img{
    vertical-align: middle;
  }
  .topnav-choose {
    position: relative;
    overflow: hidden;
    padding-left: 120px;
    display: flex;
    justify-content: space-between;
    transition: all 0.5s ease-out;
    >div {
      overflow: hidden;
      >a {
        &.active {
          color: #ff4061;
          &::after {
            width: 60%;
            left: 20%;
          }
          i {
            font-weight: bold;
          }
          font-size: 16px;
        }
        i {
          transition: all .3s ease-out;
          font-size: 18px;
        }
        color: #101127;
        padding: 10px 15px;
        position: relative;
        transition: all 0.5s ease-out;
        &:hover {
          i {
            transform: rotateX(180deg);
          }
          &::after {
            width: 60%;
            left: 20%;
          }
        }
        &::after {
          transition: all 0.4s;
          position: absolute;
          left: 50%;
          bottom: 0;
          display: block;
          content: '';
          width: 0;
          height: 2px;
          background: #ff4061;
        }
      }
    }
  }
  .display {
    padding: 13px;
    .display-icon {
      text-align: center;
      font-weight: bold;
      font-size: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      display: none;
      width: 22px;
      height: 22px;
      &.show {
        display: none;
      }
      >div {
        width: 100%;
        height: 3px;
        background: #ff4061;
      }
    }
  }
}

@media screen and (max-width: 1095px) {
  .cg-topnav {
    line-height: normal;
    justify-content: space-between;
    .topnav-choose {
      display: block;
      position: absolute;
      top: 80px;
      height: 0;
      background: #383838;
      padding: 0;
      width: 100%;
      left: 0;
      >div {
        background: #101127;
        transition: background 0.3s ease-out;
        border-bottom: 1px solid rgba(0, 0, 0, .4);
        &:hover {
          background: radial-gradient(#FF2EBF, transparent);
        }
        a {
          display: inline-block;
          width: 100%;
          line-height: 45px;
          font-size: 12px;
          color: #e2e2e2;
          padding-left: 47px;
          &::after {
            background: none;
          }
        }
      }
      &.show {
        height: 414px;
      }
    }
    .display>.display-icon.show {
      display: flex;
    }
  }
}
</style>
