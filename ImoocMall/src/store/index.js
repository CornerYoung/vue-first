import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    // state : {
    //     // city: localStorage.city || '杭州' 默认显示城市‘杭州’
    //     city: defaultCity
    // },
    // actions : {
    //     changeCity (ctx,city) {
    //         ctx.commit('changeCity',city)
    //     }
    // },
    state : state,
    mutations: mutations
})