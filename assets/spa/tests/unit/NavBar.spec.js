import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import BootstrapVue, { BNavbarNav, BNavItem } from 'bootstrap-vue';
import NavBar from '../../components/NavBar';

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(VueRouter);
const router = new VueRouter();

describe('NavBar.vue', () => {
  test('no router links should be present if there are no routes', async () => {
    const wrapper = shallowMount(NavBar, {
      localVue,
      router,
    });
    await wrapper.setData({ routes: [] });
    const navbarNav = wrapper.find(BNavbarNav);
    expect(navbarNav.find(BNavItem).exists()).toBe(false);
  });

  test('a router link should be present if there is a route', async () => {
    const routes = [
      {
        name: 'route',
        label: 'route',
      },
    ];
    const wrapper = shallowMount(NavBar, {
      localVue,
      router,
    });
    await wrapper.setData({ routes });
    const navbarNav = wrapper.find(BNavbarNav);
    expect(navbarNav.find(BNavItem).exists()).toBe(true);
  });

  test('a router link should be present for each route', async () => {
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
    const wrapper = shallowMount(NavBar, {
      localVue,
      router,
    });
    await wrapper.setData({ routes });
    const navbarNav = wrapper.find(BNavbarNav);
    expect(navbarNav.findAll(BNavItem).length).toEqual(2);
  });
});
