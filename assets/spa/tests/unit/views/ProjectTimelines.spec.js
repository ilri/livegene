import { mount, createLocalVue } from '@vue/test-utils';
import BootstrapVue, { BButton } from 'bootstrap-vue';
import Vuex from 'vuex';
import ProjectTimelines from '../../../views/ProjectTimelines';
import ErrorModule from '../../../store/modules/error';

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(Vuex);

describe('ProjectTimelines.vue', () => {
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
