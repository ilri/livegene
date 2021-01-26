<template>
  <BaseView>
    <template slot="header">
      Staff Roles
    </template>
    <template slot="graphic">
      <b-col
        cols="12"
        lg="10"
        class="px-0"
      >
        <ChartContainer :viewport="viewport">
          <g slot="chart" />
        </ChartContainer>
      </b-col>
    </template>
  </BaseView>
</template>

<script>
import { select, selectAll } from 'd3';
import { sankey, sankeyLinkHorizontal } from 'd3-sankey';
import sankeyDiagramMixin from '../mixins/sankeyDiagramMixin';
import BaseView from '../components/BaseView';
import ChartContainer from '../components/ChartContainer';

const d3 = {
  select,
  selectAll,
  sankey,
  sankeyLinkHorizontal,
};

export default {
  name: 'StaffRoles',
  components: {
    BaseView,
    ChartContainer,
  },
  mixins: [sankeyDiagramMixin],
  data() {
    return {
      // hold the staff objects (staffObjects)
      staff: new Set(),
      // margins for the diagram
      margin: {
        top: 70,
        left: 190,
        right: 190,
        bottom: 10,
      },
      nodeTypes: {
        person: {
          colour: 'gold',
          label: 'Staff Member',
          position: 1,
        },
        project: {
          colour: 'chocolate',
          label: 'Project',
          position: 2,
        },
      },
    };
  },
  computed: {
    /**
     * Filter the projects to get only projects that are active this year
     * and have any staff roles assigned.
     *
     * @returns {T[]}
     */
    activeProjects() {
      return this.projects.filter((el) => el.isActiveThisYear && el.staffRoles.length);
    },
  },
  methods: {
    /**
     * Iterate through the active projects and generate the nodes.
     * In the first step the staff roles and the teams are extracted.
     * The nodes for the projects are generated (type 'project').
     * In the second step the nodes for the teams are generated (type 'team').
     * In the third step the nodes for the staff are generated (type 'person').
     */
    generateNodes() {
      this.activeProjects.forEach((parentEl) => {
        this.teams.add(parentEl.team);
        parentEl.staffRoles.forEach(
          (childEl) => this.staff.add(JSON.stringify(childEl.staffMember)),
        );
        this.nodes.push({
          label: parentEl.ilriCode,
          type: 'project',
        });
      });

      this.teams.forEach((cur) => this.nodes.push({
        label: cur,
        type: 'team',
      }));

      this.staff.forEach((cur) => this.nodes.push({
        label: JSON.parse(cur).username,
        type: 'person',
        obj: JSON.parse(cur),
      }));
    },
    /**
     * Calculate total staff roles percent for a project.
     *
     * @params {Array} staffRoles
     * @returns {Array}
     */
    calculateTotalPercentForProject(staffRoles) {
      return staffRoles.reduce((acc, cur) => acc + parseFloat(cur.percent) * 100, 0);
    },
    /**
     * Iterate through the active projects and generate the links.
     * In the first step generate the links between staff and projects.
     * In the second step generate the links between projects and teams.
     */
    generateLinks() {
      this.activeProjects.forEach((parentEl) => parentEl.staffRoles.forEach(
        (childEl) => this.links.push({
          source: this.nodes.findIndex((el) => el.label === childEl.staffMember.username),
          target: this.nodes.findIndex((el) => el.label === parentEl.ilriCode),
          value: parseFloat(childEl.percent) * 100,
        }),
      ));

      this.activeProjects.forEach((cur) => {
        this.links.push({
          source: this.nodes.findIndex((el) => el.label === cur.ilriCode),
          target: this.nodes.findIndex((el) => el.label === cur.team),
          value: this.calculateTotalPercentForProject(cur.staffRoles),
        });
      });
    },
    /**
     * Helper function to highlight associated nodes and paths when hovering over a node.
     */
    highlightNodes(datum, index, nodes) {
      // calculate all nodes that have to be highlighted
      const labels = [];
      labels.push(datum.label);
      if (datum.type === 'person') {
        datum.sourceLinks.forEach((parentEl) => {
          labels.push(parentEl.target.label);
          parentEl.target.sourceLinks.forEach((childEl) => labels.push(childEl.target.label));
        });
      } else if (datum.type === 'project') {
        datum.sourceLinks.forEach((cur) => labels.push(cur.target.label));
        datum.targetLinks.forEach((cur) => labels.push(cur.source.label));
      } else if (datum.type === 'team') {
        datum.targetLinks.forEach((parentEl) => {
          labels.push(parentEl.source.label);
          parentEl.source.targetLinks.forEach((childEl) => labels.push(childEl.source.label));
        });
      }
      // highlight the nodes
      d3.selectAll('g.node')
        .filter((d) => !labels.includes(d.label))
        .style('opacity', 0.1)
      ;
      // highlight the associated link paths
      d3.selectAll('g.link > path')
        .style('opacity', (d) => (labels.includes(d.source.label) && labels.includes(d.target.label) ? 0.7 : 0.1))
      ;
      // highlight the FTE values for the link paths
      d3.selectAll('g.link-fte')
        .style('opacity', (d) => (labels.includes(d.source.label) && labels.includes(d.target.label) ? 1 : 0))
      ;
      // highlight the FTE value for the selected node
      d3.select(nodes[index]).select('.node-fte').style('opacity', 1);
    },
    /**
     * Helper function to reverse the effect of highlightNodes when leaving a node.
     */
    fade() {
      d3.selectAll('g.node')
        .style('opacity', 1);
      d3.selectAll('g.link > path')
        .style('opacity', 0.5);
      d3.selectAll('g.link-fte')
        .style('opacity', 0);
      d3.selectAll('text.node-fte')
        .style('opacity', 0);
    },
    /**
     * Helper function to highlight a single path when hovering over it.
     */
    highlightPath(datum, index, nodes) {
      d3.selectAll('g.link > path')
        .style('opacity', 0.1);
      d3.select(nodes[index])
        .style('opacity', 0.7)
        .select((d, i, n) => {
          d3.select(n[i].parentNode)
            .select('g.link-fte')
            .style('opacity', 1);
        });
    },
    /**
     * Render the sankey diagram
     */
    renderChart() {
      this.generateNodes();
      this.generateLinks();
      const chart = d3.select('#viewport > g');
      const sankeyDiagram = d3.sankey()
        .extent([
          [this.margin.left, this.margin.top],
          [this.viewport.width - this.margin.right, this.viewport.height - this.margin.bottom],
        ])
        .iterations(100);
      const graph = sankeyDiagram({
        nodes: this.nodes,
        links: this.links,
      });

      /**
       * Create all link paths
       * a group containing the path and the FTE indicator looks like:
       * <g class="link">
       *   <path></path>
       *   <g class="link-fte">
       *     <circle></circle>
       *     <text></text>
       *   </g>
       * </g>
       */
      chart.selectAll('g.link')
        .data(graph.links)
        .join('g')
        .attr('class', 'link')
        .each((d, i, n) => {
          const path = d3.select(n[i])
            .append('path')
            .attr('id', (datum) => `id-${datum.index}`)
            .attr('d', d3.sankeyLinkHorizontal())
            .style('opacity', 0.5)
            .style('stroke-width', (datum) => datum.width)
            .style('stroke', 'grey')
            .style('fill', 'none')
            .on('mouseenter', this.highlightPath)
            .on('mouseleave', this.fade)
            ;
            // get the coordinates for the path box
          const pathBox = path.node().getBBox();
          // create a group to hold the FTE for a link path
          const fte = d3.select(n[i])
            .append('g')
            .attr('class', 'link-fte')
            .attr(
              'transform',
              `translate(${[pathBox.x + pathBox.width / 2, pathBox.y + pathBox.height / 2]})`,
            )
            .style('opacity', 0);
          fte.append('circle')
            .attr('stroke', 'none')
            .attr('stroke-width', 1)
            .attr('r', 12)
            .attr('fill', 'cornsilk');
          fte.append('text')
            .attr('text-anchor', 'middle')
            .attr('alignment-baseline', 'middle')
            .style('font-size', '10')
            .style('font-weight', 700)
            .style('font-family', '"Open Sans Condensed", sans-serif')
            .text(d.value);
        })
      ;

      /**
       * Create all nodes
       * a group containing the node and the FTE indicator looks like:
       * <g class="node">
       *   <rect></rect>
       *   <text class="label"></text>
       *   <text class="node-fte"></text>
       * </g>
       */
      chart.selectAll('g.node')
        .data(graph.nodes)
        .join('g')
        .attr('class', 'node')
        .attr(
          'transform',
          (d) => `translate(${[d.x0, d.y0]})`,
        )
        .each((d, i, n) => {
          d3.select(n[i])
            .append('rect')
            .attr('width', d.x1 - d.x0)
            .attr('height', d.y1 - d.y0)
            .style('fill', this.nodeTypes[d.type].colour)
            .style('stroke', 'none');
          d3.select(n[i])
            .append('text')
            .attr('class', 'label')
            .text((datum) => (datum.type === 'person' ? this.formatName(datum.obj) : datum.label));
          d3.select(n[i])
            .append('text')
            .attr('class', 'node-fte')
            .text((datum) => datum.value);
        })
        .on('mouseenter', this.highlightNodes)
        .on('mouseenter.legend', this.highlightLegend)
        .on('mouseleave', this.fade)
        .on('mouseleave.legend', this.fadeLegend)
      ;
      this.generateLegend();
      // position the text labels of the nodes
      chart.selectAll('text.label')
        .each((d, i, n) => {
          if (d.type === 'person') {
            d3.select(n[i])
              .attr('transform', `translate(${[-5, (d.y1 - d.y0) / 2]})`)
              .attr('text-anchor', 'end');
          } else {
            d3.select(n[i])
              .attr('transform', `translate(${[d.x1 - d.x0 + 5, (d.y1 - d.y0) / 2]})`);
          }
          d3.select(n[i])
            .attr('alignment-baseline', 'middle');
        })
        .style('font-family', '"Open Sans Condensed", sans-serif')
        .style('font-weight', 700)
        .style('font-size', '0.7em')
        .style('fill', 'DarkSlateGray')
      ;

      // position the text for the node FTE values
      chart.selectAll('text.node-fte')
        .attr('transform', (d) => `translate(${Math.round((d.x1 - d.x0) / 10)},0)`)
        .attr('alignment-baseline', 'ideographic')
        .style('font-weight', 800)
        .style('font-size', '0.7em')
        .style('fill', 'DarkSlateGrey')
        .style('opacity', 0);
    },
  },
};
</script>

<style scoped>
</style>
