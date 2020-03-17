import Axios from 'axios';
import Cookies from 'js-cookie';

export default {
  state: {
    authenticated: false,
    jwt: null,
  },
  getters: {
    authenticatedAxios(state) {
      return Axios.create({
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
    setJWT(state, cookie) {
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
    async authenticate(context, state) {
      try {
        const response = await Axios({
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
