import React, { useState } from "react";
import "./styles.css";
export default function App() {
  const [likecounter, setlikecounter] = useState(0);

return (
  <div className="App">
    <p>{likecounter}</p>
    <button onClick={() => setlikecounter(likecounter + 1)}>+</button>
    <button onClick={() => setlikecounter(likecounter - 1)}>-</button>
  </div>
    );
  }
  