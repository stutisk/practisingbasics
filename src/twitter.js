import React, { useState } from "react";

export default function App() {
  const [counter, setcounter] = useState(0);

  const tweetcount = (e) => {
    setcounter(e.target.value);
  };
  return (
    <div className="App">
      <input onChange={tweetcount}></input>
      <div>Count:{counter.length}</div>
    </div>
  );
}
