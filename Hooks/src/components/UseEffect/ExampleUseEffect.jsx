import React, { useEffect, useState } from "react";

const ExampleUseEffect = () => {
  //   const [count, setCount] = useState(0);
  const [time, setTime] = useState("");

  /*
    Here, the useEffect is nothing but the hook in which if there is any operation doing of the element 
    that is not in the useEffect scope. It means, the operation on any useState variable or on something
    that is outside of useEffect scope, will be performed only once when the component mounts, but when again
    there is any change in that then again the useEffect will be performed. 

     useEffect(() => {
    console.log(count);
  }, [count]);


*/ 




  useEffect(() => {
   let interval =  setInterval(() => {
        let date = new Date().toLocaleTimeString();
        setTime(date);
      }, 1000);

      return ()=>{
        clearInterval(interval);
      }
  }, []);

  return (
    <>
      <div className="wrapper min-h-screen w-full bg-[#2a2a2a] text-white flex flex-col justify-center items-center">
        {/* Example 1 */}
        {/* <p className="text-3xl font-bold ,b-4">{count}</p>
        <button
          className="px-4 py-2 bg-[#1d55d8] rounded-md text-2xl"
          onClick={(e) => setCount(count + 1)}
        >
          Increment
        </button> */}

        <p className="font-bold text-3xl text-white">{time}</p>
      </div>
    </>
  );
};

export default ExampleUseEffect;
