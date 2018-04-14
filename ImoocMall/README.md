# imoocmall

> Imooc Mall

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


``` bash
一.路由基础介绍：
====
1.什么是前端路由？<br>
----
    >路由是根据不同的 url 地址展示不同的内容或页面
    >前端路由就是把不同路由对应不同的内容或页面的任务交给前端来做，之前是通过服务器端根据 url 的不同返回不同的页面实现<br>

## 2.什么时候使用前端路由？<br>
    >在单页面应用，大部分页面结构不变，只改变部分内容时使用<br>

## 3.前端路由有什么优点和缺点？<br>
    >优点：<br>
        >>用户体验好，不需要每次都从服务器全部获取，快速展示给用户<br>
    >缺点：<br>
        >>不利于SEO<br>
        >>使用浏览器的前进，后退键的时候会重新发送请求，没有合理地利用缓存<br>
        >>单页面无法记住之前滚动的位置，无法在前进，后退的时候记住滚动的位置<br>

4.vue路由
----
>* vue-router用来构建SPA<br>
>* <router-link></router-link>或者this.$router.push{{path:''}}<br>
>* <router-view></router-view><br>
>* 动态路由匹配<br>
>* 嵌套路由<br>
>* 编程式路由<br>
>* 命名路由和命名视图<br>
```