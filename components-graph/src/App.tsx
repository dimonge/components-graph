import React from "react";
import "./App.css";
import data from "./data/components.json";
import Graph from "./components/Graph";
import Search from "./components/Search";

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="header__title">
          <h1>Capital Flow</h1>
        </div>
        <div className="header__action">
          <div className="header__action-search">
            <Search />
          </div>
          <div className="header__action-profile">profile icon</div>
        </div>
      </header>
      <main>
        <Graph data={data} />
      </main>
    </div>
  );
}

export default App;
