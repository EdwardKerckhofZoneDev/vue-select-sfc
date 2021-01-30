<script lang="ts">
import Vue from 'vue'
import VueSelectSfc from '@/components/SelectSfc.vue'
import countries from './countries'

export default Vue.extend({
  components: {
    VueSelectSfc,
  },
  data: () => ({
    selected: null,
    options: countries,
    label: 'List of countries',
  }),
})
</script>

<template>
  <div id="app">
    <vue-select-sfc v-model="selected" :options="options" :label="label" />
  </div>
</template>
