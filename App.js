import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [likecounter, setlikecounter] = useState(0);
  const [bgcolor, setbgcolor] = useState("pink");

  // function likecounterhandler() {
  //   var livecounter = likecounter + 1;
  //   setlikecounter(livecounter);
  // }
  const tooglebtn = () => {
    bgcolor === "pink" ? setbgcolor("red") : setbgcolor("pink");
  };
  return (
    <div className="App">
      {/* <button onClick={likecounterhandler}> le me </button> {likecounter} */}
      <p>{likecounter}</p>
      <button onClick={() => setlikecounter(likecounter + 1)}>+</button>
      <button onClick={() => setlikecounter(likecounter - 1)}>-</button>
      {/* 2nd ex */}
      <p style={{ backgroundColor: bgcolor }}>hey my name is stuti </p>
      <button onClick={tooglebtn}>toggle</button>
    </div>
  );
}
