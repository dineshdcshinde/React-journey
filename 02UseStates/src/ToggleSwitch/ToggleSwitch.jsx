import React from "react";
import "./ToggleStyle.css";
import { useState } from "react";

function ToggleSwitch() {
  const [status, setstatus] = useState(false);

  let handleClick = () => {
    setstatus(!status);
  };

  let colored = status && "colored" ;

  return (
    <>
      <div className="wrapper">
        <div className={`toggle ${colored} `} onClick={handleClick}>
          <div className={`switch  ${status ? "on" : "off"}`}>
            <span>{status ? "On" : "Off"}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToggleSwitch;
