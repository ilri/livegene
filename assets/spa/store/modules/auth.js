import axios from 'axios';
import Cookies from 'js-cookie';

export default {
  state: {
    authenticated: false,
    jwt: null,
  },
  getters: {
    authenticatedAxios(state) {
      return axios.create({
        method: 'get',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          Accept: 'application/ld+json',
          Authorization: `Bearer ${state.jwt}`,
        },
      });
    },
  },
  mutations: {
    SET_JWT(state, cookie) {
      state.jwt = cookie;
    },
    setAuthenticated(state) {
      state.authenticated = true;
    },
  },
  actions: {
    getJWTAction(context) {
      context.commit(
        'setJWT',
        Cookies.get('jwt'),
      );
    },
    authenticateAction(context) {
      context.commit('SET_JWT', Cookies.get('jwt'));
      // axios.defaults.baseURL = '/api';
      /* eslint-disable dot-notation */
      axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
      axios.defaults.headers.get['Accept'] = 'application/ld+json';
      axios.defaults.headers.common['Authorization'] = `Bearer ${context.state.jwt}`;
      /* eslint-enable dot-notation */
    },
    async authenticate(context, state) {
      try {
        const response = await axios({
          url: '/api',
          method: 'post',
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: `Bearer ${state.jwt}`,
          },
        });

        if (response.status === 200) {
          context.commit('setAuthenticated');
        }
      } catch (err) {
        if (err.response.status === 401) {
          console.log(err);
          throw new Error('No JSON Web Token found.');
        } else {
          throw new Error('Login failed. Please try later or contact the administrator.');
        }
      }
    },
  },
};
