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
  data() {
    return {
      checked: false,
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
     * Returns the color scale used for the legend and table cells.
     */
    colorScale() {
      return d3.scaleSequential(d3.interpolateReds)
        .domain([0, 1]);
    },
    /**
     * Returns an array of project objects, grouped into a hierarchical tree structure.
     *
     * First grouped by TEAMS in alphabetical order,
     * Secondly grouped by PROJECTS in alphabetical order.
     * The values of the project keys are STAFF ROLES.
     */
    nestedProjects() {
      return d3.nest()
        .key((d) => d.team)
        .sortKeys((a, b) => d3.ascending(a, b))
        .key((d) => d.ilriCode)
        .sortKeys((a, b) => d3.ascending(a, b))
        .entries(this.projects)
      ;
    },
  },
  watch: {
    checked(newValue) {
      if (newValue === false) {
        this.resetTableStyle();
        d3.selectAll("input[type='checkbox']")
          .property('disabled', false)
        ;
      } else {
        d3.selectAll("input[type='checkbox']:not(:checked)")
          .property('disabled', true)
        ;
      }
    },
  },
  methods: {
    /**
     * Returns an array of unique staff member objects.
     * Sorted alphabetically by last name.
     *
     * An optional identifier may be used to filter the project array.
     */
    generateStaffNodes(identifier) {
      const projectArray = identifier
        ? this.projects.filter((project) => Object.values(project).includes(identifier))
        : this.projects;

      const staffRoles = projectArray.flatMap((d) => d.staffRoles);
      // returns array of distinct staff members
      const staffArray = [...new Map(
        staffRoles.map((d) => [d.staffMember.lastName, d.staffMember]),
      ).values(),
      ];
      // sorts by last name
      return staffArray.sort((a, b) => a.lastName.localeCompare(b.lastName));
    },

    generateTable() {
      const table = d3.select('table');
      const staffNodes = this.generateStaffNodes();

      // Creates a t-body element for each team.
      const teams = table.selectAll('tbody.team')
        .data(this.nestedProjects)
        .join('tbody').attr('class', 'team')
        .attr('id', (d) => d.key.replaceAll(' ', '_'))
        .style('border-top', '4px solid #F0F0F0')
        .style('cursor', 'default')
      ;
      // Creates a project row for every project, sorted by team.
      const projects = teams.selectAll('tr.project')
        .data((d) => d.values)
        .join('tr').attr('class', 'project')
        .attr('id', (d) => `${d.key}`)
        .style('cursor', 'default')
       ;

      // Inserts a column before first column for project labels
      projects.insert('th', 'td:first-of-type').attr('class', 'project-label')
        .text((d) => d.key)
        .style('font-size', '0.7em')
        .style('padding', '0.7em')
        .on('mouseenter', this.highlightProject)
        .on('mouseleave', this.updateTable)
      ;

      this.generateTableCells(staffNodes);

      // Inserts a column after last column for team labels
      teams.select('tr:first-of-type')
        .append('th').attr('class', 'team-label')
        .attr('id', (d) => d.key.replaceAll(' ', '_'))
        .attr('rowspan', (d) => d.values.length)
        .text((d) => d.key)
        .style('font-size', '0.7em')
        .style('padding', '0.7em')
        .on('mouseenter', this.highlightTeam)
        .on('mouseleave', this.resetTableStyle)
      ;
      // Renders the project and team labels 'sticky'.
      d3.selectAll('tbody th, tr.header-row > td')
        .style('left', '-2px')
        .style('right', '-2px')
        .style('position', 'sticky')
        .style('background-color', 'white')
      ;
      // Changes background colour of every second t-body element light gray
      d3.selectAll('tbody:nth-child(even)')
        .selectAll('th')
        .style('background-color', '#F0F0F0')
      ;

      // Creates the header row
      table.insert('tr', 'tbody:first-of-type')
        .attr('class', 'header-row')
        .style('cursor', 'default')
      ;

      // Creates the menu row
      table.insert('tr', 'tbody:first-of-type')
        .attr('class', 'menu')
      ;
      // Fills the header row with staff labels
      this.generateStaffLabels(staffNodes);
      // Fills the menu row with checkboxes
      this.generateStaffCheckboxes(staffNodes);
    },
    generateTableCells(staffArray) {
      const projects = d3.selectAll('tbody.team').selectAll('tr.project');

      // Creates empty cells for every staff member.
      projects.selectAll('td.staff')
        .data(staffArray)
        .join('td').attr('class', 'staff')
        .attr('id', (d) => `staffMember_${d.id}`)
        .text(null)
        .style('border', '3.5px solid white')
        .style('border-radius', '0.7em')
        .style('background-color', this.colorScale(0))
      ;
      // Populates table with FTE percentages.
      this.projects.forEach((project) => {
        project.staffRoles.forEach((role) => {
          d3.select(`#${project.ilriCode} > #staffMember_${role.staffMember.id}`)
            .text(parseFloat(role.percent))
            .style('background-color', (role.percent > 0 ? this.colorScale(parseFloat(role.percent)) : 'PowderBlue'))
            .style('color', (role.percent) > 0.5 ? 'white' : 'black')
            .style('cursor', 'default')
            .on('mouseenter', this.showTooltip)
            .on('mousemove', this.moveTooltip)
            .on('mouseleave', this.hideTooltip)
          ;
        });
      });
    },
    /**
     *  Creates staff labels for every staff member.
     *
     *  Displayed above the staff checkboxes.
     */
    generateStaffLabels(staffArray) {
      const header = d3.select('tr.header-row');
      // Creates table header elements for every staff node.
      const labelNodes = header.selectAll('th.staff-label')
        .data(staffArray)
        .join('th')
        .attr('class', 'staff-label')
        .attr('id', (d) => `staffMember_${d.id}`)
        .style('position', 'sticky')
        .style('top', '0px')
        .style('background-color', 'white')
        .style('height', '7.5em')
        .style('white-space', 'nowrap')
        .each((d, i, n) => {
          d3.select(n[i])
            .style('z-index', `${staffArray.length + 1 - i}`)
          ;
        })
      ;
      // Wraps text in div and span elements for rotating.
      labelNodes.append('div')
        .style('transform', 'rotate(315deg) translate(-0.8em,2.2em)')
        .style('max-width', '2.5em')
        .append('span')
        .text((d) => this.formatName(d))
        .style('font-size', (d) => (this.formatName(d).length < 20 ? '0.7em' : '0.6em'))
        .style('border-bottom', 'thin solid gainsboro')
        .on('mouseenter', this.highlightStaffMember)
        .on('mouseleave', this.resetTableStyle)
      ;
      // Inserts empty table cells at position (0,0) and (n,0)
      header
        .insert('td', 'th:first-of-type')
        .style('position', 'sticky')
        .style('height', '7.5em')
        .style('top', '0')
        .style('left', '0')
        .style('background-color', 'white')
        .style('z-index', '1')
      ;
      header
        .append('td', 'th:last-of-type')
        .style('position', 'sticky')
        .style('height', '7.5em')
        .style('top', '0')
        .style('right', '0')
        .style('background-color', 'white')
        .style('z-index', '1')
      ;
    },
    /**
     *  Creates checkboxes for locking into position
     *  a given staff member's event feature.
     *
     *  Displayed underneath the staff labels.
     */
    generateStaffCheckboxes(staffArray) {
      const headerDimensions = d3.select('tr.header-row').node().getBoundingClientRect();
      const menu = d3.select('tr.menu');

      // Generates a checkbox for every staff label
      menu.selectAll('th.checkbox')
        .data(staffArray)
        .join('th').attr('class', 'checkbox')
        .style('height', '1em')
        .style('background-color', 'gainsboro')
        .style('position', 'sticky')
        .style('top', `${headerDimensions.height}px`)
        .append('input')
        .attr('type', 'checkbox')
        .each((d, i, n) => {
          d3.select(n[i])
            .on('click.a', this.highlightStaffMember)
            .on('click.b', () => { this.checked = !this.checked; })
          ;
        })
      ;
      // Creates empty cells at the (1,0) and (n,1) position.
      menu.insert('td', 'th:first-of-type')
        .style('position', 'sticky')
        .style('height', '2em')
        .style('top', `${headerDimensions.height}px`)
        .style('left', '-2px')
        .style('background-color', 'gainsboro')
        .style('z-index', `${staffArray.length + 2}`)
      ;
      menu.append('td', 'th:last-of-type')
        .style('position', 'sticky')
        .style('height', '2em')
        .style('top', `${headerDimensions.height}px`)
        .style('right', '-2px')
        .style('background-color', 'gainsboro')
        .style('z-index', `${staffArray.length + 2}`)
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
    highlightStaffMember(d) {
      // Only allows event when no checkboxes are ticked
      if (this.checked === false) {
        const staffID = d.id;

        // Highlights STAFF MEMBER label
        d3.select(`tr.header-row > th.staff-label#staffMember_${staffID} > div > span`)
          .transition()
          .style('color', this.colorScale(0.8))
          .style('font-size', () => (this.formatName(d).length < 20 ? '0.8em' : '0.65em'))
          .style('border-bottom', 'thin solid darkslategray')
        ;
        // Creates a highlighted path for all associated STAFF MEMBER cells
        d3.selectAll(`tbody > tr.project > td#staffMember_${staffID}`)
          .transition()
          .style('background-color', 'PowderBlue')
        ;
        // Retains original FTE cell colours
        this.projects.forEach((project) => {
          project.staffRoles.forEach((role) => {
            d3.select(`#${project.ilriCode} > #staffMember_${role.staffMember.id}`)
              .transition()
              .style('background-color', (role.percent > 0 ? this.colorScale(parseFloat(role.percent)) : 'PowderBlue'))
            ;
          });
        });
        this.projects.forEach((project) => {
          project.staffRoles.forEach((role) => {
            if (role.staffMember.id === staffID) {
              // Highlights TEAM label
              const team = project.team.replaceAll(' ', '_');
              d3.selectAll(`tbody#${team} > tr > th.team-label`)
                .transition()
                .style('background-color', 'PowderBlue')
              ;
              // Highlight PROJECT label
              const ilriCode = project.ilriCode.replaceAll(' ', '_');
              d3.selectAll(`tbody > tr#${ilriCode} > th.project-label`)
                .transition()
                .style('background-color', 'PowderBlue')
              ;
            }
          });
        });
      }
    },
    highlightTeam(d) {
      // Only allows event when no checkboxes ticked
      if (this.checked === false) {
        const teamID = d.key.replaceAll(' ', '_');
        const team = d3.select(`tbody#${teamID}`);

        // Highlights TEAM borders
        team
          .transition()
          .style('border-color', 'PowderBlue')
        ;
        d3.select(`tbody#${teamID} + tbody`)
          .transition()
          .style('border-color', 'PowderBlue')
        ;
        // Highlights PROJECT and TEAM labels
        team
          .selectAll('tr > th')
          .transition()
          .style('background-color', 'PowderBlue')
        ;
        this.projects.forEach((project) => {
          if (project.team === teamID) {
            project.staffRoles.forEach((role) => {
            // Highlights STAFF MEMBER labels
              const staffID = role.staffMember.id;
              d3.select(`tr.header-row > th.staff-label#staffMember_${staffID} > div > span`)
                .transition()
                .style('color', this.colorScale(0.8))
                .style('font-size', () => (this.formatName(role.staffMember).length < 20 ? '0.8em' : '0.65em'))
                .style('border-bottom', 'thin solid darkslategray')
              ;
            });
          }
        });
      }
    },
    highlightProject(d) {
      // Only allows event when no checkboxes ticked
      if (this.checked === false) {
        const projectCode = d.key;
        const projectLabel = d3.select(`tbody > tr#${projectCode}`);
        const staffNodes = this.generateStaffNodes(projectCode);

        // Removes duplicated elements
        d3.select('tr.header-row').selectAll('td, div > span').remove();
        d3.select('tr.menu').selectAll('td, input').remove();

        // Updates table cells
        this.generateTableCells(staffNodes);
        // Updates staff member labels
        this.generateStaffLabels(staffNodes);
        // Updates checkboxes
        this.generateStaffCheckboxes(staffNodes);

        // Highlights PROJECT labels
        projectLabel.selectAll('th.project-label')
          .transition()
          .style('background-color', 'PowderBlue')
        ;

        this.projects.forEach((project) => {
          if (project.ilriCode === projectCode) {
            // Highlights TEAM labels
            const teamID = project.team.replaceAll(' ', '_');
            d3.select(`tbody > tr > th.team-label#${teamID}`)
              .transition()
              .style('background-color', 'PowderBlue')
            ;
            // Highlights STAFF MEMBER labels
            project.staffRoles.forEach((role) => {
              const staffID = role.staffMember.id;
              d3.select(`tr.header-row > th.staff-label#staffMember_${staffID} > div > span`)
                .transition()
                .style('color', this.colorScale(0.8))
                .style('font-size', () => (this.formatName(role.staffMember).length < 20 ? '0.8em' : '0.65em'))
                .style('border-bottom', 'thin solid darkslategray')
              ;
            });
          }
        });
      }
    },
    resetTableStyle() {
      // Only allows event when no checkboxes ticked
      if (this.checked === false) {
        // Resets STAFF MEMBER labels
        d3.selectAll('tr.header-row > th.staff-label > div > span')
          .transition()
          .style('color', 'black')
          .style('border-bottom', 'thin solid gainsboro')
          .each((d, i, n) => {
            if (this.formatName(d).length < 20) {
              d3.select(n[i])
                .style('font-size', '0.7em')
              ;
            } else {
              d3.select(n[i])
                .style('font-size', '0.6em')
              ;
            }
          })
        ;
        // Resets T-BODY labels
        d3.selectAll('tbody.team')
          .style('border-color', '#F0F0F0')
        ;
        d3.selectAll('tbody:nth-child(even)')
          .transition()
          .selectAll('th')
          .style('background-color', '#F0F0F0')
        ;
        d3.selectAll('tbody:nth-child(odd)')
          .transition()
          .selectAll('th')
          .style('background-color', 'white')
        ;
        // Resets PROJECT cells
        d3.selectAll('tr.project > td')
          .transition()
          .style('background-color', this.colorScale(0))
        ;
        this.projects.forEach((project) => {
          project.staffRoles.forEach((role) => {
            d3.select(`#${project.ilriCode} > #staffMember_${role.staffMember.id}`)
              .transition()
              .style('background-color', (role.percent > 0 ? this.colorScale(parseFloat(role.percent)) : 'PowderBlue'))
            ;
          });
        });
      }
    },
    updateTable() {
      // Only allows event when no checkboxes ticked
      if (this.checked === false) {
        d3.selectAll('table > *').remove();
        this.generateTable();
      }
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
    height: 90vh;
    margin: 1% auto 5% auto;
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
