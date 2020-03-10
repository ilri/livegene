import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '../components/HomePage';
import AwardedBudget from '../components/AwardedBudget';
import StaffRoles from '../components/StaffRoles';
import ProjectTimelines from '../components/ProjectTimelines';
import Worldmap from '../components/WorldMap';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', name: 'dashboard', component: HomePage },
    { path: '/awardedbudget', name: 'awarded_budget', component: AwardedBudget },
    { path: '/staffroles', name: 'staff_roles', component: StaffRoles },
    { path: '/timelines', name: 'timelines', component: ProjectTimelines },
    { path: '/worldmap', name: 'worldmap', component: Worldmap },
    { path: '*', redirect: '/' },
  ],
});

export default router;
