import * as React from "react";

import { ISearchField } from "../../types";
import useWindowSize from "../../hooks/useWindowSize";

import "./index.module.css";
import SearchIcon from "./SearchIcon";
import SearchField from "./SearchField";

const MOBILE_WIDTH_SIZE = 320;

function Search({ onChange }: ISearchField) {
  const { width } = useWindowSize();
  const [toggleSearch, setToggleSearch] = React.useState(false);

  const handleToggleSearch = (value: boolean) => {
    setToggleSearch(value);
  };

  const mobileSearchButton =
    width < MOBILE_WIDTH_SIZE ? (
      <button onClick={() => handleToggleSearch(!toggleSearch)}>
        <SearchIcon />
      </button>
    ) : null;

  return (
    <div className="header__action-search">
      <SearchField
        toggleSearch={toggleSearch}
        onClick={(text: any) => onChange(text)}
      />
      {mobileSearchButton}
    </div>
  );
}

export default Search;
