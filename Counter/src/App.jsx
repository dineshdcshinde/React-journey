import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  //   let addValue = () => {
  // if(counter <20){
  //   setCounter(counter + 1);
  // }else{
  //   setCounter(counter);
  // }
  //   }

  // let removeValue = () => {
  //   if(counter > 0){
  //     setCounter(counter - 1);
  //   }else{
  //     setCounter(counter);
  //   }
  // };

  // Optimized version

  let addValue = () => {
    setCounter((prevCounter) => {
      return Math.min(prevCounter + 1, 20);
    });
    if (counter == 20) {
      alert("hey it's the last");
    }
  };

  let removeValue = () => {
    setCounter((prevCounter) => {
      return Math.max(prevCounter - 1, 0);
    });
    if (counter == 0) {
      alert("hey it's the last");
    }
  };

  return (
    <>
      <h1>Counter</h1>

      <h2>Current : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}> Remove Value</button>
    </>
  );
}

export default App;
