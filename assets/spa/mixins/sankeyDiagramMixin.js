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
      colours: {
        team: 'crimson',
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
        .data(() => Object.entries(this.colours))
        .join('g')
        .attr('class', 'item')
        .each((d, i, n) => {
          const item = d3.select(n[i])
            .attr('transform', () => `translate(${25},${i * 30 + 40})`)
            .attr('id', d[0])
          ;
          item.append('circle')
            .attr('r', 10)
            .style('fill', () => d[1])
          ;
          item.append('text')
            .attr('x', '20')
            .attr('y', '5')
            .text(() => (d[0].length > 2
              ? d[0][0].toUpperCase() + d[0].substring(1)
              : d[0].toUpperCase()))
            .style('font-size', '15')
            .style('font-family', '"Open Sans Condensed", sans-serif')
            .style('fill', 'DarkSlateGray')
          ;
        });
    },
    highlightLegend(datum) {
      // Calculating which legend items have to be highlighted
      d3.selectAll(`#${datum.type} text, #${datum.type} circle`)
        .transition()
        .style('font-weight', '800')
        .style('font-size', '17px')
        .attr('r', 13)
      ;
    },
    fadeLegend() {
      // Resetting legend highlights
      d3.selectAll('g.item text, g.item circle')
        .transition()
        .style('font-weight', '400')
        .style('font-size', '15px')
        .attr('r', 10)
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
