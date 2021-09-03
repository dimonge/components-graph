import React from "react";
import { createSvg } from "./buildGraph";

describe("TestBuildGraphComponent", () => {
  let svg: any;
  beforeEach(() => {
    svg = createSvg("body", 100, 100);
  });
  it("should create svg component", () => {
    const value = svg.attr("fill", "blue");
    expect(value.attr("fill")).toEqual("blue");
  });
});
