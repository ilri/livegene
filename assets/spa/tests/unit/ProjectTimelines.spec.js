import { shallowMount, createLocalVue } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import Vuex from 'vuex';
import ProjectTimelines from '../../views/ProjectTimelines';

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(Vuex);

describe('ProjectTimelines.vue', () => {
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
    const wrapper = shallowMount(ProjectTimelines, {
      localVue,
      store,
    });
    expect(wrapper.text()).toContain('Project Timelines');
  });
});
