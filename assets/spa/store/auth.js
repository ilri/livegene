import Axios from 'axios';

export default {
  state: {
    authenticated: false,
    credentials: {
      username: '',
      password: ''
    }
  },
  getters: {
    authenticatedAxios(state) {
      return Axios.create({
        method: 'get',
        auth: {
          username: state.credentials.username,
          password: state.credentials.password
        },
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Accept': 'application/ld+json'
        }
      });
    }
  },
  mutations: {
    setAuthenticated(state, credentials) {
      state.authenticated = true;
      state.credentials = credentials;
    },
    clearAuthentication(state) {
      state.authenticated = false;
      state.credentials = {
        username: '',
        password: ''
      };
    }
  },
  actions: {
    async authenticate(context, credentials) {
      try {
        let response = await Axios({
          url: '/api',
          method: 'get',
          auth: {
            username: credentials.username,
            password: credentials.password
          },
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          }
        });

        if (response.status == 200) {
          context.commit('setAuthenticated', credentials);
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
