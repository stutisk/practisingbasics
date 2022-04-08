import React, { useState } from "react";

// const passValues = {
//   password: "",
//   confirm: "",

// };
export default function App() {
  const [pass1, setpass1] = useState("");
  const [pass2, setpass2] = useState("");
  const regex = /(?=.*[0-9])/;

  const message = (e) => {
    if (pass1 !== pass2) {
      return "error";
    }
  };

  return (
    <div className="App">
      <p>enter your password</p>
      <input
        onChange={(e) => setpass1(e.target.value)}
        placeholder="pass"
      ></input>
      <input
        onChange={(e) => setpass2(e.target.value)}
        placeholder="pass confirm"
      ></input>
      <p>{message()}</p>
    </div>
  );
}
