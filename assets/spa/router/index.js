import Vue from 'vue';
import VueRouter from 'vue-router';
 
import HomePage from '../components/HomePage';
import ProjectTimelines from '../components/ProjectTimelines';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', name: 'dashboard', component: HomePage,
     children: [
       { path: 'timelines', name: 'timelines', component: ProjectTimelines }
     ]
    },
    { path: '*', redirect: '/' }
  ]
});

export default router;