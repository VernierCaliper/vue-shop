import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import about from '@/components/about'
import news from '@/components/news'
import foods from '@/components/foods'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/news',
      name: 'news',
      component: news
    },{
      path: '/foods',
      name: 'foods',
      component: foods
    },{
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
