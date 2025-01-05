import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="w-[20%]  h-screen pt-4 pl-5  border-r-gray-200 border-r-[2px]">
        <button className="py-3 px-4 bg-[#3e88f1] rounded-full font-bold text-[1.2rem] mb-4 hover:bg-[#3678d4] transition-all">
          Add Products
        </button>

        <ul className="">
          <li className="text-2xl mb-3 flex items-center">
            <span className=" inline-block h-[20px] w-[20px] bg-[#b93232] rounded-full mr-3"></span>
            Category 1
          </li>
          <li className="text-2xl mb-3 flex items-center">
            <span className=" inline-block h-[20px] w-[20px] bg-[#244db6] rounded-full mr-3"></span>
            Category 2
          </li>
          <li className="text-2xl mb-3 flex items-center">
            <span className=" inline-block h-[20px] w-[20px] bg-[#bb2dd1] rounded-full mr-3"></span>
            Category 3
          </li>
        </ul>
      </nav>
      ;
    </>
  );
};

export default Navbar;
