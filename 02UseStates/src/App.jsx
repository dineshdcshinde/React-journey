import React, { useState } from 'react'
import uniqid from "uniqid";
import ToggleSwitch from './ToggleSwitch/ToggleSwitch'
import Todo from "../src/ToDo/Todo"
import './App.css'


function App() {
// const [time, settime] = useState(new Date().toLocaleTimeString());

// setInterval(() => {
//   settime(new Date().toLocaleTimeString());
// }, 1000);


  return (
    // <div>{/* <p>{time}</p> */}</div>
    <>
      {/* <ToggleSwitch/> */}
      <Todo />
    
    </>
  )
}

export default App