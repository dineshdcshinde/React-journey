import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useForm} from "react-hook-form";

function App() {
  const [gender, setgender] = useState("female");

  const [city, setcity] = useState("bhopal");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  // const data = {
  //   city, gender
  // };
  // console.log(data);

  return (
    <>
      <h1 className="text-center">Form Handling</h1>
{/*     
       <form onSubmit={submitHandler}>
        <input type="text" placeholder="Username" /> */}

        {/* <input
          type="radio"
          value="male"
          onChange={(e) => setgender(e.target.value)} // Set gender value
          checked={gender === "male"} */}

          {/* // value="Male"
          // onChange={(e) => setgender(e.target.value)}
          // checked={gender == "male" ? true : false} */}
        {/* /> */}
        {/* Male <br /> */}

          {/* { { <input
          type="radio"
          value="female"
          onChange={(e) => setgender(e.target.value)} // Set gender value
          checked={gender === "female"} }
       */}

          {/* // type="radio"
          // onChange={(e) => setgender(e.target.value)}
          // checked={gender == "male" ? true : false}
        />
       /*  Female
        <br /> } */}

        {/* <select onChange={(e) => setcity(e.target.value)} value={city}>
          <option value="">City</option>
          <option value="bhopal">bhopal</option>
          <option value="yavatmal">yavatmal</option>
          <option value="Nagpur">Nagpur</option>
        </select>
      </form> */}


      <form className="bg-slate-700 text-white" >
        <input type="text" placeholder="Enter username" className="p-2 rounded mr-4"  />
        <input type="text" placeholder="Enter email address"  />
      </form>


    </>
  );
}

export default App;



