import React from "react";
import renderer from "react-test-renderer";
import SearchField from "./SearchField";

describe("SearchInput", () => {
  it("should create snapshot", () => {
    const tree = renderer
      .create(
        <SearchField
          toggleSearch={false}
          onClick={(value: any) => console.log(value)}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
