import React, { useEffect, useState } from "react";

function TimeComp() {
  const [dateTime, setDateTime] = useState("");

  // Date functionality
  useEffect(() => {
    let interval = setInterval(() => {
      let date = new Date().toLocaleDateString("en-GB");
      let time = new Date().toLocaleTimeString();
      setDateTime(`${date} - ${time}`);
    }, 1000);

    
    return () => clearInterval(interval);
  }, []);
  return (
    <h2 className="uppercase  text-center text-3xl tracking-wider font-semibold mb-0">
      {dateTime}
    </h2>
  );
}

export default TimeComp;
