import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: []
  },
  mutations: {
    populateProjects(currentState, project) {
      currenState.projects.push(project);
    }
  },
  actions: {
    async getProjectsAction(context) {
      (await Axios.get('/api/projects/')).data.forEach(p => context.commit('populateProjects', p));
    }
  }
});
