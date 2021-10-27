import { ascending } from 'd3';
import { group } from 'd3-array';
import NProgress from 'nprogress';
import ProjectService from '../../services/ProjectService';

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
    getProjectsAction(context) {
      const url = '/api/projects';
      const config = {
        headers: {
          Accept: 'application/ld+json',
        },
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
      };

      NProgress.start();
      ProjectService.getProjects(url, config)
        .then((response) => {
          context.commit('SET_PROJECTS', response);
          context.commit('SORT_AND_GROUP_PROJECTS');
        })
        .catch((error) => {
          context.dispatch(
            'error/add',
            {
              ...error.response,
              message: 'There was an error fetching the projects',
            },
            { root: true },
          );
          console.error(error);
        })
        .finally(() => {
          NProgress.done();
        })
      ;
    },
  },
};
