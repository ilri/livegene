import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);

import "bootstrap/dist/css/bootstrap.min.css";

import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
