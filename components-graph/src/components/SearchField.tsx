import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search() {
  return (
    <div className="header__action-search">
      <div className="header__action-searchIcon">
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input />
    </div>
  );
}

export default Search;
