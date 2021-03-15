import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

import HomePage from '../views/HomePage';
import AwardedBudget from '../views/AwardedBudget';
import StaffRoles from '../views/StaffRoles';
import StaffRolesD from '../views/StaffRolesD';
import StaffMap from '../views/StaffMap';
import ProjectTimelines from '../views/ProjectTimelines';
import WorldMap from '../views/WorldMap';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: HomePage,
    },
    {
      path: '/awardedbudget',
      name: 'awarded_budget',
      component: AwardedBudget,
    },
    {
      path: '/staffroles',
      name: 'staff_roles',
      component: StaffRoles,
      children: [
        {
          path: 'diagram',
          name: 'diagram',
          component: StaffRolesD,
        },
        {
          path: 'heatmap',
          name: 'heatmap',
          component: StaffMap,
        },
        {
          path: '',
          redirect: 'diagram',
        },
      ],
    },
    {
      path: '/timelines',
      name: 'timelines',
      component: ProjectTimelines,
    },
    {
      path: '/worldmap',
      name: 'worldmap',
      component: WorldMap,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
