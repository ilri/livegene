import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '../components/HomePage';
import AwardedBudget from "../components/AwardedBudget";
import ProjectTimelines from '../components/ProjectTimelines';
import StaffRoles from "../components/StaffRoles";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {path: '/', name: 'dashboard', component: HomePage},
    {path: '/awardedbudget', name: 'awarded_budget', component: AwardedBudget },
    {path: '/staffroles', name: 'staff_roles', component: StaffRoles},
    {path: '/timelines', name: 'timelines', component: ProjectTimelines},
    {path: '*', redirect: '/'}
  ]
});

export default router;
