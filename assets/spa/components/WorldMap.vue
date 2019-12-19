<template>
  <div>
    <h2 class="bg-info text-white text-center p-2">World map</h2>
    <b-row align-h="center" class="text-center pb-5 content">
      <b-col cols="2">
        <b-card title="Projects">
          <b-card-text>
            <ul class="teams" v-for="(team, index) in projectsGroupedByTeam" :key="index">
              <li class="team">
                <input :id="index" type="checkbox" name="projects">
                <label :for="index" class="handle"></label>
                <span>{{ team[0] }}</span>
                <ul class="projects" v-for="project in team[1]" :key="project.ilriCode">
                  <li class="project">{{ project.shortName }}</li>
                </ul>
              </li>
            </ul>
          </b-card-text>
        </b-card>
      </b-col>
      <b-col cols="8">
        <svg id="viewport" :width="viewport.width" :height="viewport.height">
          <g></g>
        </svg>
      </b-col>
      <b-col cols="2">
        <b-card title="Donor(s)">
          <b-card-text>
            coming soon ...
          </b-card-text>
        </b-card>
        <b-card title="Partners">
          <b-card-text>
            coming soon ...
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import * as d3 from 'd3';
  import {feature, merge, mesh} from 'topojson-client';
  import versor from 'versor';

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
        axisTilt: -23.44,
        state: {}
      }
    },
    computed: {
      ...mapState({
        projects: state => state.projects,
        projectsGroupedByTeam: state => state.projectsGroupedByTeam,
        loaded: state => state.loaded,
        worldCountries: state => state.worldCountries
      }),
      viewport: function () {
        let width = window.innerWidth <= 1024 ? 1024 : window.innerWidth - 2 * Math.round(window.innerWidth / 5);
        let height = width <= 1024 ? 768 : Math.round(width / 1.6);
        let padding = 20;
        return {
          width: width,
          height: height + padding
        }
      },
      svg: function () {
        return d3.select('svg#viewport > g');
      },
      countries: function () {
        return topojson.feature(this.worldCountries, this.worldCountries.objects['countries1']).features;
      },
      projection: function () {
        return d3.geoOrthographic()
          .scale(this.viewport.width/Math.PI)
          .clipAngle(90)
          .rotate([0, 0, this.axisTilt])
          .translate([this.viewport.width / 2, this.viewport.height / 2])
        ;
      },
      scale: function () {
        return this.projection.scale();
      },
      geoPath: function () {
        return d3.geoPath()
          .projection(this.projection)
          ;
      },
      zoom: function () {
        return d3.zoom()
          .scaleExtent([1, 3])
          .on('start', this.zoomStart)
          .on('zoom', this.zooming)
        ;
      }
    },
    methods: {
      zoomStart: function () {
        const globe = this.svg.node();
        const mouse = this.projection.invert(d3.mouse(globe));
        this.state.v0 = versor.cartesian(mouse);
        this.state.r0 = this.projection.rotate();
        this.state.q0 = versor(this.state.r0);
      },
      zooming: function () {
        const globe = this.svg.node();
        this.projection.rotate(this.state.r0);
        const mouse = this.projection.invert(d3.mouse(globe));
        const v1 = versor.cartesian(mouse);
        const mouseDelta = versor.delta(this.state.v0, v1);
        const q1 = versor.multiply(this.state.q0, mouseDelta);
        this.projection.rotate(versor.rotation(q1));
        this.projection.scale(this.scale * d3.event.transform.k);
        this.render();
      },
      render: function () {
        this.svg.selectAll('path.background').attr('d', this.geoPath);
        this.svg.selectAll('path.graticule').attr('d', this.geoPath);
        this.svg.selectAll('path.tropics').attr('d', this.geoPath);
        this.svg.selectAll('path.polar').attr('d', this.geoPath);
        this.svg.selectAll('path.hemisphere').attr('d', this.geoPath);
        this.svg.selectAll('path.country').attr('d', this.geoPath);
        this.svg.selectAll('path.outline').attr('d', this.geoPath);
      },
      renderChart: function () {
        this.svg.call(this.zoom);

        // Background (oceans)
        this.svg.append('path')
          .attr('class', 'background')
          .datum({
            type: 'Sphere'
          })
          .style('fill', 'lavender')
          .style('fill-opacity', 0.2)
          .attr('d', this.geoPath)
        ;

        // Graticules
        this.svg.append('path')
          .attr('class', 'graticule')
          .datum(d3.geoGraticule10())
          .style('fill', 'none')
          .style('stroke', 'lightgreen')
          .style('stroke-width', .5)
          .attr('d', this.geoPath)
        ;

        this.svg.append('path')
          .attr('class', 'tropics capricorn')
          .datum(d3.geoCircle().center([0, 90]).radius(66.56))
          .attr('d', this.geoPath)
        ;
        this.svg.append('path')
          .attr('class', 'tropics cancer')
          .datum(d3.geoCircle().center([0, -90]).radius(66.56))
          .attr('d', this.geoPath)
        ;
        this.svg.selectAll('path.tropics')
          .style('fill', 'aqua')
          .style('fill-opacity', 0.2)
          .style('stroke-width', 1)
          .style('stroke-dasharray', '4 2 1 2')
          .style('stroke', 'purple')
          .style('stroke-opacity', 0.5)
        ;

        this.svg.append('path')
          .attr('class', 'polar arctic')
          .datum(d3.geoCircle().center([0, 90]).radius(23.44))
          .attr('d', this.geoPath)
        ;
        this.svg.append('path')
          .attr('class', 'polar antarctic')
          .datum(d3.geoCircle().center([0, -90]).radius(23.44))
          .attr('d', this.geoPath)
        ;
        this.svg.selectAll('path.polar')
          .style('fill', 'blue')
          .style('fill-opacity', 0.2)
          .style('stroke-width', 1)
          .style('stroke-dasharray', '4 2 1 2')
          .style('stroke', 'mediumblue')
          .style('stroke-opacity', 0.5)
        ;

        // Greenwich meridian (western hemisphere)
        this.svg.append('path')
          .attr('class', 'hemisphere greenwich')
          .datum(d3.geoCircle().center([-90, 0]))
          .attr('d', this.geoPath)
          .style('stroke', 'red')
        ;
        // Equator (northern hemisphere)
        this.svg.append('path')
          .attr('class', 'hemisphere equator')
          .datum(d3.geoCircle().center([0, 90]))
          .attr('d', this.geoPath)
          .style('stroke', 'blue')
        ;
        this.svg.selectAll('path.hemisphere')
          .style('fill', 'none')
          .style('stroke-width', 1)
        ;

        // Countries
        this.svg.selectAll('path.country')
          .data(this.countries)
          .enter()
          .append('path')
          .attr('class', 'country')
          .style('fill', 'dimgray')
          .style('fill-opacity', 0.8)
          .style('stroke-width', 0.5)
          .style('stroke', 'white')
          .attr('d', this.geoPath)
        ;

        // Outline
        this.svg.append('path')
          .attr('class', 'outline')
          .datum({
            type: 'Sphere'
          })
          .style('fill', 'none')
          .style('stroke-width', 2)
          .style('stroke', 'black')
          .attr('d', this.geoPath)
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
  .content {
    margin: 0;
  }
  label {
    margin-bottom: 0;
  }
  .teams, .projects {
    list-style-type: none;
  }
  .team > span, .project {
    cursor: pointer;
  }
  .teams {
    text-align: left;
    padding: 0;
    margin-bottom: 0.5rem;
  }
  .team input {
    display: none;
  }
  .team input + label::before {
    content: '\f196';
    font-family: 'FontAwesome';
  }
  .team input:checked + label::before {
    content: '\f147';
    font-family: 'FontAwesome';
  }
  .projects {
    padding-left: 1em;
    display: none;
  }
  .team > input:checked ~ .projects {
    display: block;
  }
  .team > span {
    font-weight: 800;
    font-family: 'Open Sans', sans-serif;
  }
  .project {
    font-size: 0.9em;
    font-weight: 500;
    font-style: italic;
    font-family: 'Open Sans', sans-serif;;
  }
  .project::before {
    content: '\f141';
    font-family: 'FontAwesome';
    font-size: 0.9em;
    margin-left: -1em;
    margin-right: 0.5em;
    cursor: default;
  }
</style>
