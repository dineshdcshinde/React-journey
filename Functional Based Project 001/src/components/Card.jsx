import React from "react";

const Card = () => {
  return (
    <>
      <div className="card w-[30%] shadow-xl rounded-lg overflow-hidden flex flex-col justify-center items-center m-4 bg-gradient-to-b from-[#2c2c2c] to-[#1c1c1c] transition-transform duration-300 hover:scale-[102%]">
        <p className="text-center mb-2 font-bold text-lg px-4 text-white leading-snug tracking-wide">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </p>

        <div className="product-image bg-[url('https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg')] w-[100%] h-[40vh] bg-center bg-cover rounded-t-lg mb-4 duration-1000 ease hover:bg-[length:120%] cursor-pointer"></div>

        <p className="description text-center mb-4 px-6 text-sm text-gray-400 leading-relaxed">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday...
        </p>

        <button className="text-lg font-semibold mb-4 text-white bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] py-3 px-8 rounded-full hover:from-[#ff6a39] hover:to-[#f8b26a] shadow-lg transition-all duration-300 hover:shadow-xl">
          $109.95
        </button>
      </div>
    </>
  );
};

export default Card;
