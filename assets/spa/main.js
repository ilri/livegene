import Vue from 'vue';
import App from './App';

import "bootstrap/dist/css/bootstrap.min.css";

import router from './router';

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
