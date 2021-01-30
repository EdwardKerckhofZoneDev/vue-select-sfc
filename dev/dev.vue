<script lang="ts">
import Vue from 'vue'
import VueSelectSfc from '@/components/SelectSfc.vue'

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueSelectSfc,
  },
})
</script>

<template>
  <div id="app">
    <vue-select-sfc />
  </div>
</template>
