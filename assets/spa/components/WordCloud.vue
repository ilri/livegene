<template>
  <div
    ref="wordCloud"
    class="wordCloud"
  />
</template>

<script>
import * as d3 from 'd3';
import * as cloud from 'd3-cloud';

export default {
  name: 'WordCloud',

  props: {
    data: {
      type: Array,
      required: true,
    },
    fontSizeMapper: {
      type: Function,
      required: true,
    },
    onWordClick: {
      type: Function,
      default: (word) => {
        console.log(`You clicked ${word.text}`);
      },
    },
    rotate: {
      type: [Function, String, Number],
      default: 0,
    },
    font: {
      type: [String, Function],
      default: 'Serif',
    },
    width: {
      type: [Number, String],
      default: 960,
    },
    height: {
      type: [Number, String],
      default: 500,
    },
    preserveAspectRatio: {
      type: String,
      default: 'xMinYMin meet',
    },
    padding: {
      type: [Number, String],
      default: 0,
    },
    spiral: {
      type: String,
      default: 'archimedean',
    },
    coloring: {
      type: String,
      default: 'random',
    },
    // eslint-disable-next-line vue/require-default-prop
    colors: {
      type: Array,
    },
  },
  data() {
    return {
      layout: {},
      chart: {},
      fill: null,
    };
  },

  watch: {
    data() {
      this.createCanvas();
    },
    rotate() {
      this.createCanvas();
    },
    font() {
      this.createCanvas();
    },
    padding() {
      this.createCanvas();
    },
    spiral() {
      this.createCanvas();
    },
    colors() {
      this.createCanvas();
    },
    coloring() {
      this.createCanvas();
    },
  },

  mounted() {
    this.createCanvas();
  },

  methods: {
    createCanvas() {
      const wordCounts = this.data.map(
        (text) => ({ ...text }),
      );

      d3.select(this.$el).selectAll('*').remove();

      const layout = cloud()
        .size([this.width, this.height])
        .words(wordCounts)
        .padding(this.padding)
        .spiral(this.spiral)
        .rotate(this.rotate)
        .font(this.font)
        .fontSize(this.fontSizeMapper)
        .on('end', this.end)
      ;

      if (this.colors) this.fill = d3.scaleOrdinal().range(this.colors);
      else this.fill = d3.scaleOrdinal(d3.schemeCategory10);

      layout.start();
    },
    end(words) {
      // eslint-disable-next-line no-underscore-dangle
      let _fill;
      switch (this.coloring) {
        case 'random':
          _fill = (d, i) => this.fill(i);
          break;
        case 'size':
          _fill = (d) => this.fill(d.size);
          break;
        default:
          _fill = (d, i) => this.fill(i);
      }

      d3.select(this.$el)
        .append('svg')
        .attr('preserveAspectRation', this.preserveAspectRatio)
        .attr('viewBox', `0 0 ${this.width} ${this.height}`)
        .append('g')
        .attr('transform', `translate(${this.width / 2},${this.height / 2})`)
        .selectAll('text')
        .data(words)
        .enter()
        .append('text')
        .style('font-family', (d) => d.font)
        .style('font-size', (d) => `${d.size}px`)
        .style('fill', _fill)
        .attr('text-anchor', 'middle')
        .attr('transform', (d) => `translate(${[d.x, d.y]})rotate(${d.rotate})`)
        .text((d) => d.text)
        .on('click', (d) => this.onWordClick(d))
      ;
    },
  },
};
</script>
