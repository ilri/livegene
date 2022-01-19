import NProgress from 'nprogress';
import OrganisationService from '../../services/OrganisationService';

export default {
  namespaced: true,
  state: {
    organisations: [],
  },
  mutations: {
    SET_ORGANISATIONS(state, organisations) {
      state.organisations.push(...organisations);
    },
  },
  actions: {
    getOrganisationsAction(context) {
      NProgress.start();
      OrganisationService.getOrganisations()
        .then((response) => {
          context.commit('SET_ORGANISATIONS', response.data['hydra:member']);
        })
        .catch((error) => {
          context.dispatch(
            'error/addAction',
            {
              ...error.response,
              message: 'There was an error fetching the organisations',
              module: 'projects',
            },
            { root: true },
          );
        })
        .finally(() => {
          NProgress.done();
        })
      ;
    },
  },
};
