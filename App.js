import "./styles.css";

export default function App() {
  var livecounter = 0;
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
