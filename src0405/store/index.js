//配置VUEX相关的东西
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

const state = {
    count: 0
}

const mutations = {
    add(state) {
        state.count += 1
    },
    jian(state) {
        state.count--
    }

}
const actions = {}
const getters = {}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
})