<template>
  <b-row class="mx-0">
    <b-col
      cols="12"
      lg="8"
      class="mx-auto text-center"
    >
      <b-alert
        v-for="error in errors"
        :key="error.id"
        show
        variant="warning"
      >
        <h4 class="alert-heading">
          ERROR
        </h4>
        <hr>
        <p>{{ error.message }}</p>
        <p>{{ error.status }} - {{ error.statusText }}</p>
      </b-alert>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'ErrorBar',
  props: {
    errors: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
