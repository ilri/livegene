import { createLocalVue, shallowMount } from '@vue/test-utils';
import BootstrapVue, { BNavItem } from 'bootstrap-vue';
import VueRouter from 'vue-router';
import StaffRoles from '../../../views/StaffRoles';

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(VueRouter);
const router = new VueRouter();

describe('StaffRoles.vue', () => {
  test('no router links should be present if there are no routes', async () => {
    const wrapper = shallowMount(StaffRoles, {
      localVue,
      router,
    });
    await wrapper.setData({ routes: [] });
    const bNavItems = wrapper.findAll(BNavItem);
    expect(bNavItems.length).toEqual(0);
  });

  test('a router link should be present for every specified route', async () => {
    const routes = [
      {
        name: 'route',
        label: 'route',
      },
      {
        name: 'another-route',
        label: 'another route',
      },
    ];
    const wrapper = shallowMount(StaffRoles, {
      localVue,
      router,
    });
    await wrapper.setData({ routes });
    const bNavItems = wrapper.findAll(BNavItem);
    expect(bNavItems.length).toEqual(routes.length);
    bNavItems.wrappers.forEach((item, i) => {
      expect(item.text()).toBe(routes[i].label);
    });
  });
});
