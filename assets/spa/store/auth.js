import Axios from 'axios';

export default {
  state: {
    authenticated: false
  },
  getters: {
    authenticatedAxios(state) {
      return Axios.create({
      });
    }
  },
  mutations: {
    setAuthenticated(state) {
      state.authenticated = true;
    },
    clearAuthentication(state) {
      state.authenticated = false;
    }
  },
  actions: {
    async authenticate(context, credentials) {
      try {
        let response = await Axios({
          url: '/api',
          method: 'get',
          withCredentials: true,
          auth: {
            username: credentials.username,
            password: credentials.password
          },
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          }
        });

        if (response.status == 200) {
          context.commit('setAuthenticated');
        }
      } catch(err) {
        if (err.response.status == 401) {
          throw new Error('Wrong credentials.');
        } else {
          throw new Error('Login failed. Please try later or contact the administrator.');
        }
      }
    },
    logout(context) {
      context.commit('clearAuthentication');
    }
  }
};
