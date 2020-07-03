// src/store.js (Vue CLI 1.x & 2.x) oder src/store/index.js (Vue CLI 3.x oder neuer)

import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const getDefaultState = () => {
  return {
    token: "",
    user: {},
  };
};

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: getDefaultState(),
  getters: {
    isLoggedIn: (state) => {
      console.log("store/index.js:isLoggedIn()", state);
      return state.token;
    },
    getUser: (state) => {
      console.log("store/index.js:getUser()", state);
      return state.user;
    },
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      console.log("store/index.js:SET_TOKEN()", state, token);
      state.token = token;
    },
    SET_USER: (state, user) => {
      console.log("store/index.js:SET_USER()", state, user);
      state.user = user;
    },
    RESET: (state) => {
      console.log("store/index.js:RESET()", state);
      Object.assign(state, getDefaultState());
    },
  },
  actions: {
    login: ({ commit }, { token, user }) => {
      console.log("store/index.js:login()", token, user);
      commit("SET_TOKEN", token);
      commit("SET_USER", user);

      // set auth header
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    },
    logout: ({ commit }) => {
      commit("RESET", "");
    },
  },
});
