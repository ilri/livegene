import { shallowMount, createLocalVue } from '@vue/test-utils';
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

  test('the header is rendered', () => {
    const wrapper = shallowMount(WorldMap, {
      localVue,
      store,
    });
    expect(wrapper.text()).toContain('World map');
  });

  test('a ListItem element is rendered for every team', () => {
    const wrapper = shallowMount(WorldMap, {
      localVue,
      store,
    });
    const listItems = wrapper.findAll('li.team');
    expect(listItems).toHaveLength(store.state.project.projectsGroupedByTeam.size);
  });

  test('project ListItems are found within team ListItems', () => {
    const wrapper = shallowMount(WorldMap, {
      localVue,
      store,
    });
    const teamListItems = wrapper.findAll('li.team');
    const projectsGroupedByTeams = store.state.project.projectsGroupedByTeam;
    teamListItems.wrappers.forEach((itemWrapper, i) => {
      expect(itemWrapper.findAll('li.project').exists()).toBe(true);
      expect(itemWrapper.findAll('li.project')).toHaveLength(
        projectsGroupedByTeams.get(Array.from(projectsGroupedByTeams.keys())[i]).length,
      );
    });
  });

  test('calls selectTeam when team links are clicked', () => {
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

  test('calls selectProject when project links are clicked', () => {
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
