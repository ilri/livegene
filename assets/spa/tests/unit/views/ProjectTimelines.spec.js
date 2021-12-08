import { mount, createLocalVue } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
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
    const wrapper = mount(ProjectTimelines, {
      localVue,
      store,
    });
    const spyResetChart = jest.spyOn(wrapper.vm, 'resetChart');
    const resetButton = wrapper.find('button#reset');
    resetButton.trigger('click');
    expect(spyResetChart).toHaveBeenCalled();
  });

  test('calls toggleActiveProjects() when user clicks on calendar icon', () => {
    const wrapper = mount(ProjectTimelines, {
      localVue,
      store,
    });
    const spyToggleActiveProjects = jest.spyOn(wrapper.vm, 'toggleActiveProjects');
    const toggleButton = wrapper.find('g.today > text');
    toggleButton.trigger('click');
    expect(spyToggleActiveProjects).toHaveBeenCalled();
  });
});
