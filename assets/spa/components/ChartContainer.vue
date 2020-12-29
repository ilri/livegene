<template>
  <svg
    id="viewport"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMinYMin meet"
    :viewBox="`0 0 ${viewport.width} ${viewport.height}`"
  >
    <slot name="chart" />
  </svg>
</template>

<script>
export default {
  name: 'ChartContainer',
  props: {
    viewport: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
  svg#viewport {
    overflow: visible;
    border: thin solid lightgray;
    background-color: azure;
  }
</style>
