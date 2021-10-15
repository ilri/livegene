<template>
  <p>
    <span>{{ author.last_name }}</span>
    <span v-if="author.first_name">, {{ author.first_name }}</span>
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
