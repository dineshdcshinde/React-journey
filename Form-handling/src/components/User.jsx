import React, { useContext } from "react";
import {dataContext} from "../context/Information"

function User() {
  const [data, setData] = useContext(dataContext);
  return (
    <div>
      <p>Hi there I am new user !!!</p>

      <p className="font-bold text-red-500">
        {data}
      </p>
    </div>
  );
}

export default User;
