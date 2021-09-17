import { mount, createLocalVue } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import Vuex from 'vuex';
import BaseView from '../../../components/BaseView';
import { state, mutations, actions } from '../config/mock-store';

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(Vuex);

describe('BaseView.vue', () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      state,
      mutations,
      actions,
    });
  });

  test('the graphic should be shown if there are no errors', () => {
    const wrapper = mount(BaseView, {
      localVue,
      store,
    });
    const bRow = wrapper.find('#b-row');
    expect(bRow.isVisible()).toBe(true);
  });

  test('the graphic should be hidden if errors exist', () => {
    const errors = [
      {
        id: 1,
        message: 'This is an error',
        status: 404,
        statusText: 'Page not found',
      },
    ];
    store.dispatch('add', errors);
    const wrapper = mount(BaseView, {
      localVue,
      store,
    });
    const bRow = wrapper.find('#b-row');
    expect(bRow.isVisible()).toBe(false);
  });
});
