import React, { useState } from "react";

const Day = () => {
  const [Day, setDay] = useState(new Date().getDay());
  let DayArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <>
      <p>{DayArr[Day]}</p>
    </>
  );
};

export default Day;
