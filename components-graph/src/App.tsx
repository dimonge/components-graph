import * as React from "react";
import "./App.css";

import data from "./data/components.json";
import Graph from "./components/Graph/index";
import SearchField from "./components/Search/index";
import Profile from "./components/Profile/index";

function App() {
  const [searchText, setSearchText] = React.useState("");

  const onSearchComponents = (value: string): void => {
    setSearchText(value);
  };

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
