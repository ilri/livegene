<template>
  <p>
    <span v-if="publication.source">{{ publication.source }},</span>
    <span v-if="publication.year">({{ publication.year }})</span><!--
    --><span v-if="publication.year && publication.volume || publication.pages">,</span>
    <span v-if="publication.volume">
      <strong>{{ publication.volume }}</strong>
    </span><!--
    --><span v-if="publication.issue">({{ publication.issue }})</span><!--
    --><span v-if="publication.volume && publication.pages">:</span><!--
    --><span v-if="publication.pages">{{ publication.pages }}</span>
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
};
</script>

<style scoped>

</style>
