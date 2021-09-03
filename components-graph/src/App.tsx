import * as React from "react";
import "./App.css";

import data from "./data/components.json";
import Graph from "./components/Graph";
import SearchField from "./components/SearchField";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="header__title">
          <h1>Capital Flow</h1>
        </div>
        <div className="header__action">
          <SearchField />
          <Profile />
        </div>
      </header>
      <main>
        <Graph data={data} />
      </main>
    </div>
  );
}

export default App;
