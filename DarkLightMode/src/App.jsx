import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./context/Toggle";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    return setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div
        className={`min-h-screen w-full flex flex-col justify-center items-center
          ${
            theme === "dark"
              ? "bg-[#3c3c3c] text-[#ccc]"
              : "bg-[#ccc] text-[#000]"
          }
transition-all
        `}
      >
        <h1 className="text-3xl font-bold mb-4 text-center">
          {" "}
          Dark/Light Mode Converter
        </h1>
        <p className="mb-4 text-center">
          This is a simple application to practice using the Context API in
          React. <br />
          Click the button below to toggle between dark and light mode.
        </p>
        <button
          onClick={toggleTheme}
          className="bg-blue-600 text-white p-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Toggle Theme
        </button>
      </div>
    </>
  );
}

export default App;
