import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [likecounter, setlikecounter] = useState(0);

  function likecounterhandler() {
    var livecounter = likecounter + 1;
    setlikecounter(livecounter);
  }
  return (
    <div className="App">
      <h1>hy</h1>
      <button onClick={likecounterhandler}> le me </button> {likecounter}
    </div>
  );
}
