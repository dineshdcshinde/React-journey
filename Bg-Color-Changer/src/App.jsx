import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setcolor] = useState("red");

  function changeColor(color) {
    setcolor(color);
  }

  return (
    <>
      <div
        className=" h-[100vh] w-[100vw] flex flex-col transition-colors"
        style={{ backgroundColor: color }}
      >
        <p
          className="text-white  py-4 text-4xl font-bold text-center *:
        tracking-wider cursor-pointer
        "
        >
          Background Changer
        </p>

        <footer
          className="bg-white w-[40%] mb-4 m-auto p-3 rounded-md flex
  justify-around"
        >
          <button
            onClick={()=>changeColor("red")}
            className="bg-red-600 py-1 px-7 rounded-md text-white text-[1.4rem] font-bold"
          >
            Red
          </button>

          <button
            onClick={()=>changeColor("green")}
            className="bg-green-600 py-1 px-7 rounded-md text-white text-[1.4rem] font-bold"
          >
            Green
          </button>

          <button
            onClick={()=>changeColor("magenta")}
            className="bg-[magenta] py-1 px-7 rounded-md text-white text-[1.4rem] font-bold"
          >
            Red
          </button>
        </footer>
      </div>
    </>
  );
}

export default App;
