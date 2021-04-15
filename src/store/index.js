import Vue from "vue";
import Vuex from "vuex";
import Pokemons from "@/store/modules/Pokemons";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    Pokemons,
  },
});
