import Vue from 'vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
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
Vue.use(BootstrapVueIcons);

const loading = Vue.observable(NProgress);

Object.defineProperty(Vue.prototype, '$loadingStatus', {
  get() {
    return loading.status;
  },
  set(val) {
    loading.status = val;
  },
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
