import "./App.css";
import JavaScriptTutorial from "./pages/JavaScriptTutorial";
import Homepage from "./pages/Homepage";
import TernarySample from "./pages/Ternary";
import Destructuring from "./pages/Destructuring";
import SpreadOperator from "./pages/SpreadOperator";
import ArrayIterators from "./pages/ArrayIterators";
import Promises from "./pages/Promises";

function App() {
  return (
    <div className="App">
      <Homepage />
      <hr></hr>
      <JavaScriptTutorial />
      <hr></hr>
      <TernarySample />
      <hr></hr>
      <Destructuring />
      <hr></hr>
      <SpreadOperator />
      <hr></hr>
      <ArrayIterators />
      <hr></hr>
      <Promises />
    </div>
  );
}

export default App;
