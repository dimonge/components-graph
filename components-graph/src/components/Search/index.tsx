import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { ISearchField } from "../../types";

function Search({ onChange }: ISearchField) {
  const [text, setText] = React.useState("");

  const handleChange = (event: any): void => {
    setText(event.target.value);
  };
  const handleSearch = () => {
    onChange(text);
  };
  return (
    <div className="header__action-search">
      <div className="header__action-searchIcon">
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input value={text} onChange={handleChange} />
      <button onClick={handleSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}

export default Search;
