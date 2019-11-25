import React from "react";
import ReactDOM from "react-dom";

import TrafficLight1 from "./TrafficLight1";
import TrafficLight2 from "./TrafficLight2";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TrafficLight1 initialValue={0} />
      <TrafficLight2 initialValue={2} />
    </div>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
