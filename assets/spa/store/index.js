import Vue from 'vue';
import Vuex from 'vuex';

import AuthModule from './modules/auth';
import ProjectModule from './modules/project';
import ErrorModule from './modules/error';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    auth: AuthModule,
    project: ProjectModule,
    error: ErrorModule,
  },
  state: {
    loaded: false,
  },
  mutations: {
    setLoaded(state) {
      state.loaded = true;
    },
  },
});
