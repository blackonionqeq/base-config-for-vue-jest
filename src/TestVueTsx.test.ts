import { mount } from '@vue/test-utils';
import TestVueTsx from './TestVueTsx';

describe('Test Composition Api', () => {
  test('is vue instance', () => {
    const tsxProp = '6666'
    const wrapper = mount(TestVueTsx, {
      propsData: {
        tsxProp,
      }
    });
    expect(wrapper.find('div').text()).toBe(tsxProp)
  })
})