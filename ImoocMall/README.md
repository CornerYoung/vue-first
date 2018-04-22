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
1.什么是前端路由？<br>
----
``` bash
    路由是根据不同的 url 地址展示不同的内容或页面
    前端路由就是把不同路由对应不同的内容或页面的任务交给前端来做，之前是通过服务器端根据 url 的不同返回不同的页面实现
```
## 2.什么时候使用前端路由？<br>
```
    在单页面应用，大部分页面结构不变，只改变部分内容时使用
```
## 3.前端路由有什么优点和缺点？<br>
```
    优点：
        用户体验好，不需要每次都从服务器全部获取，快速展示给用户
    缺点：
        不利于 SEO
        使用浏览器的前进，后退键的时候会重新发送请求，没有合理地利用缓存
        单页面无法记住之前滚动的位置，无法在前进，后退的时候记住滚动的位置
```
4.vue路由
----
```
    vue-router 用来构建 SPA
    <router-link></router-link> 或者 this.$router.push{{path:''}}
    <router-view></router-view>
    动态路由匹配
    嵌套路由
    编程式路由
    命名路由和命名视图
```
# 二. AMD 、 CMD 、 CommonJs 和 ES6 对比
这些都是模块化开发里面的方案和标准。
## 1.AMD 是 RequireJS 在推广过程中对模块定义的规范化产出
```
AMD 全称是异步模块定义（ Asynchronous Module Definition ），也就是说它是一个概念，RequireJS 是对这个概念的实现，就好比 JavaScript 语言是对 ECMAScript 的实现。ECMAScript 是个组织，JavaScript 是在这个组织的标准之下来制定的一套脚本语言。

define([],function(lib){

    function foo(){

        lib.log('hello world!');

    };

    return {

        foo: foo

    };
});

通过 define 来定义，定义之后，第一个参数可以填依赖的文件，比如 lib ，通过一个回调函数接收 lib 参数，可以得到 lib 里面的一些方法，最后通过 return 来输出。这是 RequireJS 一种标准的定义，在定义的过程中可以依赖别的模块，所以说 RequireJS 称之为依赖前置，依赖前置就是它的特点。在定义的同时如果需要用到其他的模块了，可以把别的文件的模块全部都通过数组的形式在最上边进行加入，进行引用。
引用的话直接通过 require 进行加载。
```
## 2.CMD 是 SeaJS 在推广过程中对模块定义的规范化产出
```
CMD 是同步模块的定义 （ Common Module Definition ）。

//所有模块都通过 define 来定义
define(function( require, exports, module ){

    //通过 require 引入依赖

    var $ = require('jquery');

    var Spinning = require('./spinning');

});
CMD 是依赖就近，也就是说在什么地方使用，就在什么地方引用。就是一个同步的概念，即用即返。
SeaJS 在目前项目开发中不如 RequireJS 使用率高，但也有大量开发团队使用，这是淘宝团队开发的。
目前 RequireJS 也可以实现同步的概念，也可以在里面使用 require 进行加载，返回一些方法。
```
## 3.CommonJs 规范 - module.exports
```
CommonJs 是通过 module.exports 来定义的，它在前端浏览器里并不支持，也就是说我们的浏览器并不支持 module.exports 这样的一个东西，ES6 里面也没有这样的一个概念。那为什么会有这样的一个规范呢？它是在我们的 Node.js 后端去使用的，也就是说我们的 Node 端是推荐使用 CommonJs 规范的，我们的前端浏览器是不支持 CommonJs 规范的。

exports.area = function(r){
    return Math.PI * r * r;
};

exports.circumference = function(r){
    return 2 * Math.PI * r;
};

通过 exports.area 来导出一个求圆的面积的方法，再通过 exports.circumference 来导出一个求圆的周长的方法。
也可以使用 module.exports 来输出（不带名字的，匿名输出），如果需要加上名字的，那么就使用 exports. 来输出。我们可以通过require和import 来导入。
在服务端往往使用CommonJs 来定义模块化开发，在前端往往使用 AMD、CMD、ES6的import来定义模块化开发。
```
## 4.ES6 特性 export/import（导出/导入）
```
export default{

    props:['num'],
    data(){
        return{

        }
    },
    methods:{
        increment(){
            this.$emit('incre');
            import('./../util');
        },
        decrement(){
            this.$emit('decre');
        }
    }

};

通过 export default 输出以后，import 才能导入这个文件，只有导出才能导入，这一定是要成对出现。
```

