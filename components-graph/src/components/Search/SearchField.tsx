import * as React from "react";

import useWindowSize from "../../hooks/useWindowSize";
import SearchIcon from "./SearchIcon";
import styles from "./index.module.css";

const MOBILE_WIDTH_SIZE = 320;

function SearchField({ toggleSearch, onClick }: any) {
  const { width } = useWindowSize();
  const [text, setText] = React.useState("");

  const handleChange = (event: any): void => {
    setText(event.target.value);
  };

  const isInputVisible = toggleSearch || width > MOBILE_WIDTH_SIZE;
  const searchInput = isInputVisible && (
    <div>
      <input
        className={styles.search__input}
        value={text}
        onChange={handleChange}
      />
      <button className={styles.search__button} onClick={() => onClick(text)}>
        <SearchIcon />
      </button>
    </div>
  );
  return searchInput;
}

export default SearchField;
