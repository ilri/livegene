<template>
  <div>
    <h2 class="bg-info text-white text-center p-2">Awarded Budget</h2>
    <div class="text-center pb-5">
      <svg id="viewport" :width="viewport.width" :height="viewport.height">
        <g></g>
      </svg>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AwardedBudget',
    data() {
      return {
        dummy: false
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
      },
      /**
       * Filter the projects to get only projects that are active this year.
       *
       * @returns {T[]}
       */
      activeProjects: function () {
        return this.projects.filter(el => el.isActiveThisYear);
      }
    },
    methods: {
      drawChart: function () {
        t
      }
    },
    mounted() {
      this.drawChart();
    }
  }
</script>

<style scoped>

</style>
