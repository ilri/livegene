import { shallowMount, createLocalVue } from '@vue/test-utils';
import BootstrapVue, { BAlert } from 'bootstrap-vue';
import ErrorBar from '../../../components/ErrorBar';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('ErrorBar.vue', () => {
  test('no alerts should be shown if there are no errors', () => {
    const errors = [];
    const wrapper = shallowMount(ErrorBar, {
      localVue,
      propsData: {
        errors,
      },
    });
    expect(wrapper.find(BAlert).exists()).toBe(false);
  });

  test('an alert should be shown if there is an error', () => {
    const errors = [
      {
        id: 1,
        message: 'This is an error',
        status: 404,
        statusText: 'Page not found',
      },
    ];
    const wrapper = shallowMount(ErrorBar, {
      localVue,
      propsData: {
        errors,
      },
    });
    expect(wrapper.find(BAlert).exists()).toBe(true);
  });
});
