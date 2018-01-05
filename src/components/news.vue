<template>
  <div class="news">
  <my-header v-bind:headerTitle=title v-bind:banners=bannerLists></my-header>
  <div class="sort_wrap">
    <span @click="ReverseSort('inputTime')">时间</span>
    <span @click="ReverseSort('hits')">热度</span>
  </div>
  <div class="newsList">
    <ul>
      <li v-for="list in allNews" class="news_row">
        <img v-bind:src="list.imgUrl" alt="">
        <div class="content">
          <h3 v-text="list.newsTitle"></h3>
          <span v-text="timeToString(list.inputTime)" class="inputTime"></span>
          <p v-text="list.content"></p>
          <div class="hitsWrap">
              <img src="/static/hits.png" alt="" class="hitsImg">
              <span class="hits" v-text="list.hits"></span>
          </div>
        </div>
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
          imgUrl:"/static/newsBanner.jpg",
          bannerTitle:"独家全程3D模拟",
          bannerId:"1"
        },{
          imgUrl:"/static/newsBanner.jpg",
          bannerTitle:"嫦娥二号十大任务",
          bannerId:"2"
        },{
          imgUrl:"/static/newsBanner.jpg",
          bannerTitle:"嫦娥二号五大系统",
          bannerId:"3"
        }
      ],
      allNews:[
        {
          imgUrl:"/static/news1.jpg",
          newsTitle:"独家全程3D模拟",
          content:"嫦娥二号奔月全程模拟，火箭卫星分解专业解析…",
          inputTime:"1515051539000",
          hits:200
        },{
          imgUrl:"/static/news2.jpg",
          newsTitle:"嫦娥二号十大任务",
          content:"为嫦娥三号实现月球着陆进行关键技术试验…",
          inputTime:"1515051599000",
          hits:355
        },{
          imgUrl:"/static/news3.jpg",
          newsTitle:"嫦娥二号五大系统",
          content:"由探测卫星、运载火箭、发射场等系统组成…",
          inputTime:"1515031599000",
          hits:45
        },{
          imgUrl:"/static/news4.jpg",
          newsTitle:"探月工程幕后英雄",
          content:"如今，年青一代已担负着中国探月工程重任…",
          inputTime:"1515051399000",
          hits:37
        },{
          imgUrl:"/static/news5.jpg",
          newsTitle:"岑拯：发射准备需2-3年",
          content:"一些重要单机，精密仪器，都是3到5年前就要投产…",
          inputTime:"1515051299000",
          hits:66
        },{
          imgUrl:"/static/news2.jpg",
          newsTitle:"嫦娥二号十大任务",
          content:"为嫦娥三号实现月球着陆进行关键技术试验…",
          inputTime:"1515051519000",
          hits:244
        },{
          imgUrl:"/static/news3.jpg",
          newsTitle:"嫦娥二号五大系统",
          content:"由探测卫星、运载火箭、发射场等系统组成…",
          inputTime:"1515052599000",
          hits:156
        },{
          imgUrl:"/static/news4.jpg",
          newsTitle:"探月工程幕后英雄",
          content:"如今，年青一代已担负着中国探月工程重任…",
          inputTime:"1515251599000",
          hits:133
        },{
          imgUrl:"/static/news5.jpg",
          newsTitle:"岑拯：发射准备需2-3年",
          content:"一些重要单机，精密仪器，都是3到5年前就要投产…",
          inputTime:"1515031599000",
          hits:100
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
        this.allNews.sort(this.compare(m))
      },
      ReverseSort(m){
        this.allNews.sort(this.ReverseCompare(m))
      },
      timeToString(inputTime){
        return this.getLocalTime(inputTime);
      }

  },
  beforeMount:function(){
    // console.log(this.allNews.sort(this.compare('hits')))
    // const _this = this;
    // for(var i=0;i<this.allNews.length;i++){
    //   _this.allNews[i].inputTime = _this.getLocalTime(_this.allNews[i].inputTime);
    // }
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
    width: 49%;
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
  .inputTime{
    position: absolute;
    font-size: 12px;
    color: #555353;
    bottom: 10px;
    right: 10px;
  }
  .hitsWrap{
    position: absolute;
    width: 4rem;
    top: 15px;
    right: 0px;
  }
  .hitsImg{
    width: 25%;
  }
  .hits{
    font-size: 14px;
    color: #ff0000;
  }
</style>
