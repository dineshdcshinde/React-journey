import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../utility/Context";
import { Link, useLocation } from "react-router-dom";
import instance from "../../utility/Axios";

const Card = () => {
  const [product, setProducts] = useContext(ProductContext);

  const [filteredProducts, setFilteredProducts] = useState(null);
  const [loading, setloading] = useState(false);

  const { search } = useLocation();

  const category = decodeURIComponent(search.split("=")[1]);
  // const category = search.includes("=")
  //   ? decodeURIComponent(search.split("=")[1])
  //   : null;

  const getFilteredProduct = async () => {
    try {
      setloading(true);
      let { data } = await instance.get(`/products/category/${category}`);
      setFilteredProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    if (!filteredProducts || category === "undefined") {
      // it will check when the above one condition is true it will set the products to setFilterProducts
      setFilteredProducts(product);
    }
    if (category != "undefined") getFilteredProduct();
  }, [category, product]);

  // console.log("products,", product);
  // console.log("filteredProducts,", filteredProducts);

  if (!product) return <h1>Loading....</h1>;
  if (loading) return <h1>Loading category data .... </h1>;

  return (
    <>
      <ul className="flex flex-wrap">
        {filteredProducts &&
          filteredProducts.map(({ title, description, id, image, price }) => (
            <Link
              to={`products/${id}`}
              key={id}
              className="card w-[30%] shadow-xl rounded-lg overflow-hidden flex flex-col justify-stretch flex-grow-1 m-4 bg-gradient-to-b from-[rgb(44,44,44)] to-[#1c1c1c] transition-transform duration-300 hover:scale-[102%] "
            >
              <div
                style={{ backgroundImage: `url(${image})` }}
                className={`product-image  w-[100%] h-[40vh] bg-center bg-cover rounded-t-lg mb-4 duration-1000 ease hover:bg-[length:120%] cursor-pointer`}
              ></div>
              <p className="text-center mb-2 font-bold text-lg px-4 text-white leading-snug tracking-wide">
                {title}
              </p>

              {/* <p className="description text-center mb-4 px-6 text-sm text-gray-400 leading-relaxed">
              {description}
            </p>

            <button className="text-lg font-semibold mb-4 text-white bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] py-3 px-8 rounded-full hover:from-[#ff6a39] hover:to-[#f8b26a] shadow-lg transition-all duration-300 hover:shadow-xl">
              {price}
            </button> */}
            </Link>
          ))}
      </ul>
    </>
  );
};

export default Card;
