import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import City from '@/views/city/City'
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
    {//城市路由
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
