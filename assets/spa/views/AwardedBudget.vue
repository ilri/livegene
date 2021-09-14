<template>
  <BaseView>
    <template slot="header">
      <b-nav
        small
        align="center"
      >
        <b-nav-text>Awarded Budget</b-nav-text>
      </b-nav>
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
import { select, selectAll, format } from 'd3';
import { sankey, sankeyLinkHorizontal } from 'd3-sankey';
import baseMixin from '../mixins/baseMixin';
import sankeyDiagramMixin from '../mixins/sankeyDiagramMixin';
import BaseView from '../components/BaseView';
import ChartContainer from '../components/ChartContainer';

const d3 = {
  select,
  selectAll,
  format,
  sankey,
  sankeyLinkHorizontal,
};

export default {
  name: 'AwardedBudget',
  components: {
    BaseView,
    ChartContainer,
  },
  mixins: [baseMixin, sankeyDiagramMixin],
  data() {
    return {
      donors: new Set(),
      principalInvestigators: new Set(),
      nodeTypes: {
        donor: {
          colour: 'mediumSeaGreen',
          label: 'Donor',
        },
        team: {},
        pi: {
          colour: 'gold',
          label: 'P.I.',
        },
      },
      moneyFormat: d3.format('$,.0f'),
      percentageFormat: d3.format(',.1%'),
    };
  },
  computed: {
    /**
     * Filter the projects to get only projects that are currently active.
     *
     * @returns {T[]}
     */
    activeProjects() {
      return this.projects.filter((el) => el.isActive);
    },
    totalBudget() {
      return this.activeProjects.reduce(
        (acc, cur) => acc + cur.totalProjectValue,
        0,
      );
    },
    /**
     * Calculates diagram margin sizes relative to the viewport dimensions.
     * On extra small devices (less than 576 px), side margins are larger to
     * accommodate node and legend labels.
     */
    margin() {
      const left = window.innerWidth >= 576
        ? this.viewport.width * 0.15
        : this.viewport.width * 0.20;
      const right = window.innerWidth >= 576
        ? this.viewport.width * 0.17
        : this.viewport.width * 0.22;
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
     * Generate nodes
     */
    generateNodes() {
      this.activeProjects.forEach((cur) => {
        this.donors.add(JSON.stringify(cur.donor));
        this.teams.add(cur.team);
        this.principalInvestigators.add(JSON.stringify(cur.principalInvestigator));
      });
      [...this.donors].forEach((cur) => {
        this.nodes.push({
          label: JSON.parse(cur).fullName,
          type: 'donor',
          obj: JSON.parse(cur),
        });
      });
      [...this.teams].forEach((cur) => {
        this.nodes.push({
          label: cur,
          type: 'team',
        });
      });
      [...this.principalInvestigators].forEach((cur) => {
        this.nodes.push({
          label: JSON.parse(cur).username,
          type: 'pi',
          obj: JSON.parse(cur),
        });
      });
    },
    /**
     * Generate links
     */
    generateLinks() {
      this.activeProjects.forEach((cur) => {
        this.links.push({
          source: this.nodes.findIndex((el) => el.label === cur.donor.fullName),
          target: this.nodes.findIndex((el) => el.label === cur.team),
          value: cur.totalProjectValue,
          project: cur,
        });
        this.links.push({
          source: this.nodes.findIndex((el) => el.label === cur.team),
          target: this.nodes.findIndex((el) => el.label === cur.principalInvestigator.username),
          value: cur.totalProjectValue,
          project: cur,
        });
      });
    },
    highlightNodes(datum) {
      // calculate all nodes that have to be highlighted
      const labels = [];
      const projectCodes = [];
      labels.push(datum.label);
      if (datum.type === 'donor') {
        datum.sourceLinks.forEach((cur) => {
          labels.push(cur.target.label);
          labels.push(cur.project.principalInvestigator.username);
          projectCodes.push(cur.project.ilriCode);
        });
      } else if (datum.type === 'team') {
        datum.sourceLinks.forEach((cur) => {
          labels.push(cur.target.label);
          projectCodes.push(cur.project.ilriCode);
        });
        datum.targetLinks.forEach((cur) => {
          labels.push(cur.source.label);
          projectCodes.push(cur.project.ilriCode);
        });
      } else if (datum.type === 'pi') {
        datum.targetLinks.forEach((cur) => {
          labels.push(cur.source.label);
          labels.push(cur.project.donor.fullName);
          projectCodes.push(cur.project.ilriCode);
        });
      }
      // highlight the nodes
      d3.selectAll('g.node')
        .filter((d) => !labels.includes(d.label))
        .style('opacity', 0.1)
      ;
      // highlight the associated link paths
      d3.selectAll('g.link > path')
        .style('opacity', (d) => (projectCodes.includes(d.project.ilriCode) ? 0.7 : 0.1))
      ;
    },
    highlightPath(path) {
      d3.selectAll('g.link')
        .each((d, i, n) => {
          d3.select(n[i])
            .select('path')
            .style('opacity', (datum) => (path.project.ilriCode === datum.project.ilriCode ? 0.7 : 0.1));
          d3.select(n[i])
            .select('.project-details')
            .style('opacity', (datum) => (path.project.ilriCode === datum.project.ilriCode ? 1 : 0));
        });
    },
    fade() {
      d3.selectAll('g.node')
        .style('opacity', 1);
      d3.selectAll('g.link > path')
        .style('opacity', 0.5);
      d3.selectAll('g.project-details')
        .style('opacity', 0);
    },
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
            .on('mouseleave', this.fade);
          const pathBox = path.node().getBBox();
          const projectDetails = d3.select(n[i])
            .append('g')
            .attr('class', 'project-details')
            .attr('pointer-events', 'none')
            .attr(
              'transform',
              `translate(${[pathBox.x + pathBox.width / 2, pathBox.y + pathBox.height / 2]})`,
            )
            .style('fill', 'crimson')
            .style('opacity', 0);
          projectDetails.append('text')
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .style('font-size', '0.7em')
            .style('font-weight', 700)
            .style('font-family', '"Open Sans Condensed", sans-serif')
            .text(`${d.project.ilriCode} (${this.moneyFormat(d.value)})`);
        });
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
          const text = d3.select(n[i])
            .append('text')
            .attr('class', 'label')
            .attr(
              'transform',
              () => {
                if (d.type === 'donor') {
                  return `translate(${[-5, (d.y1 - d.y0) / 2]})`;
                }
                return `translate(${[d.x1 - d.x0 + 5, (d.y1 - d.y0) / 2]})`;
              },
            )
            .attr(
              'text-anchor',
              /* eslint-disable consistent-return */
              () => {
                if (d.type === 'donor') {
                  return 'end';
                }
              },
              /* eslint-enable consistent-return */
            )
            .attr('dominant-baseline', 'middle')
            .style('font-family', '"Open Sans Condensed", sans-serif')
            .style('font-weight', 700)
            .style('font-size', '0.8em')
            .style('fill', 'DarkSlateGray');
          text
            .append('tspan')
            .attr('class', 'label')
            .attr('x', 0)
            .attr('dx', 0)
            .text(() => {
              if (d.type === 'pi') {
                return this.formatName(d.obj);
              } if (d.type === 'donor') {
                return d.obj.shortName;
              }
              return d.label;
            });
          text
            .append('tspan')
            .attr('class', 'value')
            .attr('x', 0)
            .attr('dx', 0)
            .attr('dy', 16)
            .text(this.moneyFormat(d.value));
          text
            .append('tspan')
            .attr('class', 'percentage')
            .attr('x', 0)
            .attr('dx', 0)
            .attr('dy', 16)
            .text(() => `(${this.percentageFormat(d.value / this.totalBudget)})`);
        })
        .on('mouseenter', this.highlightNodes)
        .on('mouseenter.legend', this.highlightLegend)
        .on('mouseleave', this.fade)
        .on('mouseleave.legend', this.fadeLegend)
      ;
      this.generateLegend();
      console.log(this.projectsGroupedByTeam);
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
