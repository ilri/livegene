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
        <svg
          width="100%"
        >
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
              :x="baseWidth / 2"
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
        </svg>
        <div class="table-wrapper">
          <table />
        </div>
      </b-col>
      <div class="tooltip" />
    </template>
  </BaseView>
</template>

<script>
import * as d3 from 'd3';
import { mapState } from 'vuex';
import BaseView from '../components/BaseView';
import baseMixin from '../mixins/baseMixin';

export default {
  name: 'StaffMap',
  components: {
    BaseView,
  },
  mixins: [baseMixin],
  data() {
    return {
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
     * Returns an array of all staff names.
     */
    staffNodes() {
      const staffRoles = this.projects.flatMap((d) => d.staffRoles);
      return [...new Set(staffRoles.map((d) => this.formatName(d.staffMember)).sort())];
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
    generateTable() {
      const table = d3.select('table');

      // Creates a tbody element for each team element.
      const teams = table.selectAll('tbody.team')
        .data(this.nestedProjects)
        .join('tbody')
        .attr('class', 'team')
        .attr('id', (d) => d.key)
      ;
      // Creates a project row for every project, sorted by team.
      const projects = teams.selectAll('tr.project')
        .data((d) => d.values)
        .join('tr')
        .attr('class', 'project')
        .attr('id', (d) => d.key)
       ;
      // Creates empty cells for every staff member.
      projects.selectAll('td.staff')
        .data(this.staffNodes)
        .join('td')
        .attr('class', 'staff')
        .attr('id', (d) => d.split(', ')[0])
        .text(null)
        .style('border-collapse', 'collapse')
        .style('border', 'thick solid white')
        .style('background-color', this.colorScale(0))
      ;
      // Populates table with FTE percentages.
      this.projects.forEach((parentEl) => {
        parentEl.staffRoles.forEach((role) => {
          d3.select(`#${parentEl.ilriCode} > #${this.formatName(role.staffMember).split(', ')[0]}`)
            .text((parseFloat(role.percent) > 0 ? parseFloat(role.percent) : null))
            .style('background-color', this.colorScale(parseFloat(role.percent)))
            .style('color', (role.percent) > 0.5 ? 'white' : 'black');
        });
      });

      // Inserts a column before first column for project labels
      projects.insert('th', 'td:first-of-type')
        .attr('class', 'project-label')
        .text((d) => d.key)
        .style('font-size', '0.7em')
      ;
      // Inserts a column after last column for team labels
      teams.select('tr:first-of-type').append('th')
        .attr('rowspan', (d) => d.values.length)
        .attr('scope', 'rowgroup')
        .attr('class', 'project-label')
        .attr('id', (d) => d.key)
        .text((d) => d.key)
        .style('font-size', '0.7em')
      ;
      // Inserts a row above first row for staff labels
      const header = table.insert('tr', 'tbody:first-of-type')
        .attr('class', 'header-row')
      ;
      header.selectAll('th.staff-label')
        .data(this.staffNodes)
        .join('th')
        .attr('class', 'staff-label')
        .text((d) => d)
        .style('font-size', '0.7em')
        .style('border', 'thick solid white')
      ;
      // insert empty cell at table position 0,0
      header.insert('th', 'th:first-of-type')
      ;
      // insert empty cell at table position n,0
      header.append('th', 'th:last-of-type')
      ;
      // Renders the project and team labels 'sticky'.
      d3.selectAll('tbody th, tr.header-row > th:first-of-type, tr.header-row > th:last-of-type, th.team-labels')
        .style('left', '0px')
        .style('right', '0px')
        .style('position', 'sticky')
        .style('background-color', 'white')
      ;
    },
    display() {
      this.generateTable();
    },
  },
};
</script>

<style scoped>
  .px-0 {
    border: thin solid lightgray;
    background-color: azure;
    margin-bottom: auto;
  }

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

  .table-wrapper {
    overflow: scroll;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 2%;
    padding-bottom: 5%;
  }

  /**
   * Extra small devices (less than 576px)
   */
  table {
    background: white;
    font-size: 10px;
  }
  /**
   * Small devices (576px to 768px)
   */
  @media screen and (min-width: 576px) {
    table {
      font-size: 14px;
    }
  }
  /**
 * Medium sized devices and larger (768px or more)
 */
  @media screen and (min-width: 768px) {
    table {
      font-size: 16px;
    }
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

</style>
