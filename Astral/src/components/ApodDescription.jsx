import React from "react";

const ApodDescription = ({ title }) => {
  return (
    <>
      <h1
        className="block font-bold text-white 
        text-1xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-5xl
        px-4 text-center leading-snug bg-black bg-opacity-50 
        rounded-md shadow-lg cursor-pointer
        md:max-w-3xl lg:max-w-4xl "
      >
        {title}
      </h1>
    </>
  );
};

export default ApodDescription;
