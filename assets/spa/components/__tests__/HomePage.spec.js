import { shallowMount, createLocalVue } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import HomePage from '../HomePage.vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('HomePage.vue', () => {
  test('it renders the homepage', () => {
    const wrapper = shallowMount(HomePage, {
      localVue
    });
    expect(wrapper.text()).toContain('ILRI Livestock Genetics');
  })
});
