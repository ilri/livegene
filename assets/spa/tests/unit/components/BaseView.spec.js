import { mount, createLocalVue } from '@vue/test-utils';
import BootstrapVue, { BRow } from 'bootstrap-vue';
import NProgress from 'nprogress';
import BaseView from '../../../components/BaseView';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

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
  test('display main area when there are no errors', () => {
    const wrapper = mount(BaseView, {
      localVue,
      computed: {
        errors: () => [],
      },
    });
    const row = wrapper.find(BRow);
    expect(row.exists()).toBe(true);
    expect(row.classes('row')).toBe(true);
    expect(row.classes('text-center')).toBe(true);
    expect(row.classes('show')).toBe(true);
  });

  test('do not display main area when there are errors', () => {
    const wrapper = mount(BaseView, {
      localVue,
      computed: {
        errors: () => [
          {
            id: 1,
            message: 'This is an error',
            status: 404,
            statusText: 'Not found',
          },
        ],
      },
    });
    const row = wrapper.find(BRow);
    expect(row.exists()).toBe(false);
  });
});
