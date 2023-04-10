import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state = {
  isFrist: true,
  isLoading: false,
  errMsg: "",
  users: [],
};
const mutations = {
  REQUESTING(state) {
    state.isFrist = false;
    state.isLoading = true;
  },
  REQUESTSUCCESS(state, users) {
    state.isLoading = false;
    state.users = users;
  },
  REQUESTFAILED(state, error) {
    state.isLoading = false;
    state.errMsg = error.message;
  },
};
const actions = {
  async searchajax({ commit }, q) {
    try {
      commit("REQUESTING");
      const response = await axios({
        url: "https://api.github.com/search/users",
        method: "GET",
        params: {
          q: q,
        },
      });
      let users = response.data.items.map((item) => ({
        username: item.login,
        useravatar: item.avatar_url,
        userurl: item.url,
      }));
      commit("REQUESTSUCCESS", users);
    } catch (error) {
      commit("REQUESTFAILED", error);
    }
  },
};
const getters = {};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
