import * as d3 from "d3";
import { ILink, INode, LinksType, NodesType } from "../../types";

export const createSvg = (
  container: HTMLDivElement,
  width: number,
  height: number
) => {
  const svg = d3
    .select(container)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g");

  return svg;
};

export const createLink = (svg: any, links: LinksType) => {
  return svg
    .selectAll("line")
    .data(links)
    .enter()
    .append("line")
    .attr("stroke", "grey");
};

export const createNode = (svg: any, nodes: NodesType) => {
  return svg
    .selectAll("circle")
    .data(nodes)
    .enter()
    .append("circle")
    .attr("r", 20)
    .attr("fill", (d: any) => d.color);
};

export const createLabel = (svg: any, nodes: NodesType, searchText: string) => {
  return svg
    .selectAll("text")
    .data(nodes)
    .enter()
    .append("text")
    .text((d: any) => d.name)
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
};

export const createScale = (
  nodes: NodesType,
  width: number,
  height: number
) => {
  const xScale = d3.scaleLinear().domain([1, 5]).range([50, width]);
  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(nodes, (d: any) => d.y)])
    .range([200, height]);

  return { xScale, yScale };
};

type generateGraphType = {
  svg: any;
  nodes: NodesType;
  links: LinksType;
  searchText: string;
  width: number;
  height: number;
};
const generateGraph = ({
  svg,
  nodes,
  links,
  searchText,
  width,
  height,
}: generateGraphType) => {
  const link = createLink(svg, links);
  const node = createNode(svg, nodes);
  const label = createLabel(svg, nodes, searchText);

  const { xScale, yScale } = createScale(nodes, width, height);
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
    .force("collide", d3.forceCollide().strength(-400))
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
};
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

  const svg = createSvg(container, width, height);
  generateGraph({ svg, nodes, links, searchText, width, height });
  return {
    destroy: () => {
      svg.remove();
    },
    nodes: () => {
      return svg.node();
    },
  };
}
