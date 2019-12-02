<template>
  <g :transform="_transform"></g>
</template>

<script>
  import * as d3 from 'd3';

  export default {
    name: "YAxis",
    data () {
      return {
        stroke: 'blue'
      }
    },
    props: [
      'axis',
      'margin',
      'chart',
      'barHeight',
      'spacing',
      'data'
    ],
    computed: {
      _transform: function () {
        return `translate(${[this.margin.left + this.chart.width, this.margin.top]})`;
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
            `translate(${-this.chart.width},0)`
          )
          .raise();
        const gridlines = this.$el.getElementsByTagName('line');
        d3.selectAll(gridlines)
          .attr('stroke', 'lightgray')
          .attr('opacity', '0.8')
          .attr('shape-rendering', 'crispEdges')
        ;
      },
      transformText: function () {
        const textNodes = this.$el.getElementsByTagName('text');
        d3.selectAll(textNodes)
          .attr(
            'transform',
            d => `translate(0,${this.data.get(d).length * this.barHeight/2 + this.spacing/2})`
          )
          .style('font-weight', 700)
          .on('mouseenter', function(d) {
            d3.selectAll(textNodes)
              .attr('opacity', team => team === d ? 1 : 0.1);
            d3.selectAll('g.team')
              .attr('opacity', team => team[0] === d ? 1 : 0.1);
          })
          .on('mouseleave', function(d) {
            d3.selectAll(textNodes)
              .attr('opacity', 1);
            d3.selectAll('g.team')
              .attr('opacity', 1);
          });
      }
    },
    mounted: function () {
      this.renderAxis();
      this.transformText();
    },
    watch: {
      chart (val) {
        if (val) {
          this.renderAxis();
          this.transformText();
        }
      }
    }
  }
</script>

<style scoped>

</style>
