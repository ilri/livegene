<template>
  <g :transform="_transform"></g>
</template>

<script>
  import * as d3 from 'd3';

  export default {
    name: "XAxis",
    data () {
      return {
        stroke: 'blue'
      }
    },
    props: [
      'axis',
      'margin',
      'chart'
    ],
    computed: {
      _transform: function () {
        return `translate(0,${this.margin.top})`;
      }
    },
    methods: {
      renderAxis: function () {
        d3.select(this.$el).call(this.axis);
        const domain = this.$el.getElementsByClassName('domain')[0];
        d3.select(domain)
          .attr('stroke', this.stroke)
          .attr(
            'transform',
            `translate(0,${this.chart.height})`
          )
          .raise()
        ;

        const gridlines = this.$el.getElementsByTagName('line');
        d3.selectAll(gridlines)
          .attr('stroke', 'lightgray')
          .attr('opacity', '0.8')
          .attr('shape-rendering', 'crispEdges')
        ;
      }
    },
    mounted: function () {
      this.renderAxis();
    },
    watch: {
      axis (val) {
        if (val) {
          this.renderAxis();
        }
      }
    }
  }
</script>

<style scoped>
</style>
