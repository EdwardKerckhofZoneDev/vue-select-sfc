<script lang="ts">
import Vue from 'vue'
import VueSelectSfc from '@/components/SelectSfc.vue'
import countries from './countries'

export default Vue.extend({
  components: {
    VueSelectSfc,
  },
  data: () => ({
    selectedOption: '',
    options: countries,
    label: 'List of countries',
  }),
  methods: {
    updateSelected(selected: string) {
      this.selectedOption = selected
      console.log('Selection changed!: ', this.selectedOption)
    },
  },
})
</script>

<template>
  <div id="app">
    <vue-select-sfc
      :options="options"
      :label="label"
      @selectionChanged="updateSelected"
    />
  </div>
</template>
