import React, { memo, useRef } from "react";

export const RenderChild = memo(() => {
  const renderCount = useRef(1);

  return (
    <>
      <p className="text-center">
        Nothing changed but, I have rendered : <br />
        <span className="red-300 font-bold">{renderCount.current++}</span>{" "}
        times.
      </p>

      {
        // console.log(renderCount)
        // console.log(renderCount.current)
        // It has already the "current" value in that useRef hook so we are using that to access the current value
      }
    </>
  );
});

// export default memo(RenderChild);
