<template>
    <div class="content">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="img-box">
              <img src="../../images/home/6.jpg"/>
              <div class="img-mask"></div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="img-box"><img src="../../images/home/7.jpg"/></div>
          </div>
          <div class="swiper-slide">
            <div class="img-box"><img src="../../images/home/8.jpg"/></div>
          </div>
          <div class="swiper-slide">
            <div class="img-box"><img src="../../images/home/9.jpg"/></div>
          </div>
          <div class="swiper-slide">
            <div class="img-box"><img src="../../images/home/10.jpg"/></div>
          </div>
          <div class="swiper-slide">
            <div class="img-box"><img src="../../images/home/10.jpg"/></div>
          </div>
          <div class="swiper-slide">
            <div class="img-box"><img src="../../images/home/10.jpg"/></div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import Swiper from 'swiper'
export default {
  mounted () {
    new Swiper('.swiper-container', {
      autoplay: true,
      loop: true,
      slidesPerView: 'auto'
    })
  }
}
</script>
<style lang="less" scoped>
  .content{
    margin: 0 auto;
  }
  /deep/
  .swiper-slide{
    height: 100px;
    width: 220px;
    width:auto;
    padding-right: 15px;
    .img-box{
      height: 100%;
      border: 1px solid gray;
      position: relative;
      .img-mask{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: red;
        opacity: 0;
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
    .img-box:hover .img-mask{
      display: block;
      opacity: 0.5;
      transition: all 1s ease-in-out;
    }
  }
  @media only screen and (min-width: 1180px) {
      .content{
        width: 1005px;
        .swiper-slide{
          width: 170px;
        }
      }
  }
  @media only screen and (min-width: 1040px) and (max-width: 1180px) {
    .content{
      width: 970px;
      .swiper-slide{
        width: 140px;
        height: 90px;
      }
    }
  }

  @media only screen and (min-width: 800px) and (max-width: 1040px) {
    .content{
      width: 598px;
      .swiper-slide{
        width: 150px;
        height: 100px;
      }
    }
  }

  @media only screen and (min-width: 100px) and (max-width: 800px) {
    .content{
      width: 489px;
      .swiper-slide{
        width: 125px;
        height: 70px;
      }
    }
  }
</style>
