import React from "react";
import Nav from "./Components/Nav";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="text-content">
        <h1>
          Big transfer, bigger <br />
          <span>impact</span>
        </h1>
      </div>
      <div className="desc">
        <p>
          The simplest way to send big ideas around the world, and <br />
          <span>new creative work while you're at it</span>
        </p>
      </div>
      <Card />
    </div>
  );
}

export default App;
