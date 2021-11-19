import { ascending } from 'd3';
import { group } from 'd3-array';
import NProgress from 'nprogress';
import ProjectService from '../../services/ProjectService';

const d3 = {
  ascending,
  group,
};

export default {
  namespaced: true,
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
      NProgress.start();
      ProjectService.getProjects()
        .then((response) => {
          console.log(response);
          context.commit('SET_PROJECTS', response.data['hydra:member']);
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
          console.log(error);
        })
        .finally(() => {
          NProgress.done();
        })
      ;
    },
  },
};
