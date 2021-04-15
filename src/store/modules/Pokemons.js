import Api from "../../common/Api/Api";
import { setMessage } from "../../common/Utils/Message";

const state = {
  items: [],
  loading: { getItems: false },
  success: { getItems: undefined },
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
};

const actions = {
  getPokemons({ commit }) {
    try {
      commit("loading", true);
      Api.get("pokemon?limit=1118&offset=0", async (functions) => {
        const response = await functions;
        commit("getPokemonsResponse", { response });
        commit("loading", false);
      });
    } catch (error) {
      commit("loading", true);
      setMessage("Error", "Ha sucedido un error en la transacción", "error");
    }
  },
};

const mutations = {
  loading(state, data) {
    state.loading.getItems = data;
    state.success.getItems = !data;
  },
  getPokemonsResponse(state, data) {
    console.log(data.response);
    state.items = data.response.data.results;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
