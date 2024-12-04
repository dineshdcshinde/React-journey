import { useCallback, useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let num = "0123456789";
    let special = "[!@#$%&`'+=-./<>()`~]";
    if (numberAllowed) str += num;
    if (charactersAllowed) str += special;

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, charactersAllowed, numberAllowed, setPassword]);

  // useRef hook
  const passRef = useRef();

  let copied = useCallback(() => {
    passRef.current?.select();
    // we can set the selection up to that specific range
    // passRef.current?.setSelectionRange(0, 3)
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, charactersAllowed, numberAllowed, generatePassword]);

  return (
    <>
      <div className="password-page w-full h-screen bg-black">
        <h1 className="text-[#ddd]  text-5xl py-4 text-center font-bold ">
          Password Generator
        </h1>

        <div className="password-container flex flex-col  gap-5 pl-3  h-52 w-[500px] rounded-md mt-4 m-auto bg-slate-900">
          <div className="head self-center mt-2 mb-11">
            <input
              type="text"
              readOnly
              className=" outline-none mt-3 w-80 p-3 rounded-tl-md rounded-bl-md text-[1.2rem] font-bold  tracking-[3px]"
              value={password}
              ref={passRef}
            />
            <button
              className="rounded-t-none rounded-bl-none rounded-tr-md rounded-br-md  text-white py-3 px-8 bg-blue-500 text-[1.2rem] font-extrabold mt-2  "
              onClick={copied}
            >
              Copy
            </button>
          </div>

          <div className="bottom flex items-center  ">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              onChange={(e) => setlength(e.target.value)}
            />
            <label htmlFor="range" className="text-white text-xl pl-2 ">
              Label {length}
            </label>

            <input
              type="checkbox"
              className="ml-1 text-2xl w-6 h-6  scale-90"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="checkbox" className="text-white text-xl pl-2">
              Numbers
            </label>

            <input
              type="checkbox"
              className="ml-2 text-2xl w-6 h-6  scale-90"
              defaultChecked={charactersAllowed}
              onChange={() => setCharactersAllowed((prev) => !prev)}
            />
            <label htmlFor="checkbox" className="text-white text-xl pl-2">
              Special Chars
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
