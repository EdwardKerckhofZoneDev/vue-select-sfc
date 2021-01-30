<script lang="ts">
import Vue from "vue";
import VueSelectSfc from "~/vue-select-sfc.vue";

export default Vue.extend({
  name: "ServeDev",
  components: {
    VueSelectSfc,
  },
});
</script>

<template>
  <div id="app">
    <vue-select-sfc />
  </div>
</template>
