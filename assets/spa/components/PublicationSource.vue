<template>
  <p>
    {{ concatenatedOutput }}
  </p>
</template>

<script>
export default {
  name: 'PublicationSource',
  props: {
    publication: {
      type: Object,
      required: true,
    },
  },
  computed: {
    concatenatedOutput() {
      let volumeAndIssue = '';
      if (this.publication.volume) {
        volumeAndIssue += this.publication.volume;
      }
      if (this.publication.issue) {
        volumeAndIssue += `(${this.publication.issue})`;
      }
      const items = [];
      if (this.publication.source) {
        items.push(this.publication.source);
      }
      if (this.publication.year) {
        items.push(`(${this.publication.year})`);
      }
      if (this.publication.pages) {
        items.push(this.publication.pages);
      }
      if (volumeAndIssue) {
        items.push(volumeAndIssue);
      }
      return items.join(', ');
    },
  },
};
</script>

<style scoped>

</style>
