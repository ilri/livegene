<template>
  <div>
    <h2 class="bg-info text-white text-center p-2">World map</h2>
    <div class="text-center pb-5">
      <svg id="viewport" :width="width" :height="height">
        <g></g>
      </svg>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import * as d3 from 'd3';
  import {feature, merge, mesh} from 'topojson-client';

  const topojson = Object.assign({},
    {
      feature,
      merge,
      mesh
    })
  ;

  export default {
    name: 'WorldMap',
    data() {
      return {
        width: 1280,
        height: 820
      }
    },
    computed: {
      ...mapState({
        projects: state => state.projects,
        loaded: state => state.loaded,
        worldCountries: state => state.worldCountries
      })
    },
    methods: {
      renderChart: function () {
        const svg = d3.select('svg#viewport > g');

        const projection = d3.geoOrthographic()
          .scale(400)
          .clipAngle(90)
          .translate([this.width / 2, this.height / 2])
        ;

        const geoPath = d3.geoPath()
          .projection(projection)
        ;

        const map = {};

        const zoomBehaviour = d3.zoom()
          .translateExtent([[0, 0], [this.width, this.height]])
          .scaleExtent([1, 30])
          .on('zoom', () => svg.attr('transform', d3.event.transform))
        ;

        map.topology = this.worldCountries.objects['countries1'];
        map.features = topojson.feature(this.worldCountries, map.topology).features;
        map.merged = topojson.merge(this.worldCountries, map.topology.geometries);
        map.mesh = topojson.mesh(this.worldCountries, map.topology);

        // Globe (oceans)
        svg.append('path')
          .attr('class', 'background')
          .datum({
            type: 'Sphere'
          })
          .style('fill', 'aqua')
          .attr('d', geoPath)
        ;

        // Graticules
        svg.append('path')
          .attr('class', 'graticule')
          .datum(d3.geoGraticule10())
          .style('fill', 'none')
          .style('stroke', 'lightgreen')
          .style('stroke-width', .5)
          .attr('d', geoPath)
        ;

        // Land
        svg.append('path')
          .attr('class', 'continents')
          .datum(map.merged)
          .style('fill', '#345434')
          .attr('d', geoPath)
        ;

        // Borders
        svg.append('path')
          .attr('class', 'borders')
          .datum(map.mesh)
          .style('fill', 'none')
          .style('stroke', 'white')
          .style('stroke-width', .5)
          .attr('d', geoPath)
        ;

        // zoom rect
        const rect = svg.append('rect')
          .style('fill', 'none')
          .attr('pointer-events', 'all')
          .attr('width', 1280)
          .attr('height', 820)
          .call(zoomBehaviour)
        ;
      }
    },
    mounted() {
      if (this.worldCountries.objects) {
        this.renderChart();
      }
    },
    watch: {
      worldCountries(val) {
        if (val) {
          this.renderChart();
        }
      }
    }
  }
</script>

<style scoped>
  svg {
    border: thin solid lightgray;
  }
</style>
