<template>
  <div>
    <h2 class="bg-info text-white text-center p-2">Awarded Budget</h2>
    <div class="text-center pb-5">
      <svg id="viewport" :width="viewport.width" :height="viewport.height">
        <g></g>
      </svg>
    </div>
  </div>
</template>

<script>
  import { select, selectAll, format } from 'd3';
  import { sankey, sankeyLinkHorizontal } from 'd3-sankey';
  import { sankeyDiagramMixin } from "../mixins/sankeyDiagramMixin";

  const d3 = Object.assign({},
    {
      select,
      selectAll,
      format,
      sankey,
      sankeyLinkHorizontal
    }
  );

  export default {
    name: 'AwardedBudget',
    mixins: [sankeyDiagramMixin],
    data() {
      return {
        donors: new Set(),
        principalInvestigators: new Set(),
        margin: {
          top: 10,
          left: 100,
          right: 100,
          bottom: 10
        },
        colours: {
          donor: 'green',
          pi: 'yellow'
        },
        moneyFormat: d3.format('$,.0f'),
      }
    },
    computed: {
      /**
       * Filter the projects to get only projects that are currently active.
       *
       * @returns {T[]}
       */
      activeProjects: function () {
        return this.projects.filter(el => el.isActive);
      }
    },
    methods: {
      renderChart: function () {
        this.activeProjects.forEach(cur => {
          this.donors.add(JSON.stringify(cur.donor));
          this.teams.add(cur.team);
          this.principalInvestigators.add(JSON.stringify(cur.principalInvestigator));
        });
        [...this.donors].forEach(cur => {
          this.nodes.push({
            label: JSON.parse(cur).shortName,
            type: 'donor'
          });
        });
        [...this.teams].forEach(cur => {
          this.nodes.push({
            label: cur,
            type: 'team'
          });
        });
        [...this.principalInvestigators].forEach(cur => {
          this.nodes.push({
            label: JSON.parse(cur).username,
            type: 'pi',
            obj: JSON.parse(cur)
          });
        });
        this.activeProjects.forEach(cur => {
          this.links.push({
            source: this.nodes.findIndex(el => el.label === cur.donor.shortName),
            target: this.nodes.findIndex(el => el.label === cur.team),
            value: cur.totalProjectValue,
            ilriCode: cur.ilriCode
          });
          this.links.push({
            source: this.nodes.findIndex(el => el.label === cur.team),
            target: this.nodes.findIndex(el => el.label === cur.principalInvestigator.username),
            value: cur.totalProjectValue,
            ilriCode: cur.ilriCode
          });
        });

        const chart = d3.select('#viewport > g');
        const sankey = d3.sankey()
          .extent([
            [this.margin.left, this.margin.top],
            [this.viewport.width - this.margin.right, this.viewport.height - this.margin.bottom]
          ])
          .iterations(100)
        ;
        const graph = sankey({
          nodes: this.nodes,
          links: this.links
        });
        chart.selectAll('g.link')
          .data(graph.links)
          .join('g')
          .attr('class', 'link')
          .each((d, i, n) => {
            let path = d3.select(n[i])
              .append('path')
              .attr('id', d => `id-${d.index}`)
              .attr('d', d3.sankeyLinkHorizontal())
              .style('opacity', 0.5)
              .style('stroke-width', d => d.width)
              .style('stroke', 'black')
              .style('fill', 'none')
            ;

            let pathBox = path.node().getBBox();
            let projectDetails = d3.select(n[i])
              .append('g')
              .attr('class', 'project-details')
              .attr(
                'transform',
                `translate(${[pathBox.x + pathBox.width / 2, pathBox.y + pathBox.height / 2]})`
              )
              .style('opacity', 0)
            ;

            projectDetails.append('text')
              .attr('text-anchor', 'middle')
              .attr('alignment-baseline', 'middle')
              .style('font-size', '10')
              .style('font-weight', 700)
              .style('font-family', '"Open Sans Condensed", sans-serif')
              .text(`${d.ilriCode} (\$${d.value})`)
            ;
          })
        ;

        chart.selectAll('g.node')
          .data(graph.nodes)
          .join('g')
          .attr('class', 'node')
          .attr(
            'transform',
            d => `translate(${[d.x0, d.y0]})`
          )
          .each((d, i, n) => {
            d3.select(n[i])
              .append('rect')
              .attr('width', d.x1 - d.x0)
              .attr('height', d.y1 - d.y0)
              .style('fill', this.colours[d.type])
              .style('stroke', 'black')
            ;
            let text = d3.select(n[i])
              .append('text')
              .attr('class', 'label')
              .attr(
                'transform',
                () => {
                  if (d.type === 'donor') {
                    return `translate(${[-5, (d.y1 - d.y0) / 2]})`;
                  }
                  return `translate(${[d.x1 - d.x0 + 5, (d.y1 - d.y0) / 2]})`;
                }
              )
              .attr(
                'text-anchor',
                () => {
                  if (d.type === 'donor') {
                    return 'end';
                  }
                }
              )
              .attr('alignment-baseline', 'middle')
              .style('font-family', '"Open Sans Condensed", sans-serif')
              .style('font-weight', 700)
              .style('font-size', 12)
              .style('fill', 'darkblue')
            ;
            text
              .append('tspan')
              .attr('class', 'label')
              .attr('x', 0)
              .attr('dx', 0)
              .text(() => {
                if (d.type === 'pi') {
                  return this.formatName(d.obj);
                }
                return d.label;
              })
            ;
            text.append('tspan')
              .attr('class', 'value')
              .attr('x', 0)
              .attr('dx', 0)
              .attr('dy', 16)
              .text(this.moneyFormat(d.value))
            ;
          })
        ;
      }
    }
  }
</script>

<style scoped>
  svg#viewport {
    overflow: visible;
    border: thin solid lightgray;
    background-color: azure;
  }
</style>
