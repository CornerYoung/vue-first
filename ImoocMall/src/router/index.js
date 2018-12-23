import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import City from '@/views/city/City'
import Detail from '@/views/detail/Detail'
//import HelloWorld from '../components/HelloWorld.vue'
//import GoodsList from './../views/GoodsList'
Vue.use(Router);
export default new Router({
  mode:'history', //或者设置参数为 hash ，注意#的使用
  routes: [
    {//主页路由
      path: '/',  
      name: 'Home',
      component: Home
    },
    {//城市路由
      path: '/city',
      name: 'City',
      component: City
    },
    {//热销详情,动态路由，前面的路径必须是detail/
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  // 每次做路由页面切换时，页面始终在最顶部
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
