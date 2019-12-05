<template>
  <div>
    <h2 class="bg-info text-white text-center p-2">Staff Roles</h2>
    <div class="text-center">
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
    name: 'StaffRoles',
    data() {
      return {
        // hold the teams extracted from projects
        teams: new Set(),
        // hold the staff objects (staffObjects)
        staff: new Set(),
        // hold all the nodes: staff, projects, teams
        nodes: [],
        // hold the links between staff and projects and between projects and teams
        links: [],
        // colours for the nodes
        colours: {
          'person': 'green',
          'project': 'yellow',
          'team': 'red'
        },
        // margins for the diagram
        margin: {
          top: 10,
          left: 150,
          right: 90,
          bottom: 10
        }
      }
    },
    computed: {
      /**
       * Get projects from Vuex Store
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
       * Filter the projects to get only projects that are active this year and have any staff roles assigned.
       *
       * @returns {T[]}
       */
      activeProjects: function () {
        return this.projects.filter(el => el.isActiveThisYear && el.staffRoles.length);
      }
    },
    methods: {
      /**
       * Iterate through the active projects and generate the nodes.
       * In the first step the staff roles and the teams are extracted.
       * The nodes for the projects are generated (type 'project').
       * In the second step the nodes for the teams are generated (type 'team').
       * In the third step the nodes for the staff are generated (type 'person').
       */
      generateNodes: function () {
        this.activeProjects.forEach(cur => {
          this.teams.add(cur.team);
          cur.staffRoles.forEach(cur => this.staff.add(JSON.stringify(cur.staffMember)));
          this.nodes.push({
            label: cur.ilriCode,
            type: 'project'
          });
        });

        this.teams.forEach(cur => this.nodes.push({
          label: cur,
          type: 'team'
        }));

        this.staff.forEach(cur => this.nodes.push({
          label: JSON.parse(cur).username,
          type: 'person',
          obj: JSON.parse(cur)
        }));
      },
      /**
       * Iterate through the active projects and generate the links.
       * In the first step generate the links between staff and projects.
       * In the second step generate the links between projects and teams.
       */
      generateLinks: function () {
        const calculateTotalPercentForProject = function (staffRoles) {
          return staffRoles.reduce((acc, cur) => acc + parseFloat(cur.percent) * 100, 0);
        };

        this.activeProjects.forEach(parentEl => parentEl.staffRoles.forEach(
          childEl => this.links.push({
            source: this.nodes.findIndex(x => x.label === childEl.staffMember.username),
            target: this.nodes.findIndex(x => x.label === parentEl.ilriCode),
            value: +(parseFloat(childEl.percent) * 100).toPrecision(2)
          })
        ));

        this.activeProjects.forEach(el => {
          this.links.push({
            source: this.nodes.findIndex(x => x.label === el.ilriCode),
            target: this.nodes.findIndex(x => x.label === el.team),
            value: calculateTotalPercentForProject(el.staffRoles)
          })
        });
      },
      /**
       * Helper function to highlight associated nodes and paths when hovering over a node.
       */
      highlightNodes: function (d) {
        const labels = [];
        labels.push(d.label);
        if (d.type === 'person') {
          d.sourceLinks.forEach(el => {
            labels.push(el.target.label);
            el.target.sourceLinks.forEach(el => labels.push(el.target.label));
          });
        } else if (d.type === 'project') {
          d.sourceLinks.forEach(el => labels.push(el.target.label));
          d.targetLinks.forEach(el => labels.push(el.source.label));
        } else if (d.type === 'team') {
          d.targetLinks.forEach(el => {
            labels.push(el.source.label);
            el.source.targetLinks.forEach(el => labels.push(el.source.label));
          });
        }
        d3.selectAll('g.node')
          .filter(x => !labels.includes(x.label))
          .style('opacity', 0.1);
        d3.selectAll('path')
        //.style('opacity', x => labels.includes(x.source.label) && labels.includes(x.target.label) ? 0.7 : 0.1);
          .style('opacity', x => {
            if (x !== undefined) {
              return labels.includes(x.source.label) && labels.includes(x.target.label) ? 0.7 : 0.1;
            }
            return 0.5;
          })
        ;
      },
      /**
       * Helper function to reverse the effect of highlightNodes when leaving a node.
       */
      fade: function () {
        d3.selectAll('g.node')
          .style('opacity', 1)
        ;
        d3.selectAll('path')
          .style('opacity', 0.5)
        ;
      },
      /**
       * Helper function to highlight a single path when hovering over it.
       */
      highlightPath: function (d, i, n) {
        d3.selectAll('path')
          .style('opacity', 0.1)
        ;
        d3.select(n[i])
          .style('opacity', 0.7)
        ;
      },
      /**
       * Render the sankey diagram
       */
      renderChart: function () {
        this.generateNodes();
        this.generateLinks();
        const that = this;
        const chart = d3.select('#viewport > g');
        const sankey = d3.sankey()
          .extent([
            [this.margin.left, this.margin.top],
            [this.viewport.width - this.margin.right, this.viewport.height - this.margin.bottom]
          ])
          .iterations(10)
        ;
        const graph = sankey({
          nodes: this.nodes,
          links: this.links
        });
        const formatName = function (person) {
          return `${person.lastName.toUpperCase()}, ${person.firstName}`;
        };

        chart.selectAll('path')
          .data(graph.links)
          .enter()
          .append('path')
          .attr('id', d => `id-${d.index}`)
          .attr('d', d3.sankeyLinkHorizontal())
          .style('opacity', 0.5)
          .style('stroke-width', d => d.width)
          .style('stroke', 'black')
          .style('fill', 'none')
          .on('mouseenter', this.highlightPath)
          .on('mouseleave', this.fade)
        ;

        chart.selectAll('g.node')
          .data(graph.nodes)
          .join('g')
          .attr('class', 'node')
          .attr(
            'transform',
            d => `translate(${[d.x0, d.y0]})`
          )
          .each(function (d, i, n) {
            d3.select(this)
              .append('rect')
              .attr('width', d.x1 - d.x0)
              .attr('height', d.y1 - d.y0)
              .style('fill', () => that.colours[d.type])
              .style('stroke', 'black')
            ;
            d3.select(this)
              .append('text')
              .attr('class', 'label')
              .text(d => d.type === 'person' ? formatName(d.obj) : d.label)
            ;
            d3.select(this)
              .append('text')
              .attr('class', 'fte')
              .text(d => d.type === 'person' ? +(parseFloat(d.obj.totalStaffRolesPercent) * 100).toPrecision(2) : '')
            ;
          })
          .on('mouseenter', this.highlightNodes)
          .on('mouseleave', this.fade)
        ;

        chart.selectAll('text.label')
          .each(function (d, i) {
            if (d.type === 'person') {
              d3.select(this)
                .attr('transform', `translate(${[-5, (d.y1 - d.y0) / 2]})`)
                .attr('text-anchor', 'end');
            } else {
              d3.select(this)
                .attr('transform', `translate(${[d.x1 - d.x0 + 5, (d.y1 - d.y0) / 2]})`);
            }
            d3.select(this)
              .attr('alignment-baseline', 'middle');
          })
          .style('font-family', '"Open Sans Condensed", sans-serif')
          .style('font-weight', 700)
          .style('font-size', '0.7em')
          .style('fill', 'darkblue')
        ;

        chart.selectAll('text.fte')
          .each(function (d, i) {
            d3.select(this)
              .attr('transform', `translate(20,0)`)
              .attr('alignment-baseline', 'ideographic')
              .attr('text-anchor', 'end')
          })
          .style('font-weight', 800)
          .style('font-size', '0.6em')
          .style('fill', 'darkblue')
        ;
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
  }
</script>

<style scoped>
  svg {
    overflow: visible;
    border: thin solid lightgray;
    background-color: azure;
  }
</style>
