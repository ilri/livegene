<template>
  <div>
    <h2 class="bg-info text-white text-center p-2">Treemap</h2>
    <div class="text-center pb-5">
      <svg id="viewport" :width="width" :height="height">
        <g></g>
      </svg>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import * as d3 from 'd3';

  export default {
    name: 'Treemap',
    data () {
      return {
        width: 1000,
        height: 800
      }
    },
    computed: {
      ...mapState({
        projects: state => state.projects,
        groupedProjects: state => state.projectsGroupedByTeam,
        loaded: state => state.loaded
      })
    },
    methods: {
      renderChart: function () {
        const chart = d3.select('#viewport').select('g')
          .attr('transform', d => `translate(${[25,25]})`)
        ;

        const data = [...this.groupedProjects];
        const simpleHierarchy = {
          id: 'root',
          name: 'Root level',
          children: data.map((cur, i) => {
            return {
              id: i+1,
              name: cur[0],
              value: cur[1].map(cur => cur.totalProjectValue).reduce((acc, cur) => acc + cur)
              //children: cur[1].map(cur => {
              //  return {id: cur.id, name: cur.shortName, value: cur.totalProjectValue}
              //})
            };
          })
        };
        const root = d3.hierarchy(simpleHierarchy)
          .sum(d => d.value)
        ;
        console.log(simpleHierarchy);
        const treemap = d3.treemap()
          .size([this.width - 100, this.height - 100])
        ;
        const mapData = treemap(root);
        const nodes = mapData.descendants();

        chart.selectAll("rect")
          .data(nodes)
          .join("rect")
          .attr("x", d => d.x0)
          .attr("y", d => d.y0)
          .attr("width", d => d.x1 - d.x0)
          .attr("height", d => d.y1 - d.y0)
          .style('fill', 'lightblue')
          .style('stroke', 'azure')
          .style('stroke-width', 2)
        ;

      }
    },
    mounted() {
      if (this.loaded) {
        this.renderChart();
      }
    }
  }
</script>

<style scoped>
  svg {
    border: thin solid lightgray;
  }
</style>
