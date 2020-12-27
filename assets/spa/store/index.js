import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import { ascending } from 'd3';
import { group } from 'd3-array';

import AuthModule from './modules/auth';

const d3 = {
  ascending,
  group,
};

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: { auth: AuthModule },
  state: {
    projects: [],
    projectsGroupedByTeam: new Map(),
    loaded: false,
    worldCountries: {},
    error: false,
    errorStatusText: '',
  },
  mutations: {
    setUrl(state, url) {
      state.url = url;
    },
    setProjects(state, projects) {
      state.projects.push(...projects);
    },
    sortAndGroupProjects(state) {
      state.projects.sort((a, b) => d3.ascending(a.startDate, b.startDate));
      state.projectsGroupedByTeam = d3.group(state.projects, (d) => d.team);
    },
    setLoaded(state) {
      state.loaded = true;
    },
    setWorldCountries(state, data) {
      state.worldCountries = data;
    },
    setError(state, statusText) {
      state.error = true;
      state.errorStatusText = statusText;
    },
  },
  actions: {
    async getProjectsAction(context) {
      let url = '/api/projects';

      try {
        while (url) {
          /* eslint-disable no-await-in-loop */
          const response = await context.rootGetters.authenticatedAxios.get(
            url,
            {
              params: {
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
                  'partnerships',
                  'staffRoles',
                  'countryRoles',
                  'isActive',
                  'isActiveThisYear',
                ],
              },
            },
          );
          /* eslint-enable no-await-in-loop */
          context.commit(
            'setProjects',
            response.data['hydra:member'],
          );
          if (response.data['hydra:view']) {
            url = response.data['hydra:view']['hydra:next'];
          } else {
            url = null;
          }
        }
      } catch (error) {
        context.commit('setError', error.response.statusText);
        console.error(error);
        return;
      }

      context.commit('setLoaded');
      context.commit('sortAndGroupProjects');
    },
    async getWorldCountriesAction(context) {
      const topojsonFile = '/static/world-countries.json';
      const response = await Axios.get(topojsonFile);
      context.commit('setWorldCountries', response.data);
    },
  },
});
