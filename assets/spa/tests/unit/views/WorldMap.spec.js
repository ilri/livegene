import { createLocalVue, mount, shallowMount } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import Vuex from 'vuex';
import WorldMap from '../../../views/WorldMap';
import ErrorModule from '../../../store/modules/error';

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(Vuex);

describe('WorldMap.vue', () => {
  let projectState;
  let errorState;
  let store;

  beforeEach(() => {
    projectState = {
      projects: [
        {
          id: 1,
          fullName: 'Project_1',
          startDate: '2021-01-01T00:00:00+00:00',
          endDate: '2022-01-01T00:00:00+00:00',
          team: 'Team_1',
          donor: { id: 1, shortName: 'ACME', fullName: 'A Company that Makes Everything' },
          partnerships: [],
          countryRoles: [],
        },
        {
          id: 2,
          fullName: 'Project_2',
          startDate: '2021-01-01T00:00:00+00:00',
          endDate: '2022-01-01T00:00:00+00:00',
          team: 'Team_1',
          donor: { id: 1, shortName: 'ACME', fullName: 'A Company that Makes Everything' },
          partnerships: [],
          countryRoles: [],
        },
        {
          id: 3,
          fullName: 'Project_3',
          startDate: '2021-01-01T00:00:00+00:00',
          endDate: '2022-01-01T00:00:00+00:00',
          team: 'Team_2',
          donor: { id: 1, shortName: 'ACME', fullName: 'A Company that Makes Everything' },
          partnerships: [],
          countryRoles: [],
        },
        {
          id: 4,
          fullName: 'Project_4',
          startDate: '2021-01-01T00:00:00+00:00',
          endDate: '2022-01-01T00:00:00+00:00',
          team: 'Team_2',
          donor: { id: 1, shortName: 'ACME', fullName: 'A Company that Makes Everything' },
          partnerships: [],
          countryRoles: [],
        },
        {
          id: 5,
          fullName: 'Project_5',
          startDate: '2021-01-01T00:00:00+00:00',
          endDate: '2022-01-01T00:00:00+00:00',
          team: 'Team_2',
          donor: { id: 1, shortName: 'ACME', fullName: 'A Company that Makes Everything' },
          partnerships: [],
          countryRoles: [],
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
                donor: { id: 1, shortName: 'ACME', fullName: 'A Company that Makes Everything' },
                partnerships: [],
                countryRoles: [],
              },
              {
                id: 2,
                fullName: 'Project_2',
                startDate: '2021-01-01T00:00:00+00:00',
                endDate: '2022-01-01T00:00:00+00:00',
                donor: { id: 1, shortName: 'ACME', fullName: 'A Company that Makes Everything' },
                partnerships: [],
                countryRoles: [],
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
                donor: { id: 1, shortName: 'ACME', fullName: 'A Company that Makes Everything' },
                partnerships: [],
                countryRoles: [],
              },
              {
                id: 4,
                fullName: 'Project_4',
                startDate: '2021-01-01T00:00:00+00:00',
                endDate: '2022-01-01T00:00:00+00:00',
                donor: { id: 1, shortName: 'ACME', fullName: 'A Company that Makes Everything' },
                partnerships: [],
                countryRoles: [],
              },
              {
                id: 5,
                fullName: 'Project_5',
                startDate: '2021-01-01T00:00:00+00:00',
                endDate: '2022-01-01T00:00:00+00:00',
                donor: { id: 1, shortName: 'ACME', fullName: 'A Company that Makes Everything' },
                partnerships: [],
                countryRoles: [],
              },
            ],
          ],
        ],
      ),
    };
    errorState = {
      errors: [],
    };
    store = new Vuex.Store({
      modules: {
        project: {
          state: projectState,
          namespaced: true,
        },
        error: {
          state: errorState,
          getters: ErrorModule.getters,
          namespaced: true,
        },
      },
    });
  });

  test('a ListItem element is rendered for every team', () => {
    const wrapper = shallowMount(WorldMap, {
      localVue,
      store,
      data() {
        return {
          module: 'projects',
        };
      },
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
    const wrapper = mount(WorldMap, {
      localVue,
      store,
      data() {
        return {
          module: 'projects',
        };
      },
    });
    jest.spyOn(wrapper.vm, 'selectTeam');
    const teamLinks = wrapper.findAll('li.team > span');
    teamLinks.wrappers.forEach((teamLink) => {
      teamLink.trigger('click');
      expect(wrapper.vm.selectTeam).toHaveBeenCalled();
    });
  });

  test('calls selectProject() when user selects (clicks on) a project', () => {
    const wrapper = mount(WorldMap, {
      localVue,
      store,
    });
    jest.spyOn(wrapper.vm, 'selectProject');
    const projectLinks = wrapper.findAll('li.project');
    projectLinks.wrappers.forEach((projectLink) => {
      projectLink.trigger('click');
      expect(wrapper.vm.selectProject).toHaveBeenCalled();
    });
  });
});
