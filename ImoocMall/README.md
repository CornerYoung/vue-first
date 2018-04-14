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



一.路由基础介绍：
====
1.什么是前端路由？
    路由是根据不同的 url 地址展示不同的内容或页面
    前端路由就是把不同路由对应不同的内容或页面的任务交给前端来做，之前是通过服务器端根据 url 的不同返回不同的页面实现

2.什么时候使用前端路由？
    在单页面应用，大部分页面结构不变，只改变部分内容时使用

3.前端路由有什么优点和缺点？
    优点：
        用户体验好，不需要每次都从服务器全部获取，快速展示给用户
    缺点：
        不利于SEO
        使用浏览器的前进，后退键的时候会重新发送请求，没有合理地利用缓存