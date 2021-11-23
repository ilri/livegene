import { createLocalVue, shallowMount } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import Vuex from 'vuex';
import WorldMap from '../../../views/WorldMap';
import ErrorModule from '../../../store/modules/error';

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(Vuex);

describe('WorldMap.vue', () => {
  let state;
  let store;

  state = {
    projects: [
      {
        id: 1,
        fullName: 'Project_1',
        startDate: '2021-01-01T00:00:00+00:00',
        endDate: '2022-01-01T00:00:00+00:00',
        team: 'Team_1',
      },
      {
        id: 2,
        fullName: 'Project_2',
        startDate: '2021-01-01T00:00:00+00:00',
        endDate: '2022-01-01T00:00:00+00:00',
        team: 'Team_1',
      },
      {
        id: 3,
        fullName: 'Project_3',
        startDate: '2021-01-01T00:00:00+00:00',
        endDate: '2022-01-01T00:00:00+00:00',
        team: 'Team_2',
      },
      {
        id: 4,
        fullName: 'Project_4',
        startDate: '2021-01-01T00:00:00+00:00',
        endDate: '2022-01-01T00:00:00+00:00',
        team: 'Team_2',
      },
      {
        id: 5,
        fullName: 'Project_5',
        startDate: '2021-01-01T00:00:00+00:00',
        endDate: '2022-01-01T00:00:00+00:00',
        team: 'Team_2',
      },
    ],
    projectsGroupedByTeam: new Map(
      [
        ['Team_1',
          [
            {
              id: 1,
              fullName: 'Project_1',
              startDate: '2021-01-01T00:00:00+00:00',
              endDate: '2022-01-01T00:00:00+00:00',
            },
            {
              id: 2,
              fullName: 'Project_2',
              startDate: '2021-01-01T00:00:00+00:00',
              endDate: '2022-01-01T00:00:00+00:00',
            },
          ],
        ],
        ['Team_2',
          [
            {
              id: 3,
              fullName: 'Project_3',
              startDate: '2021-01-01T00:00:00+00:00',
              endDate: '2022-01-01T00:00:00+00:00',
            },
            {
              id: 4,
              fullName: 'Project_4',
              startDate: '2021-01-01T00:00:00+00:00',
              endDate: '2022-01-01T00:00:00+00:00',
            },
            {
              id: 5,
              fullName: 'Project_5',
              startDate: '2021-01-01T00:00:00+00:00',
              endDate: '2022-01-01T00:00:00+00:00',
            },
          ],
        ],
      ],
    ),
  };
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        project: {
          state,
          namespaced: true,
        },
      },
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
