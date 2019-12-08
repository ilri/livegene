import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '../components/HomePage';
import ProjectTimelines from '../components/ProjectTimelines';
import StaffRoles from "../components/StaffRoles";
import Treemap from "../components/Treemap";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {path: '/', name: 'dashboard', component: HomePage},
    {path: '/staffroles', name: 'staffroles', component: StaffRoles},
    {path: '/timelines', name: 'timelines', component: ProjectTimelines},
    {path: '/treemap', name: 'treemap', component: Treemap },
    {path: '*', redirect: '/'}
  ]
});

export default router;
