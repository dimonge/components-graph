import * as React from "react";

import useWindowSize from "../../hooks/useWindowSize";
import SearchIcon from "./SearchIcon";

const MOBILE_WIDTH_SIZE = 320;

function SearchInput({ toggleSearch, onClick }: any) {
  const { width } = useWindowSize();
  const [text, setText] = React.useState("");

  const handleChange = (event: any): void => {
    setText(event.target.value);
  };

  const isInputVisible = toggleSearch || width > MOBILE_WIDTH_SIZE;
  const searchInput = isInputVisible && (
    <div>
      <input value={text} onChange={handleChange} />
      <button onClick={() => onClick(text)}>
        <SearchIcon />
      </button>
    </div>
  );
  return searchInput;
}

export default SearchInput;
