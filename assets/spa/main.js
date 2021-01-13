import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import NProgress from 'nprogress';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'animate.css/animate.min.css';
import 'popmotion/dist/popmotion.global.min';
import 'font-awesome/css/font-awesome.min.css';
import 'nprogress/nprogress.css';

import App from './App';
import router from './router';
import store from './store';

Vue.use(BootstrapVue);

const loading = Vue.observable(NProgress);

Vue.config.productionTip = false;

store.dispatch('authenticateAction');
store.dispatch('getProjectsAction');

new Vue({
  data: {
    loading,
  },
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
