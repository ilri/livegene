import { createLocalVue, shallowMount } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import Vuex from 'vuex';
import WorldMap from '../../views/WorldMap';
import { state } from './config/mock-store';

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(Vuex);

describe('WorldMap.vue', () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      state,
    });
  });

  test('a ListItem element is rendered for every team', () => {
    const wrapper = shallowMount(WorldMap, {
      localVue,
      store,
    });
    const listItems = wrapper.findAll('li.team');
    expect(listItems).toHaveLength(store.state.project.projectsGroupedByTeam.size);
  });

  test('a ListItem element is rendered for every project', () => {
    const wrapper = shallowMount(WorldMap, {
      localVue,
      store,
    });
    const listItems = wrapper.findAll('li.project');
    expect(listItems).toHaveLength(store.state.project.projects.length);
  });

  test('calls selectTeam() method when user selects (clicks on) a team', () => {
    const selectTeam = jest.fn();
    const wrapper = shallowMount(WorldMap, {
      localVue,
      store,
      methods: {
        selectTeam,
      },
    });
    const teamLinks = wrapper.findAll('li.team > span');
    teamLinks.wrappers.forEach((teamLink) => {
      teamLink.trigger('click');
      expect(selectTeam).toHaveBeenCalled();
    });
  });

  test('calls selectProject() when user selects (clicks on) a project', () => {
    const selectProject = jest.fn();
    const wrapper = shallowMount(WorldMap, {
      localVue,
      store,
      methods: {
        selectProject,
      },
    });
    const projectLinks = wrapper.findAll('li.project');
    projectLinks.wrappers.forEach((projectLink) => {
      projectLink.trigger('click');
      expect(selectProject).toHaveBeenCalled();
    });
  });
});
