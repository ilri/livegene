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
    setProjects(currentState, projects) {
      currenState.projects = projects;
    }
  },
  actions: {
    async getProjectsAction(context) {
      // context.commit('setProjects',
      // (await context.rootGetters.authenticatedAxios.get('/api/projects')).data);
    }
  }
});
