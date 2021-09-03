import React from "react";
import Graph from "./index";
import renderer from "react-test-renderer";

const data = {
  nodes: [
    { id: 0, evolution: 3.0, x: 277, y: 10, color: "#70147a", name: "User" },
    {
      id: 1,
      evolution: 3.0,
      x: 677,
      y: 300,
      color: "#70147a",
      name: "Website",
    },
    { id: 2, evolution: 3.5, x: 591, y: 434, color: "#008142", name: "CMS" },
    { id: 3, evolution: 4.0, x: 495, y: 586, color: "#008142", name: "CI/CD" },
    {
      id: 4,
      evolution: 4.5,
      x: 625,
      y: 637,
      color: "#008142",
      name: "Infrastructure",
    },
    {
      id: 5,
      evolution: 2.5,
      x: 475,
      y: 728,
      color: "#008142",
      name: "CI & Infrastructure Support",
    },
    {
      id: 6,
      evolution: 3.5,
      x: 845,
      y: 424,
      color: "#ccccaa",
      name: "Uptime Monitoring",
    },
    {
      id: 7,
      evolution: 3.2,
      x: 774,
      y: 561,
      color: "#aaaaaa",
      name: "3rd Party Modules",
    },
    {
      id: 8,
      evolution: 1.5,
      x: 413,
      y: 396,
      color: "#eecccc",
      name: "Branding",
    },
    {
      id: 9,
      evolution: 1.0,
      x: 9066,
      y: 504,
      color: "#cceecc",
      name: "Design",
    },
    {
      id: 10,
      evolution: 2.5,
      x: 379,
      y: 5055,
      color: "#aaaaaa",
      name: "Templates",
    },
  ],
  links: [
    { source: 1, target: 0, cost: 30, distance: 2 },
    { source: 3, target: 5, cost: 11, distance: 3 },
    { source: 4, target: 5, cost: 19, distance: 5 },
    { source: 2, target: 3, cost: 1, distance: 9 },
    { source: 2, target: 4, cost: 10, distance: 15 },
    { source: 1, target: 2, cost: 1, distance: 5 },
    { source: 1, target: 6, cost: 1, distance: 7 },
    { source: 2, target: 7, cost: 1, distance: 3 },
    { source: 1, target: 8, cost: 15, distance: 9 },
    { source: 8, target: 9, cost: 1, distance: 5 },
    { source: 8, target: 10, cost: 7, distance: 11 },
    { source: 2, target: 10, cost: 1, distance: 5 },
  ],
};

describe("Component Graph", () => {
  it("show return graph snapshot", () => {
    const tree = renderer
      .create(<Graph data={data} searchText={""} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
