import Vue from 'vue';
import Vuex from 'vuex';

import AuthModule from './auth';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: { auth: AuthModule },
  state: {
    projects: []
  },
  mutations: {
    setProjects(state, projects) {
      state.projects = projects;
    }
  },
  actions: {
    async getProjectsAction(context) {
      let response = await context.rootGetters.authenticatedAxios.get('/api/projects');
      context.commit(
        'setProjects',
        response.data['hydra:member']
      );
    }
  }
});
