import axios from 'axios';
import Cookies from 'js-cookie';

export default {
  state: {
    jwt: null,
  },
  mutations: {
    SET_JWT(state, cookie) {
      state.jwt = cookie;
    },
  },
  actions: {
    authenticateAction(context) {
      context.commit('SET_JWT', Cookies.get('jwt'));
      axios.defaults.baseURL = '/api';
      /* eslint-disable dot-notation */
      axios.defaults.headers.common['Authorization'] = `Bearer ${context.state.jwt}`;
      /* eslint-enable dot-notation */
    },
  },
};
