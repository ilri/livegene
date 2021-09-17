import { createLocalVue, shallowMount } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import Vuex from 'vuex';
import AwardedBudget from '../../../views/AwardedBudget';

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(Vuex);

describe('AwardedBudget.vue', () => {
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

  test('The header is rendered.', () => {
    const wrapper = shallowMount(AwardedBudget, {
      localVue,
      store,
    });
    expect(wrapper.text()).toContain('Awarded Budget');
  });
});
