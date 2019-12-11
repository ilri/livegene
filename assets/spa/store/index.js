import Vue from 'vue';
import Vuex from 'vuex';
import { ascending } from 'd3';
import { group } from 'd3-array';

const d3 = Object.assign({}, {
  ascending,
  group
});

import AuthModule from './auth';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: { auth: AuthModule },
  state: {
    projects: [],
    projectsGroupedByTeam: new Map(),
    loaded: false
  },
  mutations: {
    setProjects(state, projects) {
      state.projects.push(...projects);
    },
    sortAndGroupProjects(state) {
      state.projects.sort((a, b) => d3.ascending(a.startDate, b.startDate));
      state.projectsGroupedByTeam = d3.group(state.projects, d => d.team);
    },
    setLoaded(state) {
      state.loaded = true;
    }
  },
  actions: {
    async getProjectsAction(context) {
      let url = '/api/projects';
      while (url) {
        let response = await context.rootGetters.authenticatedAxios.get(
          url,
          { params: {
            properties: [
              'id',
              'ilriCode',
              'fullName',
              'shortName',
              'team',
              'principalInvestigator',
              'startDate',
              'endDate',
              'donor',
              'totalProjectValue',
              'staffRoles',
              'isActive',
              'isActiveThisYear'
            ]
          }}
        );
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
      context.commit('setLoaded');
      context.commit('sortAndGroupProjects');
    }
  }
});
