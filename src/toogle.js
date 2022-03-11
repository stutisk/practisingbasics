import React, { useState } from "react";
export default function App() {
  const [bgcolor, setbgcolor] = useState("pink");
  const tooglebtn = () => {
    bgcolor === "pink" ? setbgcolor("red") : setbgcolor("pink");
  };
  return (
    <div className="App">
      <p style={{ backgroundColor: bgcolor }}>hey my name is stuti </p>
      <button onClick={tooglebtn}>toggle</button>
    </div>
  );
}
