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
          <g slot="chart" />
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
     * Gets the base width for calculating the viewport and chart dimensions.
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
    staffNodes() {
      return [...new Set(this.roles.map((d) => d.staffMember).sort())];
    },
    projectNodes() {
      return [...new Set(this.roles.map((d) => d.project).sort())];
    },
    xScale() {
      return d3.scaleBand()
        .domain(this.staffNodes)
        .range([0, this.viewport.width])
        .padding(0.05)
      ;
    },
    yScale() {
      return d3.scaleBand()
        .domain(this.projectNodes)
        .range([0, this.viewport.height])
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
      const chart = d3.select('#viewport > g');
      const cells = chart.selectAll('g.cell')
        .data(Object.values(this.roles))
        .join('g')
        .attr('class', 'cell')
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
    },
    display() {
      this.generateChart();
    },
  },
};
</script>

<style scoped>

</style>
