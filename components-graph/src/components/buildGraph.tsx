import * as d3 from "d3";
import { ILink, INode, LinksType, NodesType } from "../types";

export default function buildGraph(
  container: HTMLDivElement,
  linksData: LinksType,
  nodesData: NodesType,
  searchText: string
) {
  const links = linksData.map((link: ILink) => Object.assign({}, link));
  const nodes = nodesData.map((node: INode) => Object.assign({}, node));

  const containerRect = container.getBoundingClientRect();

  const width: number = containerRect.width;
  const height: number = containerRect.height;

  if (d3.select(container).select("svg")) {
    d3.select(container).select("svg").remove();
  }

  const svg = d3
    .select(container)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g");

  const link = svg
    .selectAll("line")
    .data(links)
    .enter()
    .append("line")
    .attr("stroke", "grey");

  const node = svg
    .selectAll("circle")
    .data(nodes)
    .enter()
    .append("circle")
    .attr("r", 20)
    .attr("fill", (d) => d.color);

  const label = svg
    .selectAll("text")
    .data(nodes)
    .enter()
    .append("text")
    .text((d) => d.name)
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "central")
    .attr("fill", (d: any) => {
      if (
        searchText &&
        d.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      ) {
        return "yellow";
      } else {
        return null;
      }
    });

  const xScale = d3.scaleLinear().domain([1, 5]).range([50, width]);

  const yScale = d3
    .scaleLinear()
    .domain([100, d3.max(nodes, (d: any) => d.y)])
    .range([100, height]);

  const ticked = () => {
    node
      .attr("cx", function (d: any) {
        return xScale(d.evolution);
      })
      .attr("cy", function (d: any) {
        return d.y;
      });

    link
      .attr("x1", function (d: any) {
        return xScale(d.source.evolution);
      })
      .attr("y1", function (d: any) {
        return d.source.y;
      })
      .attr("x2", function (d: any) {
        return xScale(d.target.evolution);
      })
      .attr("y2", function (d: any) {
        return d.target.y;
      });

    label.attr("x", (d: any) => xScale(d.evolution)).attr("y", (d: any) => d.y);
  };

  d3.forceSimulation(nodes)
    .force(
      "link",
      d3
        .forceLink()
        .id((d: any) => d.id)
        .links(links)
    )
    .force("charge", d3.forceManyBody().strength(-1000))
    .force("collide", d3.forceCollide())
    .force(
      "x",
      d3.forceX().x((d: any) => {
        return xScale(d.evolution);
      })
    )
    .force(
      "y",
      d3.forceY().y((d: any) => {
        return yScale(d.y);
      })
    )
    .on("end", ticked);

  return {
    destroy: () => {
      svg.remove();
    },
    nodes: () => {
      return svg.node();
    },
  };
}
