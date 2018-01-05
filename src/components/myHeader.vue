<template>
  <div class="myHeader">
    <header>
    <router-link to="/" class="back"><img src="/static/back.png" alt=""></router-link>
      {{headerTitle}}
    </header>
    <div class="banner_wrap swiper-container" id="swiper">
      <ul class="swiper-wrapper">
        <li v-for="banner in banners" class="swiper-slide">
          <img v-bind:src="banner.imgUrl" v-bind:key="banner.bannerId">
          <span v-text="banner.bannerTitle"></span>
        </li>
      </ul>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
  export default {
      data(){
            return{
            }
  },
  props:{
    headerTitle:{
      default:"标题"
    },
    banners:{
      default:"banner"
    }
  },
  beforeMount:function(){
     setTimeout(function () {
            var mySwiper =  new Swiper('#swiper', {
            loop: true,
            pagination:{
              el:'.swiper-pagination'
            },
            autoplay: {delay:3000},
            paginationClickable: true
          });
          mySwiper.pagination.$el.addClass('MyPagination');
          mySwiper.pagination.bullets.css('background','#fff');
        }, 100)
  }
}
</script>

<style scoped>
  header{
    position: fixed;
    width: 100%;
    height: 2rem;
    top: 0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #706c07;
    box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.8);
    z-index: 1000;
    color:#fff;
  }
  .back img{
    display: block;
    width: 0.8rem;
    position: absolute;
    left: 5px;
    top: 6px;
  }
.banner_wrap{
    width: 100%;
    position: relative;
    height: 13rem;
    margin-top: 2rem;
    overflow: hidden;
  }
  .banner_wrap ul{
    width: 300%;
  }
  .banner_wrap ul li{
    float: left;
    width: 33.33333%;
    height: 13rem;
    position: relative;
  }
  .banner_wrap ul li img{
    width: 100%;
    height: 13rem;
  }
  .banner_wrap ul li span{
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0px;
    height: 1.5rem;
    background: rgba(0,0,0,0.6);
    color: #fff;
    text-align: left;
    padding-left: 5px;
    box-sizing: border-box;
  }
  .myHeader .MyPagination{
    text-align: right;
    bottom: 4px;
  }
</style>
