import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '../components/HomePage';
import LoginPage from '../components/LoginPage';
import ProjectsTimeline from '../components/ProjectsTimeline';
import dataStore from '../store';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', name: 'dashboard', component: ProjectsTimeline },
    { path: '/login', name: 'login', component: LoginPage },
    { path: '*', redirect: '/' }
  ]
});

export default router;

router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = dataStore.state.auth.authenticated;

  if (authRequired && !loggedIn) {
    return next({ 
      path: '/login', 
      query: { returnUrl: to.path } 
    });
  }

  next();
});
