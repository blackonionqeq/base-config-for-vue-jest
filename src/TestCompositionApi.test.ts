import { mount } from '@vue/test-utils';
import TestCompositionApi from './TestCompositionApi.vue';

describe('Test Composition Api', () => {
  test('is vue instance', () => {
    const testProps = '6666'
    const wrapper = mount(TestCompositionApi, {
      propsData: {
        testProps,
      }
    });
    expect(wrapper.find('div').text()).toBe(testProps)
  })
})