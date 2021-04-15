import Api from "../../common/Api/Api";
import { setMessage } from "../../common/Utils/Message";

const state = {
  items: [],
  loading: { getItems: false },
  success: { getItems: undefined },
  allPokemons: true,
  favoritePokemons: false,
};

const getters = {
  items: (state) => {
    return state.items;
  },
  loading: (state) => {
    return state.loading;
  },
  success: (state) => {
    return state.success;
  },
  allPokemons: (state) => {
    return state.allPokemons;
  },
  favoritePokemons: (state) => {
    return state.favoritePokemons;
  },
};

const actions = {
  getPokemons({ commit }) {
    try {
      commit("loading", true);
      Api.get("pokemon", async (functions) => {
        const response = await functions;
        commit("getPokemonsResponse", { response });
        commit("loading", false);
      });
    } catch (error) {
      commit("loading", true);
      setMessage("Error", "Ha sucedido un error en la transacción", "error");
    }
  },
  searchAllPokemons({ commit }) {
    commit("searchAllPokemons");
  },
  searchFavoritePokemons({ commit }) {
    commit("searchFavoritePokemons");
  },
  addFavorite({ commit }, payload) {
    commit("addFavorite", payload);
  },
};

const mutations = {
  searchFavoritePokemons(state) {
    state.favoritePokemons = !state.favoritePokemons;
    state.allPokemons = !state.allPokemons;
  },
  searchAllPokemons(state) {
    state.allPokemons = !state.allPokemons;
    state.favoritePokemons = !state.favoritePokemons;
  },
  addFavorite(state, payload) {
    state.items.find(function (item) {
      if (item.name === payload) {
        item.favorite = !item.favorite;
      }
    });
  },
  loading(state, data) {
    state.loading.getItems = data;
    state.success.getItems = !data;
  },
  getPokemonsResponse(state, data) {
    data.response.data.results.forEach((pokemon) => {
      state.items.push({
        name: pokemon.name,
        favorite: false,
      });
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
