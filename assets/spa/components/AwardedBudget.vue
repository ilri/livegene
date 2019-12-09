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
  import { mapState } from 'vuex';
  import { select, selectAll } from 'd3';
  import { sankey, sankeyLinkHorizontal } from 'd3-sankey';

  const d3 = Object.assign({},
    {
      select,
      selectAll,
      sankey,
      sankeyLinkHorizontal
    }
  );

  export default {
    name: 'AwardedBudget',
    data() {
      return {
        donors: new Set(),
        teams: new Set(),
        principalInvestigators: new Set(),
        nodes: [],
        links: [],
        margin: {
          top: 10,
          left: 150,
          right: 90,
          bottom: 10
        },
        colours: {
          donor: 'yellow',
          team: 'green',
          pi: 'red'
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
      },
      /**
       * Filter the projects to get only projects that are active this year.
       *
       * @returns {T[]}
       */
      activeProjects: function () {
        return this.projects.filter(el => el.isActive);
      }
    },
    methods: {
      drawChart: function () {
        this.activeProjects.forEach(cur => {
          this.donors.add(cur.donor.shortName);
          this.teams.add(cur.team);
          this.principalInvestigators.add(cur.principalInvestigator.username);
        });
        [...this.donors].forEach(cur => {
          this.nodes.push({
            label: cur,
            type: 'donor'
          });
        });
        [...this.teams].forEach(cur => {
          this.nodes.push({
            label: cur,
            type: 'team'
          });
        });
        [...this.principalInvestigators].forEach(cur => {
          this.nodes.push({
            label: cur,
            type: 'pi'
          });
        });
        this.activeProjects.forEach(cur => {
          this.links.push({
            source: this.nodes.findIndex(el => el.label === cur.donor.shortName),
            target: this.nodes.findIndex(el => el.label === cur.team),
            value: cur.totalProjectValue,
            code: cur.ilriCode
          });
          this.links.push({
            source: this.nodes.findIndex(el => el.label === cur.team),
            target: this.nodes.findIndex(el => el.label === cur.principalInvestigator.username),
            value: cur.totalProjectValue,
            code: cur.ilriCode
          });
        });
        console.log(this.links);
        const chart = d3.select('#viewport > g');
        const sankey = d3.sankey()
          .extent([
            [this.margin.left, this.margin.top],
            [this.viewport.width - this.margin.right, this.viewport.height - this.margin.bottom]
          ])
          .iterations(100)
        ;
        const graph = sankey({
          nodes: this.nodes,
          links: this.links
        });
        chart.selectAll('g.link')
          .data(graph.links)
          .join('g')
          .attr('class', 'link')
          .append('path')
          .attr('id', d => `id-${d.index}`)
          .attr('d', d3.sankeyLinkHorizontal())
          .style('opacity', 0.5)
          .style('stroke-width', d => d.width)
          .style('stroke', 'black')
          .style('fill', 'none')
        ;
        chart.selectAll('g.node')
          .data(graph.nodes)
          .join('g')
          .attr('class', 'node')
          .attr(
            'transform',
            d => `translate(${[d.x0, d.y0]})`
          )
          .append('rect')
          .attr('width', d => d.x1 - d.x0)
          .attr('height', d => d.y1 - d.y0)
          .style('fill', d => this.colours[d.type])
          .style('stroke', 'black')
        ;
      }
    },
    mounted() {
      this.drawChart();
    }
  }
</script>

<style scoped>
  svg#viewport {
    border: thin solid lightgray;
    background-color: azure;
  }
</style>
