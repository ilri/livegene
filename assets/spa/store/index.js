import Vue from 'vue';
import Vuex from 'vuex';

import AuthModule from './modules/auth';
import ProjectModule from './modules/project';
import GeoModule from './modules/geography';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    auth: AuthModule,
    project: ProjectModule,
    geography: GeoModule,
  },
  state: {
    loaded: false,
    error: false,
    errorStatusText: '',
  },
  mutations: {
    setLoaded(state) {
      state.loaded = true;
    },
    setError(state, statusText) {
      state.error = true;
      state.errorStatusText = statusText;
    },
  },
});
