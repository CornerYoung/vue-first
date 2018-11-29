import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        city : '杭州'
    },
    actions : {
        changeCity (ctx,city) {
            console.log(city)
        }
    }
})