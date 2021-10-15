<template>
  <p class="text-center mb-1">
    <b-button
      v-b-tooltip.hover.left
      squared
      variant="outline-dark"
      :href="link"
      :title="link"
    >
      LINK
    </b-button>
  </p>
</template>

<script>
export default {
  name: 'PublicationLink',
  props: {
    link: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
</style>
