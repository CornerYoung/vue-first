import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
//import HelloWorld from '../components/HelloWorld.vue'
//import GoodsList from './../views/GoodsList'
Vue.use(Router);
export default new Router({
  mode:'history', //或者设置参数为 hash ，注意#的使用
  routes: [
    {//动态路由，必须符合我的规则，必须是以goods开头的，而且后面必须紧跟一个动态的变量
      path: '/',  
      name: 'Home',
      component: Home
    }
  ]
})
