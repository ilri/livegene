import { shallowMount, createLocalVue } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import Vuex from 'vuex';
import StaffRoles from '../../views/StaffRoles';

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(Vuex);

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
});
