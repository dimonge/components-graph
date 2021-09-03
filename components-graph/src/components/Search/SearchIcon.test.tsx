import React from "react";
import renderer from "react-test-renderer";
import SearchIcon from "./SearchIcon";

describe("SearchIcon", () => {
  it("should create snapshot", () => {
    const tree = renderer.create(<SearchIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
