import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import { cloneDeep } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

import ErrorModule from '../../../store/modules/error';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('error store module', () => {
  test('add action should add an error', () => {
    expect.assertions(2);
    const errorModule = cloneDeep(ErrorModule);
    const store = new Vuex.Store(errorModule);
    expect(store.state.errors.length).toEqual(0);
    store.dispatch('addAction', {
      id: uuidv4(),
      message: 'Error message',
      module: 'projects',
    });
    expect(store.state.errors.length).toEqual(1);
  });

  test('getErrorsForModule should retrieve the correspondent errors', () => {
    expect.assertions(4);
    const errorModule = cloneDeep(ErrorModule);
    const store = new Vuex.Store(errorModule);
    expect(store.state.errors.length).toEqual(0);
    store.dispatch('addAction', {
      id: uuidv4(),
      message: 'Error message',
      module: 'projects',
    });
    store.dispatch('addAction', {
      id: uuidv4(),
      message: 'Error message',
      module: 'mendeley',
    });
    expect(store.state.errors.length).toEqual(2);
    const projects = store.getters.getErrorsForModule('projects');
    expect(projects.length).toEqual(1);
    expect(projects[0].module).toEqual('projects');
  });
});
