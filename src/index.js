import React from "react";
import ReactDOM from "react-dom";

import TrafficLight from "./TrafficLight";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TrafficLight initialValue={0} />
      <TrafficLight initialValue={1} />
    </div>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
