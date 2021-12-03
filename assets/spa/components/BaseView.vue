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
import { mapGetters } from 'vuex';
import ErrorBar from './ErrorBar';

export default {
  name: 'BaseView',
  components: {
    ErrorBar,
  },
  props: {
    module: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters('error', [
      'getErrorsForModule',
    ]),
    errors() {
      return this.getErrorsForModule(this.module);
    },
  },
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
