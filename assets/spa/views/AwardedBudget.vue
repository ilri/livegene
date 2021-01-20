<template>
  <BaseView>
    <template slot="header">
      Awarded Budget
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
  mixins: [sankeyDiagramMixin],
  data() {
    return {
      donors: new Set(),
      principalInvestigators: new Set(),
      margin: {
        top: 10,
        left: 150,
        right: 150,
        bottom: 10,
      },
      colours: {
        donor: 'mediumSeaGreen',
        pi: 'gold',
      },
      budgetTotal: {
        pi: 0,
        donor: 0,
        team: 0,
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
          // parentEl.target.sourceLinks.forEach(childEl => labels.push(childEl.target.label));
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
          // parentEl.source.targetLinks.forEach(childEl => labels.push(childEl.source.label));
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

      // d3.selectAll('g.project-details')
      //  .style('opacity', d => projectCodes.includes(d.project.ilriCode) ? 1 : 0)
      // ;
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
    highlightLegend(datum) {
      // calculate which legend items have to be highlighted
      d3.selectAll(`g.legend #${datum.type} text`)
        .transition()
        .style('font-weight', '800')
        .style('font-size', '16px');
      d3.selectAll(`g.legend #${datum.type} circle`)
        .transition()
        .attr('r', 13);
    },
    fadeLegend() {
      d3.selectAll('g.legend g.item text')
        .transition()
        .style('font-weight', '400')
        .style('font-size', '14px');
      d3.selectAll('g.legend g.item circle')
        .transition()
        .attr('r', 10);
    },
    calculateBudgets() {
      this.nodes.forEach((cur) => {
        if (cur.type === 'pi') {
          this.budgetTotal.pi += cur.value;
        } else if (cur.type === 'donor') {
          this.budgetTotal.donor += cur.value;
        } else {
          this.budgetTotal.team += cur.value;
        }
      });
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
      this.calculateBudgets();

      // Creating a legend, representing each node type
      chart.append('g')
        .attr('class', 'legend')
        .selectAll('g.representations')
        .data(() => Object.entries(this.colours))
        .join('g')
        .attr('class', 'item')
        .each((d, i, n) => {
          const item = d3.select(n[i])
            .attr('transform', () => `translate(${25},${i * 30 + 40})`)
            .attr('id', d[0]);

          item.append('circle')
            .attr('r', 10)
            .style('fill', () => d[1]);

          item.append('text')
            .attr('x', '15')
            .attr('y', '5')
            .text(() => d[0])
            .style('font-size', '14')
            .style('font-family', '"Open Sans Condensed", sans-serif')
            .style('fill', 'DarkSlateGray');
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
            .attr(
              'transform',
              `translate(${[pathBox.x + pathBox.width / 2, pathBox.y + pathBox.height / 2]})`,
            )
            .style('fill', 'crimson')
            .style('opacity', 0);
          projectDetails.append('text')
            .attr('text-anchor', 'middle')
            .attr('alignment-baseline', 'middle')
            .style('font-size', '10')
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
            .style('fill', this.colours[d.type])
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
            .attr('alignment-baseline', 'middle')
            .style('font-family', '"Open Sans Condensed", sans-serif')
            .style('font-weight', 700)
            .style('font-size', 12)
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
            .text(() => {
              if (d.type === 'pi') {
                return `(${this.percentageFormat((d.value / this.budgetTotal.pi))})`;
              } if (d.type === 'donor') {
                return `(${this.percentageFormat((d.value / this.budgetTotal.donor))})`;
              }
              return `(${this.percentageFormat((d.value / this.budgetTotal.team))})`;
            });
        })
        .on('mouseenter.nodes', this.highlightNodes)
        .on('mouseenter.legend', this.highlightLegend)
        .on('mouseleave.nodes', this.fade)
        .on('mouseleave.legend', this.fadeLegend);
    },
  },
};
</script>

<style scoped>
</style>
