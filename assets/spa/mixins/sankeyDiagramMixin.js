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
        team: 'red',
      },
    };
  },
  computed: {
    /**
     * Get the data from Vuex Store
     */
    ...mapState({
      projects: (state) => state.projects,
      loaded: (state) => state.loaded,
      error: (state) => state.error,
      errorStatusText: (state) => state.errorStatusText,
    }),
    /**
     * Calculate the dimensions used to set width and height of the SVG element.
     *
     * @returns {{width: *, height: *}}
     */
    viewport() {
      const width = window.innerWidth >= 992
        ? window.innerWidth - 2 * Math.round(window.innerWidth / 10)
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
  },
  mounted() {
    if (this.loaded) {
      this.renderChart();
    }
  },
  watch: {
    loaded(val) {
      if (val) {
        this.renderChart();
      }
    },
  },
};
