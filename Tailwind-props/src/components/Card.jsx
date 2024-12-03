import React from "react";

const Card = ({
  title = "abc",
  btn = "View More",
  subHeading = "Lorem, ipsum dolor.",
}) => {
  return (
    <>
      <div className="h-[470px] w-[400px] bg-white rounded-md flex flex-col gap-1 px-1 cursor-pointer items-center mb-5">
        <h1 className="text-4xl mb-2 text-[#212145] font-bold tracking-wide">
          {title}
        </h1>
        <img
          className="h-[200px] w-[100%] rounded object-cover object-center mb-2"
          src="https://cdn.pixabay.com/photo/2024/10/28/15/26/animal-9156395_640.jpg"
          alt="Random Image"
        />
        <h2 className="text-2xl font-bold text-[#212145]">{subHeading}</h2>
        <p className="text-lg mb-2  text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem sunt temporibus quidem vel illo tempora.
        </p>
        <button className="border-2 px-6 py-2 text-[22px] tracking-wider rounded-md  bg-[#38bdf8] text-[#fff] ">
          {btn}
        </button>
      </div>
    </>
  );
};

export default Card;
