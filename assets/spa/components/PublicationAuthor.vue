<template>
  <p class="author">
    <span v-if="author.first_name">{{ author.first_name }}</span>
    <span>{{ author.last_name }}</span>
  </p>
</template>

<script>
export default {
  name: 'PublicationAuthor',
  props: {
    author: {
      type: [Object, String],
      default: () => ({ first_name: '', last_name: '' }),
    },
  },
};
</script>

<style scoped>
</style>
