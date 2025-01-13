import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../utility/Context";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [product] = useContext(ProductContext);

  // removing the unique category
  let distinctCategory =
    product && product.reduce((acc, currVal) => [...acc, currVal.category], []);

  distinctCategory = [...new Set(distinctCategory)];

  // creating unique color
  const color = () => {
    return ` rgba(${Math.floor(Math.random() * 255)},${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)},1)`;
  };

  return (
    <>
      <nav className="w-[20%]  h-screen pt-4 pl-5  border-r-gray-200 border-r-[2px]">
        <Link to={"/create"} >
          
          <button className="py-3 px-4 bg-[#3e88f1] rounded-full font-bold text-[1.2rem] mb-4 hover:bg-[#3678d4] transition-all">
            Add Products
          </button>
        </Link>

        <ul>
          {distinctCategory.map((category, index) => (
            <Link
              to={`/?category=${category}`}
              key={index}
              className="text-2xl mb-3 flex items-center"
            >
              <span
                className="inline-block h-[20px] w-[20px] rounded-full mr-3"
                style={{ backgroundColor: color() }}
              ></span>
              {category}
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
