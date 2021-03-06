// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'css/reset.css'
import 'css/iconfont.css'
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)

Vue.use(VueLazyLoad,{
  loading:'../static/loading-svg/loading-bars.svg'
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


//也可以通过挂载 el
// new Vue({
//   router,
//   components: { App },
//   template: '<App/>'
// }).$mount('#app');
