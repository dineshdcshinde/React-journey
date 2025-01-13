import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Components/Todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-[100vh] w-full bg-[#242424] text-white">
        <Todo />
      </div>
    </>
  );
}

export default App;
