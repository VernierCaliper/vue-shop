<template>
  <div class="index">
    <header>
      <img v-bind:src="title">
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
    <div class="list_wrap">
      <ul class="my_list">
        <li v-for="list in lists">
          <router-link v-bind:to="list.router">
            <img v-bind:src="list.imgUrl" alt="">
            <span v-text="list.listTitle"></span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
  export default {
    name: 'index',
    data () {
    return {
      title: '/static/index_title.png',
      banners:[
        {
          imgUrl:"/static/banner1.png",
          bannerTitle:"又是一年丰收季",
          bannerId:"1"
        },{
          imgUrl:"/static/banner1.png",
          bannerTitle:"2018我们来了",
          bannerId:"2"
        },{
          imgUrl:"/static/banner1.png",
          bannerTitle:"再见，操蛋的2017",
          bannerId:"3"
        }
      ],
      lists:[
        {
          imgUrl:"/static/list1.png",
          listTitle:"新闻咨询",
          router:"/news"
        },{
          imgUrl:"/static/list2.png",
          listTitle:"快餐火车",
          router:"/foods"
        },{
          imgUrl:"/static/list3.png",
          listTitle:"中西餐大全",
          router:"/about"
        },{
          imgUrl:"/static/list4.png",
          listTitle:"大菜场",
          router:"/about"
        },{
          imgUrl:"/static/list5.png",
          listTitle:"调味品",
          router:"/about"
        },{
          imgUrl:"/static/list6.png",
          listTitle:"干货市场",
          router:"/about"
        },{
          imgUrl:"/static/list7.png",
          listTitle:"营养大全",
          router:"/about"
        },{
          imgUrl:"/static/list8.png",
          listTitle:"安全专栏",
          router:"/about"
        },{
          imgUrl:"/static/list9.png",
          listTitle:"个人中心",
          router:"/about"
        },
      ]
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
    height: 3rem;
    top: 0;
    left:0;
    background: #706c07;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.8);
    z-index: 1000;
  }
  header img{
    width: 7rem;
  }
  .banner_wrap{
    width: 100%;
    position: relative;
    height: 13rem;
    margin-top: 3rem;
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
  .index .MyPagination{
    text-align: right;
    bottom: 4px;
  }
  a {
    color: #42b983;
  }
  .list_wrap{
    width: 100%;
    overflow: hidden;
    margin-top: 1rem;
    margin-left: 6.5%;
  }
  .my_list{
    display: flex;
    flex-wrap:wrap;
  }
  .my_list li{
    width:25%;
    margin: 0 6% 1rem 0;
  }
  .my_list li:nth-of-type(3n){
    margin: 0 0 1rem 0;
  }
  .my_list li img{
    width: 100%;
  }
</style>
