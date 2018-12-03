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
    mutations: mutations,

    //vuex中的getters类似于组件中计算属性，可以根据state计算一些数据，避免数据的冗余
    getters:{
        doubleCity () {
            return state.city + ' ' + state.city
        }
    }
})