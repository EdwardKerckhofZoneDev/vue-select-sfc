import { shallowMount } from '@vue/test-utils'
import VueSelect from '../src/components/SelectSfc.vue'

export const mountDefault = (props = {}, options = {}) => {
  return shallowMount(VueSelect, {
    propsData: {
      options: ['option 1', 'option 2', 'option 3'],
      ...props,
    },
    ...options,
  })
}
