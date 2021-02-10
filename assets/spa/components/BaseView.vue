<template>
  <b-container
    fluid
    class="p-0"
  >
    <h2 class="bg-info text-white text-center p-2">
      <slot name="header" />
    </h2>
    <ErrorBar :errors="errors" />
    <b-row
      v-show="errors.length === 0"
      align-h="center"
      class="text-center pb-5 m-0"
      :class="[$loadingStatus === null ? 'show' : 'hide']"
    >
      <slot name="graphic" />
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';
import ErrorBar from './ErrorBar';

export default {
  name: 'BaseView',
  components: {
    ErrorBar,
  },
  computed: mapState('error', ['errors']),
};
</script>

<style scoped>
  .show {
    visibility: visible;
  }
  .hide {
    visibility: hidden;
  }
</style>
