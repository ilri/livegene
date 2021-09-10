import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
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
  test('renders a RouterLink navigating to the default StaffDiagram view', () => {
    const wrapper = shallowMount(StaffRoles, {
      localVue,
      store,
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    expect(wrapper.find(RouterLinkStub).props().to).toEqual({ name: 'diagram' });
  });
});
