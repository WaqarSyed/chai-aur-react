import "./App.css";
import { useState } from "react";
function App() {
  let [counter, setCounter] = useState(5);

  const maxLimit = 20;
  const minLimit = 0;

  const addValue = () => {
    if (counter < maxLimit) {
      setCounter((counter += 1));
    }
  };

  const removeValue = () => {
    if (counter > minLimit) {
      setCounter((counter -= 1));
    }
  };

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addValue}>Increase Counter</button>
      <br />
      <button onClick={removeValue}>Decrease Counter</button>
    </>
  );
}

export default App;
