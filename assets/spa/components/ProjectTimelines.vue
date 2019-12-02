<template>
  <div>
    <h2 class="bg-primary text-white text-center p-2">Project Timelines</h2>
    <div class="text-center">
      <svg id="viewport" :width="viewport.width" :height="viewport.height">
        <rect :x="margin.left" :y="margin.top" :width="chart.width" :height="chart.height"></rect>
        <defs>
          <linearGradient id="legendGradient" x1="0" x2="1">
            <stop offset="0" :style="{ 'stop-color': colorScale(value.min), 'stop-opacity': 0.8 }"></stop>
            <stop offset="1" :style="{ 'stop-color': colorScale(value.max), 'stop-opacity': 0.8 }"></stop>
          </linearGradient>
          <clipPath id="chart">
            <rect :x="margin.left" :y="margin.top" :width="chart.width" :height="chart.height"></rect>
          </clipPath>
        </defs>
        <x-axis :axis="xAxis" :margin="margin" :chart="chart" class="x-axis"></x-axis>
        <y-axis :axis="yAxis" :margin="margin" :chart="chart" :bar-height="barHeight" :spacing="spacing" :data="data" class="y-axis"></y-axis>
        <line class="top-border" :x1="margin.left" :y1="margin.top" :x2="margin.left + chart.width" :y2="margin.top"></line>
        <line class="right-border" :x1="margin.left + chart.width" :y1="margin.top" :x2="margin.left + chart.width" :y2="margin.top + chart.height"></line>
        <g class="view" clip-path="url(#chart)">
          <g></g>
        </g>
        <g class="infobox">
          <rect width="80" height="40" rx="3" ry="3" x="0" :y="this.spacing * 3"></rect>
          <text>
            <tspan class="project-name" :x="spacing" :y="spacing * 6"></tspan>
            <tspan class="project-dates" :x="spacing" :dy="spacing * 2.5"></tspan>
          </text>
        </g>
        <g class="legend">
          <text :transform="`translate(${[viewport.width/2, spacing * 2]})`">Total Project Value</text>
          <rect class="gradient-bar" :x="(viewport.width - legendBox.width) / 2" :y="spacing * 3"
                :width="legendBox.width" :height="legendBox.height"></rect>
          <text :x="(viewport.width - legendBox.width) / 2 - spacing"
                :y="spacing * 2 + legendBox.height" class="value-min">
            {{ `\u2264 ${moneyFormat(value.min)}` }}
          </text>
          <text :x="(viewport.width - legendBox.width) / 2 + legendBox.width + spacing"
                :y="spacing * 2 + legendBox.height" class="value-max">
            {{ `\u2265 ${moneyFormat(value.max)}` }}
          </text>
          <g class="value-indicator" :transform="`translate(${[(viewport.width - legendBox.width)/2, spacing * 3 + legendBox.height]})`">
            <text class="caret-up">{{ '\uf0d8' }}</text>
            <text class="project-value"></text>
          </g>
        </g>
      </svg>
    </div>
    <div>{{ chart }}</div>
    <div>{{ viewport }}</div>
  </div>
</template>

<script>
  import * as d3 from 'd3';
  import { mapState } from 'vuex';
  import XAxis from './XAxis';
  import YAxis from './YAxis';

  export default {
    name: 'ProjectTimelines',
    components: { XAxis, YAxis },
    data () {
      return {
        barHeight: 12,
        spacing: 6,
        margin: {
          top: 80,
          left: 100,
          right: 20,
          bottom: 50
        },
        tickBleed: 10,
        labelPadding: 5,
        legendBox: {
          width: 500,
          height: 20
        },
        value: {
          min: 100000,
          max: 10000000
        },
        moneyFormat: d3.format('$,.0f'),
        dateFormat: d3.timeFormat('%b %d, %Y')
      }
    },
    computed: {
      ...mapState({
        projects: state => state.projects,
        data: state => state.projectsGroupedByTeam
      }),
      dataAsArray: function () {
        return [...this.data];
      },
      chart: function () {
        return {
          width: window.innerWidth <= 1024 ? 1024 : window.innerWidth - 2 * Math.round(window.innerWidth/10),
          height: this.projects.length * this.barHeight + this.data.size * this.spacing
        }
      },
      viewport: function () {
        return {
          width: this.chart.width + this.margin.left + this.margin.right,
          height: this.chart.height + this.margin.top + this.margin.bottom
        }
      },
      xMin: function () {
        return d3.min(
          this.projects,
          d => new Date(
            String(d3.isoParse(d.startDate).getFullYear())
          )
        );
      },
      xMax: function () {
        return d3.max(
          this.projects,
          d => new Date(
            String(d3.isoParse(d.endDate).getFullYear() + 1)
          )
        );
      },
      xScale: function () {
        return d3.scaleTime()
          .range([this.margin.left, this.margin.left + this.chart.width])
          .domain([this.xMin, this.xMax]);
      },
      xAxis: function () {
        return d3.axisBottom(this.xScale)
          .ticks(10)
          .tickSize(this.chart.height + this.tickBleed)
          .tickPadding(this.labelPadding)
          .tickSizeOuter(0);
      },
      yScale: function () {
        const offsets = [0];
        this.data.forEach(function (d) {
          this.push(d.length);
        }, offsets);

        return d3.scaleOrdinal()
          .range(offsets.map(
            (d, i, a) => a.slice(0, (i + 1))
              .reduce((acc, cur) => acc + cur, 0) * this.barHeight + i * this.spacing
          ))
          .domain([...this.data.keys()])
        ;
      },
      yAxis: function () {
        return d3.axisLeft(this.yScale)
          .tickSizeInner(this.chart.width)
          .tickSizeOuter(0)
        ;
      },
      colorScale: function () {
        return d3
          .scaleSequential(d3.interpolateReds)
          .domain([this.value.min, this.value.max])
        ;
      },
      legendScale: function () {
        return d3.scaleLinear()
          .domain([this.value.min, this.value.max])
          .range([0, this.legendBox.width])
          .clamp(true)
        ;
      }
    },
    methods: {
      renderChart: function () {
        const svg = d3.select('#viewport');

        // Create chart area
        const view = svg.select('g.view > g');

        // Create groups for all teams
        const teams = view.selectAll('g.team')
          .data([...this.data])
          .join('g')
          .attr('class', 'team')
          .attr(
            'transform',
            (d, i) => `translate(${[0, this.margin.top + this.yScale(d[0])]})`
          )
        ;

        const timelines = teams.selectAll('g.timeline')
          .data(d => d[1])
          .join('g')
          .attr('class', 'timeline')
          .attr(
            'transform',
            (d, i) => `translate(0, ${i * this.barHeight + this.spacing/2})`
          )
          .on('mouseenter', this.showProjectDetails)
          .on('mouseleave', this.hideProjectDetails)
        ;

        timelines.append('rect')
          .attr('class', 'project')
          .attr('x', d => this.xScale(d3.isoParse(d.startDate)))
          //.attr('y', (d,i) => i * barHeight + spacing/2)
          .style('fill', d => this.colorScale(d.totalProjectValue))
          .style('opacity', 0.8)
          .style('stroke', 'blueviolet')
          .style('stroke-opacity', 0.5)
          .attr('height', this.barHeight)
          .transition('timeline')
          .ease(d3.easeLinear)
          .delay(d => (this.xScale(d3.isoParse(d.startDate)) - this.xScale(this.xMin)) * 5)
          .duration(d => (this.xScale(d3.isoParse(d.endDate)) - this.xScale(d3.isoParse(d.startDate))) * 5)
          .attr(
            'width',
            d => this.xScale(d3.isoParse(d.endDate)) - this.xScale(d3.isoParse(d.startDate))
          )
        ;

        // project labels
        timelines.append('text')
          .attr('class', 'project-label')
          .attr('x', d => this.labelPadding + this.xScale(d3.isoParse(d.startDate)))
          .attr('y', this.barHeight/2 + 1)
          .style('font-size', this.barHeight - 1)
          .style('alignment-baseline', 'middle')
          .transition('timeline')
          .ease(d3.easeLinear)
          .delay(d => (this.xScale(d3.isoParse(d.startDate)) - this.xScale(this.xMin)) * 5 + 200)
          .text(d => d.shortName)
        ;

        d3.select('.infobox rect')
          .style('fill', '#eee')
          .style('fill-opacity', 0.7)
          .style('stroke', 'gray')
          .style('stroke-opacity', 0.5)
          .style('stroke-width', 2)
        ;
      },
      showProjectDetails: function (d, i, n) {
        const that = d3.select(n[i])
          .select('rect.project');

        d3.select('#viewport').select('text.caret-up')
          .attr('x', this.legendScale(d.totalProjectValue))
          .style('opacity', 1)
        ;
        d3.select('#viewport').select('text.project-value')
          .attr('x', this.legendScale(d.totalProjectValue))
          .attr('y', this.spacing * 3)
          .style('text-anchor', 'middle')
          .style('font-family', '"Yanone Kaffeesatz", sans-serif')
          .style('opacity', 1)
          .text(this.moneyFormat(d.totalProjectValue))
        ;

        that
          .style('fill', 'yellow')
          .style('stroke', 'red')
        ;
        d3.select('.infobox')
          .style('opacity', 1)
        ;

        const text1 = d3.select('.infobox .project-name')
          .text(d.shortName);
        const text2 = d3.select('.infobox .project-dates')
          .text(`${this.dateFormat(d3.isoParse(d.startDate))} - ${this.dateFormat(d3.isoParse(d.endDate))}`);
        const boxWidth = this.spacing * 2 + d3.max([
          text1.node().getComputedTextLength(),
          text2.node().getComputedTextLength()
        ]);
        d3.select('.infobox rect').attr('width', this.boxWidth);
      },
      hideProjectDetails: function (d, i, n) {
        d3.select('#viewport').select('text.caret-up')
          .style('opacity', 0);
        d3.select('#viewport').select('text.project-value')
          .style('opacity', 0);
        d3.select(n[i]).select('rect')
          .style('fill', d => this.colorScale(d.totalProjectValue))
          .style('stroke', 'blueviolet')
        ;
        d3.select('.infobox').style('opacity', 0);
      }
    },
    mounted () {
      this.renderChart;
      console.log('mounted');
    },
    watch: {
      data (val) {
        if (val) {
          this.renderChart();
        }
      }
    }
  }
</script>

<style scoped>
  svg {
    overflow: visible;
    border: thin solid lightgray;
    background-color: azure;
  }

  rect {
    fill: none;
    pointer-events: all;
  }

  .top-border, .right-border {
    stroke: blue;
    shape-rendering: crispEdges;
  }

  g.infobox {
    opacity: 0;
    pointer-events: none;
  }

  g.infobox rect {
    fill: #eee;
    fill-opacity: 0.7;
    stroke: gray;
    stroke-opacity: 0.5;
    stroke-width: 2;
  }

  g.infobox text {
    text-anchor: start;
    alignment-baseline: middle;
  }

  .project-name {
    font-weight: 700;
  }

  .project-dates {
    font-weight: 400;
    font-size: 0.8em;
  }

  .legend text:first-of-type {
    alignment-baseline: middle;
    text-anchor: middle;
  }

  .gradient-bar {
    fill: url(#legendGradient);
    stroke: blueviolet;
    stroke-opacity: 0.5;
  }

  .legend .value-min {
    text-anchor: end;
  }

  .legend .value-min, .legend .value-max {
    alignment-baseline: top;
  }

  .caret-up {
    text-anchor: middle;
    font-family: 'FontAwesome', sans-serif;
    alignment-baseline: middle;
    opacity: 0;
  }
</style>
