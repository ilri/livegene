<template>
  <BaseView>
    <template slot="header">
      Staff Map
    </template>
    <template slot="graphic">
      <b-col
        cols="12"
        lg="10"
        class="viewport"
      >
        <div class="legend-container">
          <svg
            width="100%"
            height="100px"
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
                :x="'50%'"
                :y="'30%'"
              >
                Full-time equivalent (FTE) in %
              </text>
              <text
                class="gradient-minimum"
                :x="'10%'"
                :y="'60%'"
              >
                0%
              </text>
              <text
                class="gradient-maximum"
                :x="'90%'"
                :y="'60%'"
              >
                100%
              </text>
              <rect
                class="gradient-bar"
                :x="'12.5%'"
                :y="'45%'"
                :width="'75%'"
                :height="'30%'"
                :rx="4"
                :ry="4"
              />
            </g>
          </svg>
        </div>
        <div class="table-container">
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
import formatNameMixin from '../mixins/formatNameMixin';

export default {
  name: 'StaffMap',
  components: {
    BaseView,
  },
  mixins: [baseMixin, formatNameMixin],
  computed: {
    /**
     * Get the data from Vuex Store
     */
    ...mapState({
      projects: (state) => state.project.projects,
    }),
    /**
     * Returns an array of unique staff member objects, sorted alphabetically by last name.
     */
    staffNodes() {
      const staffRoles = this.projects.flatMap((d) => d.staffRoles);
      // returns array of distinct staff members
      const staffArray = [...new Map(
        staffRoles.map((d) => [d.staffMember.lastName, d.staffMember]),
      ).values(),
      ];
      // sorts by last name
      return staffArray.sort((a, b) => {
        let lastNameA = a.lastName.toUpperCase();
        let lastNameB = b.lastName.toUpperCase();
        if (lastNameA < lastNameB) {
          return -1;
        }
        if (lastNameA > lastNameB) {
          return 1;
        }
        return 0;
      });
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
        .entries(this.projects)
      ;
    },
  },
  methods: {
    generateTable() {
      const table = d3.select('table');

      // Creates a tbody element for each team element.
      const teams = table.selectAll('tbody.team')
        .data(this.nestedProjects)
        .join('tbody').attr('class', 'team')
        .attr('id', (d) => d.key)
        .style('border-top', '4px solid #F0F0F0')
      ;
      // Creates a project row for every project, sorted by team.
      const projects = teams.selectAll('tr.project')
        .data((d) => d.values)
        .join('tr').attr('class', 'project')
        .attr('id', (d) => d.key)
       ;
      // Creates empty cells for every staff member.
      projects.selectAll('td.staff')
        .data(this.staffNodes)
        .join('td').attr('class', 'staff')
        .attr('id', (d) => `staff_member_${d.id}`)
        .text(null)
        .style('border', '3.5px solid white')
        .style('border-radius', '0.7em')
        .style('background-color', this.colorScale(0))
      ;
      // Populates table with FTE percentages.
      this.projects.forEach((project) => {
        project.staffRoles.forEach((role) => {
          d3.select(`#${project.ilriCode} > #staff_member_${role.staffMember.id}`)
            .text(parseFloat(role.percent))
            .style('background-color', (role.percent > 0 ? this.colorScale(parseFloat(role.percent)) : 'PowderBlue'))
            .style('color', (role.percent) > 0.5 ? 'white' : 'black')
            .on('mouseenter', this.showTooltip)
            .on('mousemove', this.moveTooltip)
            .on('mouseleave', this.hideTooltip)
          ;
        });
      });

      // Inserts a column before first column for project labels
      projects.insert('th', 'td:first-of-type').attr('class', 'project-label')
        .text((d) => d.key)
        .style('font-size', '0.7em')
        .style('padding', '0.7em')
      ;
      // Inserts a column after last column for team labels
      teams.select('tr:first-of-type')
        .append('th').attr('class', 'team-label')
        .attr('id', (d) => d.key)
        .attr('rowspan', (d) => d.values.length)
        .text((d) => d.key)
        .style('font-size', '0.7em')
        .style('padding', '0.7em')
      ;
      // Inserts a row above first row for staff labels
      const header = table.insert('tr', 'tbody:first-of-type')
        .attr('class', 'header-row')
      ;
      header.selectAll('th.staff-label')
        .data(this.staffNodes)
        .join('th').attr('class', 'staff-label')
        .style('height', '7em')
        .style('white-space', 'nowrap')
        .append('div')
        .style('transform', 'rotate(315deg) translate(-0.8em,1.8em)')
        .style('max-width', '2.5em')
        .append('span')
        .text((d) => this.formatName(d))
        .style('font-size', (d) => (this.formatName(d).length < 20 ? '0.7em' : '0.6em'))
        .style('border-bottom', 'thin solid gainsboro')
      ;
      // Insert empty cell at table position 0,0
      header.insert('td', 'th:first-of-type')
        .style('z-index', '1')
        .style('opacity', '80%')
      ;
      // Insert empty cell at table position n,0
      header.append('td', 'th:last-of-type')
        .style('z-index', '1')
        .style('opacity', '80%')
      ;
      // Renders the project and team labels 'sticky'.
      d3.selectAll('tbody th, tr.header-row > td')
        .style('left', '0px')
        .style('right', '0px')
        .style('position', 'sticky')
        .style('background-color', 'white')
      ;
      // Changes background colour of every second t-body element light gray
      d3.selectAll('tbody:nth-child(even)')
        .selectAll('th')
        .style('background-color', '#F0F0F0')
      ;
    },
    showTooltip(d, i, n) {
      const rolePercentage = parseFloat(n[0].innerText) * 100;
      d3.select(n[i])
        .style('background-color', 'darkgray')
        .style('color', 'white')
      ;
      d3.select('div.tooltip')
        .style('opacity', '0.9')
        .html(`${this.formatName(d)}<hr>Percentage Value: <b>${rolePercentage}%</b>`)
      ;
    },
    moveTooltip() {
      d3.select('div.tooltip')
        .style('left', `${d3.event.pageX + 10}px`)
        .style('top', `${d3.event.pageY + 10}px`)
      ;
    },
    hideTooltip(d, i, n) {
      const rolePercentage = n[0].innerText;
      d3.select('div.tooltip')
        .style('opacity', 0)
      ;
      d3.select(n[i])
        .style('background-color', (rolePercentage > 0 ? this.colorScale(rolePercentage) : 'PowderBlue'))
        .style('color', (rolePercentage) > 0.5 ? 'white' : 'black')
      ;
    },
    display() {
      this.generateTable();
    },
  },
};
</script>

<style scoped>
  /**
   * Extra small devices (up to 576px)
   */
  .viewport {
    background-color: azure;
    border: thin solid lightgray;
    margin-bottom: auto;
    font-size: 10px;
  }

  /**
   * Small devices (576px to 768px)
   */
  @media screen and (min-width: 576px) {
    .viewport {
      font-size: 14px;
    }
  }
  /**
   * Medium sized devices and larger (768px or more)
   */
  @media screen and (min-width: 768px) {
    .viewport {
      font-size: 16px;
    }
  }

  .legend-container {
    width: 70%;
    margin: auto;
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
    font-size: 1em;
  }

  .gradient-minimum {
    text-anchor: end;
  }

  .table-container {
    overflow: auto;
    width: 90%;
    margin: 5% auto;
    border: thin solid gainsboro;
  }

  table {
    background-color: white;
    border-collapse: collapse;
    font-family: "Arial Narrow", sans-serif;
  }

  /**
 * Extra small devices (up to 576px)
 */
  .tooltip {
    /*positioning*/
    position: absolute;
    /*display & box model*/
    display: inline;
    opacity: 0;
    border: thin solid darkslategrey;
    border-radius: 0.5em;
    padding: 1em;
    /*text*/
    font-size: 0.6em;
    font-family: "Arial Narrow", sans-serif;
    text-align: center;
    dominant-baseline: central;
    white-space: normal;
    word-wrap: break-word;
    /*colors*/
    background: white;
    fill: darkslategrey;
    /*others*/
    pointer-events: none;
  }

  /**
   * Small devices (576px to 768px)
   */
  @media screen and (min-width: 576px) {
    .tooltip {
      font-size: 0.7em;
      padding: 1.5em;
    }
  }
  /**
   * Medium sized devices and larger (768px or more)
   */
  @media screen and (min-width: 768px) {
    .tooltip {
      font-size: 0.9em;
      padding: 2em;
    }
  }

</style>
