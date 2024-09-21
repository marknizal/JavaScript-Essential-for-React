import "./App.css";
import JavaScriptTutorial from "./pages/JavaScriptTutorial";
import Homepage from "./pages/Homepage";
import TernarySample from "./pages/Ternary";
import Destructuring from "./pages/Destructuring";
import SpreadOperator from "./pages/SpreadOperator";
import ArrayIterators from "./pages/ArrayIterators";
import Promises from "./pages/Promises";
import FetchAPI from "./pages/FetchAPI";
import AsyncAwait from "./pages/Async&Await";

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
      <hr></hr>
      <FetchAPI />
      <hr></hr>
      <AsyncAwait />
      <h1>Hello</h1>
    </div>
  );
}

export default App;
