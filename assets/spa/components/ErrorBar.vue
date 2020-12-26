<template>
  <b-row>
    <b-alert
      v-for="error in errors"
      :key="error.id"
      show
      variant="warning"
      class="mx-auto col-9 text-center"
    >
      <h4 class="alert-heading">
        ERROR
      </h4>
      <hr>
      <p>{{ error.message }}</p>
      <p>{{ error.status }} - {{ error.statusText }}</p>
    </b-alert>
  </b-row>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ErrorBar',
  computed: mapState('error', ['errors']),
};
</script>

<style scoped>

</style>
