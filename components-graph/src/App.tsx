import * as React from "react";
import "./App.css";

import data from "./data/components.json";
import Graph from "./components/Graph";
import SearchField from "./components/SearchField";
import Profile from "./components/Profile";

function App() {
  const [searchText, setSearchText] = React.useState("");

  const onSearchComponents = React.useCallback(
    (value) => {
      setSearchText(value);
    },
    [searchText]
  );
  return (
    <div className="container">
      <header className="header">
        <div className="header__title">
          <h1>Capital Flow</h1>
        </div>
        <div className="header__action">
          <SearchField onChange={onSearchComponents} />
          <Profile />
        </div>
      </header>
      <main>
        <Graph data={data} searchText={searchText} />
      </main>
    </div>
  );
}

export default App;
