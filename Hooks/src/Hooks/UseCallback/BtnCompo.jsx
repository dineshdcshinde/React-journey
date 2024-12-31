import React, { useCallback } from "react";

const BtnCompo = React.memo(({ setCount }) => {
  const Increment = useCallback(() => {
    setCount((pre) => pre + 1);
  }, [setCount]);

  const Decrement = useCallback(() => {
    setCount((pre) => pre - 1);
  }, [setCount]);

  {
    /*
        As we are using the "useCallback", we need to call it for the function. The useCallback hook is
        playing very vital role when the component is updated. If we call the function normally at that time
        the componenet is re-render but due to the help of the useCallback hook, it is not re-renderd it is 
        only updated. 

        It is re-rendered beacuse the function are the reference type so it is just making a new instace for that
        particular function. 
        But, due to the useCallback hook, the useCallback hook checked that it is the same function and that will 
        not re-render that particular function it only updates that and shows / gave the output on the screen.


    */
  }

  return (
    <>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </>
  );
});

export default BtnCompo;
