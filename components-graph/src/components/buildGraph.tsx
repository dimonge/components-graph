import * as d3 from "d3";
import { ILink, INode, LinksType, NodesType } from "../types";

export default function buildGraph(
  container: HTMLDivElement,
  linksData: LinksType,
  nodesData: NodesType
) {
  const links = linksData.map((link: ILink) => Object.assign({}, link));
  const nodes = nodesData.map((node: INode) => Object.assign({}, node));

  const containerRect = container.getBoundingClientRect();

  /*const margin = {
    top: containerRect.top,
    right: containerRect.right,
    bottom: containerRect.bottom,
    left: containerRect.bottom,
  };*/

  const width: number = containerRect.width;

  const height: number = containerRect.height;

  const svg = d3
    .select(container)
    .append("svg")
    .attr("width", width)
    .attr("height", 6000)
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
    .attr("dominant-baseline", "central");

  const xScale = d3.scaleLinear().domain([1, 5]).range([50, width]);

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

  const simulation = d3
    .forceSimulation(nodes)
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
        return d.y / 2;
      })
    )
    .on("end", ticked);

  return {
    destroy: () => {
      simulation.stop();
    },
    nodes: () => {
      return svg.node();
    },
  };
}