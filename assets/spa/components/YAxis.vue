<template>
  <g :transform="transform" />
</template>

<script>
import * as d3 from 'd3';

export default {
  name: 'YAxis',
  props: {
    axis: {
      type: Object,
      required: true,
    },
    margin: {
      type: Object,
      required: true,
    },
    chart: {
      type: Object,
      required: true,
    },
    barHeight: {
      type: Number,
      required: true,
      default: 12,
    },
    spacing: {
      type: Number,
      required: true,
      default: 6,
    },
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      stroke: 'blue',
    };
  },
  computed: {
    transform() {
      return `translate(${[this.margin.left + this.chart.width, this.margin.top]})`;
    },
  },
  watch: {
    axis(val) {
      if (val) {
        this.renderAxis();
        this.transformText();
      }
    },
  },
  mounted() {
    this.renderAxis();
    this.transformText();
  },
  methods: {
    renderAxis() {
      d3.select(this.$el).call(this.axis);
      const domain = this.$el.getElementsByClassName('domain')[0];
      d3.select(domain)
        .attr('stroke', this.stroke)
        .attr(
          'transform',
          `translate(${-this.chart.width},0)`,
        )
        .raise();
      const gridlines = this.$el.getElementsByTagName('line');
      d3.selectAll(gridlines)
        .attr('stroke', 'lightgray')
        .attr('opacity', '0.8')
        .attr('shape-rendering', 'crispEdges');
    },
    transformText() {
      const textNodes = this.$el.getElementsByTagName('text');
      d3.selectAll(textNodes)
        .attr(
          'transform',
          (d) => `translate(0,${this.data.get(d).length * this.barHeight / 2 + this.spacing / 2})`,
        )
        .style('font-weight', 700)
        .on('mouseenter', (d) => {
          d3.selectAll(textNodes)
            .attr('opacity', (team) => (team === d ? 1 : 0.1));
          d3.selectAll('g.team')
            .attr('opacity', (team) => (team[0] === d ? 1 : 0.1));
        })
        .on('mouseleave', () => {
          d3.selectAll(textNodes)
            .attr('opacity', 1);
          d3.selectAll('g.team')
            .attr('opacity', 1);
        });
    },
  },
};
</script>

<style scoped>

</style>
