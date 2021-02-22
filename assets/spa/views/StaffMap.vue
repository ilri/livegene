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
              <g />
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
      // Holds the id, team, project and percentage value for each staff member.
      roles: [],
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
        height: window.innerHeight,
      };
    },
    /**
     * Calculates the dimensions of the legend.
     */
    legend() {
      return {
        width: this.viewport.width * 0.583,
        height: this.viewport.height * 0.03,
        topMargin: this.viewport.height * 0.05,
        leftMargin: this.viewport.width * 0.2085,
      };
    },
    margin() {
      return {
        right: this.viewport.width * 0.05,
        left: this.viewport.width * 0.05,
        top: this.legend.height + (this.legend.topMargin * 2),
        bottom: this.viewport.height * 0.05,
      };
    },
    chart() {
      return {
        width: this.viewport.width - (this.margin.left + this.margin.right),
        height: this.viewport.height
            - this.margin.top
            - this.margin.bottom,
      };
    },
    staffNodes() {
      return [...new Set(this.roles.map((d) => d.staffMember).sort())];
    },
    projectNodes() {
      return [...new Set(this.roles.map((d) => d.project).sort())];
    },
    xScale() {
      return d3.scaleBand()
        .domain(this.staffNodes)
        .range([this.margin.left, this.margin.left + this.chart.width])
        .padding(0.05)
      ;
    },
    yScale() {
      return d3.scaleBand()
        .domain(this.projectNodes)
        .range([0, this.chart.height])
        .padding(0.05)
      ;
    },
    colorScale() {
      return d3.scaleSequential(d3.interpolateReds)
        .domain([0, 1]);
    },
  },
  methods: {
    generateRoles() {
      this.projects.forEach((parentEl) => {
        parentEl.staffRoles.forEach((role) => {
          this.roles.push({
            project: parentEl.ilriCode,
            team: parentEl.team,
            id: role.id,
            percent: role.percent,
            staffMember: role.staffMember.lastName,
          });
        });
      });
    },
    generateChart() {
      this.generateRoles();
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
        .style('stroke-width', 4)
        .style('stroke', 'none')
        .style('opacity', 0.8)
      ;
      // Generates left Y-Axis
      chart.append('g')
        .style('font-size', 15)
        .call(d3.axisLeft(this.yScale).tickSize(0))
        .select('.domain')
        .remove()
      ;
      // Generates right Y-Axis
      chart.append('g')
        .style('font-size', 15)
        .call(d3.axisTop(this.xScale).tickSize(10))
        .select('.domain')
        .remove()
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
