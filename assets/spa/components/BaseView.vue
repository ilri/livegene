<template>
  <b-container
    fluid
    class="p-0"
  >
    <h2 class="bg-info text-white text-center p-2">
      <slot name="header" />
    </h2>
    <ErrorBar />
    <b-row
      v-show="$root.loading.status === null"
      align-h="center"
      class="text-center pb-5 m-0"
    >
      <slot name="graphic" />
    </b-row>
  </b-container>
</template>

<script>
import ErrorBar from './ErrorBar';

export default {
  name: 'BaseView',
  components: {
    ErrorBar,
  },
};
</script>

<style scoped>

</style>
