<template>
  <p class="text-center mb-1">
    <b-badge
      pill
      variant="primary"
    >
      {{ tag }}
    </b-badge>
  </p>
</template>

<script>
export default {
  name: 'PublicationTag',
  props: {
    tag: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
</style>
