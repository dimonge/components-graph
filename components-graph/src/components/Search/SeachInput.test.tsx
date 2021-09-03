import React from "react";
import renderer from "react-test-renderer";
import SearchInput from "./SearchInput";

describe("SearchInput", () => {
  it("should create snapshot", () => {
    const tree = renderer
      .create(
        <SearchInput
          toggleSearch={false}
          onClick={(value: any) => console.log(value)}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
