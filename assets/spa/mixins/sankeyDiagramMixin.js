import { mapState } from 'vuex';

export const sankeyDiagramMixin = {
  data() {
    return {
      // hold the teams extracted from projects
      teams: new Set(),
      // hold all the nodes: staff, projects, teams
      nodes: [],
      // hold the links between staff and projects and between projects and teams
      links: [],
      colours: {
        team: 'red'
      }
    }
  },
  computed: {
    /**
     * Get the data from Vuex Store
     */
    ...mapState({
      projects: state => state.projects,
      loaded: state => state.loaded
    }),
    /**
     * Calculate the dimensions used to set width and height of the SVG element.
     *
     * @returns {{width: *, height: *}}
     */
    viewport: function () {
      let width = window.innerWidth <= 1024 ? 1024 : window.innerWidth - 2 * Math.round(window.innerWidth / 10);
      let height = width <= 1024 ? 768 : Math.round(width / 1.6);
      return {
        width: width,
        height: height
      }
    }
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
    formatName: function (person) {
      return `${person.lastName.toUpperCase()}, ${person.firstName}`;
    }
  },
  mounted() {
    if (this.loaded) {
      this.renderChart();
    }
  },
  watch: {
    projects (val) {
      if (val) {
        if (this.loaded) {
          this.renderChart();
        }
      }
    }
  }
};
