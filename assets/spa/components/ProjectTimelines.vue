<template>
  <div>
    <h2 class="bg-primary text-white text-center p-2">Project Timelines</h2>
    <div class="row">
      <div class="col">
        <svg></svg>
      </div>
      <div id="display" class="col-3"></div>
    </div>
    <h3>Projects</h3>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>ILRI code</th>
        <th>Full name</th>
        <th>Short name</th>
        <th>Team</th>
        <th>Principal investigator</th>
        <th>Start date</th>
        <th>End date</th>
        <th>Status</th>
        <th>Capacity development</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="p in projects" v-bind:key="p.id">
        <td>{{ p.id }}</td>
        <td>{{ p.ilriCode }}</td>
        <td>{{ p.fullName }}</td>
        <td>{{ p.shortName }}</td>
        <td>{{ p.team }}</td>
        <td>{{ p.principalInvestigator.firstName }} {{ p.principalInvestigator.lastName }}</td>
        <td>{{ p.startDate }}</td>
        <td>{{ p.endDate }}</td>
        <td>{{ p.status }}</td>
        <td>{{ p.capacityDevelopment }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import * as d3 from 'd3';
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({ projects: state => state.projects })
  },
  async mounted() {
    var data = this.projects.slice(0);
    data = data.sort(function(a, b) {
      return a.startDate > b.startDate;
    });

    // formatting variables
    var bar = {
        height: 16,
        distance: 1
    }
    var width = 1366;
    var height = data.length * bar.height;
    var backgroundColor = 'lightgray';
    // date time format
    var parseTime = d3.timeParse("%Y-%m-%dT%H:%M:%S%Z");
    var formatTime = d3.timeFormat("%Y-%m-%dT%H:%M:%S%Z");
    // get the year of the earliest start date
    var xMin = d3.min(data, function(datum, index) {
        return new Date(String(parseTime(datum.startDate).getFullYear()));
    });
    // get the following year of the latest end date
    var xMax = d3.max(data, function(datum, index) {
        return new Date(String(parseTime(datum.endDate).getFullYear() + 1));
    });

    // create a time scale
    var xScale = d3.scaleTime();
    xScale.range([0, width]);
    xScale.domain([xMin, xMax]);

    // create bottom axis
    var bottomAxis = d3.axisBottom(xScale);

    // style the svg
    d3.select('svg')
      .attr('width', width)
      .attr('height', height)
      .style('background-color', backgroundColor)
    ;

    d3.select('svg')
      .append('defs')
      .append('clipPath')
      .attr('id', 'clip')
      .append('rect')
      .attr('width', width)
      .attr('height', height)
    ;

    var focus = d3.select('svg')
      .append('g')
      .attr('class', 'focus')
      .attr('transform', 'translate(0,0)')
    ;

    // add bottom axis
    focus
      .append('g')
      .attr('id', 'axis-top')
      .call(bottomAxis)
      .attr('transform', 'translate(0,' + height + ')')
    ;

    var make_x_gridlines = function() {
      return bottomAxis.ticks(10);
    };

    // add the X gridlines
    focus
      .append("g")
      .attr("class", "grid")
      .attr("transform", "translate(0," + height + ")")
      .call(make_x_gridlines()
          .tickSize(-height)
          .tickFormat("")
      )
    ;

    var chart = focus
      .append('g')
      .attr('class', 'chart')
    ;

    // add horizontal bars, one for each project, and position them in
    // regard to their start and end date
    var projectBars = chart
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'bar')
      .on('click', function(datum, index) {
        // highlight selected bar
        d3.selectAll('.bar rect')
            .transition()
            .duration(600)
            .style('fill', 'blue');
        d3.select(this)
            .transition()
            .duration(600)
            .select('rect')
            .style('fill', 'red')
        ;
        // display project information
        var display = d3.select('#display');
        display.html('');
        var tableContents = '<table class="table table-reponsive">'
            + '<tr><th>ILRI code</th><td>' + datum.ilriCode + '</td></tr>'
            + '<tr><th>Short name</th><td>' + datum.shortName + '</td></tr>'
            + '<tr><th>Full name</th><td>' + datum.fullName + '</td></tr>'
            + '<tr><th>Principal investigator</th><td>'
            + datum.principalInvestigator.firstName + ' '
            + datum.principalInvestigator.lastName + '</td></tr>'
            + '<tr><th>Start date</th><td>' + parseTime(datum.startDate).toLocaleDateString() + '</td></tr>'
            + '<tr><th>End date</th><td>' + parseTime(datum.endDate).toLocaleDateString() + '</td></tr>'
            + '<tr><th>Value</th><td>' + '$' + datum.totalProjectValue.toLocaleString() + '</td></tr>'
            + '</table>'
        ;
        display.append('h2').text('Project information');
        display.append('div').html(tableContents);
      })
    ;

    projectBars
      .append('rect')
      .attr('height', bar.height)
      .style('fill', 'blue')
      .style('stroke', backgroundColor)
      .style('stroke-width', bar.distance)
      .style('opacity', 0.8)
      .attr('x', function(datum, index) {
          return Math.ceil(xScale(parseTime(datum.startDate)));
      })
      .attr('y', function(datum, index) {
          return index * bar.height;
      })
      .transition()
      .delay(function(datum, index) {
          return Math.round(xScale(parseTime(datum.startDate)) - xScale(xMin)) * 10;
      })
      .duration(function(datum, index) {
          var projectDuration = Math.round(xScale(parseTime(datum.endDate)) - xScale(parseTime(datum.startDate)));
          return projectDuration * 10;
      })
      .attr('width', function(datum, index) {
          return Math.round(xScale(parseTime(datum.endDate)) - xScale(parseTime(datum.startDate)));
      })
    ;

    projectBars
      .append('text')
      .style('font', '10px sans-serif')
      .style('font-weight', 700)
      .style('fill', 'yellow')
      .attr('x', function(datum, index) {
          return Math.round(xScale(parseTime(datum.startDate))) + 5;
      })
      .attr('y', function(datum, index) {
          return (index * bar.height) + 12;
      })
      .transition()
      .delay(function(datum, index) {
          return Math.round(xScale(parseTime(datum.startDate)) - xScale(xMin)) * 10;
      })
      .text(function(datum, index) {
          return datum.ilriCode;
      })
    ;
  }
}
</script>

<style scoped>
svg {
  overflow: visible;
}
.tick line {
  stroke: maroon;
  stroke-opacity: 0.7;
  shape-rendering: crispEdges;
}
</style>