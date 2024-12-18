import React, { useEffect, useState } from "react";

const clean = () => {

  const [count, setCount] = useState(0);
  useEffect(()=>{
 let interval =    setInterval(() => {
      setCount((prev)=> prev + 1);
    }, 1000);

    return ()=> clearInterval(interval);
  },[])


  return <>
  <div className="wrapper min-h-screen w-full bg-[#2a2a2a] text-white flex flex-col justify-center items-center">

<h2 className="text-3xl font-bold text-center leading-[2.7rem]">Hey, We are now the family of  <br /> 
<span> {count} </span><sapn className="text-[#ed2c2c]">Subscribers</sapn></h2>



  </div>
  </>
};

export default clean;
