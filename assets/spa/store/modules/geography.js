import Axios from 'axios';

export default {
  state: {
    worldCountries: {},
  },
  mutations: {
    SET_WORLD_COUNTRIES(state, data) {
      state.worldCountries = data;
    },
  },
  actions: {
    async getWorldCountriesAction(context) {
      const topojsonFile = '/static/world-countries.json';
      const response = await Axios.get(topojsonFile);
      context.commit('SET_WORLD_COUNTRIES', response.data);
    },
  },
};
