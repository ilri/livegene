<template>
  <BaseView>
    <template slot="header">
      Staff Map
    </template>
    <template slot="graphic">
      <b-col
        cols="12"
        lg="10"
        class="px-0"
      >
        <ChartContainer :viewport="viewport">
          <template slot="chart">
            <defs>
              <linearGradient
                id="legendGradient"
                x1="0"
                x2="1"
              >
                <stop
                  offset="0"
                  :style="{ 'stop-color': colorScale(0), 'stop-opacity': 1 }"
                />
                <stop
                  offset="1"
                  :style="{ 'stop-color': colorScale(1), 'stop-opacity': 1 }"
                />
              </linearGradient>
            </defs>
            <clipPath id="clipPath">
              <rect
                :x="margin.left"
                :y="margin.top"
                :width="chart.width"
                :height="chart.height"
              />
            </clipPath>
            <g
              class="view"
              clip-path="url(#clipPath)"
            >
              <g>
                <rect
                  class="background"
                  :x="margin.left"
                  :y="margin.top"
                  :width="chart.width"
                  :height="chart.height"
                />
              </g>
            </g>
            <g class="legend">
              <text
                class="gradient-caption"
                :x="viewport.width / 2"
                :y="legend.topMargin / 1.5"
              >
                Full-time equivalent (FTE) in %
              </text>
              <text
                class="gradient-minimum"
                :x="legend.leftMargin - spacing"
                :y="legend.topMargin + (legend.height / 2)"
              >
                0%
              </text>
              <text
                class="gradient-maximum"
                :x="(legend.leftMargin + legend.width) + spacing"
                :y="legend.topMargin + (legend.height / 2)"
              >
                100%
              </text>
              <rect
                class="gradient-bar"
                :x="legend.leftMargin"
                :y="legend.topMargin"
                :width="legend.width"
                :height="legend.height"
                :rx="4"
                :ry="4"
              />
            </g>
          </template>
        </ChartContainer>
      </b-col>
      <div class="tooltip" />
    </template>
  </BaseView>
</template>

<script>
import * as d3 from 'd3';
import { mapState } from 'vuex';
import BaseView from '../components/BaseView';
import ChartContainer from '../components/ChartContainer';
import baseMixin from '../mixins/baseMixin';

export default {
  name: 'StaffMap',
  components: {
    BaseView,
    ChartContainer,
  },
  mixins: [baseMixin],
  data() {
    return {
      // Holds the id, team, project name and percentage value for each staff member.
      roles: [],
      // Required for placement of the legend labels.
      spacing: 6,
    };
  },
  computed: {
    /**
     * Get the data from Vuex Store
     */
    ...mapState({
      projects: (state) => state.project.projects,
    }),
    /**
     * Gets the base width for calculating the viewport dimensions.
     */
    baseWidth() {
      return window.innerWidth >= 992
        ? window.innerWidth * 0.8333
        : window.innerWidth;
    },
    /**
     * Calculates the dimensions of the viewport.
     */
    viewport() {
      return {
        width: this.baseWidth,
        height: this.chart.height
                + this.margin.top
                + this.margin.bottom,
      };
    },
    /**
     * Calculates the dimensions of the legend.
     */
    legend() {
      return {
        width: this.baseWidth * 0.583,
        height: this.baseWidth * 0.03,
        topMargin: this.baseWidth * 0.05,
        leftMargin: this.baseWidth * 0.2085,
      };
    },
    /**
     * Calculates the viewport's margins.
     */
    margin() {
      return {
        right: this.baseWidth * 0.15,
        left: this.baseWidth * 0.15,
        top: this.legend.height
              + this.legend.topMargin * 1.5,
        bottom: this.baseWidth * 0.05,
      };
    },
    /**
     * Calculates the dimensions of the chart.
     */
    chart() {
      return {
        width: this.baseWidth - (this.margin.left + this.margin.right),
        height: this.projectNodes.length
                * this.xScale.bandwidth(),
      };
    },
    /**
     * Returns an array of staff nodes, used to render the chart's X-axis.
     */
    staffNodes() {
      return [...new Set(this.roles.map((d) => d.staffMember).sort())];
    },
    /**
     * Returns an array of staff nodes, used to render the chart's Y-axis.
     */
    projectNodes() {
      return [...new Set(this.roles.map((d) => d.project).sort())];
    },
    /**
     * Returns the chart's X-Scale.
     */
    xScale() {
      return d3.scaleBand()
        .domain(this.staffNodes)
        .range([this.margin.left, this.baseWidth - this.margin.left])
        .padding(0.05)
      ;
    },
    /**
     * Returns the chart's Y-Scale.
     */
    yScale() {
      return d3.scaleBand()
        .domain(this.projectNodes)
        .range([0, this.chart.height])
        .padding(0.05)
      ;
    },
    /**
     * Returns the color scale used for the legend and chart.
     */
    colorScale() {
      return d3.scaleSequential(d3.interpolateReds)
        .domain([0, 1]);
    },
  },
  methods: {
    /**
     * Formats a staff member's name to: "SURNAME, Name".
     *
     * @param staffMember
     * @param {string} staffMember.lastName
     * @param {string} staffMember.firstName
     * @returns {string}
     */
    formatName(staffMember) {
      return `${staffMember.lastName.toUpperCase()}, ${staffMember.firstName}`;
    },
    generateRoles() {
      this.projects.forEach((parentEl) => {
        parentEl.staffRoles.forEach((role) => {
          this.roles.push({
            project: parentEl.ilriCode,
            team: parentEl.team,
            id: role.id,
            percent: role.percent,
            staffMember: this.formatName(role.staffMember),
          });
        });
      });
    },
    generateChart() {
      this.generateRoles();
      this.generateAxes();
      const svg = d3.select('#viewport');
      const chart = svg.select('g.view > g');

      const cells = chart.selectAll('g.cell')
        .data(Object.values(this.roles))
        .join('g')
        .attr('class', 'cell')
        .attr('transform', () => `translate(${[0, this.margin.top]})`)
      ;
      cells.append('rect')
        .attr('width', this.xScale.bandwidth())
        .attr('height', this.yScale.bandwidth())
        .attr('x', (d) => this.xScale(d.staffMember))
        .attr('y', (d) => this.yScale(d.project))
        .attr('rx', 4)
        .attr('ry', 4)
        .style('fill', (d) => this.colorScale(parseFloat(d.percent)))
        .style('opacity', 0.8)
        .on('mouseenter', (d, i, n) => {
          d3.select(n[i])
            .style('stroke', 'darkslategray')
            .style('opacity', 1)
            .style('stroke-width', 1)
            .style('stroke-opacity', 0)
          ;
          d3.select('div.tooltip')
            .style('opacity', '0.8')
          ;
        })
        .on('mousemove', (d) => {
          d3.select('div.tooltip')
            .html(`FTE of <b>${parseFloat(d.percent)}%</b>`)
            .style('left', `${d3.event.pageX + 20}px`)
            .style('top', `${d3.event.pageY + 20}px`)
          ;
        })
        .on('mouseleave', (d, i, n) => {
          d3.select('div.tooltip')
            .style('opacity', 0)
          ;
          d3.select(n[i])
            .style('stroke', 'none')
            .style('opacity', 0.8)
          ;
        })
      ;
    },
    generateAxes() {
      const svg = d3.select('#viewport');
      // Generates left Y-axis
      svg.append('g')
        .attr('class', 'y-axis')
        .call(d3.axisLeft(this.yScale).tickSize(0))
        .style('font-size', '0.8em')
        .style('font-family', '"Open Sans", sans-serif')
        .select('.domain')
        .remove()
      ;
      // Generates X-axis
      svg.append('g')
        .attr('class', 'x-axis')
        .call(d3.axisTop(this.xScale).tickSize(5))
        .style('font-size', '0.8em')
        .style('font-family', '"Open Sans", sans-serif')
        .select('.domain')
        .remove()
      ;
      // Rotates and conditionally styles X-axis text
      svg.selectAll('.x-axis text')
        .attr('transform', 'translate(10,0) rotate(-45)')
        .style('text-anchor', 'start')
        // Reduces font-size for longer staff roles names of over 25 characters
        .each((d, i, n) => {
          if (d.length > 25) {
            d3.select(n[i])
              .style('font-size', '0.9em')
            ;
          }
        })
      ;
      // Increases top margin by height of X-Axis
      this.margin.top += d3.select('.x-axis').node().getBBox().height;

      d3.select('.x-axis')
        .attr('transform', `translate(0,${this.margin.top})`)
      ;
      d3.select('.y-axis')
        .attr('transform', `translate(${this.margin.left},${this.margin.top})`)
      ;
    },
    display() {
      this.generateChart();
    },
  },
};
</script>

<style scoped>
  .gradient-bar {
    fill: url(#legendGradient);
    stroke: blueviolet;
    stroke-opacity: 0.5;
  }

  .gradient-caption {
    font-size: 1.2em;
    font-family: '"Open Sans Condensed"', sans-serif;
    fill: darkslategrey;
    dominant-baseline: middle;
    text-anchor: middle;
  }

  .gradient-minimum, .gradient-maximum {
    dominant-baseline: middle;
  }

  .gradient-minimum {
    text-anchor: end;
  }

  .tooltip {
    /*positioning*/
    position: absolute;
    /*display & box model*/
    display: block;
    opacity: 0;
    border: thin solid darkslategrey;
    border-radius: 0.5em;
    padding: 2em;
    /*text*/
    font-size: 0.8em;
    font-family: '"Open Sans Condensed"', sans-serif;
    text-align: center;
    dominant-baseline: central;
    /*colors*/
    background: white;
    fill: darkslategrey;
    /*others*/
    pointer-events: none;
  }

  .background {
    fill: white;
    stroke: darkslategrey;
    stroke-opacity: 1;
    stroke-width: 3;
  }
  /**
   * Extra small devices (less than 576px)
   */
  svg {
    font-size: 10px;
  }
  /**
   * Small devices (576px to 768px)
   */
  @media screen and (min-width: 576px) {
    svg {
      font-size: 14px;
    }
  }
  /**
 * Medium sized devices and larger (768px or more)
 */
  @media screen and (min-width: 768px) {
    svg {
      font-size: 16px;
    }
  }
</style>
