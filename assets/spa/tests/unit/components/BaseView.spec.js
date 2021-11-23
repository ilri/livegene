import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';
import NProgress from 'nprogress';
import BaseView from '../../../components/BaseView';
import ErrorModule from '../../../store/modules/error';

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(Vuex);

// Cezar: trying to add instance property to localVue, to mimic the
// Vue instance property $loadingStatus
const loading = localVue.observable(NProgress);
Object.defineProperty(localVue.prototype, '$loadingStatus', {
  get() {
    return loading.status;
  },
  set(val) {
    loading.status = val;
  },
});

describe('BaseView.vue', () => {
  let actions;
  let state;
  let store;

  beforeEach(() => {
    state = {
      errors: [],
    };
    actions = {
      addAction: jest.fn(),
    };
    store = new Vuex.Store({
      modules: {
        error: {
          state,
          actions,
          getters: ErrorModule.getters,
          namespaced: true,
        },
      },
    });
  });

  test('display main area when there are no errors', () => {
    const wrapper = mount(BaseView, {
      localVue,
      store,
      propsData: {
        module: 'projects',
      },
    });
    const row = wrapper.find('div.row.text-center.pb-5');
    expect(row.exists()).toBe(true);
    expect(row.classes('row')).toBe(true);
    expect(row.classes('text-center')).toBe(true);
    expect(row.classes('show')).toBe(true);
    expect(row.attributes('style')).toBe(undefined);
  });

  test('do not display main area when there are errors', () => {
    store.state.error.errors = [
      {
        id: 1,
        message: 'Error',
        module: 'projects',
      },
    ];
    const wrapper = mount(BaseView, {
      localVue,
      store,
      propsData: {
        module: 'projects',
      },
    });
    const row = wrapper.find('div.row.text-center.pb-5');
    expect(row.exists()).toBe(true);
    expect(row.attributes('style')).toEqual('display: none;');
  });
});
