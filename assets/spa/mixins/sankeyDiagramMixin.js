import { mapState } from 'vuex';
import { select, selectAll } from 'd3';

const d3 = {
  select,
  selectAll,
};

export default {
  data() {
    return {
      // hold the teams extracted from projects
      teams: new Set(),
      // hold all the nodes: staff, projects, teams
      nodes: [],
      // hold the links between staff and projects and between projects and teams
      links: [],
      nodeTypes: {
        team: {
          colour: 'crimson',
          label: 'Team',
        },
      },
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
     * Calculate the dimensions used to set width and height of the SVG element.
     *
     * @returns {{width: *, height: *}}
     */
    viewport() {
      const width = window.innerWidth >= 992
        ? window.innerWidth * 0.8333
        : window.innerWidth;
      const height = window.innerWidth < 576 ? width * 2 : Math.round(width / 1.6);
      return {
        width,
        height,
      };
    },
  },
  methods: {
    /**
     * Format person's name like "SURNAME, Name"
     *
     * @param person
     * @param {string} person.lastName
     * @param {string} person.firstName
     * @returns {string}
     */
    formatName(person) {
      return `${person.lastName.toUpperCase()}, ${person.firstName}`;
    },
    generateLegend() {
      // Representing each node type in a legend
      d3.select('#viewport > g')
        .append('g')
        .attr('class', 'legend')
        .selectAll('g.item')
        .data(Object.entries(this.nodeTypes))
        .join('g')
        .attr('class', 'item')
        .each((d, i, n) => {
          // compute x coordinates of node rectangles
          const coordinates = [...new Set(this.nodes.map((x) => (x.x1 + x.x0) / 2))].sort(
            (a, b) => a - b,
          );
          // placement of legend items above associated nodes
          const item = d3.select(n[i])
            .attr('transform', () => `translate(${coordinates[i]},${this.margin.top / 2})`)
            .attr('id', d[0])
          ;
          item.append('circle')
            .attr('r', '1.2%')
            .style('fill', () => d[1].colour)
          ;
          item.append('text')
            .attr('x', () => (window.innerWidth >= 576 ? '2.5%' : '3.2%'))
            .attr('y', 5)
            .text(() => (d[1].label))
            // Font-size is subject to breakpoint for small devices (less than 576px)
            .style('font-size', () => (window.innerWidth >= 576 ? '0.9em' : '1.1em'))
            .style('font-family', '"Open Sans Condensed", sans-serif')
            .style('fill', 'DarkSlateGray')
          ;
        });
      this.generateLegendBackground();
    },
    generateLegendBackground() {
      d3.select('.legend')
        .insert('rect', '.item')
        .attr('width', this.viewport.width * 0.95)
        .attr('height', this.margin.top / 2)
        .attr('x', this.viewport.width * 0.025)
        .attr('y', this.margin.top / 4)
        .style('fill', 'white')
        .style('stroke', 'gainsboro')
      ;
      d3.select('.legend')
        .on('mouseenter', () => {
          // Increasing dimensions of legend box
          d3.select('.legend > rect')
            .transition()
            .duration(250)
            .attr('width', this.viewport.width)
            .attr('height', this.margin.top / 1.5)
            .attr('x', 0)
            .attr('y', this.margin.top / 6)
          ;
          // Highlighting all legend items
          d3.selectAll('g.item text, g.item circle')
            .transition()
            .duration(250)
            .attr('r', '1.4%')
            // Font-size is subject to breakpoint for small devices (less than 576px)
            .style('font-size', () => (window.innerWidth >= 576 ? '1.1em' : '1.2em'))
            .style('font-weight', '800')
          ;
        })
        .on('mouseleave', this.fadeLegend)
      ;
    },
    highlightLegend(datum) {
      // Letting legend items fade in opacity
      d3.selectAll('g.item text, g.item circle')
        .transition()
        .duration(250)
        .style('opacity', 0.5)
      ;
      // Calculating which legend item has to be highlighted
      d3.selectAll(`#${datum.type} text, #${datum.type} circle`)
        .transition()
        .duration(250)
        .attr('r', '1.4%')
        // Font-size is subject to breakpoint for small devices (less than 576px)
        .style('font-size', () => (window.innerWidth >= 576 ? '1.1em' : '1.2em'))
        .style('font-weight', '800')
        .style('opacity', 1)
      ;
      // Increasing dimensions of legend background
      d3.select('.legend > rect')
        .transition()
        .duration(250)
        .attr('width', this.viewport.width)
        .attr('height', this.margin.top / 1.5)
        .attr('x', 0)
        .attr('y', this.margin.top / 6)
      ;
    },
    fadeLegend() {
      // Resetting legend items
      d3.selectAll('g.item text, g.item circle')
        .transition()
        .duration(250)
        .attr('r', '1.2%')
        // Font-size is subject to breakpoint for small devices (less than 576px)
        .style('font-size', () => (window.innerWidth >= 576 ? '0.9em' : '1.1em'))
        .style('font-weight', '400')
        .style('opacity', 1)
      ;
      // Resetting legend background
      d3.select('.legend > rect')
        .transition()
        .duration(250)
        .attr('width', this.viewport.width * 0.95)
        .attr('height', this.margin.top / 2)
        .attr('x', this.viewport.width * 0.025)
        .attr('y', this.margin.top / 4)
      ;
    },
  },
  mounted() {
    if (this.projects.length) {
      this.renderChart();
    }
  },
  watch: {
    projects(val) {
      if (val.length) {
        this.renderChart();
      }
    },
  },
};
