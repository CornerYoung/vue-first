import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/GoodsList'
import Title from '@/views-practice/Title'
import Image from '@/views-practice/Image'
import Cart from '@/views/Cart'

Vue.use(Router)
//Vue Router 就是对原生 History 的封装
export default new Router({
  mode:'history', //或者设置参数为 hash ，注意#的使用
  routes: [
    {//动态路由，必须符合我的规则，必须是以goods开头的，而且后面必须紧跟一个动态的变量
      path: '/goods',  
      name: 'GoodsList',
      component: GoodsList,
      //嵌套路由 子路由
      children:[
        {
          path:'title',
          name:'title',
          component:Title
        },
        {
          path:'img',
          name:'img',
          component:Image
        }
      ]
    },
    {
      path: '/cart',
      component:Cart
    }
  ]
})
