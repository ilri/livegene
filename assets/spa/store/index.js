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
      state.projects.push(...projects);
    }
  },
  actions: {
    async getProjectsAction(context) {
      let url = '/api/projects';
      while (url) {
        let response = await context.rootGetters.authenticatedAxios.get(url);
        context.commit(
          'setProjects',
          response.data['hydra:member']
        );
        if (response.data['hydra:view']) {
            url = response.data['hydra:view']['hydra:next'];
        } else {
          url = null;
        }
      }
    }
  }
});