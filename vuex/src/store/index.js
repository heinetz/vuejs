import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    flavor: "",
    profile: {
      surname: "Martin",
      lastname: "Hein",
      age: 54,
    },
  },
  mutations: {
    change(state, flavor) {
      state.flavor = flavor;
    },
    changeAge(state, age) {
      state.profile.age = age;
    },
  },
  getters: {
    flavor: (state) => state.flavor,
    age: (state) => state.profile.age,
    profile: (state) => state.profile,
  },
  actions: {},
  modules: {},
});
