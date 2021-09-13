import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import BootstrapVue, { BNavItem } from 'bootstrap-vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import StaffRoles from '../../views/StaffRoles';

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(Vuex);
localVue.use(VueRouter);

describe('StaffRoles.vue', () => {
  let store;
  const state = {
    project: {
      projects: [],
      projectsGroupedByTeam: new Map(),
    },
  };
  beforeEach(() => {
    store = new Vuex.Store({
      state,
    });
  });
  test('the header is rendered', () => {
    const wrapper = shallowMount(StaffRoles, {
      localVue,
      store,
    });
    expect(wrapper.text()).toContain('Staff Roles');
  });
  test('renders a b-nav-item element for every specified route', () => {
    const wrapper = shallowMount(StaffRoles, {
      localVue,
      store,
    });
    const bNavItems = wrapper.findAll(BNavItem);
    expect(bNavItems.length).toEqual(2);
  });
  test('renders a RouterLink for every specified route', () => {
    const wrapper = shallowMount(StaffRoles, {
      localVue,
      store,
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    const routerLinks = wrapper.findAll(RouterLinkStub);
    expect(routerLinks.length).toEqual(2);
    expect(routerLinks.at(0).props().to).toEqual({ name: 'diagram' });
    expect(routerLinks.at(0).text()).toEqual('Diagram');
    expect(routerLinks.at(1).props().to).toEqual({ name: 'heatmap' });
    expect(routerLinks.at(1).text()).toEqual('Heatmap');
  });
});
