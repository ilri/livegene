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
      <table />
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
      percentageFormat: d3.format(',.1'),
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
        height: this.margin.top
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
     * Returns the color scale used for the legend and chart.
     */
    colorScale() {
      return d3.scaleSequential(d3.interpolateReds)
        .domain([0, 1]);
    },
    nestedProjects() {
      return d3.nest()
        .key((d) => d.team)
        .key((d) => d.ilriCode)
        .sortKeys((a, b) => d3.ascending(a, b))
        .sortValues((a, b) => d3.ascending(a.ilriCode, b.ilriCode))
        .entries(this.projects.filter((d) => d.staffRoles.length));
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
    generateTable() {
      this.generateRoles();
      const table = d3.select('table');

      // Creates the table heading
      table
        .append('tr')
        .attr('class', 'header-row')
        .append('td')
      ;
      d3.select('.header-row').selectAll('th')
        .data(this.staffNodes)
        .join('th')
        .text((d) => d)
        .style('font-size', '0.005em')
        .style('border', '0.1px solid black')
      ;
      // Creates a tbody element for each team
      const teams = table.selectAll('tbody.team')
        .data(this.nestedProjects)
        .join('tbody')
        .attr('class', 'team')
        .attr('id', (d) => d.key)
      ;
      // Creates the project rows
      const projects = teams.selectAll('tr.project')
        .data((d) => d.values)
        .join('tr')
        .attr('class', 'project')
        .attr('title', (d) => d.key)
        .text((d) => d.key)
        .style('border', '0.1px solid black')
       ;
      // Adds empty placeholders
      const staffMembers = projects.selectAll('td.staff')
        .data(this.staffNodes)
        .join('td')
        .attr('class', 'staff')
        .attr('title', (d) => d)
        .text(null)
        .style('border', '0.1px solid black')
       ;
    },
    display() {
      this.generateTable();
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

  table {
    border: 1px solid black;
    border-collapse: collapse;
  }
</style>
