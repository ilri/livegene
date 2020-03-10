<template>
  <g :transform="transform" />
</template>

<script>
import * as d3 from 'd3';

export default {
  name: 'XAxis',
  props: [
    'axis',
    'margin',
    'chart',
  ],
  data() {
    return {
      stroke: 'blue',
    };
  },
  computed: {
    transform() {
      return `translate(0,${this.margin.top})`;
    },
  },
  watch: {
    axis(val) {
      if (val) {
        this.renderAxis();
      }
    },
  },
  mounted() {
    this.renderAxis();
  },
  methods: {
    renderAxis() {
      d3.select(this.$el).call(this.axis);
      const domain = this.$el.getElementsByClassName('domain')[0];
      d3.select(domain)
        .attr('stroke', this.stroke)
        .attr(
          'transform',
          `translate(0,${this.chart.height})`,
        )
        .raise();
      const gridlines = this.$el.getElementsByTagName('line');
      d3.selectAll(gridlines)
        .attr('stroke', 'lightgray')
        .attr('opacity', '0.8')
        .attr('shape-rendering', 'crispEdges');
    },
  },
};
</script>

<style scoped>
</style>
