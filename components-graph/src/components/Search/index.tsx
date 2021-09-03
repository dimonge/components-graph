import * as React from "react";

import { ISearchField } from "../../types";
import useWindowSize from "../../hooks/useWindowSize";

import styles from "./index.module.css";
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
    <div className={styles.search__container}>
      <SearchField
        toggleSearch={toggleSearch}
        onClick={(text: any) => onChange(text)}
      />
      {!toggleSearch && mobileSearchButton}
    </div>
  );
}

export default Search;
