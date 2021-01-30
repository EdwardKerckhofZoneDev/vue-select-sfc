import { shallowMount } from '@vue/test-utils'
import VueSelect from '../src/components/SelectSfc.vue'

export const mountDefault = (props = {}, options = {}) => {
  return shallowMount(VueSelect, {
    propsData: {
      options: ['one', 'two', 'three'],
      ...props,
    },
    ...options,
  })
}
