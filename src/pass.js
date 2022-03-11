import React, { useState } from "react";

// const passValues = {
//   password: "",
//   confirm: "",

// };
export default function App() {
  const [values, setvalues] = useState("passValues")
  
  const handleInputChange=(e)=>{
  value={ values.password}!==values.confirm?console.log("hey")
   
  };
  

  return (
    <div className="App">
  <p>enter your password</p>
  <input value={values.password} onChange={handleInputChange} name="password" ></input>
  <p>confirm your password</p>
  <input value={values.confirm} onChange={handleInputChange} name="confirm"></input>
  <p>{values}</p>
  </div>
  );
}
