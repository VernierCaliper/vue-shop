<template>
  <div class="foods">
  <my-header v-bind:headerTitle=title v-bind:banners=bannerLists></my-header>
  <div class="sort_wrap">
    <span @click="ReverseSort('inputTime')">时间</span>
    <span @click="PositiveSort('price')">价格</span>
    <span @click="ReverseSort('buyNum')">销量</span>
  </div>
  <div class="newsList">
    <ul>
      <li v-for="list in allFoods" class="news_row">
        <img v-bind:src="list.imgUrl" alt="">
        <div class="content">
          <h3 v-text="list.newsTitle"></h3>
          <p v-text="list.content"></p>
        </div>
        <div class="price" v-text="'￥' + list.price"></div>
        <button class="buy">购买</button>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
import myHeader from '@/components/myHeader'
  export default {
    name: 'news',
    data () {
    return {
      title: '新闻资讯',
      bannerLists:[
        {
          imgUrl:"/static/foodBanner.png",
          bannerTitle:"48元精品商务套餐",
          bannerId:"1"
        },{
          imgUrl:"/static/foodBanner.png",
          bannerTitle:"68元精品商务套餐",
          bannerId:"2"
        },{
          imgUrl:"/static/foodBanner.png",
          bannerTitle:"88元精品商务套餐",
          bannerId:"3"
        }
      ],
      allFoods:[
        {
          imgUrl:"/static/food1.png",
          newsTitle:"28元精品商务套餐",
          content:"糖醋排骨 青椒牛柳 溜虾仁 素炒茼蒿",
          price:28,
          inputTime:"1515011599000",
          buyNum:43
        },{
          imgUrl:"/static/food2.png",
          newsTitle:"48元精品商务套餐",
          content:"糖醋排骨 青椒牛柳 溜虾仁 素炒茼蒿",
          price:48,
          inputTime:"1515021599000",
          buyNum:45
        },{
          imgUrl:"/static/food3.png",
          newsTitle:"68元精品商务套餐",
          content:"糖醋排骨 青椒牛柳 溜虾仁 素炒茼蒿",
          price:68,
          inputTime:"1515031599000",
          buyNum:32
        },{
          imgUrl:"/static/food4.png",
          newsTitle:"88元精品商务套餐",
          content:"糖醋排骨 青椒牛柳 溜虾仁 素炒茼蒿",
          price:88,
          inputTime:"1515041599000",
          buyNum:8
        },{
          imgUrl:"/static/food1.png",
          newsTitle:"28元精品商务套餐",
          content:"糖醋排骨 青椒牛柳 溜虾仁 素炒茼蒿",
          price:28,
          inputTime:"1511031599000",
          buyNum:24
        },{
          imgUrl:"/static/food2.png",
          newsTitle:"48元精品商务套餐",
          content:"糖醋排骨 青椒牛柳 溜虾仁 素炒茼蒿",
          price:48,
          inputTime:"1512031599000",
          buyNum:25
        },{
          imgUrl:"/static/food3.png",
          newsTitle:"68元精品商务套餐",
          content:"糖醋排骨 青椒牛柳 溜虾仁 素炒茼蒿",
          price:68,
          inputTime:"1513031599000",
          buyNum:36
        },{
          imgUrl:"/static/food4.png",
          newsTitle:"88元精品商务套餐",
          content:"糖醋排骨 青椒牛柳 溜虾仁 素炒茼蒿",
          price:88,
          inputTime:"1514031599000",
          buyNum:12
        }
      ]
    }
  },
  components:{
    myHeader
  },
  methods:{
      getLocalTime(nS) {
         return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/,' ');     
      },
      compare(property){
          return function(a,b){
              var value1 = a[property];
              var value2 = b[property];
              return value1 - value2;
          }
      },
      ReverseCompare(property){
          return function(b,a){
              var value1 = a[property];
              var value2 = b[property];
              return value1 - value2;
          }
      },
      PositiveSort(m){
        this.allFoods.sort(this.compare(m))
      },
      ReverseSort(m){
        this.allFoods.sort(this.ReverseCompare(m))
      },
      timeToString(inputTime){
        return this.getLocalTime(inputTime);
      }

  },
  beforeMount:function(){

  }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin:0;
    padding: 0;
  }
  a {
    color: #42b983;
  }
  .sort_wrap{
    width: 100%;
    height: 2.5rem;
    background-image: url("/static/background.png");
  }
  .sort_wrap span{
    display: block;
    float: left;
    line-height: 2.1rem;
    width: 33%;
    border-right: 1px solid #dadad1;
    margin-top: 0.2rem;
  }
  .sort_wrap span:last-of-type{
    border: none;
  }
  .newsList .news_row{
    background:#fff;
  }
  .newsList .news_row:nth-of-type(2n){
    background: #eeede1;
  }
  .news_row{
    width: 100%;
    float: left;
    position: relative;
  }
  .news_row>img{
    width: 30%;
    float: left;
    padding: 10px;
    box-sizing: border-box;
  }
  .news_row .content{
    width: 70%;
    float: left;
    text-align: left;
    padding-left: 15px;
    box-sizing: border-box;
    margin-top: 10px;
  }
  .news_row .content p{
    font-size: 12px;
    margin-top: 0.5rem;
  }
  .price{
  position:absolute;
  bottom: 12px;
  right:60px;
  width:3rem;
  font-size: 1rem;
  color:#ff0000;
}
.buy{
  position:absolute;
  bottom: 12px;
  right:10px;
  width:3rem;
  font-size: 1rem;
  color:#fff;
  background:#ff0000;
  border:none;
  outline: none;
  border-radius: 5px;
}
</style>
