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
          position: 4,
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
      const height = window.innerWidth < 992 ? width * 2 : Math.round(width / 1.6);
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
        .selectAll('g.representations')
        .data(Object.entries(this.nodeTypes).sort((a, b) => a[1].position - b[1].position))
        .join('g')
        .attr('class', 'item')
        .each((d, i, n) => {
          // compute x coordinates of node rectangles
          let coordinates = [...new Set(this.nodes.map((x) => (x.x1 + x.x0) / 2))].sort();
          // placement of legend items above associated nodes
          const item = d3.select(n[i])
            .attr('transform', () => `translate(${coordinates[i]},${this.margin.top / 2})`)
            .attr('id', d[0])
          ;
          item.append('circle')
            .attr('r', 10)
            .style('fill', () => d[1].colour)
          ;
          item.append('text')
            .attr('x', '20')
            .attr('y', '5')
            .text(() => (d[1].label))
            .style('font-size', '15')
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
            .attr('y', 10)
          ;
          // Highlighting all legend items
          d3.selectAll('g.item text, g.item circle')
            .transition()
            .duration(250)
            .style('font-weight', '800')
            .style('font-size', '17px')
            .attr('r', 13)
          ;
        })
        .on('mouseleave', this.fadeLegend)
      ;
    },
    highlightLegend(datum) {
      // Letting legend items fade in opacity
      d3.selectAll('g.item text, g.item circle')
        .transition()
        .style('opacity', 0.5)
      ;
      // Calculating which legend item has to be highlighted
      d3.selectAll(`#${datum.type} text, #${datum.type} circle`)
        .transition()
        .duration(250)
        .style('font-weight', '800')
        .style('font-size', '17px')
        .attr('r', 13)
        .style('opacity', 1)
      ;
      // Increasing dimensions of legend background
      d3.select('.legend > rect')
        .transition()
        .duration(250)
        .attr('width', this.viewport.width)
        .attr('height', this.margin.top / 1.5)
        .attr('x', 0)
        .attr('y', 10)
      ;
    },
    fadeLegend() {
      // Resetting legend items
      d3.selectAll('g.item text, g.item circle')
        .transition()
        .duration(250)
        .attr('r', 10)
        .style('font-weight', '400')
        .style('font-size', '15px')
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
