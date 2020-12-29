<template>
  <BaseView>
    <template slot="header">
      World map
    </template>
    <template slot="graphic">
      <b-col
        cols="6"
        lg="2"
        order="2"
        order-lg="1"
      >
        <b-card title="Projects">
          <b-card-text>
            <ul
              v-for="(team, index) in projectsGroupedByTeam"
              :key="`team${index}`"
              :class="{ teams: true, busy: rotating }"
            >
              <li class="team">
                <input
                  :id="index"
                  type="checkbox"
                  name="projects"
                >
                <label
                  :for="index"
                  class="handle"
                />
                <span
                  :class="{ selected: selected.type === 'team' && selected.name === team[0] }"
                  @click="selectTeam(team)"
                >
                  {{ team[0] }}
                </span>
                <ul
                  v-for="project in team[1]"
                  :key="project.ilriCode"
                  class="projects"
                >
                  <li
                    :class="{
                      project: true,
                      selected: selected.type === 'project' && selected.name === project.ilriCode
                    }"
                    @click="selectProject(project)"
                  >
                    {{ project.shortName }}
                  </li>
                </ul>
              </li>
            </ul>
          </b-card-text>
        </b-card>
      </b-col>
      <b-col
        cols="12"
        lg="8"
        order="1"
        order-lg="2"
      >
        <ChartContainer :viewport="viewport">
          <g
            slot="chart"
            :class="{ busy: rotating }"
          />
        </ChartContainer>
      </b-col>
      <b-col
        cols="6"
        lg="2"
        order="2"
        order-lg="3"
      >
        <b-card
          no-body
          header="Donors"
        >
          <b-card-text class="mt-2">
            <figure
              v-for="(donor, index) in donors"
              :key="`donor${index}`"
              class="figure col-12 col-xl-6"
            >
              <b-img
                v-b-popover.hover.top.v-info=""
                thumbnail
                fluid-grow
                class="figure-img organisation-logo"
                :title="donor.fullName"
                :src="donor.logoUrl"
                :alt="donor.shortName"
              />
            </figure>
          </b-card-text>
        </b-card>
        <b-card
          no-body
          header="Partners"
        >
          <b-card-text>
            <b-list-group
              v-for="partnershipType in partnershipTypes"
              :key="`partnershipType${JSON.parse(partnershipType).id}`"
              class="mb-2"
            >
              <b-list-group-item
                :class="{
                  'highlight-partnership-type': isPartnershipTypeSelected(partnershipType)
                }"
                @mouseover="highlightPartners(partnershipType)"
                @mouseout="unhighlightPartners"
              >
                {{ JSON.parse(partnershipType).description }}
              </b-list-group-item>
            </b-list-group>
            <figure
              v-for="partner in partners"
              :key="`partner${JSON.parse(partner).id}`"
              class="figure col-12 col-xl-6"
            >
              <b-img
                v-b-popover.hover.top.v-info=""
                thumbnail
                fluid-grow
                class="figure-img organisation-logo"
                :title="JSON.parse(partner).fullName"
                :src="JSON.parse(partner).logoUrl"
                :alt="JSON.parse(partner).shortName"
                :class="{ 'highlight-partner': selectedPartners.includes(partner) }"
              />
            </figure>
          </b-card-text>
        </b-card>
      </b-col>
    </template>
  </BaseView>
</template>

<script>
import { mapState } from 'vuex';
import * as d3 from 'd3';
import { feature, merge } from 'topojson-client';
import versor from 'versor';
import worldCountries from '../data/world-countries';
import BaseView from '../components/BaseView';
import ChartContainer from '../components/ChartContainer';

const topojson = {
  feature,
  merge,
};
export default {
  name: 'WorldMap',
  components: {
    BaseView,
    ChartContainer,
  },
  data() {
    return {
      // https://en.wikipedia.org/wiki/Axial_tilt
      axialTilt: -23.44,
      // hold values needed for zooming
      state: {},
      // hold the selected team or project
      selected: {
        type: '',
        name: '',
      },
      // hold the donors for the selected team or project
      donors: [],
      // hold the partnerships for the selected team or project
      partnerships: [],
      // hold the partners for the selected team or project - no duplicates
      partners: new Set(),
      // hold the partnership types for the selected team or project - no duplicates
      partnershipTypes: new Set(),
      // hold the selected partnership type
      selectedPartnershipType: {},
      // hold the partners for the selected partnership type
      selectedPartners: [],
      // is the globe rotating
      rotating: false,
      // topojson with shape for all world countries
      worldCountries,
    };
  },
  computed: {
    /**
     * Get the data from Vuex Store
     */
    ...mapState({
      projects: (state) => state.project.projects,
      projectsGroupedByTeam: (state) => state.project.projectsGroupedByTeam,
    }),
    /**
     * Calculate the dimensions used to set width and height of the SVG element.
     *
     * @returns {{width: number, height: number}}
     */
    viewport() {
      const width = window.innerWidth >= 992
        ? window.innerWidth * 0.6667
        : window.innerWidth;
      const height = Math.round(width / 1.6);
      const padding = 20;
      return {
        width: width - padding,
        height: height + padding,
      };
    },
    /**
     * Select the group in the SVG holding the globe and all associated paths.
     *
     * @returns {Selection}
     */
    svg() {
      return d3.select('svg#viewport > g');
    },
    /**
     * Get the countries from the topojson file.
     *
     * @returns {*}
     */
    countries() {
      return topojson.feature(this.worldCountries, this.worldCountries.objects.countries1).features;
    },
    /**
     * We use orthographic projection for the Earth globe.
     *
     * @returns {*}
     */
    projection() {
      return d3.geoOrthographic()
        .scale(this.viewport.width / Math.PI)
        .clipAngle(90)
        .rotate([0, 0, this.axialTilt])
        .translate([this.viewport.width / 2, this.viewport.height / 2]);
    },
    /**
     * Get the scale for the projection.
     *
     * @returns {*}
     */
    scale() {
      return this.projection.scale();
    },
    /**
     * Get the geo path for the projection.
     *
     * @returns {*|e}
     */
    geoPath() {
      return d3.geoPath()
        .projection(this.projection);
    },
    /**
     * Zoom the globe.
     *
     * @returns {*}
     */
    zoom() {
      return d3.zoom()
        .scaleExtent([1, 3])
        .on('start', this.zoomStart)
        .on('zoom', this.zooming);
    },
  },
  watch: {
    projects(val) {
      if (val.length) {
        this.renderChart();
      }
    },
  },
  mounted() {
    if (this.projects.length) {
      this.renderChart();
    }
  },
  methods: {
    /**
     * This method is fired when zoom is started.
     */
    zoomStart() {
      const globe = this.svg.node();
      const mouse = this.projection.invert(d3.mouse(globe));
      this.state.v0 = versor.cartesian(mouse);
      this.state.r0 = this.projection.rotate();
      this.state.q0 = versor(this.state.r0);
    },
    /**
     * This method is processed for the actual zooming.
     */
    zooming() {
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
    /**
     * This method is needed whenever the globe changes position (like rotating) or is zoomed.
     */
    render() {
      this.svg.selectAll('path.background').attr('d', this.geoPath);
      this.svg.selectAll('path.graticule').attr('d', this.geoPath);
      this.svg.selectAll('path.tropics').attr('d', this.geoPath);
      this.svg.selectAll('path.polar').attr('d', this.geoPath);
      this.svg.selectAll('path.hemisphere').attr('d', this.geoPath);
      this.svg.selectAll('path.country').attr('d', this.geoPath);
      this.svg.selectAll('path.outline').attr('d', this.geoPath);
    },
    /**
     * This is the main method rendering the chart.
     */
    renderChart() {
      this.svg.call(this.zoom);

      // Background (oceans)
      this.svg.append('path')
        .attr('class', 'background')
        .datum({
          type: 'Sphere',
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
        .style('stroke-width', 0.5)
        .attr('d', this.geoPath);
      this.svg.append('path')
        .attr('class', 'tropics capricorn')
        .datum(d3.geoCircle().center([0, 90]).radius(66.56))
        .attr('d', this.geoPath);
      this.svg.append('path')
        .attr('class', 'tropics cancer')
        .datum(d3.geoCircle().center([0, -90]).radius(66.56))
        .attr('d', this.geoPath);
      this.svg.selectAll('path.tropics')
        .style('fill', 'aqua')
        .style('fill-opacity', 0.2)
        .style('stroke-width', 1)
        .style('stroke-dasharray', '4 2 1 2')
        .style('stroke', 'purple')
        .style('stroke-opacity', 0.5);
      this.svg.append('path')
        .attr('class', 'polar arctic')
        .datum(d3.geoCircle().center([0, 90]).radius(23.44))
        .attr('d', this.geoPath);
      this.svg.append('path')
        .attr('class', 'polar antarctic')
        .datum(d3.geoCircle().center([0, -90]).radius(23.44))
        .attr('d', this.geoPath);
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
        .style('stroke', 'blue');
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
        .style('fill', 'darkgray')
        .style('fill-opacity', 0.8)
        .style('stroke-width', 0.5)
        .style('stroke', 'white')
        .attr('d', this.geoPath)
      ;

      // Outline
      this.svg.append('path')
        .attr('class', 'outline')
        .datum({
          type: 'Sphere',
        })
        .style('fill', 'none')
        .style('stroke-width', 2)
        .style('stroke', 'black')
        .attr('d', this.geoPath);
    },
    /**
     * Select team.
     *
     * @param {Array} team
     */
    selectTeam(team) {
      this.selected.type = 'team';
      [this.selected.name] = team;

      const donors = new Set();
      team[1].forEach((cur) => donors.add(JSON.stringify(cur.donor)));
      this.donors = [];
      donors.forEach((cur) => this.donors.push(JSON.parse(cur)));

      this.extractPartners(team[1]);
      this.highlightCountryPaths(team[1]);
    },
    /**
     * Select project.
     *
     * @param {Object} project
     */
    selectProject(project) {
      this.selected.type = 'project';
      this.selected.name = project.ilriCode;

      this.donors = [];
      this.donors.push(project.donor);

      this.extractPartners(project);
      this.highlightCountryPaths(project);
    },
    /**
     * Get the partners and the partnership types for a team or project.
     * No duplicates are stored in case the same partner is present more than once.
     * The partnership types are stored only once too.
     *
     * @param {Array|Object} projects
     */
    extractPartners(projects) {
      this.partnerships = [];
      this.partners.clear();
      this.partnershipTypes.clear();

      /* eslint-disable no-param-reassign */
      if (!Array.isArray(projects)) {
        projects = [projects];
      }
      /* eslint-enable no-param-reassign */

      projects.forEach((parentEl) => {
        this.partnerships.push(...parentEl.partnerships);
        parentEl.partnerships.forEach((childEl) => {
          this.partners.add(JSON.stringify(childEl.partner));
          this.partnershipTypes.add(JSON.stringify(childEl.partnershipType));
        });
      });
    },
    /**
     * Highlight the partners for the selected partnership type.
     *
     * @param {Object} partnershipType
     */
    highlightPartners(partnershipType) {
      this.selectedPartnershipType = JSON.parse(partnershipType);
      this.selectedPartners = [];
      this.partnerships
        .filter((el) => el.partnershipType.id === this.selectedPartnershipType.id)
        .forEach((cur) => this.selectedPartners.push(JSON.stringify(cur.partner)));
    },
    /**
     * Reverse the highlighting.
     */
    unhighlightPartners() {
      this.selectedPartnershipType = {};
      this.selectedPartners = [];
    },
    /**
     * Check if the partnership type is selected.
     *
     * @param {Object} partnershipType
     * @returns {boolean}
     */
    isPartnershipTypeSelected(partnershipType) {
      return JSON.parse(partnershipType).id === this.selectedPartnershipType.id;
    },
    /**
     * Highlight the countries for the selected team or project.
     * Use transition - the colour slowly fades in and out.
     *
     * @param {Array|Object} projects
     */
    highlightCountryPaths(projects) {
      const countryCodes = new Set();

      /* eslint-disable no-param-reassign */
      if (!Array.isArray(projects)) {
        projects = [projects];
      }
      /* eslint-enable no-param-reassign */

      projects.forEach(
        (parentEl) => parentEl.countryRoles.forEach(
          (childEl) => countryCodes.add(childEl.country.country),
        ),
      );

      const rotationDuration = this.rotateToView(countryCodes);

      d3.selectAll('path.country')
        .transition('highlightCountryPaths')
        .duration(rotationDuration)
        .style('fill', (d) => (countryCodes.has(d.properties['Alpha-2']) ? 'chartreuse' : 'darkgray'));
    },
    /**
     * Rotate the globe to match the center of gravity of the highlighted countries on the x axis
     * (equator).
     * First merge the countries paths, then retrieve the centroid.
     * Calculate the number of degrees the globe needs to rotate.
     * The globe rotates only eastwards.
     * The rotation is done in a time interval, thus it creates a visual effect.
     *
     * @param {Set} countryCodes
     * @returns {number}
     */
    rotateToView(countryCodes) {
      let lambda; let phi; let gamma; let start; let
        counter;

      if (countryCodes.size > 0) {
        const merged = topojson.merge(
          this.worldCountries,
          this.worldCountries.objects.countries1.geometries.filter((el) => countryCodes.has(el.properties['Alpha-2'])),
        );

        const rotate = d3.geoRotation(this.projection.rotate());
        const centroid = d3.geoCentroid(merged);
        const rotation = rotate(centroid);

        lambda = rotation[0] > 0 ? 360 - Math.round(rotation[0]) : -Math.round(rotation[0]);
      } else {
        lambda = 360 - Math.round(this.projection.rotate()[0]);
      }

      lambda = lambda >= 360 ? lambda - 360 : lambda;
      phi = 0;
      gamma = this.axialTilt;
      start = Math.round(this.projection.rotate()[0]);
      counter = 0;

      this.rotating = true;
      const interval = d3.interval(
        () => {
          if (counter >= lambda) {
            interval.stop();
            this.rotating = false;
            return;
          }
          counter++;
          this.projection.rotate([start++, phi, gamma]);
          this.render();
        },
        5,
      );

      return lambda * 50;
    },
  },
};
</script>

<style scoped>
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

  .organisation-logo {
    height: 4rem;
    object-fit: contain;
  }

  .selected {
    display: inline-block;
    background-color: rgba(255, 160, 122, 0.5);
    padding: 0.2em;
    border-radius: 0.1em;
  }

  .highlight-partnership-type {
    background-color: indianred;
    font-weight: 700;
  }

  .highlight-partner {
    box-shadow: 0.4em 0.4em 0.4em indianred;
    border-style: solid;
    border-color: indianred;
    border-width: 2px;
  }

  .busy {
    pointer-events: none;
    cursor: wait;
  }
</style>
