import { createLocalVue, shallowMount } from '@vue/test-utils';
import BootstrapVue, { BNavItem } from 'bootstrap-vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import StaffRoles from '../../views/StaffRoles';
import { state } from './config/mock-store';

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(Vuex);
localVue.use(VueRouter);

describe('StaffRoles.vue', () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      state,
    });
  });
  test('renders a BNavItem for every specified route', () => {
    const routes = [
      {
        name: 'route_1',
        label: 'Route 1',
      },
    ];
    const wrapper = shallowMount(StaffRoles, {
      localVue,
      store,
      data() {
        return {
          routes,
        };
      },
    });
    const bNavItems = wrapper.findAll(BNavItem);
    expect(bNavItems.length).toEqual(1);
    bNavItems.wrappers.forEach((item, i) => {
      expect(item.text()).toBe(routes[i].label);
    });
  });

  test('does not render a BNavItem if no route is specified', () => {
    const routes = [];
    const wrapper = shallowMount(StaffRoles, {
      localVue,
      store,
      data() {
        return {
          routes,
        };
      },
    });
    const bNavItems = wrapper.findAll(BNavItem);
    expect(bNavItems.length).toEqual(0);
  });
});
