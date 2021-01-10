import { mount } from '@vue/test-utils'
import TestVue from './TestVueTs'

describe('test TestVue.ts', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TestVue)
    expect(wrapper.find('div').text()).toBe('test')
  })
})