import { mount, createLocalVue } from '@vue/test-utils';
import BootstrapVue, { BButton } from 'bootstrap-vue';
import Vuex from 'vuex';
import ProjectTimelines from '../../views/ProjectTimelines';
import { state } from './config/mock-store';

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(Vuex);

describe('ProjectTimelines.vue', () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      state,
    });
  });
  test('calls resetChart() when user clicks on the reset button', () => {
    const resetChart = jest.fn();
    const wrapper = mount(ProjectTimelines, {
      localVue,
      store,
      methods: {
        resetChart,
      },
    });
    const resetButton = wrapper.find(BButton);
    resetButton.trigger('click');
    expect(resetChart).toHaveBeenCalled();
  });
  test('calls toggleActiveProjects() when user clicks on calendar icon', () => {
    const toggleActiveProjects = jest.fn();
    const wrapper = mount(ProjectTimelines, {
      localVue,
      store,
      methods: {
        toggleActiveProjects,
      },
    });
    const resetButton = wrapper.find('g.today > text');
    resetButton.trigger('click');
    expect(toggleActiveProjects).toHaveBeenCalled();
  });
});
