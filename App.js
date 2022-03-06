import "./styles.css";

export default function App() {

     var username=prompt("enter your name");
var color="blue";

  return (
    <div className="App">
      <h1 style={{color:color}} >welcome {username}</h1>
  
    </div>
  );
}
  

