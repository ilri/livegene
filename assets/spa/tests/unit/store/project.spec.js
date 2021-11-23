import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import { cloneDeep } from 'lodash';
import flushPromises from 'flush-promises';

import ProjectService from '../../../services/ProjectService';
import ProjectModule from '../../../store/modules/project';

jest.mock('../../../services/ProjectService');

const localVue = createLocalVue();
localVue.use(Vuex);

// generate the mock projects
const response = {}
response.data = {};
response.data['hydra:member'] = new Array(20).fill().map((v, i) => ({
  id: i + 1,
  fullName: `Project ${i + 1}`,
  startDate: new Date(),
  endDate: new Date(),
  // the value for team should be A, B or C
  // these are the corresponding values for 65, 66, 67
  team: String.fromCharCode(65 + (i % 3)),
}));

describe('project store module', () => {
  test('getProjectsAction should populate the projects and projectsGroupedByTeam', async () => {
    expect.assertions(4);
    const projectModule = cloneDeep(ProjectModule);
    const store = new Vuex.Store(projectModule);
    expect(store.state.projects.length).toEqual(0);
    expect(store.state.projectsGroupedByTeam.size).toEqual(0);
    ProjectService.getProjects.mockResolvedValueOnce(Promise.resolve(
      response,
    ));
    store.dispatch('getProjectsAction');
    await flushPromises();
    expect(store.state.projects.length).toEqual(20);
    expect(store.state.projectsGroupedByTeam.size).toEqual(3);
  });
});
