<template>
  <ChartContainer :viewport="viewport">
    <g slot="chart" />
  </ChartContainer>
</template>

<script>
import { select, selectAll } from 'd3';
import { sankey, sankeyLinkHorizontal } from 'd3-sankey';
import baseMixin from '../../mixins/baseMixin';
import sankeyDiagramMixin from '../../mixins/sankeyDiagramMixin';
import ChartContainer from '../../components/ChartContainer';

const d3 = {
  select,
  selectAll,
  sankey,
  sankeyLinkHorizontal,
};

export default {
  name: 'StaffDiagram',
  components: {
    ChartContainer,
  },
  mixins: [baseMixin, sankeyDiagramMixin],
  data() {
    return {
      // hold the staff objects (staffObjects)
      staff: new Set(),
      nodeTypes: {
        person: {
          colour: 'gold',
          label: 'Staff',
        },
        project: {
          colour: 'chocolate',
          label: 'Project',
        },
        team: {},
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
    /**
     * Calculates diagram margin sizes relative to the viewport dimensions.
     * On extra small devices (less than 576 px), side margins are larger to
     * accommodate node and legend labels.
     */
    margin() {
      const left = window.innerWidth >= 576
        ? this.viewport.width * 0.17
        : this.viewport.width * 0.22;
      const right = window.innerWidth >= 576
        ? this.viewport.width * 0.15
        : this.viewport.width * 0.20;
      return {
        top: this.viewport.height * 0.13,
        bottom: this.viewport.height * 0.05,
        left,
        right,
      };
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
        // Processes only projects with at least one active staff role
        if (parentEl.staffRoles.find((staff) => staff.isActive)) {
          this.teams.add(parentEl.team);
          parentEl.staffRoles.forEach((childEl) => {
            if (childEl.isActive) {
              this.staff.add(JSON.stringify(childEl.staffMember));
            }
          });
          this.nodes.push({
            label: parentEl.ilriCode,
            type: 'project',
          });
        }
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
      return staffRoles
        .filter((staff) => staff.isActive)
        .reduce((acc, cur) => acc + parseFloat(cur.percent) * 100, 0)
      ;
    },
    /**
     * Iterate through the active projects and generate the links.
     * In the first step generate the links between staff and projects.
     * In the second step generate the links between projects and teams.
     */
    generateLinks() {
      this.activeProjects.forEach((parentEl) => parentEl.staffRoles.forEach(
        (childEl) => {
          if (childEl.isActive) {
            this.links.push({
              source: this.nodes.findIndex((el) => el.label === childEl.staffMember.username),
              target: this.nodes.findIndex((el) => el.label === parentEl.ilriCode),
              value: parseFloat(childEl.percent) * 100,
            });
          }
        },
      ));

      this.activeProjects.forEach((cur) => {
        if (this.nodes.find((el) => el.label === cur.ilriCode)) {
          this.links.push({
            source: this.nodes.findIndex((el) => el.label === cur.ilriCode),
            target: this.nodes.findIndex((el) => el.label === cur.team),
            value: this.calculateTotalPercentForProject(cur.staffRoles),
          });
        }
      })
      ;
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
            .attr('pointer-events', 'none')
            .attr(
              'transform',
              `translate(${[pathBox.x + pathBox.width / 2, pathBox.y + pathBox.height / 2]})`,
            )
            .style('opacity', 0);
          fte.append('circle')
            .attr('stroke', 'none')
            .attr('stroke-width', 1)
            .attr('r', 14)
            .attr('fill', 'cornsilk');
          fte.append('text')
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .style('font-family', '"Open Sans Condensed", sans-serif')
            .style('font-weight', 700)
            .style('font-size', '0.8em')
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
            .attr('dominant-baseline', 'middle');
        })
        .style('font-family', '"Open Sans Condensed", sans-serif')
        .style('font-weight', 700)
        .style('font-size', '0.8em')
        .style('fill', 'DarkSlateGray')
      ;

      // position the text for the node FTE values
      chart.selectAll('text.node-fte')
        .attr('transform', (d) => `translate(${Math.round((d.x1 - d.x0) / 10)},0)`)
        .attr('dominant-baseline', 'ideographic')
        .style('font-weight', 800)
        .style('font-size', '0.8em')
        .style('fill', 'DarkSlateGrey')
        .style('opacity', 0);
    },
  },
};
</script>

<style scoped>
/**
 * Extra small devices (less than 576px)
 */
svg {
  font-size: 10px;
}
/**
 * Medium sized devices and larger (768px or more)
 */
@media screen and (min-width: 768px) {
  svg {
    font-size: 16px;
  }
}
/**
 * Small devices (576px to 768px)
 */
@media screen and (max-width: 576px) {
  svg {
    font-size: 14px;
  }
}
</style>
