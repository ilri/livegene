import { shallowMount, createLocalVue } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import HomePage from '../../views/HomePage';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('HomePage.vue', () => {
  test('it renders the homepage', () => {
    const wrapper = shallowMount(HomePage, {
      localVue,
    });
    expect(wrapper.text()).toContain('Livestock');
    expect(wrapper.text()).toContain('Genetics');
  });
});
