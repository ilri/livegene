import { ascending } from 'd3';
import { group } from 'd3-array';

const d3 = {
  ascending,
  group,
};

export default {
  state: {
    projects: [],
    projectsGroupedByTeam: new Map(),
  },
  mutations: {
    SET_PROJECTS(state, projects) {
      state.projects.push(...projects);
    },
    SORT_AND_GROUP_PROJECTS(state) {
      state.projects.sort((a, b) => d3.ascending(a.startDate, b.startDate));
      state.projectsGroupedByTeam = d3.group(state.projects, (d) => d.team);
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
            'SET_PROJECTS',
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
      context.commit('SORT_AND_GROUP_PROJECTS');
    },
  },
};
