import Vue, { VNode } from 'vue'
import Dev from './dev.vue'

Vue.config.productionTip = false

new Vue({
  render: (h): VNode => h(Dev),
}).$mount('#app')
