import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


import particles from './particles'

const store = new Vuex.Store({
    modules:{
        particles
    }
})

export default store