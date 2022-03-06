import "./styles.css";
import React from "react";

var livecounter = 0;

export default function App() {
  function likecounter() {
    livecounter = livecounter + 1;
    console.log(livecounter);
  }
  return (
    <div className="App">
      <h1>hy</h1>
      <button onClick={likecounter}> like me </button>
    </div>
  );
}
