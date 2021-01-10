import TestVue from './TestVue.vue'
import { mount } from '@vue/test-utils'

describe('test TestVue.vue', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(TestVue, {
      propsData: {
        p: 'this is prop p'
      }
    })
    expect(wrapper.find('div').text()).toBe('222')
  })
})