import { shallowMount, createLocalVue } from '@vue/test-utils';
import ChartContainer from '../../../components/ChartContainer';

const localVue = createLocalVue();

describe('ChartContainer.vue', () => {
  test('the SVG is created with passed viewBox dimensions', () => {
    const wrapper = shallowMount(ChartContainer, {
      localVue,
      propsData: {
        viewport: {
          width: 800,
          height: 600,
        },
      },
    });
    const svg = wrapper.find('svg');
    expect(svg.exists()).toBe(true);
    expect(svg.attributes('viewBox')).toBe('0 0 800 600');
  });
});
