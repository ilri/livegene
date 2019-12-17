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
          .rotate([0, 0, -23.44])
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

        // Background (oceans)
        svg.append('path')
          .attr('class', 'background')
          .datum({
            type: 'Sphere'
          })
          .style('fill', 'lavender')
          .style('fill-opacity', 0.2)
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

        svg.append('path')
          .attr('class', 'tropics capricorn')
          .datum(d3.geoCircle().center([0, 90]).radius(66.56))
          .attr('d', geoPath)
        ;
        svg.append('path')
          .attr('class', 'tropics cancer')
          .datum(d3.geoCircle().center([0, -90]).radius(66.56))
          .attr('d', geoPath)
        ;
        svg.selectAll('path.tropics')
          .style('fill', 'aqua')
          .style('fill-opacity', 0.2)
          .style('stroke-width', 1)
          .style('stroke-dasharray', '4 2 1 2')
          .style('stroke', 'purple')
          .style('stroke-opacity', 0.5)
        ;

        svg.append('path')
          .attr('class', 'polar arctic')
          .datum(d3.geoCircle().center([0, 90]).radius(23.44))
          .attr('d', geoPath)
        ;
        svg.append('path')
          .attr('class', 'polar antarctic')
          .datum(d3.geoCircle().center([0, -90]).radius(23.44))
          .attr('d', geoPath)
        ;
        svg.selectAll('path.polar')
          .style('fill', 'blue')
          .style('fill-opacity', 0.2)
          .style('stroke-width', 1)
          .style('stroke-dasharray', '4 2 1 2')
          .style('stroke', 'mediumblue')
          .style('stroke-opacity', 0.5)
        ;

        // Greenwich meridian (western hemisphere)
        svg.append('path')
          .attr('class', 'hemisphere greenwich')
          .datum(d3.geoCircle().center([-90, 0]))
          .attr('d', geoPath)
          .style('stroke', 'red')
        ;
        // Equator (northern hemisphere)
        svg.append('path')
          .attr('class', 'hemisphere equator')
          .datum(d3.geoCircle().center([0, 90]))
          .attr('d', geoPath)
          .style('stroke', 'blue')
        ;
        svg.selectAll('path.hemisphere')
          .style('fill', 'none')
          .style('stroke-width', 1)
        ;

        // Land
        svg.append('path')
          .attr('class', 'continents')
          .datum(map.merged)
          .style('fill', 'dimgray')
          .style('fill-opacity', 0.8)
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

        // Outline
        svg.append('path')
          .attr('class', 'outline')
          .datum({
            type: 'Sphere'
          })
          .style('fill', 'none')
          .style('stroke-width', 2)
          .style('stroke', 'black')
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
