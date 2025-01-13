import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import instance from "../../utility/Axioxs";
import { ProductContext } from "../../utility/Context";

const SingleProduct = () => {
  const [products, setProducts] = useContext(ProductContext);
  const { id } = useParams();

  const { search } = useLocation();

  const category = decodeURIComponent(search.split("=")[1]);
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState(null);

  // const [product, setProduct] = useContext(ProductContext);
  //  We are creating a new useState to store this data and it is only used for this component.

  const [singleProduct, setSingleProduct] = useState(null);

  // const getSingleProduct = async () => {
  //   try {
  //     const { data } = await instance.get(`/products/${id}`);
  //     setSingleProduct(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getSingleProduct();
  // }, [id]);

  useEffect(() => {
    if (!filteredProducts || category === "undefined") {
      // it will check when the above one condition is true it will set the products to setFilterProducts

      localStorage.setItem(
        "products",
        JSON.stringify(setFilteredProducts(products))
      );
    }
    if (category != "undefined") {
      // getFilteredProduct()
      let filtered = products.filter((p) => p.category === category);
      console.log("I am filtered", filtered);
      setFilteredProducts(filtered);
    }
  }, [category, products, id]);

  const handleDelete = (id) => {
    // const filteredProducts = products.filter((p) => p.id === id);
    // setProducts(filteredProducts);
    // localStorage.setItem("products", JSON.stringify(filteredProducts));
    console.log("hi there , I am going to delete");
  };

  if (!filteredProducts) return <h1>Loading....</h1>;
  return (
    <>
      <div className="single_Card_Container min-h-screen bg-[#3c3c3c] w-full flex justify-center items-center">
        <div className="singleProduct flex ">
          <div
            className="singleProcut_Img h-[350px] w-[400px]  bg-contain  bg-no-repeat bg-center rounded-md hover:bg-[length:102%] cursor-pointer  ]"
            style={{
              backgroundImage: `url(${filteredProducts.image})`,
            }}
          ></div>

          <div className="single-product-details w-[550px] px-12 ">
            <p className="text-[1.56rem] font-bold text-white mb-3">
              {filteredProducts.title}
            </p>

            <p className="text-[#f5f5f5] font-bold text-[2rem] font-mono mb-3">
              Price: ₹{filteredProducts.price}
            </p>

            <p className="text-[1.2rem] text-white mb-2">
              {filteredProducts.description}
            </p>
            <p className="text-[#828282] font-bold text-[1.3rem] underline mb-3">
              {" "}
              Category: {filteredProducts.category}
            </p>

            <div className="single-product-card-btns-container flex gap-4">
              <button className="px-6 py-3 bg-[#2245d3] rounded-lg text-2xl text-white font-bold hover:bg-[#2f50d6]  transition-all">
                Edit
              </button>
              <button
                className="px-6 py-3 bg-[#6883f0] rounded-lg text-2xl text-white font-bold hover:bg-[#5b73d3] transition-all"
                onClick={() => navigate("/")}
              >
                Go Back
              </button>
              <button
                onClick={() => handleDelete(filteredProducts.id)}
                className="px-6 py-3 bg-[#e43b2f] rounded-lg text-2xl text-white font-bold hover:bg-[#cb362b] transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
